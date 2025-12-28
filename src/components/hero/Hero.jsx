import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";
import { OutlineButton } from "../buttons/OutlineButton";

const Hero = () => {
  return (
    <section className="overflow-hidden py-24 md:py-32 text-zinc-100">
      <div className="relative">
        <div className="relative z-10 pointer-events-none">

          <Reveal>
            <h1 className="pointer-events-auto text-4xl font-black sm:text-6xl md:text-8xl">
              Hi, I’m{" "}
              <span className="text-indigo-500">Rohit Patel</span>
            </h1>
          </Reveal>

          <Reveal>
            <h2 className="pointer-events-auto my-3 text-xl sm:text-2xl md:my-4 md:text-4xl text-zinc-300">
              Senior{" "}
              <span className="font-semibold text-indigo-500">
                Full Stack Developer (MERN & Django)
              </span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="pointer-events-auto max-w-xl text-sm md:text-base leading-relaxed text-zinc-300">
              I build scalable, high-performance web applications with{" "}
              <span className="text-indigo-400 font-medium">
                4+ years of real-world experience
              </span>{" "}
              across e-commerce, booking systems, geo-based platforms, and admin dashboards.
              Specialized in React, Node.js, MongoDB, PostgreSQL, MySQL, Redis, and secure API architecture.
            </p>
          </Reveal>
          <Reveal>
            <p className=" my-3 pointer-events-auto max-w-xl text-sm md:text-base leading-relaxed text-zinc-300">
              Full Stack Developer with{" "}
              <span className="text-indigo-400 font-medium">
                4+ years of experience
              </span>{" "}
              in building modern UI and scalable REST APIs using
              React, Redux, Tailwind CSS, Node.js, Express, MongoDB,
              and MySQL, focused on performance and clean architecture.
            </p>
          </Reveal>


          <Reveal>
            <div className="pointer-events-auto mt-6 flex gap-4">
              <OutlineButton
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView()
                }
                className="before:bg-indigo-700 bg-indigo-500 border-indigo-500 text-white hover:border-indigo-700"
              >
                View Projects
              </OutlineButton>

              <OutlineButton
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView()
                }
                className="hover:text-indigo-500"
              >
                Contact Me
              </OutlineButton>
            </div>
          </Reveal>

        </div>
        <DotGrid />
      </div>
    </section>
  );
};

export default Hero;
