import React from "react";

import aescensionTitle from '../assets/aescension-title.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebook,
  faPinterest,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const ComingSoon = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gradient-to-b from-gray-400 to-gray-900 justify-center items-center p-4 font-[Saira]">
      <div className="flex flex-col items-center text-center mx-auto w-full">
        <img className="w-auto h-24 object-cover" src={aescensionTitle}/>
        <p className="text-gray-300 text-[40px] mb-12 text-center">
          We&apos;re working hard to bring you something amazing. Stay tuned!
        </p>

        <p className="text-gray-300 text-[40px] mb-12 text-center">
          Follow our socials to stay updated
        </p>

        <div className="flex flex-row gap-2 text-[29px] ">
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white px-2 py-2 rounded-lg transition duration-300 mb-4"
          >
            <FontAwesomeIcon icon={faDiscord} className="mr-2 text-[4rem]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
