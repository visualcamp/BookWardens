import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--bg-primary)",
                foreground: "var(--color-text-main)",
                primary: {
                    DEFAULT: "var(--color-primary)",
                    start: "var(--color-primary-start)",
                    end: "var(--color-primary-end)",
                },
                secondary: "var(--bg-secondary)",
                card: "var(--bg-card)",
                accent: "var(--color-accent)",
                danger: "var(--color-danger)",
                muted: "var(--color-text-muted)",
            },
            fontFamily: {
                serif: ["var(--font-cinzel)", "serif"],
                sans: ["var(--font-outfit)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "rift-gradient": "var(--gradient-primary)",
            },
            animation: {
                "rift-pulse": "rift-pulse 3s infinite ease-in-out",
                "fade-in": "fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            },
            keyframes: {
                "rift-pulse": {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(157, 78, 221, 0.3)" },
                    "50%": { boxShadow: "0 0 35px rgba(157, 78, 221, 0.6)" },
                },
                "fade-in": {
                    from: { opacity: "0", transform: "translateY(10px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
