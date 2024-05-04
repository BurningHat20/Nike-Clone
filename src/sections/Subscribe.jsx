import Button from "../components/Button";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <motion.section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <motion.div
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <motion.div
          className="flex max-sm:justify-end items-center max-sm:w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button label="Sign Up" fullWidth />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Subscribe;
