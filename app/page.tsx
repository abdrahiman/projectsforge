import { getChallenges, getDomains } from "./utils/challenges";
import { Challenge } from "./components/challenge";
import { Filter } from "./components/filter";

export default async function Home({ searchParams }: any) {
  let filters = searchParams;
  for (let key in filters) {
    if (filters[key].includes(",")) filters[key] = filters[key].split(",");
  }
  let challenges = await getChallenges(filters);
  let domains = await getDomains();

  return (
    <div className="flex gap-4 w-full items-start">
      <main className="problems w-full flex gap-2 flex-col">
        {challenges.map((ch: any) => (
          <Challenge ch={ch} />
        ))}
      </main>
      <Filter domains={domains} />
    </div>
  );
}
