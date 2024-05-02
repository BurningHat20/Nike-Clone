import { star } from "../assets/icons";
import { motion } from "framer-motion";

const PopularProductCard = ({ imgURL, name, price }) => (
  <motion.div
    className="flex flex-1 flex-col w-full max-sm:w-full"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }} // Transition for hover animation
  >
    <InViewAnimation>
      <div>
        <img
          src={imgURL}
          alt={name}
          style={{ width: "280px", height: "280px" }}
        />
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" height={24} width={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
      </div>
    </InViewAnimation>
  </motion.div>
);

const InViewAnimation = ({ children }) => (
  <motion.div
    whileInView={{ y: [-60, 0], opacity: [0, 1] }}
    transition={{ duration: 0.5 }} // Transition for in-view animation
  >
    {children}
  </motion.div>
);

export default PopularProductCard;
