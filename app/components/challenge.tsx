"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getSolved, IChallenge } from "../utils/challenges";

export let Challenge = ({ ch }: { ch: IChallenge }) => {
  let [solved, setSolve] = useState(false);
  useEffect(() => {
    setSolve(getSolved().includes(ch.id));
  }, [setSolve]);

  return (
    <div className="prob py-4 flex gap-2 items-start flex-col w-full">
      <div className="info flex flex-col w-full">
        <Link href={"/c/" + ch.id}>
          <h3 className="text-xl font-semibold mb-6 capitalize">{ch.name}</h3>
        </Link>

        <p className="text-base text-gray-900">{ch.preview}</p>
      </div>
      <div className="actions flex gap-2 mt-4 text-sm min-w-fit">
        <Link href={"/" + ch.id}>
          <button
            className={`rounded-xl p-2 min-w-fit text-sm ${solved ? "bg-black text-white" : "border-2 border-black text-black"}`}
          >
            {solved ? "Solved" : "Solve Challenge"}
          </button>
        </Link>
        <button className="hover:bg-gray-100/50 rounded-full cursor-pointer p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#FFA500"
            stroke="#FFA500"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="min-w-fit"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      </div>
    </div>
  );
};
