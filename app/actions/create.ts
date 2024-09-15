"use server";

import { redirect } from "next/navigation";
import { createChallenge } from "../challenges";
import { z } from 'zod'

 
const schema = z.object({
  name: z.string({
    invalid_type_error: 'Invalid Name',
  }),
  preview: z.string({
    invalid_type_error: 'Invalid Preview',
  }),
  github_markdown_file: z.string({
    invalid_type_error: 'Invalid github_markdown_file',
  }).url(),
  author_username: z.string({
    invalid_type_error: 'Invalid difficulty',
  }),
  resources: z.string({
    invalid_type_error: 'Invalid resources',
  }),
  domains: z.string({
    invalid_type_error: 'Invalid domains',
  }),
  difficulty: z.string({
    invalid_type_error: 'Invalid difficulty',
  }),
  
})
 

export let makeChallenge = async (prevState:any,formData: FormData) => {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
  preview: formData.get("preview") ,
  github_markdown_file: formData.get("github_markdown_file") ,
  github_markdown_name: formData.get("github_markdown_name") ,
  author_username: formData.get("author_username") ,
  difficulty: formData.get("difficulty") ,
  resources: formData.get("resources") ,
  domains: formData.get("domains") ,
  });
  
  let difficulties = ["easy", "medium", "hard"];

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors,
    }
  }
  let fields = validatedFields.data;

  if (!difficulties.includes(fields.difficulty?.toLowerCase()||'') ||
    fields.resources?.split(",").length == 0 ||
    fields.domains?.split(",").length == 0) {
    return {
      message: "Invalid Fields values",
    }
  }
 
  
  let data = {
    ...validatedFields.data,
    resources: fields.resources.split(",").map((d) => d.trim()),
    domains: fields.domains.split(",").map((d) => d.trim().toLowerCase()),
    solved_by: 0,
  };

  let id = await createChallenge(data);
  redirect('/c/'+id)
};
