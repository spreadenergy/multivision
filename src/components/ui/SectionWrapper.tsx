"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    noPadding?: boolean;
}

export default function SectionWrapper({
    children,
    className,
    id,
    noPadding = false,
}: SectionWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id={id}
            ref={ref}
            className={cn(
                "relative w-full",
                !noPadding && "px-6 py-20 md:px-12 lg:py-28",
                className
            )}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mx-auto max-w-7xl"
            >
                {children}
            </motion.div>
        </section>
    );
}
