import Card from "@/components/card";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div className="relative flex gap-32 justify-center p-8 w-full">
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col gap-12 w-full">
      {/* HERO */}
      <Container>
        <p className="text-8xl absolute left-20 font-bold uppercase">
          Le Tzing Tze
        </p>
        <Image
          src="/landscape1.jpg"
          alt="Landscape 1"
          layout="fill"
          objectFit="cover"
          className="-z-10 brightness-90"
        />
        <Card title="Corporate" src="/cyberpunk1.avif" className="mt-32" />
        <Card title="Face to face" src="/cyberpunk2.jpg" />
      </Container>
      {/* About Cosplay */}
      <div className="relative flex gap-16 justify-center items-center p-8 py-24 w-full">
        <Image
          src="/pattern1.png"
          alt="Pattern 1"
          layout="fill"
          objectFit="cover"
          className="-z-10 brightness-50"
        />
        <p className="text-6xl font-bold min-w-96 text-center uppercase">
          About Cosplay
        </p>
        <div className="flex flex-col gap-8">
          <p className="font-semibold text-2xl">
            Totam officiis quasi vitae. Occaecati molestiae maxime assumenda
            consectetur sunt accusamus. Corrupti quidem quia quidem quis
            voluptas. Reiciendis quaerat corrupti quasi fuga inventore tempora.
            Doloremque pariatur sunt dolores voluptate quidem a. Occaecati
            maxime delectus itaque. In placeat magnam omnis laboriosam rem.
            Explicabo exercitationem eum asperiores ab excepturi. Corrupti
            quidem tenetur. Hic voluptas excepturi itaque magnam maxime
            eligendi. Rerum fugit quis. Deserunt tempora fuga incidunt ullam est
            natus. Labore asperiores tenetur.
          </p>
          <Link
            href="/about"
            className="font-bold text-2xl self-end hover:underline flex gap-2 items-center"
          >
            <p>Learn More</p>
            <MoveRight />
          </Link>
        </div>
      </div>
      {/* Me */}
      <div className="flex justify-center items-center p-8 py-24 w-full">
        {/* Name & Pic */}
        <div className="flex flex-col gap-8">
          <p className="text-6xl underline uppercase">Yu Tzing Zhe</p>
          <div className="relative w-[600px] h-[400px]">
            <Image
              src="/picture2.webp"
              alt="Picture 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {/* Introduction */}
        <div className="flex flex-col text-3xl max-w-96 bg-purple-950 p-8">
          <p>
            Hello I am Voluptates quos nemo hic laborum voluptatem velit itaque.
            Doloremque autem dolore iusto qui impedit aperiam dolor.
            Exercitationem debitis.
            <br />
            <br />
            <span className="font-bold">
              Similique et atque quae. Amet minima deleniti eligendi nobis alias
              quisquam. Maiores sed accusamus id reprehenderit eligendi
              veritatis atque. Aspernatur temporibus molestias dignissimos illo
              natus doloremque.{" "}
            </span>
            Enim officiis voluptatem quae facere assumenda earum consectetur
            harum.
          </p>
        </div>
        <div className="relative h-[600px] w-[400px]">
          <Image
            src="/picture3.webp"
            alt="Picture 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Image */}
      <div className="relative flex flex-col gap-8 items-center justify-center h-[700px] mb-48 w-full">
        <Image
          src="/picture5.jpg"
          alt="Picture 5"
          layout="fill"
          objectFit="cover"
          className="-z-10 brightness-75"
        />
        <div className="flex flex-col gap-4 -ml-[600px] max-w-64">
          <p className="text-2xl max-w-64 font-bold">
            Lu Tzing Tze was a phenominal cosplayer with the abilities to summon
            endfield content and then resulting in the doctor forgetting his
            memories and having to go through a bunch of stories with a bunch of
            characters in order to gain more understanding of his life. This
            involve a lot of tower defense gameplay which is pretty fun and the
            story is actually quite good.
          </p>
          <Link
            href="/about"
            className="font-bold text-2xl hover:underline flex gap-2 items-center"
          >
            <p>Learn More</p>
            <MoveRight />
          </Link>
        </div>
        <Image
          src="/picture4.webp"
          alt="Picture 4"
          height={1270}
          width={720}
          className="w-[400px] h-[300px] object-cover absolute left-40 -bottom-48"
        />
      </div>
      {/* GALLERY */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <p className="text-5xl max-w-40 font-bold mb-40">
            Cosplay Around Singapore
          </p>
          <Image
            src="/gallery1.jpg"
            alt="Gallery 1"
            height={700}
            width={400}
            className="-ml-20 -z-10"
          />
          <Image
            src="/gallery2.jpg"
            alt="Gallery 2"
            height={300}
            width={600}
            className="ml-40 -mt-96 h-[400px] w-[600px] object-cover border-8 p-4 border-purple-950"
          />
        </div>
        <div className="flex items-center w-full justify-center">
          <Image
            src="/gallery3.webp"
            alt="Gallery 3"
            height={800}
            width={400}
            className="h-[600px] w-[400px] object-cover -mb-[500px] border-8 p-4 border-yellow-600"
          />
          <p className="text-8xl font-bold tracking-widest uppercase rotate-90">
            gallery
          </p>
          <Image
            src="/gallery4.jpg"
            alt="Gallery 4"
            height={500}
            width={1000}
            className="h-[400px] w-[600px] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col relative py-52 items-center justify-center">
        <Image
          src="/join1.jpg"
          alt="Join 1"
          layout="fill"
          objectFit="cover"
          className="-z-10 brightness-50"
        />
        <div className="flex flex-col gap-4 max-w-80 ml-[700px]">
          <p className="text-2xl">
            We at the cosplay community offer many different perks and amazing
            humor for you to enjoy. You can check out our website in order to
            gleam more information about us.
          </p>
          <Link href="/contact">
            <p className="p-4 px-8 rounded-full border-2 font-bold text-4xl w-fit hover:scale-110 transition-transform">
              Join Now
            </p>
          </Link>
        </div>
      </div>
      {/* FOLLOW */}
    </div>
  );
}
