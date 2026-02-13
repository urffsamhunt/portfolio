#import "@preview/basic-resume:0.2.9": *

// Put your personal information here, replacing mine
#let name = "Sameer Patel"
#let location = "Lucknow, India"
#let email = "patelsameer1706@gmail.com"
#let github = "github.com/urffsamhunt"
#let linkedin = "linkedin.com/in/sameer-patel-ba715928b"
#let phone = "+919838835777"
#let personal-site = "letapreemas.vercel.app"

#show: resume.with(
  author: name,
  // All the lines below are optional.
  // For example, if you want to to hide your phone number:
  // feel free to comment those lines out and they will not show.
  location: location,
  email: email,
  github: github,
  // linkedin: linkedin,
  phone: phone,
  personal-site: personal-site,
  accent-color: "#26428b",
  font: "New Computer Modern",
  paper: "us-letter",
  author-position: left,
  personal-info-position: left,
)

/*
* Lines that start with == are formatted into section headings
* You can use the specific formatting functions if needed
* The following formatting functions are listed below
* #edu(dates: "", degree: "", gpa: "", institution: "", location: "", consistent: false)
* #work(company: "", dates: "", location: "", title: "")
* #project(dates: "", name: "", role: "", url: "")
* certificates(name: "", issuer: "", url: "", date: "")
* #extracurriculars(activity: "", dates: "")
* There are also the following generic functions that don't apply any formatting
* #generic-two-by-two(top-left: "", top-right: "", bottom-left: "", bottom-right: "")
* #generic-one-by-two(left: "", right: "")
*/
== Education

#edu(
  institution: "Indian Institute of Information Technology, Senapati",
  location: "Senapati, Manipur",
  dates: dates-helper(start-date: "Aug 2023", end-date: "May 2027"),
  degree: "Bachelor's of Technology, Computer Science and Engineering",

  // Uncomment the line below if you want edu formatting to be consistent with everything else
  // consistent: true
)
- Cumulative GPA: 8.91\/10.0 | Last Semester GPA (5th): 8.95\/10.0

== Skills
#table(
  stroke: none,
  gutter: 0em,
  inset: 0.3em,
  columns: (auto, auto),
  [- *Programming Languages*],
  [HTML5, CSS, JavaScript/EcmaScript(ES6), TypeScript, PHP],
  [],
  [C, C++, Rust, GoLang, Python, Kotlin, Dart, Shading Lanuages (GLSL, WGSL)],
  [- *Technologies*],
  [MongoDB, React, NextJS, Remix, Tanstack, Express, FastAPI, Bevy, Raylib, PostgresQL, MySQL/MariaDB, PyTorch, Godot, Blender, Flutter, Jetpack Compose, OpenGL, Vulkan, AWS (Lambda/DynamoDB/S3/EC2/ElastiCache), Linux, ClickHouse, Docker, Git]
)


== Work Experience

#work(
  title: "MetaTrader5 Terminal Management Dashboard",
  location: "Remote",
  company: "Freelance Client",
  dates: dates-helper(start-date: "May 2024", end-date: "January 2026"),
)
- Developed a dashboard for managing over 20 different MT5 terminals and monitoring their performance with over 2000 trades executed per day.
- Developed various trading algorithms in Pinescript and relayed their alerts to the dashboard via webhooks.
- Managed and set up a Redpanda Kafka Cluster for efficient relay of incoming trades to multiple consumer MT5 Terminals.
- Managed a Linux Server, hosting the dashboard on the web and multiple MT5 Terminals over Wine.

== Projects

#project(
  name: "Trackinetics",
  // Role is optional
  role: "Sole Developer",
  // Dates is optional
  dates: dates-helper(start-date: "Nov 2023", end-date: "Present"),
  // URL is also optional
  // url: "hyperschedule.io",
)
- An AdTech platform designed to optimize ad performance tracking for advertisers and publishers.
- Designed and developed a full-stack AdTech software to track ad performance between advertisers and publishers, handling over a million clicks in a single day for a client.
- Built using Next.js (React) for the front-end and Supabase (PostgreSQL, Rust(Axum)) for scalable backend APIs, achieving profit margins of over 80% per tenant.
- Implemented real-time analytics for tracking key metrics such as CPI, RPM, and CTR, enhancing decision-making for clients along with a robust RBAC.

#project(
  name: "Nebula",
  // Role is optional
  role: "Lead Developer",
  // Dates is optional
  dates: dates-helper(start-date: "Nov 2025", end-date: "Dec 2025"),
  // URL is also optional
  // url: "hyperschedule.io",
)
- An AI powered Resume analyzer that provides insights and recommendations to job seekers against a job description.
- Implemented a LangChain workflow with Gemini-flash-2.5 and Gemini-embedding models to analyze candidate suitability. (#link("https://nebula-resume.vercel.app/")[nebula-resume.vercel.app])

#project(
  name: "DummyChat",
  // Role is optional
  role: "Lead Developer",
  // Dates is optional
  dates: "May 2025"
  // URL is also optional
  // url: "hyperschedule.io",
)
- Lead a team of 4 in building a realtime chat application for *FliprLabs National Level Hackathon* using Supabase and NextJS leveraging the realtime DB features for quick updates. (#link("https://dummychat.vercel.app/")[dummychat.vercel.app])
- Won Bronze Prize in the *27th FliprLabs Hackathon*.

== Achievments

- Lead a team of 4 to win the Bronze Medal in *27.2 FliprLabs National Hackathon* (Team CodeBlooded)
- ITMO 2019, Finalist

== Extra

- *Piano, Badminton, Composing Music, Chess*
- === Soft Skills : 3D Modeling (Blender), Vector Art/Graphic Design, Figma, Affinity
- === Langauges : English, Hindi, Japanese



// #extracurriculars(
//   activity: "Science Olympiad Volunteering",
//   dates: "Sep 2023 --- Present"
// )
// - Volunteer and write tests for tournaments, including LA Regionals and SoCal State \@ Caltech

// #certificates(
//   name: "OSCP",
//   issuer: "Offensive Security",
//   // url: "",
//   date: "Oct 2024",
// )


