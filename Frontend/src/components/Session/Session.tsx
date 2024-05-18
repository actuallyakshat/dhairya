import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import QuitModal from "./QuitModal";
import StartScreen from "./StartScreen";

export default function Session() {
  const [stage, setStage] = useState("start");
  const user = { name: "Akshat", age: 25 };

  useEffect(() => {
    if (stage === "start") {
      return;
    }
    const helloTimeout = setTimeout(() => {}, 0); // Show immediately

    const breathingTimeout = setTimeout(() => {
      setStage("breathing");
    }, 5000); // 5 seconds

    // Show question after 19 seconds (5 + 14)
    const questionTimeout = setTimeout(() => {
      setStage("question");
    }, 19000); // 19 seconds (5 + 14)

    return () => {
      clearTimeout(helloTimeout);
      clearTimeout(breathingTimeout);
      clearTimeout(questionTimeout);
    };
  }, [stage]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3 }}
      >
        <QuitModal />
      </motion.div>
      <AnimatePresence>
        {stage === "start" && (
          <StartScreen name={user.name} setStage={setStage} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {stage === "breathing" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="max-w-lg space-y-1"
          >
            <h4 className="text-center text-xl font-medium">Let's Breathe</h4>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
