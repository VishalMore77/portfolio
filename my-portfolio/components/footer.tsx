import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 bg-muted/40">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Vishal More. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/Vish-77" target="_blank" className="text-sm text-muted-foreground hover:text-primary">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/vishal-more-57200b244/" target="_blank" className="text-sm text-muted-foreground hover:text-primary">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
