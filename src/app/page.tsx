import styles from "./page.module.css";
import Homepage from "@/components/Home/Homepage";
import Portfolio from "@/components/Portfolio/Portfolio";
import Clients from "@/components/Clients/Clients";
import Navbar from "@/components/Navbar/Navbar";
import Support from "@/components/Support/Support";

export default function Home() {
  return (
    <>
      {/* <Navbar />
      <Homepage />
      <Portfolio />
      <Clients /> */}
      <Support />
    </>
  );
}
