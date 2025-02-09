import { motion } from "framer-motion";
import profile from "../assets/my-photo.jpeg";

function Avatar() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
    >
      <div className="flex items-center gap-5 mb-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-[100px] h-[100px] flex-none"
        >
          <img
            src={profile}
            alt="profile"
            className="object-cover w-full h-full rounded-full "
          />
        </motion.div>
        <div>
          <motion.h3
            whileHover={{ scale: 1.05 }}
            className="text-lg text-gray-300 hover:text-indigo-400"
          >
            Reyke Syalramadhan
          </motion.h3>
          <p className="text-sm text-gray-400">Software Engineer</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Avatar;
