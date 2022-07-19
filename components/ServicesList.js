import Link from "next/link";
import classes from "../components/ServicesList.module.css";

const ServicesList = (props) => {
  console.log(props.procedures);
  return (
    <nav className={classes.container}>
      {props.procedures.map((p) => (
        <Link href={"/services/" + p.id}>
          <li key={p.id}>{p.title}</li>
        </Link>
      ))}
    </nav>
  );
};

export default ServicesList;
