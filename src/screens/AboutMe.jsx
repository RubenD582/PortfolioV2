import { motion } from "framer-motion";

const AnimatedParagraph = ({ text }) => {
  const words = text.split(" "); // Split paragraph into words

  return (
    <p className="text-gray-500 leading-relaxed text-sm font-montserrat font-thin">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05, duration: 0.1 }} // Adjust timing
          className="inline-block mx-[2px]" // Keeps spacing between words
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

const AboutMe = () => {
  return (
    <div className="min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Gray Placeholder (Replace with Image Later) */}
        <div className="w-full md:w-1/2 h-80 bg-gray-300"></div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-bodoni-moda text-gray-900 mb-6">
            About Me
          </h2>

          {/* Apply Animated Paragraph */}
          <AnimatedParagraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices gravida neque in facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae fringilla magna. Nunc et commodo urna, vitae dignissim nulla. Nullam fermentum eros in bibendum elementum. Suspendisse tempus sem mattis, rutrum neque vehicula, sodales justo. Nullam molestie mi erat, sed pharetra orci luctus a. Donec nec scelerisque turpis. Sed nec condimentum elit, id venenatis tellus. Donec faucibus tristique ipsum ac lobortis. Duis luctus hendrerit mauris, aliquam posuere neque cursus quis. In semper eget sapien nec consectetur. Proin non dictum orci, nec lobortis ipsum. Nullam porttitor interdum orci, vel porta libero venenatis et." />
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
