import { ImGithub, ImLinkedin } from "react-icons/im";
import { motion } from "framer-motion";

function NavBar() {
  const socials = [
    {
      link: "https://github.com/Reyshal",
      icon: <ImGithub className="w-6 h-6" />,
    },
    {
      link: "https://www.linkedin.com/in/reyke-syalramadhan-4522a61b6/",
      icon: <ImLinkedin className="w-6 h-6" />,
    },
  ];

  const renderedLinks = socials.map((social) => {
    return (
      <motion.a
        whileHover={{ scale: 1.1 }}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-indigo-400"
      >
        {social.icon}
      </motion.a>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      className="fixed top-0 left-0 h-full flex flex-col justify-center z-10"
    >
      <nav className="flex flex-col py-5 px-3 bg-gray-800 gap-5 rounded-r">
        {renderedLinks}
      </nav>
    </motion.div>
  );
}

export default NavBar;
