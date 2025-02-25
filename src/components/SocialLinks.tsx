import { motion } from "framer-motion";
import { GrDocumentDownload, GrGithub, GrLinkedin } from "react-icons/gr";
import resume from "../assets/resume.pdf";

function SocialLinks() {
  const socials = [
    {
      link: "https://github.com/Reyshal",
      icon: <GrGithub className="w-6 h-6" />,
    },
    {
      link: "https://www.linkedin.com/in/reyshal/",
      icon: <GrLinkedin className="w-6 h-6" />,
    },
    {
      link: resume,
      icon: <GrDocumentDownload className="w-6 h-6" />,
      download: true,
    },
  ];

  const renderedLinks = socials.map((social) => {
    return (
      <motion.a
        key={social.link}
        whileHover={{ scale: 1.1 }}
        href={social.link}
        target={social.download ? "_blank" : "_self"}
        rel="noopener noreferrer"
        download={social.download}
        className="text-gray-300 hover:text-indigo-400"
      >
        {social.icon}
      </motion.a>
    );
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: window.innerWidth >= 768 ? -100 : 0,
        y: window.innerWidth >= 768 ? 0 : 100,
      }}
      animate={{ opacity: 1, x: 0, y: 0, transition: { duration: 1 } }}
      className="fixed bottom-0 left-0 w-full md:w-[unset] md:top-0 md:h-lvh flex md:flex-col justify-center z-10"
    >
      <nav className="flex py-3 px-4 md:flex-col md:py-5 md:px-3 bg-gray-800 gap-5 rounded-t md:rounded-r">
        {renderedLinks}
      </nav>
    </motion.div>
  );
}

export default SocialLinks;
