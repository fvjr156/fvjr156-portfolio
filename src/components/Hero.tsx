import { motion } from "framer-motion";
import ImageLoading from "./ImageLoading";
import { ArrowDown } from "react-feather";
import ShinyText from "./ShinyText";
import { useState } from "react";
import type { HeroProps } from "../types/Types";

export default function Hero({ data, isScrolled, theme, id }: HeroProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [entranceOk, setEntranceOk] = useState(false);

  return (
    <div
      id={id}
      className="min-h-screen p-10 flex flex-col justify-center items-center text-center"
    >
      <motion.div
        whileHover={{
          x: [-1, 1, -1, 1, 0],
          transition: {
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div
          className="w-43 h-43 border-2 border-accent rounded-xl"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-once="true"
        >
          {!imgLoaded && <ImageLoading />}
          <img
            src={data.heroavatar}
            alt="avatar"
            draggable={false}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgLoaded(false)}
            onMouseDown={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            className={`${imgLoaded ? "opacity-100" : "opacity-0"} rounded-lg w-full h-full object-cover transition-opacity duration-300`}
          />
        </div>
      </motion.div>

      <h1 className="font-hero font-bold mt-6 text-5xl text-text">
        <ShinyText
          color={theme === "light" ? "#000000" : "#b5b5b5"}
          shineColor={theme === "light" ? "#646464" : "#ffffff"}
        >
          {[...data.name].map((c, i) => (
            <span
              key={i}
              data-aos="fade-zoom-in"
              data-aos-delay={(i + 1) * 50}
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              {c}
            </span>
          ))}
        </ShinyText>
      </h1>

      <p
        className="font-display font-normal text-xl p-3"
        data-aos="flip-down"
        data-aos-once="true"
        data-aos-delay={data.name.length * 50 + 100}
      >
        {data.herodesc}
      </p>

      <div className="h-35" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isScrolled ? 0 : 0.8, y: 0 }}
        transition={{ duration: 0.35, delay: entranceOk ? 0 : data.name.length * 0.05 + 0.3, ease: "easeOut" }}
        onAnimationComplete={() => setEntranceOk(true)}
        className="text-xs text-text flex flex-col items-center gap-2"
      >
        <motion.div
          animate={isScrolled ? { y: 0 } : { y: [0, 8, 0] }}
          transition={
            isScrolled
              ? { duration: 0.2 }
              : {
                  duration: 2.4,
                  repeat: Infinity,
                  ease: [
                    [0.25, 0.1, 0.25, 1],
                    [0.4, 0, 0.2, 1],
                  ],
                }
          }
        >
          <ArrowDown key={theme} className="text-text size-6 stroke-3" />
        </motion.div>

        <p className="mt-3">Scroll Down</p>
      </motion.div>
    </div>
  );
}
