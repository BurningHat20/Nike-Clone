import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
import { motion } from "framer-motion";

const CustomerReviews = () => {
  return (
    <motion.section
      className="max-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Here genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <motion.div
        className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {reviews.map((review) => (
          <motion.div
            key={review.customerName}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ReviewCard
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CustomerReviews;
