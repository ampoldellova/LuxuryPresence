import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Carousel from "../components/Carousel";
import SearchListings from "../components/SearchListings";
import CallOrVisit from "../components/CallOrVisit";
import Footer from "../components/Footer";

function useInView(threshold = 0.2) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const HomePage = () => {
  const [visible, setVisible] = useState(false);

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div sx={{ backgroundColor: "#f8f8f8" }}>
      <Banner visible={visible} />
      <Carousel />
      <Services
        ref1={ref1}
        inView1={inView1}
        ref2={ref2}
        inView2={inView2}
        ref3={ref3}
        inView3={inView3}
      />
      <SearchListings />
      <CallOrVisit />
      <Footer />
    </div>
  );
};

export default HomePage;
