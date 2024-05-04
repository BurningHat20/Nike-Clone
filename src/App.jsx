import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections/index";
import { motion } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="relative">
      {loading && <Preloader />}
      <cursor className="max-md:hidden">
        <CustomCursor />
      </cursor>

      <motion.section
        animate={{ x: [-60, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
      </motion.section>

      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-t pb-8 padding-x">
        <Footer />
      </section>
    </main>
  );
};

export default App;
