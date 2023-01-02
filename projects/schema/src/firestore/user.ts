import * as firestore from "firebase/firestore";
import { z } from "zod";

import type { FirestoreDataConverter } from "firebase/firestore";

const _User = z.object({
  name: z.string(),
});
export type Schema = z.infer<typeof _User>;

export const Converter: FirestoreDataConverter<Schema> = {
  toFirestore: (user: Schema): firestore.DocumentData => {
    return { name: user.name };
  },
  fromFirestore: (
    snapshot: firestore.QueryDocumentSnapshot,
    options?: firestore.SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    const user: Schema = {
      name: data.name,
    };
    return user;
  },
};
