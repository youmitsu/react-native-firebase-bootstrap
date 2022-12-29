import * as admin from "firebase-admin";

import * as handlers from "./handlers";

// FIXME:
// eslint-disable-next-line import/namespace
admin.initializeApp();

exports.hello = handlers.hello;
