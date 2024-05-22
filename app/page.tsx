import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <section className="min-w-[1080px] w-full overflow-y-hidden h-full min-h-screen">
      <Navbar/>
    </section>
    </>
  );
}

