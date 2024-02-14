import Image from "next/image";
import { Aboutus, Story } from ".";

export default function Home() {
  return (
    <main className="lg:flex lg:min-h-screen lg:flex-col lg:items-center  ">
      <div>
        <Aboutus/>
      </div>
      <div>
        <Story/>
      </div>
    </main>
  );
}
