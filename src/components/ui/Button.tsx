"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "green" | "cyan" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    href?: string;
    children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-brand-coral text-white hover:bg-brand-coral-dark hover:shadow-[0_0_24px_rgba(232,67,90,0.4)]",
    secondary:
        "border border-brand-text/20 text-brand-text hover:border-brand-coral hover:text-brand-coral",
    green:
        "bg-brand-green text-brand-black hover:bg-brand-green-dark hover:shadow-[0_0_24px_rgba(125,200,62,0.4)]",
    cyan:
        "bg-brand-cyan text-brand-black hover:bg-brand-cyan-dark hover:shadow-[0_0_24px_rgba(76,201,224,0.4)]",
    ghost:
        "text-brand-text-secondary hover:text-brand-text",
};

export default function Button({
    variant = "primary",
    href,
    children,
    className,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold text-sm tracking-wide uppercase transition-all duration-300 ease-out cursor-pointer active:scale-95";

    if (href) {
        return (
            <a
                href={href}
                className={cn(baseStyles, variantStyles[variant], className)}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={cn(baseStyles, variantStyles[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}
