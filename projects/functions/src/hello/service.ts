import { firestore } from "firebase-admin";
import { Firestore } from "rnfb-bootstrap-schema";

export const service = async (): Promise<boolean> => {
  const user: Firestore.User.Schema = {
    name: "bobby",
  };
  console.log("hello world", user);

  const snapshot = await firestore()
    .collection("users")
    .withConverter(Firestore.User.Converter)
    .doc("hoge")
    .get();
  const data = snapshot.data();
  console.log("data exists", snapshot.exists);
  if (data !== undefined) {
    console.log("name", data.name);
  }

  return true;
};
