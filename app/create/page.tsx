"use client";
import { useEffect, useState } from "react";
import { makeChallenge } from "../utils/actions/create";
import { getDomains } from "../utils/challenges";

export default function Create() {
  let [urls, setUrls] = useState<string[]>([]);
  let [topics, setTops] = useState<string[]>([]);
  let [stopics, setSTops] = useState<string[]>([]);
  useEffect(() => {
    let f = async () => {
      let tops = await getDomains();
      setTops([...tops]);
    };
    f();
  }, []);
  return (
    <div className="flex pt-4 w-full justify-between items-start gap-6 max-md:flex-col">
      <form
        className="flex flex-col gap-4 mx-auto w-full max-w-2xl"
        action={makeChallenge}
      >
        <div className="flex flex-col gap-2">
          <label>Challenge Name:</label>
          <input type="text" name="name" required className="pl-2" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Challenge Description:</label>
          <textarea name="preview" className="pl-2 w-full" required />
        </div>
        <div className="flex flex-col gap-2">
          <label>Github UserName:</label>
          <input type="text" name="author_username" required className="pl-2" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Markdown Github File Url:</label>
          <input
            type="text"
            name="github_markdown_file"
            required
            className="pl-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Markdown Github File Name:</label>
          <input
            type="text"
            name="github_markdown_name"
            required
            className="pl-2"
          />
        </div>
        <div>
          <label>Resources:</label>
          <input
            type="text"
            name="resources"
            required
            className="hidden"
            value={urls.join(",")}
          />
          <ul>
            {urls.map((u) => (
              <li onClick={() => setUrls([...urls.filter((e) => e != u)])}>
                {u}
              </li>
            ))}
          </ul>
          <input
            name="resources"
            type="url"
            className="pl-2 w-full"
            onKeyDown={(e) =>
              e.key == "Enter" &&
              !urls.includes((e.target as any).value) &&
              setUrls([...urls, (e.target as any).value])
            }
          />
        </div>
        <div>
          <label>Domains:</label>
          <ul>
            {topics.map((t) => (
              <li>
                <input
                  type="checkbox"
                  checked={stopics.includes(t)}
                  onChange={() =>
                    stopics.includes(t)
                      ? setSTops([...stopics.filter((e) => e != t)])
                      : setSTops([...stopics, t])
                  }
                />
                <label>{t}</label>
              </li>
            ))}
          </ul>
          <input
            type="text"
            name="domains"
            className="hidden"
            required
            value={stopics.join(",")}
          />
        </div>
        <div>
          <label>Difficulty:</label>
          <select name="difficulty" className="border-[#ddd]">
            <option value="easy" defaultChecked>
              Easy
            </option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button className="bg-green-600 text-white w-full mt-4 py-4 px-2 rounded-md">
          Create
        </button>
      </form>
    </div>
  );
}
