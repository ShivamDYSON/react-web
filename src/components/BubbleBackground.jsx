import React from "react";
import { motion } from "framer-motion";

const getRandomBubble = () => ({
    x: Math.random() * 100,
    radius: Math.random() * 10 + 5,
    floatDuration: Math.random() * 6 + 6,
    swayDuration: Math.random() * 2 + 4,
    floatDelay: Math.random() * 4,
    swayDelay: Math.random() * 4,
    swayType: Math.random() > 0.5 ? "sway-left-to-right" : "sway-right-to-left",
});

const bubbles = Array.from({ length: 50 }, getRandomBubble);

const bubbleVariants = {
    float: (i) => ({
        y: [`${bubbles[i].radius * 10}vh`, `-100vh`],
        transition: {
            duration: bubbles[i].floatDuration,
            ease: "ease-in",
            repeat: Infinity,
            repeatType: "loop",
            delay: bubbles[i].floatDelay,
        },
    }),
    sway: (i) => ({
        x: bubbles[i].swayType === "sway-left-to-right"
            ? ["-100vw", "100vw"]
            : ["100vw", "-100vw"],
        transition: {
            duration: bubbles[i].swayDuration,
            ease: "ease-in-out",
            repeat: Infinity,
            repeatType: "reverse",
            delay: bubbles[i].swayDelay,
        },
    }),
};

const BubbleBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden bg-black">
            {bubbles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-blue-300 opacity-50"
                    style={{
                        width: `${bubbles[i].radius}vw`,
                        height: `${bubbles[i].radius}vw`,
                        top: `-${bubbles[i].radius * 1.5}vh`,
                        left: `${bubbles[i].x}vw`,
                    }}
                    variants={bubbleVariants}
                    custom={i}
                    animate="float"
                >
                    <motion.div
                        className="absolute inset-0 rounded-full bg-blue-200 opacity-50"
                        variants={bubbleVariants}
                        custom={i}
                        animate="sway"
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default BubbleBackground;
