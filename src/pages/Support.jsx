import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaQuestionCircle,
} from "react-icons/fa";

const Support = () => {
  const personalInfo = {
    name: "Anant Kapoor",
    email: "anant.kapooor@gmail.com",
  };
  const links = [
    { name: "Twitter", icon: FaTwitter, url: "https://github.com/anantk13" },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/anant-kapoor13/",
    },
    { name: "GitHub", icon: FaGithub, url: "https://github.com/anantk13" },
    {
      name: "Discord",
      icon: FaDiscord,
      url: "https://github.com/anantk13",
    },
  ];

  return (
    <section className="w-full  flex justify-center items-center">
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-600 p-4 rounded-full mb-4">
            <FaQuestionCircle className="text-4xl" />
          </div>

          <h3 className="text-2xl font-bold text-center mb-2">
            Contact me for any issue or Support
          </h3>
          <h4 className="text-2xl font-bold text-center mb-2 ">
            {personalInfo.name}
          </h4>
          <p className="text-blue-400 text-lg mb-4">{personalInfo.email}</p>
        </div>
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <link.icon className="text-blue-400 mr-3 text-xl" />
              <span className="text-lg">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;