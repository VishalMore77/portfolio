import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about" className="bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
          <p className="max-w-[800px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-4">
            I am a Flutter Developer with 1.5+ years of experience building cross-platform mobile and web applications using Flutter, Dart, and Firebase.
            I am skilled in Bloc, GetX, Provider, REST APIs, real-time Firestore, push notifications (FCM), performance optimization, and working in Agile development environments.
            My passion lies in creating seamless user experiences and efficient, scalable code.
          </p>
        </div>
      </div>
    </Section>
  );
}
