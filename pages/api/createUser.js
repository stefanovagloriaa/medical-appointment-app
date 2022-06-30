import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const client = await MongoClient.connect(
      "mongodb+srv://stefanovagloria:BURgas-8000@cluster1.fmd5rwf.mongodb.net/procedures?retryWrites=true&w=majority"
    );

    const db = client.db();

    db.addUser({
      username: "Guru99",
      password: "password",
    });
    client.close();
  }
}

export default handler;
