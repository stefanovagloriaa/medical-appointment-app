import Link from "next/link";

const ServicesList = (props) => {
  console.log(props.procedures);
  return (
    <nav>
      {props.procedures.map((p) => (
        <li key={p.id}>
          <Link href={"/services/" + p.id}>{p.title}</Link>
        </li>
      ))}
    </nav>
  );
};

export default ServicesList;
