"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden py-10 md:py-20">
       <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-full border bg-background/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm">
              Software Engineer & Flutter Developer
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Hi, I&apos;m Vishal More
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Building cross-platform mobile and web applications with precision and performance.
            Expert in Flutter, Dart, and Modern Web Technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <Link href="/resume.pdf" target="_blank">
                Download Resume <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="flex gap-4 mt-8"
          >
             <Link href="https://github.com/Vish-77" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
             </Link>
             <Link href="https://www.linkedin.com/in/vishal-more-57200b244/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                 <span className="sr-only">LinkedIn</span>
             </Link>
             <Link href="mailto:vishalmore7760@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
                 <span className="sr-only">Email</span>
             </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
