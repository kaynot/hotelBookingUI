import Image from "next/image";
import { Nav } from "./components/nav";
import { Intro } from "./components/intro";
import { DatePanel } from "./components/datePanel";
import { Services } from "./components/services";
import { Room } from "./components/room";
import { About } from "./components/about";
import { Review } from "./components/review";
import { ContactMe } from "./components/contact";
import { Footer } from "./components/footer";


export default function Home() {
  return (
    <main className="h-screen w-full">
      <Nav />
      <Intro/>
      <Services/>
      <Room/>
      <About/>
      <Review/>
      <ContactMe/>
      <Footer/>
      
      
       
    </main>
  );
}
