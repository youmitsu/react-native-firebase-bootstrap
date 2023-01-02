import * as firestore from "firebase/firestore";
import { z } from "zod";

import type { FirestoreDataConverter } from "firebase/firestore";

const _Sample = z.object({
  name: z.string(),
  createdAt: z.number(),
});
export type Sample = z.infer<typeof _Sample>;

export const converter: FirestoreDataConverter<Sample> = {
  toFirestore: (sample: Sample): firestore.DocumentData => {
    return {
      name: sample.name,
      createdAt: firestore.Timestamp.fromMillis(sample.createdAt),
    };
  },
  fromFirestore: (
    snapshot: firestore.QueryDocumentSnapshot,
    options?: firestore.SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    const sample: Sample = {
      name: data.name,
      createdAt: (data.createdAt as firestore.Timestamp).toMillis(),
    };
    return sample;
  },
};
