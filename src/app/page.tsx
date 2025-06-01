import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  const technologies = [
    "Vue.js",
    "Nuxt",
    "React",
    "Next.js",
    "C++",
    "C",
    "Lua",
    "Java",
    "AWS",
    "Typescript",
    "Javascript",
    "Python",
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-[auto_1fr_1fr] min-h-[calc(100dvh-41px)] w-full">
      <div className="col-start-1 col-end-3 row-start-1">
        <Marquee autoFill={true} direction={"right"}>
          <h1 className="text-8xl px-5">Laurens</h1>
        </Marquee>
        <Marquee autoFill={true} direction={"left"}>
          <h1 className="text-8xl px-5">Schunk</h1>
        </Marquee>
        <Marquee
          className="border-t-1 border-t-black"
          autoFill={true}
          direction="right"
          speed={30}
          pauseOnHover={true}
        >
          {technologies.map((t) => {
            return <p className="px-2 text-lg">{t}</p>;
          })}
        </Marquee>
      </div>

      <div className="px-3 py-2 col-start-1 col-end-2 row-start-2 row-end-4 border-t-1 border-t-black border-r-1 border-r-black">
        <h2 className="text-lg font-bold">About</h2>
        <p>
          I am a student in Denver, Colorado interested in computer science and
          robotics. This website contains a few of my completed projects that I
          want to share.
          <br />
          <br />
          I'm always looking to start new projects, so reach out to me if you
          want to see something made.
        </p>
      </div>
      <div className="grid-btn col-start-2 row-start-2 border-t-1 border-t-black">
        Portfolio
      </div>
      <div className="grid-btn col-start-2 row-start-3 border-t-1 border-t-black">
        Contact
      </div>
    </div>
  );
}
