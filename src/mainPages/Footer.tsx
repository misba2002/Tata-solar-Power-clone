"use client";
import React from "react";
import { Ubuntu } from "next/font/google";
import { footerColumns } from "@/Data/footerData";

// Social icons
import { FaSquareXTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});



export default function Footer() {
  return (
    <section
      className={`${ubuntu.className} h-fit lg:h-fit w-full bg-[url('/FooterImg/footerBG.webp')] bg-cover pt-[80px] bg-center flex flex-col `} 
    >
      <div className="hidden  lg:grid grid-cols-5 gap-8 px-10 pt-5 text-gray-200"> 
        {footerColumns.map((col, i) => (
          <div key={i} className="space-y-2 text-xs text-left">
            {col.sections.map((section, j) => (
              <div key={j}>
               {section.link ? (
                  <a href={section.link} className="hover:underline">
                    <h3 className="font-light text-left mb-2 uppercase">
                      {section.title}
                    </h3>
                  </a>
                ) : (
                  <h3 className="font-light text-left mb-2 uppercase">{section.title}</h3>
                )}

                {/* Normal lists */}
                {section.title !== "Follow Us" ? (
                  <ul className="space-y-2">
                    {section.lists?.map((item, k) => (
                      <li
                        key={k}
                        className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:top-0 text-gray-300"
                      >
                        <a href={item.link} className="hover:underline">
                          {item.label}
                        </a>
                        {item.sublink && (
                          <ul className="ml-4 mt-1 text-sm space-y-1 text-grey-400">
                            {item.sublink.map((sub, l) => (
                              <li key={l}>
                                <a href={sub.link} className="hover:text-white">
                                  {sub.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  // Social icons inline
                  <div className="flex gap-4 mt-4 text-2xl">
                    <a href="#" className="hover:text-white">
                      <FaSquareXTwitter />
                    </a>
                    <a href="https://www.linkedin.com/company/tata-power-renewable-energy-limited/?viewAsMember=true" className="hover:text-white">
                      <FaLinkedin />
                    </a>
                    <a href="https://www.facebook.com/TataPowerRenewableEnergy/" className="hover:text-white">
                      <FaFacebook />
                    </a>
                    <a href="https://www.youtube.com/channel/UCHiqP8Mu-jWdaCFwu7kVLeg" className="hover:text-white">
                      <FaYoutube />
                    </a>
                    <a href="https://www.instagram.com/tata_power_renewable_energy/" className="hover:text-white">
                      <FaInstagram />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
         {/* Bottom Legal Bar */}
       <div className="border-t border-gray-500 mx-15 text-sm text-gray-300 justify-center  text-center lg:text-left py-4">
        <a href="https://www.tatapowersolar.com/legal-disclaimer/" className="hover:underline mx-2">Legal Disclaimer</a>|
        <a href="https://www.tatapowersolar.com/privacy-policy/" className="hover:underline mx-2">Privacy Policy</a>|
        <a href="https://www.tatapowersolar.com/terms-of-use/" className="hover:underline mx-2">Terms of Use</a>
        <span className="mx-2">© Tata Power Solar Systems Ltd. {new Date().getFullYear()}</span>
      </div>
      
    </section>
  );
}
