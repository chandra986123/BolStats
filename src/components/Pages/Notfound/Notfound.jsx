import { Typography } from "@mui/material";
import * as animationData from "./ani10.json";
import Lottie from "react-lottie";

const Notfound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="notfound">
      <Lottie options={defaultOptions} height={400} width={350} />
      <Typography
        color="#2463e9"
        variant="h4"
        sx={{ fontFamily: "ubuntu" }}
        align="center"
      >
        Page not found
      </Typography>
    </div>
  );
};

export default Notfound;
