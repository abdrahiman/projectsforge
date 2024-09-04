import Link from "next/link";
import { getChallenge } from "../utils/challenges";
import { Header } from "../components/header";
import { marked } from "marked";

export default async function Problem({ params }: { params: { id: string } }) {
  const challenge = await getChallenge(params.id);
  if (!challenge || !challenge.name) {
    return "This Challenge Not Found";
  }

  let res = await fetch(challenge?.github_markdown_file || "");
  let md = await res.text();
  let htmlText = marked.parse(md || "", { gfm: true });

  return (
    <div className="flex pt-4 w-full justify-between items-start gap-6 max-md:flex-col">
      <main className="problem flex flex-col relative gap-2 w-full bg-[#ffe] rounded-xl p-2 pt-3 overflow-hidden">
        <div className="flex gap-1 w-full justify-between items-center pr-4 pb-4 pt-2">
          <Link className="text-md underline" href="/">
            back
          </Link>
          <button className="hover:bg-gray-100/50 rounded-full cursor-pointer p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
        <Header challenge={challenge} params={params} />
        <article
          className="flex flex-col markdown"
          dangerouslySetInnerHTML={{ __html: htmlText }}
        ></article>
      </main>
      <section className="flex flex-col gap-2 pt-6 text-sm">
        <h5 className="">
          َAuthor:{" "}
          <a href={"https://github.com/" + challenge?.author_username}>
            <b className="">Abdrahimo</b>
          </a>
        </h5>
        <h5 className="">
          Difculty: <b className="text-green-800">{challenge?.difficulty}</b>
        </h5>
        <h5 className="">
          Domains: <b>{challenge?.domains.join(" , ")}</b>
        </h5>
        <div className="resources mt-6">
          <h4 className="font-bold text-xl">📙 Resources</h4>
          <ul className="max-w-full overflow-hidden mt-2">
            {challenge?.resources?.map((r: string, i: number) => (
              <li key={i}>
                <a href={r}>{r.slice(0, 25) + "..."}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
