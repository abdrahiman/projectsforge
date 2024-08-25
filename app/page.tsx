"use client";

import Link from "next/link";

export default function Home() {
  let problems = [
    {title:"Tree: Preorder Traversal",description:"Write A Programming language to print the preorder traversal of a given binary tree.",level:"Easy"},
    {title:"Initial Letter Avatar Generator API",description:"Develop a RESTful API that generates and returns an image of the first letter of a given name.",level:"Medium"}
  ]
  return (
    <div className="flex gap-4 w-full items-start">
      <main className="problems w-full flex gap-2 flex-col">
        {problems.map(prob=>(
          <Link href="/199">
        <div className="prob p-4 flex bg-[#ffe] items-center justify-between rounded-md w-full">
          <div className="info flex flex-col w-full">
            <h3 className="text-md">{prob.title}</h3>
            <p className="text-xs text-gray-400 ">
            <b className="text-green-500 mr-2">{prob.level}</b>
              {prob.description}
              </p>
          </div>
          <div className="actions flex gap-2 text-sm">
            <button className="star">0</button>
            <button className="rounded-xl border border-blue-400 p-2">Solved</button>
          </div>
        </div>
          </Link>
        ))}
      </main>
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
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Easy</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Medium</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Hard</label>
        </div>
        </div>

      </aside>
      </div>
  );
}
