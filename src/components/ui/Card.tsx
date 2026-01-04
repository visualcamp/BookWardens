import clsx from "clsx";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = false, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={clsx(
                    "rounded-3xl border transition-all duration-300",
                    "glass-panel text-white shadow-xl", // Use new glass-panel class
                    hoverEffect && "hover:border-[#9D4EDD] hover:shadow-[0_0_25px_rgba(157,78,221,0.2)] hover:-translate-y-1",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";

export default Card;
