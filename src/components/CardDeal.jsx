import React from "react";
import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
        {" "}
        Find a better card deal <br className="sm:block hidden" />
        in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit you can improve your financial life by builiding
          credit, earning rewards and saving money . But with hundreds of credit
          cards on the market. 
        </p>
        <Button styles="mt-10"/>
    </div>
    <div className={`${layout.sectionImg}`}>
      <img src={card} alt="card" className="w-[100%] h-[100%] object-contain"/>
    </div>
  </section>
);

export default CardDeal;
