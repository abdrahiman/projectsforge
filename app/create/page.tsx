import { createChallenge } from "../utils/challenges";

export default async function Create() {
  let makeChallenge = async (formData: FormData) => {
    "use server";
    let name = formData.get("name") as string;
    let preview = formData.get("preview") as string;
    let github_markdown_file = formData.get("github_markdown_file") as string;
    let github_markdown_name = formData.get("github_markdown_name") as string;
    let author_username = formData.get("author_username") as string;
    let difficulty = formData.get("difficulty") as string;
    let resources = formData.get("resources") as string;
    let domains = formData.get("domains") as string;
    let difficulties = ["easy", "medium", "hard"];
    if (
      !name ||
      !preview ||
      !github_markdown_file ||
      !github_markdown_name ||
      !author_username ||
      !difficulties.includes(difficulty.toLowerCase()) ||
      resources?.split(",").length == 0 ||
      domains?.split(",").length == 0
    ) {
      return {
        status: 400,
        error: "Missing required fields",
      };
    }

    let data = {
      name,
      preview,
      github_markdown_file,
      github_markdown_name,
      difficulty,
      author_username,
      resources: resources.split(",").map((d) => d.trim()),
      domains: domains.split(",").map((d) => d.trim().toLowerCase()),
      solved_by: 0,
    };

    let id = await createChallenge(data);
    return { challenge: id };
  };
  return (
    <div className="flex pt-4 w-full justify-between items-start gap-6 max-md:flex-col">
      <form className="flex flex-col gap-4 mx-auto" action={makeChallenge}>
        <div className="flex flex-col gap-2">
          <label>Challenge Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Challenge Description:</label>
          <input type="text" name="preview" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Github UserName:</label>
          <input type="text" name="author_username" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Markdown Github File Url:</label>
          <input type="text" name="github_markdown_file" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Markdown Github File Name:</label>
          <input type="text" name="github_markdown_name" />
        </div>
        <div>
          <label>Resources:</label>
          <textarea name="resources" />
        </div>
        <div>
          <label>Domains:</label>
          <input type="text" name="domains" />
        </div>
        <div>
          <label>Difficulty:</label>
          <input type="text" name="difficulty" />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
}
