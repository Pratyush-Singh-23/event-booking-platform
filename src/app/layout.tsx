import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EventSphere - Premium Event Booking",
  description: "Browse and RSVP for events easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-neutral-950 text-neutral-50 antialiased selection:bg-neutral-800 selection:text-white flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-1 relative">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
