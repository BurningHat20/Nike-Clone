import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { motion } from "framer-motion";

const SpecialOffer = () => {
  return (
    <motion.section
      className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex-1">
        <motion.img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <motion.h2
          className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <span className="text-coral-red "> Special</span>
          <span className=""> Offer</span>
        </motion.h2>
        <motion.p
          className="mt-4 lg:max-w-lg info-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled quality and value that sets us apart.
        </motion.p>
        <motion.p
          className="mt-6 lg:max-w-lg info-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          Navigate a realm of possibilities with designs to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </motion.p>
        <motion.div
          className="mt-11 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <Button
            label="Shop now"
            iconUrl={arrowRight}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SpecialOffer;
