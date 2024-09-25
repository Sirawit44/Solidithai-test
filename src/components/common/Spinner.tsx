import { motion } from 'framer-motion';

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <motion.div
        className="rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }} // Continuous rotation
      />
    </div>
  );
};

