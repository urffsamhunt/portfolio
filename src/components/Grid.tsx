export function Grid({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen">
            <div className="w-full flex h-[6%]">
                <div className="border-gray-400 h-full w-full border-b flex justify-between items-center px-4">
                    <div className="h-full flex items-center gap-2">
                        <span className="text-lg font-bold">letapreemas.com</span>
                    </div>
                    <div className="h-full flex items-center gap-4">
                    {/* <span className="text-md">Blog</span> */}
                    <a href="https://github.com/urffsamhunt" className="text-md">Github</a>
                    <a href="https://in.linkedin.com/in/sameer-patel-ba715928b" className="text-md">LinkedIn</a>
                    <a href="/resume.pdf" className="text-md underline underline-offset-4">Resume</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex h-[88%]">
                <div className="border-gray-400 h-full w-[7%] md:w-[13%] border-r">

                </div>
                <div className="h-full w-full flex grow flex-col overflow-auto">
                    {children}
                </div>
                <div className="border-gray-400 h-full w-[7%] md:w-[13%] border-l">

                </div>
            </div>
            <div className="w-full flex h-[6%]">
                <div className="border-gray-400 h-full w-[7%] md:w-[13%] border-t">

                </div>
                <div className="border-gray-400 h-full w-full border-t">

                </div>
                <div className="border-gray-400 h-full w-[7%] md:w-[13%] border-t">

                </div>
            </div>
        </div>
    );
}