import Image from "next/image";
import classes from "./page.module.css";

export default function TestPage() {
  return (
    <div className={classes.testClass}>
      <h1>Testowy tytuł</h1>
      <Image src="/teto.jpg" alt="Teto" width="444" height="444"/>
    </div>
  );
}
