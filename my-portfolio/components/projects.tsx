"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    title: "Real Time EV Charging Station Locator and Slot Booking",
    year: "2024",
    tech: ["Dart", "Flutter", "API Binding", "Firebase"],
    category: ["Mobile", "Full Stack"],
    description: "Locate nearby EV charging stations in real time with slot booking features and location-based services.",
  },
  {
    title: "Stories Memories and More (SMM)",
    year: "2024",
    tech: ["Dart", "Flutter", "API Binding", "Firebase"],
    category: ["Mobile", "Full Stack"],
    description: "Social media app for photo/video/audio posts with OTP/Gmail login, Firestore, and optimized performance.",
  },
];

const categories = ["All", "Mobile", "Web", "Backend", "Full Stack"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    filter === "All" ? true : project.category.includes(filter)
  );

  return (
    <Section id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
          <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              size="sm"
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="outline">{project.year}</Badge>
                    </div>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
