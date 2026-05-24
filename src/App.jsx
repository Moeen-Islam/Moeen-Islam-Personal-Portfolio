import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import {
  FiDownload,
  FiExternalLink,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import {
  projects,
  services,
  skills,
  testimonials,
  timeline,
} from "./data/portfolio";

const nav = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "services",
  "contact",
];
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

function Navbar({ dark, setDark }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const current = nav.findLast(
        (id) => document.getElementById(id)?.offsetTop - 120 <= scrollY,
      );
      if (current) setActive(current);
    };
    addEventListener("scroll", onScroll);
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-xl font-black gradient-text">
          Moeen.dev
        </a>
        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <a
              key={n}
              href={`#${n}`}
              className={`capitalize text-sm transition ${active === n ? "text-cyan-300" : "text-slate-300 hover:text-white"}`}
            >
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="glass rounded-full p-3"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="glass rounded-xl px-3 py-2 md:hidden"
          >
            Menu
          </button>
        </div>
      </div>
      {open && (
        <div className="grid gap-3 px-5 pb-5 md:hidden">
          {nav.map((n) => (
            <a
              onClick={() => setOpen(false)}
              key={n}
              href={`#${n}`}
              className="glass rounded-xl px-4 py-3 capitalize"
            >
              {n}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24"
    >
      <div className="absolute left-10 top-28 h-72 w-72 animate-blob rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 animate-blob rounded-full bg-fuchsia-500/20 blur-3xl" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative mx-auto max-w-7xl"
      >
        <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-200">
          Available for freelance projects
        </p>
        <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Hi, I’m <span className="gradient-text">Moeen Islam</span>
          <br />
          Web Developer
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
          I build fast, responsive and premium web experiences using React,
          Tailwind CSS, Firebase and modern JavaScript.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-950 shadow-glow"
          >
            View Projects
          </a>
          <a
            href="/moeen-cv.pdf"
            className="glass flex items-center gap-2 rounded-full px-7 py-3 font-bold"
            download
          >
            <FiDownload /> Download CV
          </a>
        </div>
        <div className=" mt-10 flex gap-5">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-3xl"/>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-3xl"/>
          </a>

          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="text-3xl"/>
          </a>

        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            ["1+", "Years Experience"],
            ["40+", "Projects Done"],
            ["10+", "Happy Clients"],
          ].map(([n, t]) => (
            <div key={t} className="glass rounded-3xl p-6">
              <h3 className="text-3xl font-black gradient-text">{n}</h3>
              <p className="text-slate-300">{t}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid items-center gap-10 md:grid-cols-2"
      >
        <div className="glass rounded-[2rem] p-6">
          <img
            className="h-[600px] w-full rounded-[1.5rem] object-cover"
            src="./formal.jpg"
          />
        </div>
        <div>
          <p className="text-cyan-300">About Me</p>
          <h2 className="mt-2 text-4xl font-black">
            Creative developer focused on clean UI and smooth user experience.
          </h2>
          <p className="mt-5 text-slate-300">
            I develop modern websites, landing pages, dashboards and full-stack
            web apps. My goal is to create products that are beautiful, fast,
            responsive and easy to use.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="glass rounded-2xl p-5">
              <b>Frontend</b>
              <p className="text-sm text-slate-300">
                React, Tailwind, Framer Motion
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <b>Backend</b>
              <p className="text-sm text-slate-300">
                Node, Express, MongoDB, Firebase
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="mb-10 text-4xl font-black">Skills</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map(([s, v]) => (
          <motion.div
            key={s}
            whileHover={{ scale: 1.02 }}
            className="glass rounded-2xl p-5"
          >
            <div className="mb-3 flex justify-between">
              <b>{s}</b>
              <span>{v}%</span>
            </div>
            <div className="h-3 rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${v}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const cats = ["All", ...new Set(projects.map((p) => p.cat))];
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.cat === cat);
  return (
    <section id="projects" className="section">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <h2 className="text-4xl font-black">Projects</h2>
        <div className="flex gap-3">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 ${cat === c ? "bg-cyan-400 text-slate-950" : "glass"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {list.map((p) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={p.title}
              className="glass overflow-hidden rounded-3xl"
            >
              <img src={p.img} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-slate-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-3 py-1 text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a
                    className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-slate-950"
                    href={p.live}
                  >
                    Live <FiExternalLink />
                  </a>
                  <a
                    className="glass flex items-center gap-2 rounded-full px-4 py-2"
                    href={p.github}
                  >
                    GitHub <FaGithub />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="mb-10 text-4xl font-black">Experience & Education</h2>
      <div className="relative border-l border-cyan-400/30 pl-8">
        {timeline.map((item) => (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={item.title}
            className="mb-8 glass rounded-3xl p-6"
          >
            <span className="text-cyan-300">{item.year}</span>
            <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
            <p className="mt-2 text-slate-300">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
function Services() {
  return (
    <section id="services" className="section">
      <h2 className="mb-10 text-4xl font-black">Services</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            whileHover={{ y: -8 }}
            key={s}
            className="glass rounded-3xl p-7"
          >
            <span className="text-4xl font-black gradient-text">0{i + 1}</span>
            <h3 className="mt-5 text-2xl font-bold">{s}</h3>
            <p className="mt-3 text-slate-300">
              Premium, responsive and performance-friendly implementation for
              your business.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="mb-10 text-4xl font-black">Contact Me</h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <form className="glass rounded-[2rem] p-6">
          <input
            className="mb-4 w-full rounded-2xl bg-white/10 p-4 outline-none"
            placeholder="Name"
          />
          <input
            className="mb-4 w-full rounded-2xl bg-white/10 p-4 outline-none"
            placeholder="Email"
          />
          <textarea
            className="mb-4 h-36 w-full rounded-2xl bg-white/10 p-4 outline-none"
            placeholder="Message"
          ></textarea>
          <button className="rounded-full bg-cyan-400 px-8 py-3 font-bold text-slate-950">
            Send Message
          </button>
        </form>
        <div className="space-y-4">
          <div className="glass rounded-2xl p-5">
            <FiMail /> moeenislam8089@gmail.com
          </div>
          <div className="glass rounded-2xl p-5">
            <FiPhone /> +880 1303 218089
          </div>
          <div className="glass rounded-2xl p-5">
            <FiMapPin /> Rajbari , Dhaka
          </div>
        
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row">
        <p>© {new Date().getFullYear()} Moeen Islam. All rights reserved.</p>
        <div className="flex mr-40 gap-5">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-3xl"/>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-3xl"/>
          </a>

          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="text-3xl"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
function BackTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(scrollY > 500);
    addEventListener("scroll", f);
    return () => removeEventListener("scroll", f);
  }, []);
  return show ? (
    <a
      href="#home"
      className="fixed bottom-6 right-6 rounded-full bg-cyan-400 p-4 text-slate-950 shadow-glow"
    >
      <FaArrowUp />
    </a>
  ) : null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 900);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  if (loading)
    return (
      <div className="grid min-h-screen place-items-center bg-slate-950">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="h-20 w-20 rounded-full border-4 border-cyan-400 border-t-transparent"
        />
      </div>
    );
  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
      <BackTop />
    </>
  );
}
