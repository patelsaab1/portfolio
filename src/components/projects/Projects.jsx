import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";
import Reveal from "../util/Reveal";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>

      <Reveal>
        <p className="mt-8 text-sm text-zinc-400 max-w-2xl">
          In addition to the featured projects above, I have successfully delivered
          <span className="text-indigo-400 font-medium"> 20–25+ production-ready web applications</span>
          including e-commerce platforms, finance tools, healthcare systems, CMS websites,
          and booking solutions.
        </p>
      </Reveal>

      <Reveal>
        <ul className="mt-4 text-sm text-zinc-400 space-y-1">
          <li>• https://bestprodcut-ecommerce.netlify.app/</li>
          <li>• https://telemedicinesofteware.netlify.app/</li>
          <li>• https://financedoob.netlify.app/</li>
          <li>• https://finanacemarket.netlify.app/</li>
        </ul>
      </Reveal>

    </section>
  );
};

const projects = [
  {
    title: "Unified Commerce & Booking Platform",
    imgSrc: "project-imgs/nearprop.jpg",
    projectLink: "https://www.nearprop.com/",
    tech: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Redis"],
    description:
      "A large-scale geo-based platform for property listings, bookings, payments, coupons, and admin dashboards.",
    modalContent: (
      <>
        <p>
          A unified commerce and booking platform supporting property listings,
          hotels, travel services, payments, and admin operations.
        </p>
        <p>
          <strong>My Role:</strong> Senior Full Stack Developer – handled end-to-end
          development, architecture, and performance optimization.
        </p>
        <p>
          <strong>Key Features:</strong>
        </p>
        <p>
          • Geo-location based search with radius filtering
          • Booking, refund & payment workflows
          • Coupon & offer engine with rule-based validation
          • Admin & Super Admin dashboards
          • Redis caching & optimized APIs
        </p>
      </>
    ),
  },

  {
    title: "Tickvia – Ticket Booking Platform",
    imgSrc: "project-imgs/tickvia.jpg",
    projectLink: "https://www.tickvia.com/",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Payments"],
    description:
      "A complete ticket booking and management system with secure authentication and admin controls.",
    modalContent: (
      <>
        <p>
          Tickvia is a booking platform designed for managing events, tickets,
          users, and payments with real-time availability.
        </p>
        <p>
          • Ticket booking & availability management
          • Secure JWT-based authentication
          • Admin dashboard for events & users
          • Payment integration & booking history
        </p>
      </>
    ),
  },

  {
    title: "FemEase – Women Healthcare Platform",
    imgSrc: "project-imgs/femease.jpg",
    projectLink: "https://www.femease.in/",
    tech: ["Next.js", "Node.js", "MongoDB", "JWT"],
    description:
      "A women-focused healthcare platform with secure authentication and admin management.",
    modalContent: (
      <>
        <p>
          Built a healthcare platform using Next.js and Node.js focusing on
          performance, security, and scalability.
        </p>
        <p>
          • JWT authentication
          • Admin dashboard & role management
          • Scalable backend APIs
        </p>
      </>
    ),
  },

  {
    title: "SmartSaving – Finance & Utility Platform",
    imgSrc: "project-imgs/smartsaving.jpg",
    projectLink: "https://smartsaving.in/",
    tech: ["React", "Node.js", "MongoDB"],
    description:
      "A finance and utility services platform offering digital payments and service management.",
    modalContent: (
      <>
        <p>
          SmartSaving provides financial tools and digital utility services
          through a modern web platform.
        </p>
        <p>
          • Finance & utility service management
          • Secure backend APIs
          • User-friendly dashboard
        </p>
      </>
    ),
  },
];
