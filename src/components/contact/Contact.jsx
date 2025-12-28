import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="mx-auto max-w-xl rounded-xl bg-zinc-800 px-8 py-12">
        
        <Reveal width="w-full">
          <h4 className="text-center text-4xl font-black md:text-5xl">
            Contact<span className="text-indigo-500">.</span>
          </h4>
        </Reveal>

        <Reveal width="w-full">
          <p className="my-8 text-center leading-relaxed text-zinc-300">
            I’m open to discussing full-time opportunities, freelance projects,
            or collaborations involving modern web applications, scalable backend
            systems, and enterprise-level solutions.
            <br />
            Feel free to reach out — I’ll get back to you as soon as possible.
          </p>
        </Reveal>

        <Reveal width="w-full">
          <Link href="mailto:rp750947@gmail.com">
            <div className="mx-auto flex w-fit items-center justify-center gap-2 text-lg transition-colors hover:text-indigo-300 md:text-2xl">
              <AiFillMail />
              <span className="font-medium">rp750947@gmail.com</span>
            </div>
          </Link>
        </Reveal>

      </div>
    </section>
  );
};
