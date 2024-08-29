"use client";

import Link from "next/link";
import { getSolved, IChallenge } from "../utils/challenges";

export let Challenge = ({ ch }: { ch: IChallenge }) => {
  return (
    <Link href={"/" + ch.id} key={ch.id}>
      <div className="prob p-4 flex bg-[#ffe] items-center justify-between rounded-md w-full">
        <div className="info flex flex-col w-full">
          <h3 className="text-md">{ch.name}</h3>
          <p className="text-xs text-gray-400 ">
            <b className="text-green-500 mr-2">{ch.difficulty}</b>
            {ch.preview}
          </p>
        </div>
        <div className="actions flex gap-2 text-sm min-w-fit">
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
          <button
            className={`rounded-xl p-2 min-w-fit text-sm ${getSolved().includes(ch.id) ? "bg-green-500 text-white" : "border-2 border-green-500 text-green-500"}`}
          >
            {getSolved().includes(ch.id) ? "Solved" : "Solve Challenge"}
          </button>
        </div>
      </div>
    </Link>
  );
};
