import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = [
  {
    category: "Languages",
    skills: ["Dart", "Java", "Python", "C", "SQL", "DSA"],
  },
  {
    category: "Flutter Ecosystem",
    skills: [
      "Bloc",
      "GetX",
      "Provider",
      "Responsive UI",
      "Custom Widgets",
      "Web + Mobile",
      "Platform Channels",
      "JS Interop",
      "Performance Optimization",
    ],
  },
  {
    category: "Technologies & Tools",
    skills: [
      "Spring Boot",
      "REST APIs",
      "Firebase (FCM)",
      "AWS (EC2, S3)",
      "Cloudflare R2",
      "Nginx",
      "GitHub",
      "Bitbucket",
      "Jenkins",
      "Linux",
      "OS",
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
          <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
