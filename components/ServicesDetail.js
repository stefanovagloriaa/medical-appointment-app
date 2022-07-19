import classes from "../components/ServicesDetail.module.css";

const ServicesDetail = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <img src={props.serviceDetail.procedureData.imageUrl}></img>
        <h1>{props.serviceDetail.procedureData.title}</h1>
        <p>{props.serviceDetail.procedureData.description}</p>
      </div>
    </div>
  );
};

export default ServicesDetail;
