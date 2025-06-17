import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container relative  z-20 max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* (Profile and Skills) Sidebar Section */}
          <Sidebar />
          {/* Main Section */}
          <main className="md:col-span-2">
            {/* About Me Section */}
            <AboutMe />
            {/* Projects Section */}
            <Projects />
            {/* Experience Section */}
            <Experience />
          </main>
        </div>
      </div>
      <div className="w-20 z-10 h-[200dvh] origin-center bg-neutral-300/20 dark:bg-neutral-600/20 animate-pulse duration-00  fixed -top-1/2 left-[97%] rotate-45"></div>
      <div className="w-20 z-10 h-[200dvh] origin-center bg-neutral-300/20 dark:bg-neutral-600/20  animate-pulse duration-1000 fixed -top-1/2 left-1/5 rotate-45"></div>
    </div>
  );
}
