import { firestore } from "firebase-admin";

import * as FirestoreType from "../../../../common/firestore";
import { userConverter } from "../utils/converter";

export const service = async (): Promise<boolean> => {
  const snapshot = await firestore()
    .collection("users")
    .withConverter<FirestoreType.User.Schema>(userConverter)
    .doc("hoge")
    .get();
  const data = snapshot.data();
  console.log("data exists", snapshot.exists);
  if (data !== undefined) {
    console.log("name", data.name);
  }

  return true;
};
