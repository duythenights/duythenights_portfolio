import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Job {
  role: string;
  company: string;
  location?: string;
  logo: string;
  duration: string;
  description: string[];
  link: string;
}

const jobs: Job[] = [
  {
    role: "Frontend Developer (Junior → Middle)",
    company: "BIN Corporation Group",
    location: "District 7, HCMC",
    logo: "/bin.svg",
    duration: "July 2023 – Present",
    description: [
      "Migrated 30+ standalone repositories into a unified <span class='font-semibold'>Monorepo</span> (Turborepo & Next.js Multizone), reducing maintenance overhead by ~90% and ensuring 100% security patch consistency.",
      "Enhanced SEO and UX via <span class='font-semibold'>hybrid rendering</span> (SSR, ISR) and Core Web Vitals optimization (LCP, FCP, CLS), improving Google PageSpeed scores from 30+ to 98+.",
      "Delivered pixel-perfect, responsive interfaces for high-traffic platforms serving <span class='font-semibold'>5M+ global monthly visitors</span>, ensuring seamless cross-device compatibility.",
      "Managed a global payment ecosystem (Amex, Airwallex, Google Pay) generating <span class='font-semibold'>$2M+ monthly revenue</span>, implementing PCI DSS and 3D-Secure for secure, high-volume transactions.",
      "Collaborated with Marketing to implement GTM DataLayer, JSON-LD, and SEO Metadata; integrated Cookie Consent and RDP (Restricted Data Processing) for legal compliance in US and EU markets.",
      "Automated deployments via <span class='font-semibold'>GitHub CI/CD</span>; managed PM2 processes for high availability and zero-downtime updates.",
    ],
    link: "https://www.bincorporation.com/",
  },
  {
    role: "Frontend Developer Intern / Fresher",
    company: "Estuary Solutions JSC",
    location: "District 3, HCMC",
    logo: "/est.png",
    duration: "May 2022 – July 2023",
    description: [
      "Developed a <span class='font-semibold'>CRM platform</span> serving 30,000+ monthly active users, integrating WebSockets for real-time messaging and instant live notifications.",
      "Crafted high-performance landing pages with complex <span class='font-semibold'>GSAP animations</span>, delivering engaging and fluid user experiences.",
      "Integrated <span class='font-semibold'>Stripe Payment</span> gateway for a large-scale online event platform.",
    ],
    link: "https://estuary.solutions/",
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-primary">Work Experience</h2>
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
                    <p className="text-sm text-muted-foreground">
                      {j.company}
                      {j.location ? ` · ${j.location}` : ""}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                  {Array.isArray(j.description) &&
                    j.description.map((point, index) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: point }}
                        className="leading-relaxed"
                      />
                    ))}
                </ul>
                {j.link !== "#" && (
                  <Link
                    href={j.link}
                    target="_blank"
                    className="text-sm flex items-center justify-left text-blue-500 hover:underline mt-2"
                  >
                    Visit Company Site
                    <ExternalLink className="size-4 ml-2" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
