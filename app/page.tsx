import Image from "next/image";
import { HeroParallaxDemo } from "./Components/Main/Hero";
import { NavbarDemo } from "./Components/Main/Navabr";

export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
      <NavbarDemo />
      <HeroParallaxDemo />
      </div>
    </main>
  );
}
