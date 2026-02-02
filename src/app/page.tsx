import { AboutMe } from "@/components/AboutMe";
import { Blog } from "@/components/Blog";
import { Experience } from "@/components/Experience";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container relative  z-20 max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Sidebar />
          <main className="md:col-span-2">
            <AboutMe />
            <Blog />
            <Experience />
          </main>
        </div>
      </div>
    </div>
  );
}
