"use client";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Associate Software Engineer",
    company: "Think Humble",
    location: "Pune, Maharashtra",
    duration: "Nov 2024 – Present",
    description: [
      "Integrated Google reCAPTCHA (v2 and v3) using Google Cloud Platform.",
      "Developed secure multi-language code editor using re editor dependency.",
      "Built AI-powered aptitude assessment platform using Gemini 2.0 API (reduced generation time by 65%).",
      "Designed secure video proctoring system with live webcam monitoring, AWS S3 uploads, and behavior detection.",
      "Implemented SCORM 1.2 course delivery with tracking, completion status, and score reporting.",
      "Integrated Firebase Cloud Messaging for real-time notifications.",
      "Built Flutter-based frontends for assessments, SCORM courses, proctoring dashboards.",
      "Worked in Agile sprints with cross-functional teams.",
    ],
  },
  {
    role: "Mobile Application Development Intern",
    company: "Cipheren",
    location: "Pune, Maharashtra",
    duration: "June 2024 – Sep 2024",
    description: [
      "Built Flutter mobile app for buying/selling educational books.",
      "Implemented UI for browsing, searching, and purchasing.",
      "Integrated secure payment gateways.",
      "Built Firebase backend for auth, listings, and order processing.",
      "Tested, debugged, optimized performance.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
          <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experienceData.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-muted shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                 <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-0">
                <CardHeader>
                   <div className="flex justify-between items-start flex-col gap-2">
                      <div>
                        <CardTitle className="text-lg">{item.role}</CardTitle>
                        <CardDescription className="text-base font-semibold text-foreground/80">{item.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">{item.duration}</Badge>
                   </div>
                   <p className="text-sm text-muted-foreground">{item.location}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
