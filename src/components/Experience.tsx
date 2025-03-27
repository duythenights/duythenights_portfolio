import Image from "next/image";
import { CalendarDays, ExternalLink, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { JobImages } from "@/components/JobImages";
import Link from "next/link";

const jobs = [
  {
    role: "Junior Frontend Developer",
    company: "ESTUARY JOINT STOCK COMPANY.",
    logo: "/est.png",
    duration: "06/2024 - Present",
    description:
      "Developed and maintained various client projects, including CMS, CRM, LMS, and Admin panels. Focused on business logic optimization, seamless API integrations, and achieving high performance and scalability. Improved user experience by addressing client-specific requirements and implementing advanced Frontend techniques.",
    link: "https://estuary.solutions/",
    images: [],
    reference: {
      name: "Thai Duc Quang",
      position: "PM - Tech Lead",
      email: "thaiquang@estuary.solutions",
    },
  },
  {
    role: "Intern & Fresher Frontend Developer",
    company: "UIX VIETNAM CO.,LTD.",
    logo: "/uix.png",
    duration: "05/2023 - 06/2024",
    description:
      "Contributed to multiple client projects under mentorship, focusing on performance optimization, SEO best practices, and ensuring compliance with Core Web Vitals. Collaborated with senior developers to implement UI components and debug issues, gaining hands-on experience with modern Frontend tools and workflows.",
    link: "https://loocreative.com",
    images: [],
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p className="text-sm mt-2">{j.description}</p>
                <Link
                  href={j.link}
                  target="_blank"
                  className="text-sm flex items-center justify-left text-blue-500 hover:underline mt-2"
                >
                  Visit Company Site
                  <ExternalLink className="size-4 ml-2" />
                </Link>

                {/* Job Images */}
                <JobImages
                  role={j.role}
                  link={j.link}
                  images={j.images}
                  duration={j.duration}
                />

                {/* Reference Section */}
                {/* Reference Section (Now Integrated) */}
                {j.reference && (
                  <div className="text-xs text-gray-700 dark:text-gray-300 mt-1 flex flex-col">
                    <span>
                      <span className="font-medium">{j.reference.name}</span> •{" "}
                      {j.reference.position}
                    </span>
                    <a
                      href={`mailto:${j.reference.email}`}
                      className="text-blue-400 hover:text-blue-500 flex items-center gap-2 mt-1"
                    >
                      <Mail className="size-3 mr-1" />
                      {j.reference.email}
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
