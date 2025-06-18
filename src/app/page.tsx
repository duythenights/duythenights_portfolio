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
    </div>
  );
}
