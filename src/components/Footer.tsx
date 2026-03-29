export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 bg-neutral-950/50 mt-10">
      <div className="container mx-auto py-6 px-4 text-center">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} EventSphere. All rights reserved. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
