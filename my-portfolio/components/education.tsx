import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education" className="bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
          <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">Bachelor of Engineering in Computer Science</CardTitle>
                <CardDescription className="text-base">Sinhgad Institutes of Technology and Science, Pune</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pl-[5.5rem]">
              <p className="text-muted-foreground">Sep 2020 – May 2024</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
