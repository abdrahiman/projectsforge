import { editeChallenge, getChallenge } from "../../utils/challenges";

export default async function Update({ params }: { params: { id: string } }) {
  let ch = await getChallenge(params.id);
  if (!ch || !ch.name) {
    return <h1>This Challenge Not Found</h1>;
  }

  let updateChallenge = async (formData: FormData) => {
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
      console.log("Missing required fields");
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
    };

    let id = await editeChallenge(params.id, data);
    return { challenge: id };
  };

  return (
    <div className="flex pt-4 w-full justify-between items-start gap-6 max-md:flex-col">
      <form className="flex flex-col gap-4 mx-auto" action={updateChallenge}>
        <div className="flex flex-col gap-2">
          <label>Challenge Name:</label>
          <input type="text" name="name" defaultValue={ch?.name} />
        </div>
        <div className="flex flex-col gap-2">
          <label>Challenge Description:</label>
          <textarea name="preview" defaultValue={ch?.preview} />
        </div>
        <div className="flex flex-col gap-2">
          <label>Github UserName:</label>
          <input
            type="text"
            name="author_username"
            defaultValue={ch?.author_username}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Markdown Github File Url:</label>
          <input
            type="text"
            name="github_markdown_file"
            defaultValue={ch?.github_markdown_file}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Markdown Github File Name:</label>
          <input
            type="text"
            name="github_markdown_name"
            defaultValue={ch?.github_markdown_file}
          />
        </div>
        <div>
          <label>Resources:</label>
          <textarea name="resources" defaultValue={ch?.resources?.join(",")} />
        </div>
        <div>
          <label>Domains:</label>
          <input
            type="text"
            name="domains"
            defaultValue={ch?.domains?.join(",")}
          />
        </div>
        <div>
          <label>Difficulty:</label>
          <input type="text" name="difficulty" defaultValue={ch?.difficulty} />
        </div>
        <button>Update</button>
      </form>
    </div>
  );
}
