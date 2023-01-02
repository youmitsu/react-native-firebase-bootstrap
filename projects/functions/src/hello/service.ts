import { firestore } from "firebase-admin";

import type { User } from "@common/firestore/schema";


export const service = async (): Promise<boolean> => {
  const user: User = {
    name: "bobby",
  };
  console.log("hello world", user);

  const snapshot = await firestore().collection("users").doc("hoge").get();
  const data = snapshot.data();
  console.log("data exists", snapshot.exists);
  if (data !== undefined) {
    console.log("name", data.name);
  }

  return true;
};
