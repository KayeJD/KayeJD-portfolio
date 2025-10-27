import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Resume = "/KayeJD-Portfolio/assets/KarrylD_Resume-f9CP2ihH.pdf";
function HeroSection() {
  return /* @__PURE__ */ jsx("section", { className: "flex flex-col items-center justify-center min-h-screen px-6", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-3xl text-left", children: [
    /* @__PURE__ */ jsx(
      motion.h1,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "text-[70px] sm:text-[80px] font-bold text-gray-900 dark:text-white mb-4",
        children: "Karryl Dumalag"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.3, duration: 0.8 },
        children: /* @__PURE__ */ jsx(
          TypeAnimation,
          {
            sequence: [
              "Software Engineer",
              1500,
              "Embedded Systems Enthusiast",
              1500,
              "Student",
              1500
            ],
            wrapper: "span",
            speed: 50,
            repeat: Infinity,
            className: "text-2xl sm:text-3xl font-medium text-blue-600 dark:text-blue-400"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.6, duration: 0.8 },
        className: "mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 space-y-4",
        children: [
          /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200", children: "Welcome!" }),
          /* @__PURE__ */ jsx("p", { children: "This website is my playground. A mini showcase of my coding adventures, from side projects that kept me up way past my bedtime to academic endeavors that challenged my brain in all the right ways." }),
          /* @__PURE__ */ jsx("p", { children: "So grab a cup of your favorite caffeinated beverage (I recommend a double espresso) and take a look around! You might find something that sparks curiosity, piques your interest, or even makes you laugh (hopefully not at my expense...)" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1, duration: 0.8 },
        className: "flex space-x-6 mt-10",
        children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/KayeJD",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-gray-700 dark:text-gray-200 hover:text-blue-500 transition",
              children: /* @__PURE__ */ jsx(Github, { size: 32 })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.linkedin.com/in/karryl-dumalag-766b2923b/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-gray-700 dark:text-gray-200 hover:text-blue-500 transition",
              children: /* @__PURE__ */ jsx(Linkedin, { size: 32 })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.a,
      {
        href: Resume,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-block mt-8 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-md font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.2, duration: 0.8 },
        children: "My Resume"
      }
    )
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
const ProjectCard = ({
  title,
  image,
  description,
  tags,
  status,
  link
}) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 25 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: "w-full flex flex-col items-center py-8",
      children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-4xl rounded-xl overflow-hidden shadow-lg bg-neutral-100 dark:bg-neutral-800 transition-all", children: [
        link ? /* @__PURE__ */ jsx(Link, { to: link, children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "block h-120 bg-cover bg-center opacity-90 hover:opacity-100 hover:scale-[1.02] transition-transform duration-300",
            style: { backgroundImage: `url(${image})` },
            children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-full bg-black/40", children: /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-white tracking-wide", children: title }) })
          }
        ) }) : /* @__PURE__ */ jsx(
          "div",
          {
            className: "block h-72 bg-cover bg-center opacity-90 hover:opacity-100 hover:scale-[1.02] transition-transform duration-300",
            style: { backgroundImage: `url(${image})` },
            children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-full bg-black/40", children: /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-white tracking-wide", children: title }) })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2 mt-4", children: tags.map((tag, idx) => /* @__PURE__ */ jsx(
          Badge,
          {
            variant: "secondary",
            className: "text-gray-700 dark:text-gray-200",
            children: tag
          },
          idx
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center mt-6 px-6 pb-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: description }),
          status ? /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm font-medium text-gray-500 dark:text-gray-400 italic", children: status }) : link && /* @__PURE__ */ jsx(
            Link,
            {
              to: link,
              className: "mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline",
              children: "View details"
            }
          )
        ] })
      ] })
    }
  );
};
function Header() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.theme === "light") return false;
      return true;
    }
    return true;
  });
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 128;
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };
  return /* @__PURE__ */ jsx("header", { className: "fixed top-4 left-0 right-0 z-50 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "w-full mx-4 md:mx-8 backdrop-blur-md bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-800/40 shadow-lg rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "/",
        className: "text-3xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition",
        children: [
          "KD",
          /* @__PURE__ */ jsx("span", { className: "text-blue-600 dark:text-blue-400", children: "." })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex gap-6 text-gray-600 dark:text-gray-300 font-medium", children: [
        { label: "Experience", id: "experience" },
        { label: "Projects", id: "projects" },
        { label: "Extras", id: "extras" }
      ].map((item) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => handleScrollTo(item.id),
          className: "hover:text-blue-600 dark:hover:text-blue-400",
          children: item.label
        },
        item.id
      )) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsDark(!isDark),
          className: "p-2 rounded-md bg-gray-200/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 hover:bg-gray-300/60 dark:hover:bg-gray-700/60 transition",
          "aria-label": "Toggle theme",
          children: isDark ? /* @__PURE__ */ jsx(Sun, { size: 20 }) : /* @__PURE__ */ jsx(Moon, { size: 20 })
        }
      )
    ] })
  ] }) });
}
const TimelineSection = ({ items }) => {
  return /* @__PURE__ */ jsx("div", { className: "max-w-4xl w-full mx-auto centered", children: /* @__PURE__ */ jsx("div", { className: "my-6 relative", children: items.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "relative pl-8 sm:pl-32 py-8 group", children: [
    /* @__PURE__ */ jsx("div", { className: "font-caveat font-medium text-2xl text-indigo-500 dark:text-indigo-400 mb-1 sm:mb-0", children: item.label }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden\n              before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 dark:before:bg-slate-700\n              sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3\n              after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 dark:after:bg-indigo-400 after:border-4\n              after:box-content after:border-slate-50 dark:after:border-slate-800 after:rounded-full sm:after:ml-[6.5rem]\n              after:-translate-x-1/2 after:translate-y-1.5",
        children: [
          /* @__PURE__ */ jsx(
            "time",
            {
              className: "sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center \n                text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 \n                text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/40 rounded-full",
              children: item.date
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-slate-900 dark:text-slate-100", children: item.title })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "text-slate-600 dark:text-slate-400", children: Array.isArray(item.description) ? /* @__PURE__ */ jsx("ul", { className: "list-disc ml-6 space-y-1", children: item.description.map((point, i) => /* @__PURE__ */ jsx("li", { children: point }, i)) }) : /* @__PURE__ */ jsx("p", { children: item.description }) })
  ] }, index)) }) });
};
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "mt-16 mb-6 mx-4 md:mx-8 rounded-2xl py-6 bg-gray-100/80 dark:bg-gray-900/60 backdrop-blur-md border border-white/20 dark:border-gray-800/40 text-center text-gray-600 dark:text-gray-400 text-sm shadow-sm transition-all duration-300", children: /* @__PURE__ */ jsxs("p", { children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " ",
    /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-800 dark:text-gray-200", children: "Karryl Dumalag" }),
    ". All rights reserved."
  ] }) });
}
const volexImg = "/KayeJD-Portfolio/assets/volexmain-DUOHOpJc.jpg";
const effortloggerMain = "/KayeJD-Portfolio/assets/main-DHs4Rjb4.jpg";
const effortloggerLogin = "/KayeJD-Portfolio/assets/login-DO12zSGj.png";
const effortloggerLogs = "/KayeJD-Portfolio/assets/logs-bEiSxi9v.png";
const effortloggerEditor = "/KayeJD-Portfolio/assets/editor-DYrC0D1T.png";
const creditCardMain = "/KayeJD-Portfolio/assets/main-BFVdTQcK.jpg";
const creditCardBalancing = "/KayeJD-Portfolio/assets/balancing-Bx9rB5BI.png";
const creditCardDataAnalysis = "/KayeJD-Portfolio/assets/dataanalysis-DNWgtKOP.png";
const creditCardEnsemble = "/KayeJD-Portfolio/assets/ensemble-CxxP8B4p.png";
const creditCardLogisticRegression = "/KayeJD-Portfolio/assets/logreg-Dj49zQbS.png";
const creditCardProcessing = "/KayeJD-Portfolio/assets/processing-C53GTfZW.png";
const creditCardNeuralNetwork = "/KayeJD-Portfolio/assets/neuralnet-D4kwDodY.png";
const SpotifyMain = "/KayeJD-Portfolio/assets/main-ak40z_-d.jpg";
const MicroMain = "/KayeJD-Portfolio/assets/main-C3-Ek1cv.jpg";
const HVACMain = "/KayeJD-Portfolio/assets/hvacmain-N8O38T8J.jpg";
function Welcome() {
  const experienceData = [
    {
      label: "Software Engineer Intern",
      date: "Aug 2025",
      title: "Irenix Empowerment Foundation",
      description: "At Irenix, I helped build and refine the backend for a healthcare system designed to securely manage patient data in the cloud. It was a deep dive into scalable systems, security, and how thoughtful engineering can make a real difference in healthcare tech."
    },
    {
      label: "Software Engineer (Student Contract)",
      date: "Aug 2024",
      title: "General Dynamics Mission Systems",
      description: "I worked on secure communications systems for defense environments, developing automated testing tools that supported reliability and performance. It was a great experience blending precision engineering with large-scale collaboration."
    },
    {
      label: "Software Developer Intern",
      date: "Mar 2024",
      title: "28 Gorilla Engineering",
      description: "At 28 Gorilla, I joined a small but sharp team working on IoT and a range of embedded projects like battery monitoring systems. I helped design tools to process real-time telemetry and learned a ton about backend systems, teamwork, and building for scale from the ground up."
    },
    {
      label: "Enterprise Technical Support Specialist",
      date: "Jan 2023",
      title: "EAW",
      description: "My early tech days were all about problem-solving, helping enterprise clients troubleshoot Microsoft Surface devices and network systems. It’s where I developed a knack for debugging and communicating complex issues clearly."
    }
  ];
  return /* @__PURE__ */ jsxs("main", { className: "flex flex-col items-center justify-center px-6 py-16 bg-neutral-50 dark:bg-neutral-900 min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: /* @__PURE__ */ jsx(HeroSection, {})
      }
    ),
    /* @__PURE__ */ jsxs("div", { id: "experience", className: "scroll-mt-32 mt-12 mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white", children: "My Experience" }),
      /* @__PURE__ */ jsx(TimelineSection, { items: experienceData })
    ] }),
    /* @__PURE__ */ jsxs("div", { id: "projects", className: "scroll-mt-32 mt-12 mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white", children: "Side Projects" }),
      /* @__PURE__ */ jsx(
        ProjectCard,
        {
          title: "VOLEX",
          image: volexImg,
          description: "VOLEX is a web application that aims to relieve the tediousness and hassles of monitoring and maintaining one's finances.",
          tags: ["Next.js", "TypeScript", "TailwindCSS", "Dwolla", "Plaid"],
          status: "In Progress...",
          link: "https://github.com/KayeJD/Volex"
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectCard,
        {
          title: "EffortLogger 2.0",
          image: effortloggerMain,
          description: "A remake and improvement over the original EffortLogger Excel Visual Basic Program, written in Java for flexibility and using a localhost SQL database.",
          tags: ["Java / JavaFX", "SQL", "Authentication", "Documentation", "Agile / Scrum"],
          link: "effortlogger-project"
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectCard,
        {
          title: "Fraud Detection Machine Learning",
          image: creditCardMain,
          description: "Analyzes a Kaggle dataset with 284,807 transactions to detect fraud using machine learning models such as Logistic Regression, Random Forest, and Gradient Boosting.",
          tags: ["Python", "Machine Learning", "Data Modeling", "Data Analysis"],
          link: "credit-card-ml-project"
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectCard,
        {
          title: "Spotify Web API",
          image: SpotifyMain,
          description: "Integrates Spotify’s API into a web app for authentication, top track access, and personalized music recommendations with interactive UI.",
          tags: ["JavaScript", "Pug / CSS", "API", "Express.js", "OAuth 2.0"],
          link: "https://github.com/KayeJD/Spotify-Unwrapped-Unlimited"
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectCard,
        {
          title: "Microprocessor",
          image: MicroMain,
          description: "Engineered the digital logic for a brainless microprocessor programmable through ROM value manipulation.",
          tags: ["Verilog", "Digital Logic"],
          link: "https://github.com/KayeJD/Microprocessor/blob/main/README.md"
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectCard,
        {
          title: "HVAC Design",
          image: HVACMain,
          description: "Designed a controller to regulate temperature as part of a thermostat system, ensuring safe operation of HVAC equipment.",
          tags: [
            "Engineering Design",
            "Circuit Design",
            "Digital Signal Processing",
            "Project Management"
          ],
          link: "https://github.com/KayeJD/HVAC-System/tree/main"
        }
      ),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const ProjectLayout = ({
  title,
  subtitle,
  overview,
  collaborator,
  highlights,
  steps,
  summary,
  repoLink,
  mainImage,
  sections
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center px-6 py-16 bg-neutral-50 dark:bg-neutral-900 min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "pt-32 w-full max-w-5xl mx-auto space-y-12", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 25 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white", children: title }),
            subtitle && /* @__PURE__ */ jsx("p", { className: "mt-3 text-lg text-gray-600 dark:text-gray-300", children: subtitle })
          ]
        }
      ),
      mainImage && /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.8 },
          className: "flex justify-center",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: mainImage,
              alt: title,
              className: "rounded-xl shadow-lg max-h-[450px] w-full object-cover"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs("section", { className: "space-y-4 text-gray-700 dark:text-gray-300", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-100", children: "Overview" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: overview }),
        collaborator && /* @__PURE__ */ jsxs("p", { children: [
          "Collaborator:",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: collaborator.link,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-600 dark:text-blue-400 hover:underline",
              children: collaborator.name
            }
          )
        ] })
      ] }),
      highlights && /* @__PURE__ */ jsxs("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-6", children: [
        highlights.languages && /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-neutral-800 p-5 rounded-xl shadow-md text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 dark:text-gray-200 mb-2", children: "Languages" }),
          /* @__PURE__ */ jsx("p", { children: highlights.languages })
        ] }),
        highlights.tools && /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-neutral-800 p-5 rounded-xl shadow-md text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 dark:text-gray-200 mb-2", children: "Tools & Frameworks" }),
          /* @__PURE__ */ jsx("p", { children: highlights.tools })
        ] }),
        highlights.dataset && /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-neutral-800 p-5 rounded-xl shadow-md text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 dark:text-gray-200 mb-2", children: "Dataset" }),
          /* @__PURE__ */ jsx("p", { children: highlights.dataset })
        ] })
      ] }),
      steps && steps.length > 0 && /* @__PURE__ */ jsxs("section", { className: "space-y-10 mt-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-100", children: "Implementation Steps" }),
        steps.map((step, idx) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 25 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "flex flex-col md:flex-row items-center gap-6 bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md",
            children: [
              step.image && /* @__PURE__ */ jsx(
                "img",
                {
                  src: step.image,
                  alt: step.title,
                  className: "w-full md:w-1/3 rounded-lg shadow"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2", children: step.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: step.description })
              ] })
            ]
          },
          idx
        ))
      ] }),
      sections && sections.length > 0 && /* @__PURE__ */ jsx("section", { className: "mt-10 space-y-10", children: sections.map((section, idx) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 25 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md",
          children: [
            section.heading && /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4", children: section.heading }),
            /* @__PURE__ */ jsx("div", { className: "prose dark:prose-invert max-w-none", children: section.content })
          ]
        },
        idx
      )) }),
      summary && /* @__PURE__ */ jsxs("section", { className: "bg-blue-50 dark:bg-blue-950 p-6 rounded-xl shadow-md mt-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-900 dark:text-white mb-3", children: "Summary" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: summary })
      ] }),
      repoLink && /* @__PURE__ */ jsx("div", { className: "max-w-4xl w-full mx-auto", children: /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-10", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: repoLink,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2\n                          border border-gray-900 dark:border-gray-100\n                          text-gray-900 dark:text-gray-100\n                          px-6 py-3 rounded-lg\n                          hover:bg-gray-900 hover:text-white\n                          dark:hover:bg-gray-100 dark:hover:text-gray-900\n                          transition-colors duration-200",
          children: [
            /* @__PURE__ */ jsx(Github, { size: 20 }),
            "View Source on GitHub"
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
const CreditCardML = UNSAFE_withComponentProps(function CreditCardML2() {
  return /* @__PURE__ */ jsx(ProjectLayout, {
    title: "Credit Card Fraud ML",
    subtitle: "Detecting fraudulent credit card transactions using machine learning on an imbalanced dataset",
    overview: "This project investigates fraudulent credit card transactions using a dataset of over 284,000 transactions collected over two days in September 2013. Only 0.172% of these transactions are fraudulent, posing a major challenge for traditional models due to the extreme class imbalance.",
    collaborator: {
      name: "Tochi Obinma",
      link: "https://www.linkedin.com/in/tochi-obinma-396703216/"
    },
    highlights: {
      languages: "Python",
      tools: "pandas, scikit-learn, TensorFlow, matplotlib",
      dataset: "Kaggle Credit Card Transactions (2013)"
    },
    sections: [{
      heading: "Project Background",
      content: /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx("p", {
          children: "Credit card fraud detection requires models that can accurately identify rare fraudulent transactions without overwhelming false positives. This project focuses on designing a robust detection pipeline capable of handling heavy class imbalance and optimizing recall — the ability to catch actual fraud cases."
        }), /* @__PURE__ */ jsx("img", {
          src: creditCardProcessing,
          alt: "Data preprocessing visualization",
          className: "rounded-lg shadow-lg my-6"
        })]
      })
    }, {
      heading: "Data Exploration & Preprocessing",
      content: /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsxs("p", {
          children: ["The dataset consists of anonymized numerical features obtained through PCA transformation. Preprocessing involved scaling the features with ", /* @__PURE__ */ jsx("code", {
            children: "RobustScaler"
          }), ", handling outliers, and splitting the dataset into train/test partitions. We also examined transaction patterns by hour and amount to understand potential biases."]
        }), /* @__PURE__ */ jsx("img", {
          src: creditCardDataAnalysis,
          alt: "Data analysis plot",
          className: "rounded-lg shadow-lg my-6"
        })]
      })
    }, {
      heading: "Model Development",
      content: /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx("p", {
          children: "Multiple models were trained and tested, including Logistic Regression, Random Forest, Gradient Boosting, and a shallow neural network. Each model was optimized for recall and ROC-AUC metrics rather than overall accuracy."
        }), /* @__PURE__ */ jsx("img", {
          src: creditCardLogisticRegression,
          alt: "Model training",
          className: "rounded-lg shadow-lg my-6"
        })]
      })
    }, {
      heading: "Balancing the Dataset",
      content: /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx("p", {
          children: "Because fraudulent transactions represented less than 0.2% of the data, class imbalance severely biased the models toward predicting legitimate transactions. To correct this, we applied both undersampling and oversampling methods, including SMOTE and Tomek links, to achieve more balanced training sets."
        }), /* @__PURE__ */ jsx("img", {
          src: creditCardNeuralNetwork,
          alt: "Class balancing chart",
          className: "rounded-lg shadow-lg my-6"
        })]
      })
    }, {
      heading: "Model Evaluation & Ensemble",
      content: /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx("p", {
          children: "After balancing, we evaluated models based on recall, precision, F1 score, and ROC-AUC. Ensemble models—combining Logistic Regression, Random Forest, and Gradient Boosting—achieved significant improvements in recall and reduced false negatives, which are critical in fraud detection systems."
        }), /* @__PURE__ */ jsx("img", {
          src: creditCardEnsemble,
          alt: "Ensemble model visualization",
          className: "rounded-lg shadow-lg my-6"
        })]
      })
    }],
    summary: "By leveraging a combination of classical and ensemble machine learning techniques, this project achieved high recall while maintaining balanced precision. The pipeline demonstrates the importance of proper data preprocessing and resampling strategies in fraud detection tasks.",
    repoLink: "https://github.com/KayeJD/Credit-Card-Fraud-Detector",
    mainImage: creditCardBalancing
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreditCardML
}, Symbol.toStringTag, { value: "Module" }));
const Effortlogger = UNSAFE_withComponentProps(function EffortLogger() {
  return /* @__PURE__ */ jsx(ProjectLayout, {
    title: "EffortLogger 2.0",
    subtitle: "Modernizing Project Management with Efficiency and Privacy",
    overview: "EffortLogger 2.0 is a revitalized project management tool designed to address the evolving needs of a data-driven company. Recognizing limitations in the existing Excel-based system, our team crafted a solution that prioritizes both enhanced efficiency and employee privacy.",
    highlights: {
      languages: "Java, JavaFX, SQL",
      tools: "SQL Database, JavaFX UI, Agile methodologies"
    },
    mainImage: effortloggerMain,
    sections: [{
      heading: "Project Highlights",
      content: /* @__PURE__ */ jsxs("ul", {
        children: [/* @__PURE__ */ jsxs("li", {
          children: [/* @__PURE__ */ jsx("b", {
            children: "Back-End Development:"
          }), " SQL database, server-side scripting"]
        }), /* @__PURE__ */ jsxs("li", {
          children: [/* @__PURE__ */ jsx("b", {
            children: "Software Engineering:"
          }), " Agile methodologies, planning poker integration"]
        }), /* @__PURE__ */ jsxs("li", {
          children: [/* @__PURE__ */ jsx("b", {
            children: "Data Analysis:"
          }), " Anonymization, reporting, analytics dashboards"]
        }), /* @__PURE__ */ jsxs("li", {
          children: [/* @__PURE__ */ jsx("b", {
            children: "Security:"
          }), " Authentication, access control, audit trails"]
        })]
      })
    }, {
      heading: "Overview",
      content: /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsxs("p", {
          children: [/* @__PURE__ */ jsx("b", {
            children: "Balancing Transparency and Privacy:"
          }), " EffortLogger 2.0 anonymizes individual data for reporting, while still allowing targeted improvement efforts under specific conditions. This ensures transparency while maintaining confidentiality."]
        }), /* @__PURE__ */ jsx("img", {
          src: effortloggerLogin,
          alt: "EffortLogger Login",
          className: "rounded-lg shadow my-6"
        }), /* @__PURE__ */ jsxs("p", {
          children: [/* @__PURE__ */ jsx("b", {
            children: "Boosting Security and Efficiency:"
          }), " The new system implements robust authentication, access control, and a secure SQL database. Streamlined workflows and intuitive UI design make activity logging effortless."]
        }), /* @__PURE__ */ jsx("img", {
          src: effortloggerEditor,
          alt: "EffortLogger Editor",
          className: "rounded-lg shadow my-6"
        }), /* @__PURE__ */ jsxs("p", {
          children: [/* @__PURE__ */ jsx("b", {
            children: "Embracing Agile Practices:"
          }), " EffortLogger 2.0 supports large-scale data handling and agile workflows. Customizable reports enable managers to analyze project progress and resource allocation effectively."]
        }), /* @__PURE__ */ jsx("img", {
          src: effortloggerLogs,
          alt: "EffortLogger Logs",
          className: "rounded-lg shadow my-6"
        })]
      })
    }, {
      heading: "Key Improvements",
      content: /* @__PURE__ */ jsxs("ul", {
        className: "list-disc pl-6",
        children: [/* @__PURE__ */ jsx("li", {
          children: "Privacy: Anonymization of individual data while allowing targeted improvement efforts."
        }), /* @__PURE__ */ jsx("li", {
          children: "Security: Secure database, authentication, and access control."
        }), /* @__PURE__ */ jsx("li", {
          children: "Efficiency: Planning poker sessions, improved UI/UX, efficient logging."
        }), /* @__PURE__ */ jsx("li", {
          children: "Agile Support: Large-scale data handling, SQL database, customizable reports."
        })]
      })
    }, {
      heading: "Additional Details",
      content: /* @__PURE__ */ jsxs("ul", {
        className: "list-disc pl-6",
        children: [/* @__PURE__ */ jsx("li", {
          children: "User stories provide specific examples of user needs and acceptance criteria."
        }), /* @__PURE__ */ jsx("li", {
          children: "Operational requirements outline technical specifications for developers."
        }), /* @__PURE__ */ jsx("li", {
          children: "Storyboards showcase the planning poker functionality step by step."
        })]
      })
    }],
    summary: "EffortLogger 2.0 delivers secure, efficient, and privacy-conscious project management. Its agile-friendly design enhances transparency, improves workflows, and strengthens data-driven decision-making."
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Effortlogger
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/KayeJD-Portfolioassets/entry.client-DqfH2opK.js", "imports": ["/KayeJD-Portfolioassets/chunk-OIYGIGL5-Dh4DQa0S.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/KayeJD-Portfolioassets/root-fWq-S3b5.js", "imports": ["/KayeJD-Portfolioassets/chunk-OIYGIGL5-Dh4DQa0S.js"], "css": ["/KayeJD-Portfolioassets/root-B_6regmO.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/KayeJD-Portfolioassets/home-BK-GMZ7b.js", "imports": ["/KayeJD-Portfolioassets/chunk-OIYGIGL5-Dh4DQa0S.js", "/KayeJD-Portfolioassets/Footer-BdwciUhz.js", "/KayeJD-Portfolioassets/main-C-QVL9fO.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/projects/CreditCardML": { "id": "pages/projects/CreditCardML", "parentId": "root", "path": "credit-card-ml-project", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/KayeJD-Portfolioassets/CreditCardML-BQ-P3woG.js", "imports": ["/KayeJD-Portfolioassets/chunk-OIYGIGL5-Dh4DQa0S.js", "/KayeJD-Portfolioassets/ProjectLayout-B1R6AOE_.js", "/KayeJD-Portfolioassets/Footer-BdwciUhz.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/projects/Effortlogger": { "id": "pages/projects/Effortlogger", "parentId": "root", "path": "effortlogger-project", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/KayeJD-Portfolioassets/Effortlogger-BXJTeD4g.js", "imports": ["/KayeJD-Portfolioassets/chunk-OIYGIGL5-Dh4DQa0S.js", "/KayeJD-Portfolioassets/ProjectLayout-B1R6AOE_.js", "/KayeJD-Portfolioassets/main-C-QVL9fO.js", "/KayeJD-Portfolioassets/Footer-BdwciUhz.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/KayeJD-Portfolioassets/manifest-1a9cf15f.js", "version": "1a9cf15f", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/KayeJD-Portfolio";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "pages/projects/CreditCardML": {
    id: "pages/projects/CreditCardML",
    parentId: "root",
    path: "credit-card-ml-project",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "pages/projects/Effortlogger": {
    id: "pages/projects/Effortlogger",
    parentId: "root",
    path: "effortlogger-project",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
