import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SideBarLink } from "./SideBarLink";

export const SideBar = () => {
  const [selected, setSelected] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelected(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // better accuracy
      }
    );

    sections.forEach((section) => observer.observe(section));

    // ✅ Cleanup (VERY IMPORTANT)
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      aria-label="Primary navigation"
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="no-scrollbar sticky top-0 left-0 z-20 flex h-screen flex-col items-center overflow-y-auto bg-zinc-950"
    >
      {/* Logo / Initials */}
      <span className="my-4 flex size-10 shrink-0 items-center justify-center text-xl font-black leading-none">
        RP<span className="text-indigo-500">.</span>
      </span>

      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value="about"
        href="#about"
      >
        About
      </SideBarLink>

      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value="projects"
        href="#projects"
      >
        Projects
      </SideBarLink>

      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value="experience"
        href="#experience"
      >
        Experience
      </SideBarLink>

      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value="contact"
        href="#contact"
      >
        Contact
      </SideBarLink>
    </motion.nav>
  );
};
