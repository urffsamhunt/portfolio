import { Grid } from "@/components/Grid";
import Separator from "@/components/Separator";
import SeparatorSM from "@/components/SeparatorSM";
import { createFileRoute } from '@tanstack/react-router';
import { LiaAngleDownSolid, LiaAngleRightSolid, LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { Projects } from "@/components/Projects";

export const Route = createFileRoute('/')({ component: App })

const Skills = [
  {
    name: 'Full-Stack',
  },
  {
    name: 'AI & ML',
  },
  {
    name: 'RAG Chain'
  },
  {
    name: 'DevOps'
  },
  {
    name: 'Computer Graphics'
  }
]

const Posts = [
  {
    title: 'Coming Soon',
    description: '',
    date: '---',
  },
];




function App() {
  useGSAP(() => {
    const box = document.querySelector(".boxy");
    if (box) {
      box.addEventListener("mouseenter", () => {
        gsap.to(".accord", {
          display: "flex",
          flexDirection: "column",
          height: "fit",
          duration: 0.25,
          ease: "power2.out",
        });
      });

      box.addEventListener("mouseleave", () => {
        gsap.to(".accord", {
          display: "hidden",
          height: "0rem",
          duration: 0.25,
          ease: "power2.out",
        });
      });
    }
  })

  return (
    <Grid>
      <div className="w-full h-full flex flex-col grow md:flex-row">
        <div className="w-full md:w-1/2 lg:w-3/5 h-full">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between pt-4 pl-4 pr-4">
            <div className="">
              <div className="w-full flex justify-start items-center">
                <h1 className="text-4xl lg:text-4xl font-semibold">Sameer Patel</h1>
              </div>
              <p className="text-md lg:text-lg">Working towards the next breakthrough!</p>
              <p className="text-sm lg:text-md">
                This is a random piece of text I have prepared to be present in my short
                description. Let's see how it looks when it is actually rendered on the screen. I am not sure how much text I should put here.
              </p>
            </div>
            <div>
              <SeparatorSM />
              <div className="lg:flex-col lg:flex lg:items-end lg:w-48 lg:text-lg text-xs flex justify-between">
                {
                  Skills.map((skill) => (
                    <span key={skill.name} className="hover:font-bold">
                      {skill.name}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
          <Separator />
          <div className="w-full flex flex-col mb-6 pl-4 pr-4">
            <h2 className="text-xl font-semibold">
              What can I work with?
            </h2>
            <div className="boxy flex flex-col w-full border-t border-b border-r">
              <div className="pl-2 pr-2 p-1 w-full flex justify-between items-center">
                <span>Programming Languages</span>
                <LiaAngleDownSolid />
              </div>
            </div>
            <div className="pl-2 pr-2 p-1 border-l border-b w-full flex justify-between items-center">
              <span>Technologies</span>
              <LiaAngleDownSolid />
            </div>
          </div>

          <div className="w-full flex flex-col grow justify-between border-t p-4">
            <div>
              <h1 className="text-xl font-bold my-2">
                What have I done?
              </h1>
            </div>
            <Projects />
          </div>
        </div>
        <div className="hidden md:block h-full w-px bg-gray-300"></div>
        <div className="hidden md:w-1/2 w-full border-gray-300 h-fit p-4">
          <h2 className="text-2xl font-semibold mb-2">
            Latest Posts
          </h2>
          <div>
          {
            Posts.map((post) => (
              <div key={post.title} className="p-2 mb-2 border-t border-gray-300">
                <h3 className="text-lg font-bold">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {post.date}
                </p>
                <p className="text-md">
                  {post.description}
                </p>
              </div>
            ))
            
          }
          <Separator variant="dotted"/>
          </div>
        </div>
      </div>
    </Grid>
  );
}
