import Image from "next/image";
import Navbar from "./components/Navbar";
import TemplateNav from "./components/TemplateNav";

export default function Home() {
  return (
    <>
    <section className="min-w-[1080px] w-full overflow-y-hidden h-full min-h-screen">
      <Navbar/>
      <TemplateNav/>
    </section>
    </>
  );
}

