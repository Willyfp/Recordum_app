import { useRouter } from "next/router";
import InitialCarousel from "./components/InitialCarousel";
import { cookies } from "next/headers";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <InitialCarousel />
    </main>
  );
}
