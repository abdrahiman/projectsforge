import Markdown from 'react-markdown';
import Link from "next/link";

export default async function Problem() {
  let problem = {
    title: "Tree: Preorder Traversal",
    description:
      "Write A Programming language to print the preorder traversal of a given binary tree.",
    level: "Easy",
  };
  let md = "";
  let res = await fetch("https://raw.githubusercontent.com/abdrahiman/sololevling/main/data/en/url-shortener-api-4c38bed80e6e4be097edaf67cc9b06cf.md");
  md = await res.text();

  return (
    <div className="flex pt-4 w-full justify-between items-start gap-6 max-md:flex-col">
      <main className="problem flex flex-col gap-2 w-full bg-[#ffe] rounded-xl p-2">
          <Link className="pb-2 text-md underline" href="/">back</Link>
        <header>
          <h2 className="text-3xl font-bold mt-0">💪 Challenge: {problem.title}</h2>
        </header>
        <article className="flex flex-col markdown">
          <Markdown>{md}</Markdown>
        </article>
      </main>
      <section className="flex flex-col gap-2 pt-6 text-sm">
        <h5 className="">
          َAuthor: <b className="">Abdrahimo</b>
        </h5>
        <h5 className="">
          Difculty: <b className="text-green-800">Easy</b>
        </h5>
        <h5 className="">
          Tags: <b>Algorithem, DS, Compilers</b>
        </h5>
        <div className="resources mt-6">
          <h4 className="font-bold text-xl">📙 Resources</h4>
          <ul className="max-w-full overflow-hidden ">
            <li><a href="https://www.youtube.com/watch?v=V9QO1azHiFQ&list=PL_b0ZzhDK1Z_eYdfyZfl0-NoY9qEw0yVa">{"https://www.youtube.com/watch?v=V9QO1azHiFQ&list=PL_b0ZzhDK1Z_eYdfyZfl0-NoY9qEw0yVa".slice(0,25)+"..."}
            </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
