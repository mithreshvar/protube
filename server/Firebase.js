const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require("firebase-admin/auth");
const option = require(process.env.GOOGLE_APPLICATION_CREDENTIALS)

const app = initializeApp(option);
const auth = getAuth(app);
module.exports = auth;
