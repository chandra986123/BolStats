import React from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Question from "./Question";
import "./Faq.css";
import { questions } from "./data.js";

const Faq = () => {
  return (
    <section id="faq">
      <div className="container faq" data-aos="zoom-in-up">
        <div className="u-title">
          <MdOutlineLibraryBooks color="#2463e9" size={30} />
          <h2>FAQs</h2>
          <p className="u-text-small u-text-dark">
            Here are a few handpicked Problems from our clients. We think you'll
            find this helpful.
          </p>
        </div>

        <div className="questions">
          {questions.map((question) => (
            <Question title={question.title} answer={question.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
