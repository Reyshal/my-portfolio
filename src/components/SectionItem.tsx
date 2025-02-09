import { motion } from "framer-motion";

function SectionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
        className="mb-10"
      >
        <h3 className="text-base text-gray-300 mb-5">{title}</h3>
        {children}
      </motion.div>
    </>
  );
}

export default SectionItem;
