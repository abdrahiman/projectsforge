import { getChallenges, getDomains } from "./utils/challenges";
import { Challenge } from "./components/challenge";

export default async function Home({ searchParams }: any) {
  let challenges = await getChallenges({ domain: "", difficulty: "" });
  let domains = await getDomains();

  return (
    <div className="flex gap-4 w-full items-start">
      <main className="problems w-full flex gap-2 flex-col">
        {challenges.map((ch) => (
          <Challenge ch={ch} />
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
    </div>
  );
}
