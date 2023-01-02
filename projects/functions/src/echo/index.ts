import * as functions from "firebase-functions";

export const echo = functions
  .region("asia-northeast1")
  .https.onRequest((_, res) => {
    res.send("result");
    res.status(200);
  });
