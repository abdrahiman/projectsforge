"use client";
import { useEffect, useState } from "react";
import {getChallenge, getDomains, IChallenge } from "@/utils/challenges";
import { updateChallenge } from "@/app/actions/update";
import { useFormState, useFormStatus } from "react-dom";
import deleteChallenge from "@/app/actions/delete";

export default function Update({ params }: { params: { id: string } }) {
  const updateChallengeWithId = updateChallenge.bind(null,params.id);
  const [state, formAction] = useFormState(updateChallengeWithId, {message:""});
  const {pending} = useFormStatus();

  let [ch, setCh] = useState<IChallenge|null|false>(false);
  let [urls, setUrls] = useState<string[]>([]);
  let [topics, setTops] = useState<string[]>([]);
  let [stopics, setSTops] = useState<string[]>([]);
  
  useEffect(() => {
    let f = async () => {
      let tops = await getDomains();
      let chell = await getChallenge(params.id) as IChallenge;
      setTops([...tops]);
      setCh({...chell})
      setUrls(chell.resources)
      setSTops(chell.domains)
    };
    f();
  }, []);
  
  if (ch==false) {
    return <h1>Loading Challenge...</h1>;
  }
  else if (!ch || !ch.name) {
    return <h1>This Challenge Not Found</h1>;
  }

  return (
    <div className="flex pt-4 w-full justify-between items-start gap-6 max-md:flex-col">

      <form
        className="flex flex-col gap-4 mx-auto w-full max-w-2xl" action={formAction}>
      <div className="flex flex-col gap-2">
        {state?.message && (
          <span className="bg-red-200 rounded-md w-full py-2 px-3 text-red-900">
            <p aria-live="polite">{state.message}</p>
          </span>
        )}
          <label>Challenge Name:</label>
          <input type="text" name="name" defaultValue={ch?.name} required className="pl-2" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Challenge Description:</label>
          <textarea name="preview" className="pl-2 w-full" defaultValue={ch?.preview} />
        </div>
        <div className="flex flex-col gap-2">
          <label>Github UserName:</label>
         <input type="text" name="author_username" required className="pl-2"
            defaultValue={ch?.author_username}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Markdown Github File Url:</label>
          <input
            type="text"
            name="github_markdown_file"
            required
               className="pl-2"
            defaultValue={ch?.github_markdown_file}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Markdown Github File Name:</label>
          <input type="text"
            name="github_markdown_name"
            required
            className="pl-2"
            defaultValue={ch?.github_markdown_file}
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
            {urls && urls.map((u) => (
              <li key={u} onClick={() => setUrls([...urls.filter((e) => e != u)])}>
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
            {topics && topics.map((t) => (
              <li key={t}>
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
        <input type="text" className="hidden w-0 h-0" name="id" value={params.id}/>
        <div>
          <label>Difficulty:</label>
          <select name="difficulty" defaultValue={ch?.difficulty} className="border-[#ddd]">
            <option value="easy">
              Easy
            </option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button disabled={pending} className="bg-green-600 text-white w-full mt-4 py-4 px-2 rounded-md">
          Update
        </button>
      </form>
        <button onClick={()=>deleteChallenge(params.id)} className="bg-red-600 text-white w-full mt-4 py-4 px-2 rounded-md">
          Delete Challenge
        </button>
    </div>
  );
}
