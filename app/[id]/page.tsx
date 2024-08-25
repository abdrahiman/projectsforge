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
        <div className="flex gap-1 w-full justify-between items-center pr-4 pb-4 pt-2">
          <Link className="text-md underline" href="/">back</Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="min-w-fit"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>

        </div>
        <header className="flex gap-2 w-full justify-start items-center pr-4">
          <input type="checkbox" title="solved" className="w-7 h-7"/>
          <h2 className="text-2xl font-bold mt-0">💪 Challenge bl bla bla: {problem.title}</h2>
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
          <ul className="max-w-full overflow-hidden mt-2">
            <li><a href="https://www.youtube.com/watch?v=V9QO1azHiFQ&list=PL_b0ZzhDK1Z_eYdfyZfl0-NoY9qEw0yVa">{"https://www.youtube.com/watch?v=V9QO1azHiFQ&list=PL_b0ZzhDK1Z_eYdfyZfl0-NoY9qEw0yVa".slice(0,25)+"..."}
            </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
