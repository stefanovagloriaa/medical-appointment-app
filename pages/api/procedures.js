import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {

    const client = await MongoClient.connect(
      "mongodb+srv://stefanovagloria:BURgas-8000@cluster1.fmd5rwf.mongodb.net/procedures?retryWrites=true&w=majority"
    );

    const db = client.db();

    const proceduresCollection = db.collection("procedures");
  }
}

export default handler;
