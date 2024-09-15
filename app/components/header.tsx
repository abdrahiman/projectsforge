"use client";

import { useState, useEffect } from "react";
import { getSolved, setSolved } from "../utils/challenges";

export let Header = ({ challenge, params }: any) => {
  let [solved, setSolve] = useState(false);
  useEffect(() => {
    setSolve(getSolved()?.includes(params.id)||[]);
  }, [setSolve]);

  return (
    <header className="flex gap-2 w-full justify-start items-center pr-4">
      <div
        className={`h-3 w-full absolute left-0 top-0 ${solved ? "bg-green-400" : "bg-orange-400"}`}
      ></div>
      <input
        type="checkbox"
        title="solved"
        checked={solved}
        className="w-7 h-7"
        onChange={() => {
          setSolved(params.id);
          setSolve(!solved);
        }}
      />
      <h1 className="text-2xl font-bold mt-0">
        💪 Challenge: {challenge?.name}
      </h1>
    </header>
  );
};
