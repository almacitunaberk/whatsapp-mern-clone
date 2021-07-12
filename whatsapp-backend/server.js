/* Imports */
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

/* App Config */
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1234469",
  key: "3f4d0150db9e5694d8a4",
  secret: "a761aba4073a4496c223",
  cluster: "eu",
  useTLS: true,
});
/* Middleware */
app.use(express.json());
app.use(cors());

/* Database Configuration */
const connectionUrl =
  "mongodb+srv://admin:xBZY9XRlUyytLo92@cluster0.9y9gp.mongodb.net/whatsapp-clone-db?retryWrites=true&w=majority";
mongoose.connect(connectionUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB is connected");
  const messageCollection = db.collection("messagecontents");
  const changeStream = messageCollection.watch();
  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.user,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

/* ???? */

/* API Routes */
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created: \n ${data}`);
    }
  });
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.send(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

/* Listen */
app.listen(port, () => console.log(`Listening on localhost:${port}`));

// mongodb+srv://admin:<password>@cluster0.9y9gp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// xBZY9XRlUyytLo92
