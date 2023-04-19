import ProfileCard from "@/components/profileCard";
import { team } from "@/data";
import Head from "next/head";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Head>
        <title>
          About Us
        </title>
      </Head>
      <h1 className="text-base sm:text-xl min-w-full font-bold mt-3 ml-2">
        Meet the team that put all this together
      </h1>
      <div className="w-full p-5 grid grid-cols-2 md:grid-cols-3 gap-5">
        {team.map((person, index) => (
          <ProfileCard person={person} key={index} />
        ))}
      </div>
    </main>
  );
};

export default About;
