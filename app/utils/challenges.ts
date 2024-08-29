import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import db from "./firebase";

export let getChallenges = async (filters: any) => {
  let q = query(collection(db, "challenges"));
  if (filters.domain)
    q = query(q, where("domains", "array-contains", filters.domain));
  if (Array.isArray(filters.difficulty))
    q = query(q, where("difficulty", "in", filters.difficulty));
  else if (filters.difficulty)
    q = query(q, where("difficulty", "==", filters.difficulty));
  const querySnapshot = await getDocs(q);
  let challenges: {}[] = [];
  querySnapshot.forEach((doc) => {
    challenges.push({ id: doc.id, ...doc.data() });
  });
  return challenges;
};

export let getDomains = async () => {
  let q = collection(db, "domains");
  const querySnapshot = await getDocs(q);
  let domains: string[] = [];
  querySnapshot.forEach((doc) => {
    domains.push(doc.data().name);
  });
  return domains;
};

export let getChallenge = async (id: string) => {
  let docRef = doc(db, "challenges", id);
  const challenge = (await getDoc(docRef)).data();
  return challenge;
};

export interface IChallenge {
  id: string;
  name: string;
  author_username: string;
  preview: string;
  github_markdown_file: string;
  github_markdown_name: string;
  difficulty: string;
  resources: string[];
  domains: string[];
  solved_by: number;
}

export let createChallenge = async (ch: IChallenge) => {
  let newdoc = await addDoc(collection(db, "challenges"), {
    name: ch.name,
    author_username: ch.author_username,
    preview: ch.preview,
    github_markdown_file: ch.github_markdown_file,
    github_markdown_name: ch.github_markdown_name,
    difficulty: ch.difficulty,
    resources: ch.resources,
    domains: ch.domains,
    solved_by: 0,
  });
  return newdoc.id;
};

export let setSolved = (id: string) => {
  // let docRef = doc(db, "challenges", id);
  // await updateDoc(docRef, {
  //   solved_by: increment(1)
  // });
  let solved: any = localStorage.getItem("solved");
  if (solved) {
    solved = JSON.parse(solved);
    if (solved.includes(id)) {
      solved = solved.filter((e: string) => e != id);
    } else solved.push(id);
  } else {
    solved = [id];
  }
  localStorage.setItem("solved", JSON.stringify(solved));
};
export let getSolved = () => {
  let solved: any = localStorage.getItem("solved");
  if (solved) return JSON.parse(solved);
  else return [];
};
