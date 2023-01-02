import * as firebase from "firebase-admin";
import { z } from "zod";

const _User = z.object({
  name: z.string(),
});
export type Schema = z.infer<typeof _User>;

export const Converter: firebase.firestore.FirestoreDataConverter<Schema> = {
  toFirestore: (user: Schema): firebase.firestore.DocumentData => {
    return { name: user.name };
  },
  fromFirestore: (snapshot: firebase.firestore.QueryDocumentSnapshot) => {
    const data = snapshot.data();
    const user: Schema = {
      name: data.name,
    };
    return user;
  },
};
