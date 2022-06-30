import { MongoClient } from "mongodb";
import { Fragment } from "react";

const ServicesPage = (props) => {
  return (
    <Fragment>
      {props.procedures.map((p) => (
        <h1>{p.title}</h1>
      ))}
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://stefanovagloria:BURgas-8000@cluster1.fmd5rwf.mongodb.net/procedures?retryWrites=true&w=majority"
  );

  const db = client.db();

  const proceduresCollection = db.collection("procedures");

  const procedures = await proceduresCollection.find().toArray();

  client.close();

  return {
    props: {
      procedures: procedures.map((p) => ({
        id: p._id.toString(),
        title: p.title,
        description: p.description,
        image: p.imageUrl,
      })),
      revalidate: 1,
    },
  };
}

export default ServicesPage;
