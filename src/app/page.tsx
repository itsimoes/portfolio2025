import styles from "./page.module.css";
import Homepage from "@/components/Home/Homepage";
import Portfolio from "@/components/Portfolio/Portfolio";
import Clients from "@/components/Clients/Clients";

export default function Home() {
  return (
    <>      
      <Homepage />
      <Portfolio />
      <Clients />    
    </>
  );
}
