import Image from "next/image";
import { Aboutus, Quality, Story, Form } from ".";

export default function Home() {
  return (
    <main className="lg:flex lg:min-h-screen lg:flex-col lg:items-center  ">
      <div>
        <Aboutus/>
      </div>
      <div>
        <Story/>
      </div>
      <div>
        <Quality/>
      </div>
      <div className="bg-[#BAD8DE] w-[1440px] h-[906px]">
        <Form/>
      </div>
    </main>
  );
}
