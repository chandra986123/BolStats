import "./test.css";
import Lottie from "react-lottie";
import * as animationData from "./ani1.json";
import * as animationData2 from "./ani6.json";
import Navbar from "./../../navbar/Navbar";
import Faq from "react-faq-component";
import Feature from "./Feature";
import Grow from "@mui/material/Grow";
import NewFooter from "../../footer/NewFooter";
import AOS from "aos";
import { useEffect } from "react";

const Test = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const data = {
    title: "FAQ (How it works)",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur ",
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
      {
        title: "What is the package version",
        content: "v1.0.5",
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="outer">
        <div className="frist">
          <Grow in="false" timeout={2000}>
            <div className="anime">
              <Lottie options={defaultOptions} height={400} width={350} />
            </div>
          </Grow>
        </div>

        <Feature />
      </div>
      <div className="lotifaq">
        <div className="faqs" data-aos="fade-right">
          <Faq
            data={data}
            styles={{
              titleTextColor: "darkslategrey",
              rowTitleColor: "darkslategrey",
            }}
          />
        </div>

        <div className="lottie" data-aos="fade">
          <Lottie options={defaultOptions2} height={450} width={400} />
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default Test;
