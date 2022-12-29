import * as functions from "firebase-functions";

export const hello = functions
  .region("asia-northeast1")
  .https.onCall(async () => {
    // no-op
  });
