const express = require("express");
const twilio = require("twilio");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const sendSms = () => {
    
  const client = new twilio(accountSid, authToken);

  return client.messages
    .create({
      body: "hey this is muller twilio",
      from: "+13194585993",
      to: process.env.PHONE_NUMBER,
    })
    .then((messages) => {
      console.log(messages);
    })

    .catch((err) => {
      console.log(err);
    });
};
sendSms();
app.listen(5000, () => {
  console.log("app listning on port 5000");
});
