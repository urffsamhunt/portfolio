import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

const prj = [
    {
        name: 'Trackinetics',
        description: 'An AdTech SaaS platform that provides real-time analytics and insights for digital advertising campaigns.',
        link: 'https://trackinetics.com/'
    },
    {
        name: 'Nebula',
        description: 'An AI powered Resume analyzer that provides insights and recommendations to job seekers against a job description.',
        link: 'https://nebula-resume.vercel.app/'
    },
    {
        name: 'DummyChat',
        description: 'An experimental realtime Chat App in NextJS and Supabase',
        link: 'https://dummychat.vercel.app/'
    },
    {
        name: 'TranCR',
        description: 'An experimental under-development OCR and Natural Language tool for Hindi',
        link: 'https://tran-cr.vercel.app/'
    },
    {
        name: 'VisionPair',
        description: "An experimental Firefox compatible extension that allows for hands-free web browsing for the visually impaired.",
        link: 'https://github.com/urffsamhunt/visionpair'
    }
];

export function Projects() {
    return (
        <div className="h-full w-full flex">
            <div className="w-1/2 h-full">
                {
                    prj.map((project, i) => {
                        if (i % 2 === 1) return null;
                        return (
                            <div key={project.name} className="mb-2 w-full">
                                <a className="text-lg flex gap-4 items-center align-middle font-semibold" href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.name}
                                    <LiaExternalLinkSquareAltSolid className="h-6 mb-1" />
                                </a>
                                <p className="text-md">
                                    {project.description}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
            {/* <div className="hidden md:block h-full w-px"></div> */}
            <div className="w-1/2 h-full">
                {
                    prj.map((project, i) => {
                        if (i % 2 === 0) return null;
                        return (
                            <div key={project.name} className="mb-2">
                                <a className="text-lg flex gap-4 items-center align-middle font-semibold" href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.name}
                                    <LiaExternalLinkSquareAltSolid className="h-6 mb-1" />
                                </a>
                                <p className="text-md">
                                    {project.description}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        </div>);
}