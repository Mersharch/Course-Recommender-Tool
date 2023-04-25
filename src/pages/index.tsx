import Head from "next/head";
import Image from "next/image";
import Background from "../../public/jess-bailey-Bg14l3hSAsA-unsplash.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="items-center">
      <Head>
        <title>Home</title>
      </Head>
      <main style={{backgroundImage:"url('/public/jess-bailey-Bg14l3hSAsA-unsplash.jpg')"}} className="flex min-h-screen flex-col items-center pt-10 bg-cover bg-center bg-no-repeat">
        <div className="min-w-max w-[80%] md:w-20 h-max flex flex-col justify-center gap-7 items-center">
          <h3 className="w-[280px] sm:w-[380px] sm:w-[600px] lg:w-[80%] text-blue-950 font-semibold text-lg text-center">
            We help you find the <span className="line-through">rite</span>{" "}
            right course for you and only you
          </h3>

          <Image
            src={"/sc.png"}
            alt="school"
            width={250}
            height={250}
            className="md:w-80 md:h-60 opacity-90 self-center"
          />

          <h3 className="w-[280px] sm:w-[380px] sm:w-[600px] lg:w-[80%] text-blue-950 font-semibold text-lg text-center">
            Fill the form and get the some of the best suggestions for college
            and university courses tailored just for you
          </h3>

          <button className="bg-blue-600 hover:bg-blue-500 px-20 w-max">
            <Link href={"/recommender-tool"}>Get Started</Link>
          </button>
        </div>
      </main>
    </div>
  );
}
