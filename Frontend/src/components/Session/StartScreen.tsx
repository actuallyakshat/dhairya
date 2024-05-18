import { motion } from "framer-motion";
import { Button } from "../ui/button";
export default function StartScreen({
  name,
  setStage,
}: {
  name: string;
  setStage: (stage: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, backgroundColor: "#FFF" }}
      animate={{ opacity: 1, backgroundColor: "#EEF7FB" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "linear" }}
      className="flex h-full min-h-screen flex-col items-center justify-center gap-8 text-primary"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="max-w-xl"
      >
        <h1 className="text-center text-5xl font-extrabold">Hey {name}</h1>
        <h4 className="mt-1 text-center text-xl font-medium">
          It's time to practice some dhairya 🙏🏼
        </h4>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="mt-6 flex flex-col items-center justify-center gap-6"
        >
          <Button
            onClick={() => setStage("breathing")}
            className={"w-full max-w-[200px]"}
          >
            Start
          </Button>{" "}
          <p className="text-center text-sm text-muted-foreground">
            Tip: It is recommended to practice dhairya in a calm and solitary
            space.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
