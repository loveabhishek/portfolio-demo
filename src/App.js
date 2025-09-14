import React  from "react";
import { motion } from "framer-motion";
import { FiDownload, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const PROFILE_SRC = "/photo.jpg";
const FALLBACK_IMAGE =
  "https://cdni.iconscout.com/illustration/premium/thumb/programming-concept-illustration-4585333-3811168.png";
const RESUME_SRC = "/resume.pdf";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      <header className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <h1 className="text-2xl font-bold text-white">
          My Portfolio<span className="text-green-400">.</span>
        </h1>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="hover:text-green-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-green-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-green-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-green-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-green-400 transition">
            Contact
          </a>
          <a
            href="#hire"
            className="px-3 py-1 bg-green-400 text-black font-semibold rounded hover:bg-green-300 transition"
          >
            Hire me
          </a>
        </nav>
      </header>

      <main
        id="home"
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mt-12"
      >
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase text-sm tracking-wider text-green-400">
            Software Developer
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
            Hello I'm <span className="text-green-400">Abhishek Kumar</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg">
            Passionate Software Developer skilled in building efficient,
            scalable, and user-friendly applications. I focus on clean code,
            problem solving, and continuous learning to deliver impactful
            digital solutions.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={RESUME_SRC}
              download
              className="inline-flex items-center gap-2 px-5 py-3 bg-green-400 text-black font-semibold rounded hover:bg-green-300 transition"
              target="_blank"
              rel="noreferrer"
            >
              <FiDownload /> Resume
            </a>
            <div className="flex gap-4 text-gray-400 text-xl">
              <a
                href="http://www.linkedin.com/in/abhishek-kumar-b0a995255"
                className="hover:text-green-400 transition"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/loveabhishek"
                className="hover:text-green-400 transition"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
              </a>
              <a
                href="mailto:itz.abhishekkumar9@gmail.com"
                className="hover:text-green-400 transition"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-green-400/70 flex items-center justify-center">
            <img
              src={PROFILE_SRC}
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                const t = e.currentTarget;
                t.onerror = null;
                t.src = FALLBACK_IMAGE;
              }}
            />
          </div>
        </motion.div>

        <div className="dynamic-background" aria-hidden="true">
          <div className="orb orb1"></div>
          <div className="orb orb2"></div>
          <div className="orb orb3"></div>
        </div>
      </main>

      <section
        id="about"
        className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
            alt="Technology Illustration"
            className="w-72 h-72 rounded-xl border border-green-400 object-cover bg-white"
          />
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-4">
            About <span className="text-green-400">Me</span>
          </h3>
          <p className="text-gray-400 mb-4">
            I am a Software Developer who enjoys designing and building web
            applications that solve real-world problems. My expertise lies in
            JavaScript, React, Node.js, and databases.
          </p>
          <p className="text-gray-400">
            I am driven by curiosity, teamwork, and a passion for delivering
            software that is reliable, scalable, and user-friendly.
          </p>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 mt-20">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          My <span className="text-green-400">Skills</span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-800">
            <h4 className="text-green-400 font-semibold mb-2">
              Web Development
            </h4>
            <p className="text-gray-300">HTML, CSS, JavaScript</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-800">
            <h4 className="text-green-400 font-semibold mb-2">
              Programming Languages
            </h4>
            <p className="text-gray-300">C, C++, Java, Python</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-800">
            <h4 className="text-green-400 font-semibold mb-2">Databases</h4>
            <p className="text-gray-300">SQL, MongoDB</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-800">
            <h4 className="text-green-400 font-semibold mb-2">Frameworks</h4>
            <p className="text-gray-300">React, Node.js, Express.js</p>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 mt-16">
        <h3 className="text-2xl font-bold text-white mb-6">
          Selected Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800">
            <h4 className="font-semibold text-white">
              Brain Tumour Detection — Deep Learning
            </h4>
            <p className="mt-2 text-gray-400">
              Built a CNN + U-Net pipeline for tumor classification and
              segmentation on MRI scans using TensorFlow / PyTorch. Included
              preprocessing, augmentation, and deployed a Streamlit app for
              real-time uploads. (Tech: Python, TensorFlow, OpenCV, Streamlit,
              Docker)
            </p>
            <div className="mt-4">
              <a
                href="https://youtu.be/6USwqd-Bq6c?si=s8DGu7k75l_gbQ-P"
                className="text-sm px-3 py-2 ring-1 ring-gray-700 rounded"
              >
                Live
              </a>
              <a
                href="https://github.com/loveabhishek"
                className="ml-2 text-sm px-3 py-2 ring-1 ring-gray-700 rounded"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </div>
          </article>

          <article className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800">
            <h4 className="font-semibold text-white">
              Crypto Portfolio Tracker
            </h4>
            <p className="mt-2 text-gray-400">
              Responsive React app to track and visualize crypto portfolios with
              real-time data from CoinGecko. Features dynamic charts built with
              Recharts and optimized React performance. (Tech: React,
              TailwindCSS, Recharts, CoinGecko API)
            </p>
            <div className="mt-4">
              <a
                href="https://crypto-portfolio-h0hf.onrender.com/"
                className="text-sm px-3 py-2 ring-1 ring-gray-700 rounded"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/loveabhishek"
                className="ml-2 text-sm px-3 py-2 ring-1 ring-gray-700 rounded"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </div>
          </article>

          <article className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800">
            <h4 className="font-semibold text-white">Weather Report App</h4>
            <p className="mt-2 text-gray-400">
              Responsive web app fetching live weather data, with hourly and
              7-day forecasts, location search, and favorites caching. (Tech:
              React, OpenWeatherMap API, TailwindCSS)
            </p>
            <div className="mt-4">
              <a
                href="https://weather-app-orcin-eight-41.vercel.app/"
                className="text-sm px-3 py-2 ring-1 ring-gray-700 rounded"
              >
                Live
              </a>
              <a
                href="https://github.com/loveabhishek"
                className="ml-2 text-sm px-3 py-2 ring-1 ring-gray-700 rounded"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </div>
          </article>

          <article className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800">
            <h4 className="font-semibold text-white">
              Zerodha-like Trade Simulator
            </h4>
            <p className="mt-2 text-gray-400">
              Trading simulator mimicking core features of a retail trading
              platform: real-time price tickers, portfolio P&L, order placement,
              and charting. (Tech: React, Node.js, WebSockets, Chart.js)
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="text-sm px-3 py-2 ring-1 ring-gray-700 rounded"
              >
                Demo
              </a>
              <a
                href="https://github.com/loveabhishek"
                className="ml-2 text-sm px-3 py-2 ring-1 ring-gray-700 rounded"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 mt-16">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Get In <span className="text-green-400">Touch</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-400 mb-6">
              Want to work together or just say hi? I'd love to hear from you!
              Connect with me through email or socials below 👇
            </p>
            <p className="text-gray-300 mb-2 flex items-center gap-2">
              <FiMail className="text-green-400" /> itz.abhishekkumar9@gmail.com
            </p>
            <p className="text-gray-300 mb-2 flex items-center gap-2">
              <FiLinkedin className="text-green-400" />{" "}
              linkedin.com/in/abhishek-kumar-b0a995255
            </p>
            <p className="text-gray-300 mb-6 flex items-center gap-2">
              <FiGithub className="text-green-400" /> github.com/loveabhishek
            </p>

            <div className="flex gap-4 text-2xl">
              <a
                href="mailto:itz.abhishekkumar9@gmail.com"
                className="hover:text-green-400"
              >
                <FiMail />
              </a>
              <a
                href="http://www.linkedin.com/in/abhishek-kumar-b0a995255"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-400"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/loveabhishek"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-400"
              >
                <FiGithub />
              </a>
            </div>
          </div>

          <form className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-gray-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-gray-200"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-gray-200"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-400 text-black font-semibold py-2 rounded hover:bg-green-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-12 mt-20 border-t border-gray-800 text-sm text-gray-500 flex justify-between">
        <span>
          © {new Date().getFullYear()} Abhishek Kumar. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
