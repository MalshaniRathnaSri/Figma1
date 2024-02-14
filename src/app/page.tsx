import Image from "next/image";
import { Aboutus } from ".";

export default function Home() {
  return (
    <main className="lg:flex lg:min-h-screen lg:flex-col lg:items-center ;g:justify-between ">
      <div>
        <Aboutus/>
      </div>
    </main>
  );
}
