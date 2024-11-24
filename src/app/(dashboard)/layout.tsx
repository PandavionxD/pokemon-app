import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Dashboard de Poke-app",
  description:
    "Dashboard principal donde estan los pokemones de la 1° Generación",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-6">
      <Navbar />
      {children}
    </main>
  );
}
