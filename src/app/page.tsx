import Card from "@/components/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 w-full">
      {/* HERO */}
      <div className="relative flex gap-32 justify-center py-8 my-8 w-full rounded-lg">
        <Image
          src="/landscape1.jpg"
          alt="Landscape 1"
          layout="fill"
          objectFit="cover"
          className="-z-10 brightness-50"
        />
        <Card title="Corporate" src="/cyberpunk1.avif" className="mt-32" />
        <Card title="Face to face" src="/cyberpunk2.jpg" />
      </div>
    </div>
  );
}
