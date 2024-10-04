import Image from "next/image";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Offer from "./components/offer/Offer";

export default function Home(){
  return(
    <div>
      <Nav />
      <Hero />
      <Offer />
    </div>
  );
}