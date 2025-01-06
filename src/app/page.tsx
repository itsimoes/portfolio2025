import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "@/components/Home/Homepage";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
  return (
    <>
      {/* <Homepage /> */}
      <Portfolio />
    </>
  );
}
