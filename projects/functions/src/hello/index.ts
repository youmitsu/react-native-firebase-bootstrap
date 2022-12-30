import * as functions from "firebase-functions";

import { service } from "./service";

export const hello = functions.region("asia-northeast1").https.onCall(() => {
  return service();
});
