import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    accentColor?: "coral" | "green" | "cyan";
    align?: "left" | "center";
    className?: string;
}

const accentColors = {
    coral: "bg-brand-coral",
    green: "bg-brand-green",
    cyan: "bg-brand-cyan",
};

export default function SectionHeading({
    title,
    subtitle,
    accentColor = "coral",
    align = "center",
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12 md:mb-16",
                align === "center" && "text-center",
                className
            )}
        >
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {title}
            </h2>
            <div
                className={cn(
                    "mt-4 h-1 w-16 rounded-full",
                    accentColors[accentColor],
                    align === "center" && "mx-auto"
                )}
            />
            {subtitle && (
                <p className="mt-4 max-w-2xl text-lg text-brand-text-secondary md:text-xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
