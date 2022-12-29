const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const admin = require("firebase-admin");
admin.initializeApp({ projectId: "" }); // TODO: set projectId
