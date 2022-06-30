import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";

const ProcedureDetail = (props) => {
  return (
    <Fragment>
      <img src={props.procedureData.imageUrl}></img>
      <h1>{props.procedureData.title}</h1>
      <p>{props.procedureData.description}</p>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://stefanovagloria:BURgas-8000@cluster1.fmd5rwf.mongodb.net/procedures?retryWrites=true&w=majority"
  );

  const db = client.db();

  const proceduresCollection = db.collection("procedures");

  const procedures = await proceduresCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: procedures.map((procedure) => ({
      params: { procedureId: procedure._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const procedureId = context.params.procedureId;

  const client = await MongoClient.connect(
    "mongodb+srv://stefanovagloria:BURgas-8000@cluster1.fmd5rwf.mongodb.net/procedures?retryWrites=true&w=majority"
  );

  const db = client.db();

  const proceduresCollection = db.collection("procedures");

  const selectedProcedure = await proceduresCollection.findOne({
    _id: ObjectId(procedureId),
  });

  client.close();

  return {
    props: {
      procedureData: {
        id: selectedProcedure._id.toString(),
        title: selectedProcedure.title,
        description: selectedProcedure.description,
        imageUrl: selectedProcedure.imageUrl,
      },
    },
  };
}

export default ProcedureDetail;
