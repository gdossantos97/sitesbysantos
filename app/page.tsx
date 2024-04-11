import Image from "next/image";
import { HeroParallaxDemo } from "./Components/Main/Hero";
import { NavbarDemo } from "./Components/Main/Navabr";
import Services from "./Components/Main/Services";



export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
      <NavbarDemo />
      <HeroParallaxDemo />
      <Services />

      </div>
    </main>
  );
}
