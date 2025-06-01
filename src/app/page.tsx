import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-red-400">
        <a className="text-2xl">Laurens Schunk</a>
      </div>
      <div className="w-full h-full flex flex-row">
        <div className="w-full">Preview</div>
        <div className="w-full">Selector</div>
      </div>
    </div>
  );
}
