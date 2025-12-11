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
    <div className="grid grid-cols-2 grid-rows-[auto_auto_auto_1fr] max-homewrap:grid-rows-[auto_auto_minmax(4rem,1fr)] min-h-[calc(100dvh-var(--navbar-height))] w-full ">
      <div className="col-start-1 col-end-3 row-start-1">
        <Marquee autoFill={true} direction={"right"}>
          <h1 className="text-8xl px-5">Laurens</h1>
        </Marquee>
        <Marquee autoFill={true} direction={"left"}>
          <h1 className="text-8xl px-5">Schunk</h1>
        </Marquee>
        <Marquee
          className="bt"
          autoFill={true}
          direction="right"
          speed={30}
          pauseOnHover={true}
        >
          {technologies.map((t) => {
            return (
              <p className="px-2 text-lg" key={t}>
                {t}
              </p>
            );
          })}
        </Marquee>
      </div>

      <main className="px-3 py-2 col-start-1 col-end-2 row-start-2 row-end-5 max-homewrap:row-end-3 max-homewrap:col-end-3 bt br">
        <h2 className="text-lg font-bold">About</h2>
        <p>
          I am a student in Denver Colorado interested in computer science and
          robotics. This website contains a few of my completed projects that I
          want to share.
          <br />
          <br />I am always looking to start new projects, so reach out to me if
          you want to see something made.
        </p>
      </main>
      <Link
        href="/portfolio"
        className="grid-btn col-start-2 min-h-30 row-start-2 bt max-homewrap:row-start-3 max-homewrap:col-start-1 max-homewrap:br"
      >
        Portfolio
      </Link>
      <Link
        href="/contact"
        className="grid-btn col-start-2 min-h-30 row-start-3 bt homewrap:bb"
      >
        Contact
      </Link>
    </div>
  );
}
