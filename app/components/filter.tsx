"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export let Filter = ({ domains }: { domains: string[] }) => {
  let [diff, setDiff] = useState<string[]>([]);
  let r = useRouter();
  useEffect(() => {
    if (diff) {
      r.push("/?difficulty=" + diff.join(","));
    }
  }, [diff, setDiff]);
  return (
    <aside className="filter text-sm gap-2 flex flex-col">
      <div className="filter">
        <h3 className="font-semibold text-lg">Status</h3>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Solved</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Unsolved</label>
        </div>
      </div>
      <div className="filter">
        <h3 className="font-semibold text-lg">Difficulty</h3>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name=""
            value={diff.includes("easy")}
            id=""
            onChange={() =>
              diff.includes("easy")
                ? setDiff([...diff.filter((e) => e != "easy")])
                : setDiff([...diff, "easy"])
            }
          />
          <label htmlFor="">easy</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            value={diff.includes("medium")}
            onChange={() =>
              diff.includes("medium")
                ? setDiff([...diff.filter((e) => e != "medium")])
                : setDiff([...diff, "medium"])
            }
          />
          <label htmlFor="">Medium</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            value={diff.includes("hard")}
            onChange={() =>
              diff.includes("hard")
                ? setDiff([...diff.filter((e) => e != "hard")])
                : setDiff([...diff, "hard"])
            }
          />
          <label htmlFor="">Hard</label>
        </div>
      </div>
      <div className="filter">
        <h3 className="font-semibold text-lg">Domains</h3>
        {domains &&
          domains.map((d, i) => (
            <div className="flex gap-2" key={i}>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">{d}</label>
            </div>
          ))}
      </div>
    </aside>
  );
};
