import { firestore } from "firebase-admin";

import * as FirestoreType from "../../../../common/firestore";

type Converter<T> = {
  toFirestore: (data: T) => firestore.DocumentData;
  fromFirestore: (snapshot: firestore.QueryDocumentSnapshot) => T;
};

export const userConverter: Converter<FirestoreType.User.Schema> = {
  toFirestore: (user): firestore.DocumentData => {
    return {
      name: user.name,
    };
  },
  fromFirestore: (snapshot: firestore.QueryDocumentSnapshot) => {
    const data = snapshot.data();
    const user = FirestoreType.User.parse(data);
    return user;
  },
};
