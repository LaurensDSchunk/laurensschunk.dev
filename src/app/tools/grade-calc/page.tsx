"use client";

import Head from "next/head";
import { FormEvent, useRef } from "react";

export default function GradeCalcPage() {
  const currentRef = useRef<HTMLInputElement>(null);
  const desiredRef = useRef<HTMLInputElement>(null);
  const worthRef = useRef<HTMLInputElement>(null);

  function calculate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const w: number = parseFloat(worthRef.current!.value) / 100;
    const c: number = parseFloat(currentRef.current!.value);
    const d: number = parseFloat(desiredRef.current!.value);

    let o = (d - c * (1 - w)) / w;
    o = parseFloat(o.toFixed(2));
    alert(`You need a ${o}% to get your desired grade.`);
  }

  return (
    <>
      <Head>
        <title>Final Grade Calculator</title>
        <meta
          name="description"
          content="Quickly calculate what grade you need on your final to hit your goal."
        />
        <meta property="og:title" content="Final Grade Calculator" />
        <meta
          property="og:description"
          content="Quickly calculate what you need on your final exam."
        />
        <meta property="og:url" content="https://laurensschunk.dev" />
      </Head>
      <main>
        <div className="py-3 text-center bb">
          <h1 className="text-2xl font-bold ">Final Grade Calculator</h1>
          <p>
            I created this as an easy way to figure out what grade I need on
            final exams to get my desired final grades.
          </p>
        </div>
        <form onSubmit={calculate}>
          <div className="flex flex-col px-3 py-3">
            <label htmlFor="currentInput">Current Grade (%)</label>
            <input
              id="currentInput"
              ref={currentRef}
              className="border-b outline-none"
              type="number"
              min="0"
              max="100"
              step="0.01"
              required
            />

            <label htmlFor="desiredInput" className="mt-3">
              Desired Grade (%)
            </label>
            <input
              id="desiredInput"
              ref={desiredRef}
              className="border-b outline-none"
              type="number"
              min="0"
              max="100"
              step="0.01"
              required
            />

            <label htmlFor="worthInput" className="mt-3">
              Final Grade Worth (%)
            </label>
            <input
              id="worthInput"
              ref={worthRef}
              className="border-b outline-none"
              type="number"
              min="0"
              max="100"
              step="0.01"
              required
            />
          </div>

          <button type="submit" className="mt-3 p-3 w-full grid-btn bt bb">
            Calculate
          </button>
        </form>
      </main>
    </>
  );
}
