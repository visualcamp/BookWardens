import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", fullWidth = false, ...props }, ref) => {
        const variants = {
            primary: "bg-gradient-to-r from-[#7B2CBF] to-[#C77DFF] text-white hover:opacity-90 shadow-[0_0_20px_rgba(157,78,221,0.5)] border-none",
            secondary: "bg-[#2a1b3d] text-white border border-[#4c3a69] hover:bg-[#3d2a55] shadow-sm",
            outline: "bg-transparent border border-[#9D4EDD] text-[#9D4EDD] hover:bg-[#9D4EDD]/10",
            ghost: "bg-transparent text-[#A09ABC] hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs rounded-full",
            md: "h-12 px-6 text-sm font-semibold rounded-2xl",
            lg: "h-14 px-8 text-base font-bold rounded-2xl",
        };

        return (
            <button
                ref={ref}
                className={clsx(
                    "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#9D4EDD] focus:ring-offset-2 focus:ring-offset-[#121212] disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    {
                        // Width
                        "w-full": fullWidth,
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export default Button;
