import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About Me" dir="l" />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              i, I’m <span className="font-semibold text-indigo-400">Rohit Patel</span>, a Full Stack Developer with
              <span className="font-medium text-indigo-400"> 3.6+ years of professional experience</span>
              building scalable web applications across e-commerce, booking systems,
              geo-based platforms, and CMS solutions.
            </p>
          </Reveal>

          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I specialize in designing and developing modern front-end interfaces using
              <span className="text-indigo-400 font-medium"> React, Redux Toolkit, Tailwind CSS, Ant Design</span>,
              along with building secure and high-performance backend APIs using
              <span className="text-indigo-400 font-medium"> Node.js, Express, Django REST, MongoDB, PostgreSQL, and MySQL</span>.
            </p>
          </Reveal>

          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Currently, I work as a <span className="font-medium text-indigo-400">Senior Full Stack Developer</span>,
              leading end-to-end development of large-scale MERN applications including
              geo-location based property listings, booking workflows, payment integrations,
              coupon systems, and admin/super-admin dashboards.
            </p>
          </Reveal>

          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I have strong experience in system optimization, performance tuning, and scalable architecture,
              leveraging <span className="text-indigo-400 font-medium">Redis caching, async processing,
              secure authentication (JWT, RBAC)</span>, and clean API design to handle high-traffic applications.
            </p>
          </Reveal>

          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I enjoy solving complex business problems through technology and building reliable,
              maintainable systems. I’m always open to challenging projects, leadership opportunities,
              and collaborations that create real-world impact.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>Connect with me</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>

        </div>

        <Stats />
      </div>
    </section>
  );
};
