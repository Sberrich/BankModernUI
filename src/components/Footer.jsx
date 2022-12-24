import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants/constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-1 flex-col justify-start mr-10">
        <img src={logo} alt="hoobank" className="w-[266px] h-[72px]" />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payment easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className=" font-poppins font-medium text-[18px] leading-[27px] text-white1`">
              {footerLink.title}
              <ul>
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className=" font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary "
                  >
                    {link.name}
                  </li> 
                ))}
              </ul>
            </h4>
          </div>
        ))}
      </div>
    </div>
    <div>
      <p className="font-poppins font-medium text-[18px] leading-[27px] text-center text-white">
        2022 HookBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index)=>(
          <img key={social.id} src={social.icon} alt={social.id} className="flex flex-1 justify-between items-center w-[20px] h-[40px] md:mt-10 mt-6"/>

        ))}
         
      </div>
    </div>
  </section>
);

export default Footer;
