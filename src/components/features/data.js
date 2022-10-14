import React from "react";
import {
  FaAccessibleIcon,
  FaGitAlt,
  FaAdn,
  FaBloggerB,
  FaConfluence,
} from "react-icons/fa";

export const featureList = [
  {
    id: 1,
    icon: <FaAccessibleIcon color="0a1930" size={22} />,
    heading: "PROFITABLE PRICE",
    text: "Bostats only has a mobile app with a relatively large number of functions, which allows us to keep the price low. Ideal for starting entrepreneurs.",
  },
  {
    id: 2,
    icon: <FaAdn color="0a1930" size={22} />,
    heading: "MANY FEATURES",
    text: "In the app you can see many statistics and graphs from today, this week or the whole month. more features coming in the future, we want to keep the price the same.",
  },
  {
    id: 3,
    icon: <FaBloggerB color="0a1930" size={22} />,
    heading: "ALWAYS IN HAND",
    text: "The BolStats mobile app gives you real-time insight into your statistics of yourbol.com company",
  },
  // {
  //   id: 4,
  //   icon: <FaGitAlt color="0a1930" size={22} />,
  //   heading: "CUSTOM WEB APPS",
  //   text: "Are you planning to build a custom new web application or a web portal? We've got you covered. Reach out to us today to discuss your project idea and requirements.",
  // },
  {
    id: 4,
    icon: <FaConfluence color="0a1930" size={22} />,
    heading: "APP NOTIFICATIONS",
    text: "Receive a notification when you have a new order or a new return has been registered.",
  },
];
