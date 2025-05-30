// CTA.tsx
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <motion.h2
      className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="block">Ready to dive in?</span>
      <motion.div
        className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="inline-flex rounded-md shadow">
          <Link
            href="/sign-in"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50"
          >
            Get started
          </Link>
        </div>

        <div className="ml-3 inline-flex rounded-md shadow">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            Learn more
          </Link>
        </div>
      </motion.div>
    </motion.h2>
      </div>
    </section>
    
  );
};

export default CTA;
