"use server";
import {
    doc,
    deleteDoc
  } from "firebase/firestore";
  import {db} from "@/utils/firebase";
import { redirect } from "next/navigation";

export default async function deleteChallenge(id:string){
    await deleteDoc(doc(db, "challenges", id));
    redirect("/");
}