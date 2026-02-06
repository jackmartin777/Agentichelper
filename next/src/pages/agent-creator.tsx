import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { FaChevronRight, FaCog, FaPlay, FaRobot } from "react-icons/fa";

import nextI18NextConfig from "../../next-i18next.config.js";
import AppHead from "../components/AppHead";
import BannerBadge from "../components/BannerBadge";
import GlowWrapper from "../components/GlowWrapper";
import FadeIn from "../components/motions/FadeIn";
import PrimaryButton from "../components/PrimaryButton";
import { languages } from "../utils/languages";

const features = [
  {
    title: "Define Your Agent",
    description:
      "Give your AI agent a name and a goal. It will autonomously break the goal into tasks and execute them.",
    icon: <FaRobot className="h-8 w-8" />,
  },
  {
    title: "Configure Tools",
    description:
      "Equip your agent with web search, code execution, and other tools to accomplish complex objectives.",
    icon: <FaCog className="h-8 w-8" />,
  },
  {
    title: "Deploy & Run",
    description:
      "Launch your agent in the browser and watch it work. Pause, resume, or stop at any time.",
    icon: <FaPlay className="h-8 w-8" />,
  },
];

const steps = [
  {
    step: "1",
    title: "Name Your Agent",
    description: "Choose a descriptive name that reflects your agent's purpose.",
  },
  {
    step: "2",
    title: "Set a Goal",
    description: "Describe what you want your agent to achieve in natural language.",
  },
  {
    step: "3",
    title: "Select Tools",
    description: "Pick which tools and capabilities your agent can use.",
  },
  {
    step: "4",
    title: "Launch",
    description: "Start your agent and watch it autonomously work toward your goal.",
  },
];

const AgentCreator: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <AppHead
        title="Agent Creator — Build Autonomous AI Agents"
        ogTitle="Agent Creator — Assemble, Configure, and Deploy AI Agents"
      />
      <div className="min-w-screen min-h-screen bg-black text-white selection:bg-purple-700/25">
        <Image
          src="/stars.svg"
          alt="stars"
          fill
          className="pointer-events-none absolute invert-0"
        />

        {/* Navigation */}
        <FadeIn duration={3}>
          <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logos/dark-default-solid.svg"
                width="25"
                height="25"
                alt="Logo"
                className="invert-0"
              />
              <span className="text-xl font-light tracking-wider">Agent Creator</span>
            </div>
            <div className="hidden items-center gap-6 md:flex">
              <Link
                href="/home"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Home
              </Link>
              <Link href="/" className="text-sm text-white/50 transition-colors hover:text-white">
                Dashboard
              </Link>
              <Link
                href="/templates"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Templates
              </Link>
            </div>
            <GlowWrapper className="opacity-40">
              <PrimaryButton onClick={() => void router.push("/")}>
                <>
                  <span>Get Started</span>
                  <FaChevronRight
                    size="12"
                    className="text-gray-700 transition-transform group-hover:translate-x-1"
                  />
                </>
              </PrimaryButton>
            </GlowWrapper>
          </nav>
        </FadeIn>

        {/* Hero Section */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-16 text-center">
          <FadeIn delay={0.25} duration={1.5}>
            <div className="flex justify-center">
              <BannerBadge href="/templates">
                <span className="tracking-wider text-gray-300">
                  Explore pre-built agent templates
                </span>
              </BannerBadge>
            </div>
            <h1 className="mt-8 bg-gradient-to-br from-white to-white/30 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
              Build{" "}
              <span className="bg-gradient-to-r from-[#02FCF1] to-[#A02BFE] bg-clip-text text-transparent">
                Autonomous AI Agents
              </span>{" "}
              in Your Browser
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Assemble, configure, and deploy AI agents that autonomously break down goals into
              tasks and execute them — no coding required.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GlowWrapper>
                <PrimaryButton onClick={() => void router.push("/")}>
                  <>
                    <span className="py-2 font-medium">Create Your First Agent</span>
                    <FaChevronRight
                      size="10"
                      className="text-gray-400 transition-transform group-hover:translate-x-1"
                    />
                  </>
                </PrimaryButton>
              </GlowWrapper>
              <Link
                href="/templates"
                className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                Browse Templates
              </Link>
            </div>
          </FadeIn>
        </section>

        {/* Features Section */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <FadeIn delay={0.5} duration={1.5}>
            <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
              Everything You Need to Build AI Agents
            </h2>
            <p className="mx-auto mb-16 max-w-xl text-center text-white/50">
              A complete platform for creating, configuring, and deploying autonomous agents.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/20"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#02FCF1]/20 to-[#A02BFE]/20 text-[#02FCF1]">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="leading-relaxed text-white/50">{feature.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* How It Works Section */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <FadeIn delay={0.75} duration={1.5}>
            <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">How It Works</h2>
            <p className="mx-auto mb-16 max-w-xl text-center text-white/50">
              Get up and running with your own AI agent in four simple steps.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((item) => (
                <div key={item.step} className="relative rounded-2xl border border-white/10 p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#02FCF1] to-[#A02BFE] text-sm font-bold text-black">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <FadeIn delay={1} duration={1.5}>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#02FCF1]/5 to-[#A02BFE]/5 p-12 text-center backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Build Your Agent?</h2>
              <p className="mx-auto mb-8 max-w-lg text-white/50">
                Start creating autonomous AI agents now. No coding experience needed — just
                describe your goal and let AI do the rest.
              </p>
              <GlowWrapper>
                <PrimaryButton onClick={() => void router.push("/")}>
                  <>
                    <span className="py-2 font-medium">Launch Agent Creator</span>
                    <FaChevronRight
                      size="10"
                      className="text-gray-400 transition-transform group-hover:translate-x-1"
                    />
                  </>
                </PrimaryButton>
              </GlowWrapper>
            </div>
          </FadeIn>
        </section>

        {/* Footer */}
        <footer className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-12">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="flex items-center gap-2">
              <Image
                src="/logos/dark-default-solid.svg"
                width="20"
                height="20"
                alt="Logo"
                className="invert-0"
              />
              <span className="text-sm text-white/50">Agent Creator</span>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="text-sm text-white/50 transition-colors hover:text-white">
                Dashboard
              </Link>
              <Link
                href="/templates"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Templates
              </Link>
              <Link href="/blog" className="text-sm text-white/50 transition-colors hover:text-white">
                Blog
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AgentCreator;

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  const supportedLocales = languages.map((language) => language.code);
  const chosenLocale = supportedLocales.includes(locale) ? locale : "en";

  return {
    props: {
      ...(await serverSideTranslations(chosenLocale, nextI18NextConfig.ns)),
    },
  };
};
