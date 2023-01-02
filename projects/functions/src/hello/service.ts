import * as Types from "rnfb-bootstrap-schema";

export const service = (): boolean => {
  const user: Types.Firestore.User.Schema = {
    name: "bobby",
  };
  console.log("hello world", user);
  return true;
};
