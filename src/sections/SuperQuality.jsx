import { motion } from "framer-motion";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <motion.section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-1 flex-col">
        <motion.h2
          className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We Provide You
          <br />
          <span className="text-coral-red ">Super</span>
          <span className="text-coral-red "> Quality</span> Shoes
        </motion.h2>
        <motion.p
          className="mt-4 lg:max-w-lg info-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of luxury.
        </motion.p>
        <motion.p
          className="mt-6 lg:max-w-lg info-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Our dedication to detail and excellence ensures your satisfaction
        </motion.p>
        <motion.div
          className="mt-11"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button label="View Details" iconUrl={arrowRight} />
        </motion.div>
      </div>

      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default SuperQuality;
