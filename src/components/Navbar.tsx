import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 w-full z-100 flex items-center justify-center border-b-1 border-b-black border-x-1 border-x-transparent bg-background">
      <div className="px-3 py-1 w-full max-w-4xl flex flex-row justify-between items-center">
        <div className="w-full">
          <Link href="/" className="text-2xl">
            Laurens Schunk
          </Link>
        </div>

        <div className="w-full flex flex-row justify-end gap-5 max-[380px]:hidden">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="min-[380px]:hidden">Ham</div>
      </div>
    </div>
  );
}
