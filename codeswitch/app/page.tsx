"use client";
import {
  CheckCircle,
  Wrench,
  Lightbulb,
  Users,
  Target,
  Rocket,
  Play,
  BookOpen,
  Award,
  Star,
} from "lucide-react";
import CardStack from "../components/CardStack";
import Image from "next/image";
import Link from "next/link";

export default function STEMLearningLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50">
        <button
          className="relative flex items-center rounded-full border border-black dark:border-white bg-white dark:bg-black w-[150px] h-[36px]"
          onClick={() => {
            const isDark = document.documentElement.classList.toggle("dark");
            localStorage.setItem("darkMode", isDark.toString());
          }}
        >
          <div className="absolute inset-[2px] pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-[73px] bg-black dark:bg-white rounded-full transition-transform duration-300 ease-in-out dark:translate-x-[71px]"></div>
          </div>
          <span className="relative z-10 text-sm font-semibold text-white dark:text-white transition-colors duration-300 w-[73px] text-center">
            code
          </span>
          <span className="relative z-10 text-sm font-semibold text-black dark:text-black transition-colors duration-300 w-[73px] text-center">
            switch
          </span>
        </button>
        <nav className="flex gap-8">
          <Link
            className="text-sm font-medium text-black dark:text-white hover:text-orange-500 transition-colors"
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("about");
              if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            About
          </Link>
          <Link
            className="text-sm font-medium text-black dark:text-white hover:text-orange-500 transition-colors"
            href="#approach"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("approach");
              if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            Our Approach
          </Link>
          <Link
            className="text-sm font-medium text-black dark:text-white hover:text-orange-500 transition-colors"
            href="#programs"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("programs");
              if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            Programs
          </Link>

          <Link
            className="text-sm font-medium text-black dark:text-white hover:text-orange-500 transition-colors"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="about"
          className="relative w-full h-[300vh] bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
        >
          <div className="flex h-full">
            <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center pt-24">
              <div className="max-w-[600px] space-y-8">
                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-sm font-medium px-3 py-1 rounded-full">
                  Ages 7-10 • Hands-On Learning
                </span>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
                    Give Your Child a<br />
                    <span className="text-orange-500">STEM Head Start</span>
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                    Custom-made learning tools and fully hands-on lessons where
                    your child has creative control. Move beyond rigid
                    programming classes to real engineering exploration.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md bg-orange-500 px-8 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    href="#"
                  >
                    Book Free Trial Class
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-orange-500 px-8 text-sm font-medium text-orange-500 transition-colors hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-900/30 dark:focus:ring-offset-gray-900"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 fill-current text-green-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Project-Based Learning
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 fill-current text-green-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Industry-Level Knowledge
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <CardStack />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                The Problem with Traditional STEM Education
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl mt-4">
                Most parents want their children to have early exposure to STEM,
                but current options fall short
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20 rounded-lg p-4 shadow">
                <div className="flex items-center gap-2 mb-2 text-red-700 dark:text-red-400 font-bold">
                  <BookOpen className="h-5 w-5" />
                  Limited School Curriculum
                </div>
                <p className="text-red-600 dark:text-red-400">
                  Schools don't cater to early STEM education, leaving a gap in
                  your child's learning journey during crucial developmental
                  years.
                </p>
              </div>
              <div className="border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20 rounded-lg p-4 shadow">
                <div className="flex items-center gap-2 mb-2 text-red-700 dark:text-red-400 font-bold">
                  <Users className="h-5 w-5" />
                  Rigid Teaching Methods
                </div>
                <p className="text-red-600 dark:text-red-400">
                  Existing tuition centers use outdated pen-and-paper methods
                  that don't address different learning styles, causing children
                  to lose interest.
                </p>
              </div>
              <div className="border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20 rounded-lg p-4 shadow">
                <div className="flex items-center gap-2 mb-2 text-red-700 font-bold">
                  <Target className="h-5 w-5" />
                  Programming-Only Focus
                </div>
                <p className="text-red-600">
                  Most programs are limited to basic programming with no
                  substantial understanding of other engineering disciplines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="approach" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <span className="bg-green-100 text-green-800 hover:bg-green-200 px-2 py-1 rounded inline-block">
                    Our Solution
                  </span>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                    Hands-On Learning That Actually Works
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed dark:text-gray-200">
                    We&apos;ve revolutionized STEM education with custom-made
                    learning tools and project-based evaluation that gives
                    children full creative control over their learning journey.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Play className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-orange-500">
                        Fully Play-Based Learning
                      </h3>
                      <p className="text-gray-600 dark:text-gray-200">
                        Children learn through hands-on projects where they have
                        complete creative control over the end results.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wrench className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-orange-500">
                        Custom Learning Tools
                      </h3>
                      <p className="text-gray-600 dark:text-gray-200">
                        Specially designed tools and materials that make
                        challenging technical concepts accessible and fun.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-orange-500">
                        University-Level Knowledge
                      </h3>
                      <p className="text-gray-600 dark:text-gray-200">
                        Technical knowledge and methodologies adapted from
                        industries, made age-appropriate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Custom learning tools and hands-on projects"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
                  height="400"
                  src="/placeholder.svg?height=400&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="programs"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900"
        >
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                Why Choose STEMKids?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl mt-4">
                We&apos;re not just another tuition center. We&apos;re building
                the next generation of innovators.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow rounded-lg p-4">
                <div className="mb-2">
                  <Lightbulb className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="font-bold text-lg">Junior Robotics</div>
                <div className="text-gray-600">
                  Introduction to robotics and automation through playful
                  projects and simple programming concepts
                </div>
              </div>
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-4">
                <div className="mb-2">
                  <span className="text-green-500 text-2xl">🔧</span>
                </div>
                <div className="font-bold text-lg">Digital Makers</div>
                <div className="text-gray-600">
                  Learn to create digital projects using kid-friendly
                  programming tools and basic electronics
                </div>
              </div>
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-4">
                <div className="mb-2">
                  <span className="text-purple-500 text-2xl">🏗️</span>
                </div>
                <div className="font-bold text-lg">Young Engineers</div>
                <div className="text-gray-600">
                  Explore fundamental engineering concepts through hands-on
                  building projects and experiments
                </div>
              </div>
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-4">
                <div className="mb-2">
                  <span className="text-orange-500 text-2xl">🎨</span>
                </div>
                <div className="font-bold text-lg">Creative Tech</div>
                <div className="text-gray-600">
                  Combine art and technology to create interactive projects and
                  digital animations
                </div>
              </div>
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-4">
                <div className="mb-2">
                  <span className="text-red-500 text-2xl">🔬</span>
                </div>
                <div className="font-bold text-lg">Science Explorers</div>
                <div className="text-gray-600">
                  Discover the wonders of science through exciting experiments
                  and practical applications
                </div>
              </div>
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-4">
                <div className="mb-2">
                  <span className="text-teal-500 text-2xl">🌱</span>
                </div>
                <div className="font-bold text-lg">Eco Inventors</div>
                <div className="text-gray-600">
                  Learn about sustainability and green technology while creating
                  environmentally-friendly projects
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                How Our Method Works
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
                A proven approach that makes complex engineering concepts
                accessible and exciting for young minds
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Explore & Discover
                </h3>
                <p className="text-gray-600">
                  Children explore different engineering disciplines through
                  hands-on activities and custom tools designed for their age
                  group.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Create & Build
                </h3>
                <p className="text-gray-600">
                  Students work on real projects with full creative control,
                  applying technical knowledge in practical, fun ways.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Showcase & Grow
                </h3>
                <p className="text-gray-600">
                  Projects become part of their portfolio while building
                  confidence, understanding, and genuine interest in STEM
                  fields.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:from-gray-800 dark:to-gray-900 bg-gradient-to-br">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-white">
                What Parents Are Saying
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <div className="font-bold text-lg text-black">Sarah M.</div>
                <div className="text-gray-500">Mother of 8-year-old Emma</div>
                <p className="text-gray-600 mt-2">
                  &quot;Emma was losing interest in her programming classes,
                  but STEMKids changed everything. She&apos;s now building
                  robots and can&apos;t stop talking about engineering!&quot;
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <div className="font-bold text-lg text-black">David L.</div>
                <div className="text-gray-500">Father of 9-year-old Alex</div>
                <p className="text-gray-600 mt-2">
                  &quot;The hands-on approach is incredible. Alex built a
                  working bridge last month and explained the engineering
                  principles to me. I&apos;m amazed at what he&apos;s
                  learning!&quot;
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <div className="font-bold text-lg text-black">Michelle T.</div>
                <div className="text-gray-500">Mother of 7-year-old Ryan</div>
                <p className="text-gray-600 mt-2">
                  &quot;Finally, a program that goes beyond screen time! Ryan
                  is learning real engineering concepts through play. This is
                  exactly what I was looking for.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-500 to-red-500"
        >
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Give Your Child a STEM Head Start?
                </h2>
                <p className="mx-auto max-w-[600px] text-orange-100 md:text-xl">
                  Join hundreds of parents who&apos;ve chosen hands-on learning
                  over traditional methods. Book a free trial class today!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 bg-white/90 border-white/20 px-4 py-2 rounded border"
                  />
                  <button
                    type="submit"
                    className="bg-white text-orange-500 hover:bg-gray-100 px-6 py-2 rounded font-semibold border"
                  >
                    Get Started
                  </button>
                </form>
                <p className="text-xs text-orange-100">
                  Free trial class • No commitment required • Ages 7-10 welcome
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="bg-white text-orange-500 hover:bg-gray-100 px-6 py-2 rounded font-semibold border">
                  Book Free Trial Class
                </button>
                <button className="border border-white text-white hover:bg-white/10 bg-transparent px-6 py-2 rounded font-semibold">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* End of main content */}
      </main>
      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2024 STEMKids. All rights reserved. Empowering the next
          generation of innovators.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500"
            href="#"
          >
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  );
}
