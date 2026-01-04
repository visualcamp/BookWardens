"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Button from "@/components/ui/Button";

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        webgazer: any;
    }
}

export default function EyeTracker() {
    const [active, setActive] = useState(false);
    const [calibrating, setCalibrating] = useState(false);
    // const [coords, setCoords] = useState<{ x: number, y: number } | null>(null);

    useEffect(() => {
        return () => {
            // Cleanup on unmount
            if (typeof window !== 'undefined' && window.webgazer) {
                try {
                    window.webgazer.end();
                } catch (e) {
                    console.error("WebGazer cleanup error", e);
                }
            }
        };
    }, []);

    const startTracking = async () => {
        if (!window.webgazer) {
            alert("WebGazer not loaded yet. Please wait.");
            return;
        }

        try {
            await window.webgazer.setRegression('ridge')
                .setTracker('TFFacemesh') // More accurate if available, fallbacks handled by lib
                .begin();

            window.webgazer.showVideoPreview(true)
                .showPredictionPoints(true) // Show default red dot for now
                .applyKalmanFilter(true); // Smooths movements

            setActive(true);
            setCalibrating(true);

            // Custom listener if we want to manipulate the dot ourselves
            /*
            window.webgazer.setGazeListener((data: any, clock: any) => {
                if (data) {
                    setCoords({ x: data.x, y: data.y });
                }
            });
            */

        } catch (err) {
            console.error("Failed to start WebGazer", err);
            alert("Camera access denied or error starting eye tracker.");
        }
    };

    const stopTracking = () => {
        if (window.webgazer) {
            window.webgazer.end();
            setActive(false);
        }
    };

    return (
        <>
            <Script
                src="https://webgazer.cs.brown.edu/webgazer.js"
                strategy="lazyOnload"
                onLoad={() => console.log("WebGazer loaded")}
            />

            {/* Floating Control */}
            <div className="fixed bottom-20 right-4 z-[200] flex flex-col gap-2 pointer-events-auto">
                {!active ? (
                    <Button size="sm" onClick={startTracking} className="bg-[#9D4EDD] shadow-[0_0_15px_rgba(157,78,221,0.5)]">
                        Enable Eye Tracking
                    </Button>
                ) : (
                    <div className="flex flex-col gap-2 bg-black/60 p-2 rounded backdrop-blur-md">
                        <span className="text-[10px] text-center text-green-400 font-bold">TRACKING ACTIVE</span>
                        <Button size="sm" variant="secondary" onClick={stopTracking} className="text-red-400 border-red-500/30">
                            Disable
                        </Button>
                    </div>
                )}
            </div>

            {/* Calibration Helper Overlay (Simplified) */}
            {active && calibrating && (
                <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-black/80 px-4 py-2 rounded-full z-[200]">
                    <p className="text-xs text-center text-white">
                        Look at your cursor and click 5 points on the screen to calibrate.
                    </p>
                    <button
                        onClick={() => setCalibrating(false)}
                        className="block mx-auto mt-1 text-[10px] text-[#9D4EDD] underline"
                    >
                        Done
                    </button>
                </div>
            )}
        </>
    );
}
