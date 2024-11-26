"use client";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import Styles from "../info.module.css";

export function RotateWords({
  text = "Rotate",
  words = ["Word 1", "Word 2", "Word 3"],
  text2,
}: {
  text: string;
  words: string[];
  text2?: string; // Optional property
}) {
  const [index, setIndex] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(true);
  const intervalRef = React.useRef<NodeJS.Timer | null>(null);

  const startInterval = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 5000);
    }
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  React.useEffect(() => {
    if (isRunning) {
      startInterval();
    } else {
      stopInterval();
    }

    return () => stopInterval(); // Cleanup on unmount
  }, [isRunning]);

  // Pause rotation when the component loses focus or visibility
  React.useEffect(() => {
    const handleVisibilityChange = () => {
      setIsRunning(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className={Styles.inlineFlex}>
      {text}{" "}
      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>
      {text2 && <span> {text2}</span>}
    </div>
  );
}
