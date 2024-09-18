"use server";
import { redirect } from "next/navigation";
import { editeChallenge } from "@/utils/challenges";

export let updateChallenge = async (id:string,prevState: any,formData: FormData) => {

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
      return { message: 'Missing required fields' }
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

    await editeChallenge(id, data);
    redirect("/c/"+id);
  };