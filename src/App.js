import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Terminal from "terminal-in-react";
import Typewriter from "typewriter-effect";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.5, window.innerWidth < 1100 ? 1 : 1.7]
  );

  return (
    <div className="wrapper">
      <div className="header">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString("Hello there, I'm <strong>Mattia</strong>")
              .pauseFor(1500)
              .deleteChars(6)
              .typeString("a <strong>Designer</strong>")
              .pauseFor(1500)
              .deleteChars(8)
              .typeString("<strong>Developer</strong>")
              .pauseFor(1500)
              .deleteChars(9)
              .typeString("<strong>Cinephile</strong>")
              .pauseFor(1500)
              .deleteChars(9)
              .typeString("<strong>Photographer</strong>")
              .pauseFor(1500)
              .deleteChars(12)
              .typeString("<strong>plant lover</strong>")
              .pauseFor(1500)
              .deleteChars(11)
              .typeString("<strong>tech enthusiast</strong>")
              .pauseFor(1500)
              .deleteChars(15)
              .typeString("<strong>anime addicted</strong>")
              .pauseFor(1500)
              .start();
          }}
          options={{
            delay: 75,
            loop: true,
          }}
        />
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="container"
        style={{
          scale,
        }}
      >
        <Terminal
          color="green"
          backgroundColor="black"
          barColor="black"
          style={{
            fontWeight: "bold",
            fontSize: "1em",
          }}
          actionHandlers={{
            handleClose: (toggleClose) => {
              // do something on close
            },
            handleMaximise: (toggleMaximise) => {
              // do something on maximise
              toggleMaximise();
            },
            handleMinimise: (toggleMaximise) => {
              // do something on maximise
            },
          }}
          commands={{
            "type-text": (args, print, runCommand) => {
              const text = args.slice(1).join(" ");
              print("");
              for (let i = 0; i < text.length; i += 1) {
                setTimeout(() => {
                  runCommand(`edit-line ${text.slice(0, i + 1)}`);
                }, 100 * i);
              }
            },

            "open-cv.pdf": () =>
              window.open(
                "https://www.icloud.com/iclouddrive/0c8fPEgKi-rx-dB1wjKY3toHQ#CV_Mattia_Ginoble/"
              ),
            "open-business.card": () =>
              window.open("https://mattiaginoble.github.io/business-card/"),
          }}
          descriptions={{
            "open-business.card": "open my business card",
            "open-cv.pdf": "open my cv",
            "type-text": "spell a text",
          }}
          msg="You can write anything here. Pls dont hack me!"
        />
      </motion.div>
    </div>
  );
}

export default App;
