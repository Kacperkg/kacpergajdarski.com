import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import landingCss from "./landing-page.module.css";

export default function LandingPage(): JSX.Element {
  const overlayControls: AnimationControls = useAnimation();
  const boxControls: AnimationControls = useAnimation();
  const box1Controls: AnimationControls = useAnimation();
  const box2Controls: AnimationControls = useAnimation();
  const box3Controls: AnimationControls = useAnimation();

  useEffect(() => {
    async function boxSequence(): Promise<void> {
      await Promise.all([
        box1Controls.start({
          scaleY: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }),
        box2Controls.start({
          scaleY: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }),
        box3Controls.start({
          scaleY: 1,
          transition: { duration: 1.5, ease: "easeInOut" },
        }),
      ]);

      await boxControls.start({
        scale: 2,
        backgroundColor: "#000000",
        rotate: "45deg",
        transition: { duration: 1, ease: "easeInOut" },
      });

      await Promise.all([
        box1Controls.start({
          opacity: 0,
          display: "none",
          transition: { duration: 0.5, ease: "easeInOut" },
        }),
        box2Controls.start({
          opacity: 0,
          display: "none",
          transition: { duration: 0.5, ease: "easeInOut" },
        }),
        box3Controls.start({
          opacity: 0,
          display: "none",
          transition: { duration: 0.5, ease: "easeInOut" },
        }),
      ]);

      await boxControls.start({
        scale: 20,
        transition: { duration: 1, ease: "easeIn" },
      });

      await Promise.all([
        boxControls.start({
          opacity: 0,
          transition: { duration: 1, ease: "easeInOut" },
        }),

        overlayControls.start({
          backgroundColor: "rgba(0, 0, 0, 0.0)",
          transition: { duration: 0.1, ease: "easeInOut" },
        }),
      ]);

      await Promise.all([
        boxControls.start({
          display: "none",
          transition: { duration: 0.1, ease: "easeInOut" },
        }),

        overlayControls.start({
          display: "none",
          transition: { duration: 0.1, ease: "easeInOut" },
        }),
      ]);
    }

    boxSequence();
  }, [boxControls, box1Controls, box2Controls, box3Controls, overlayControls]);

  return (
    <>
      {/* Overlay Animation */}
      <motion.div className={landingCss.overlay1} animate={overlayControls}>
        {/* Parent Box */}
        <motion.div className={landingCss.box} animate={boxControls}>
          {/* Child Boxes */}
          <motion.div
            className={landingCss.box1}
            initial={{ scaleY: 0, originY: 1 }}
            animate={box1Controls}
          />
          <motion.div
            className={landingCss.box2}
            initial={{ scaleY: 0, originY: 1 }}
            animate={box2Controls}
          />
          <motion.div
            className={landingCss.box3}
            initial={{ scaleY: 0, originY: 1 }}
            animate={box3Controls}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
