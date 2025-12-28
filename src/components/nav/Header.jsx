import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/60 backdrop-blur-md border-b border-white/5">
      <MyLinks />

      <OutlineButton
        aria-label="Download Resume"
        onClick={() =>
          window.open("/RohitPatelResume.pdf", "_blank", "noopener,noreferrer")
        }
      >
        My Resume
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <nav className="flex items-center text-lg gap-4">
    <Link
      href="https://www.linkedin.com/in/rohit-patel-753707251/"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="LinkedIn Profile"
      className="text-zinc-300 hover:text-indigo-300 transition-colors animate-pulse"
    >
      <SiLinkedin />
    </Link>

    <Link
      href="https://github.com/Rohit-code-sudo"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="GitHub Profile"
      className="text-zinc-300 hover:text-indigo-300 transition-colors animate-pulse"
    >
      <SiGithub />
    </Link>
  </nav>
);
