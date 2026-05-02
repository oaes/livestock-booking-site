// import Banner from "@/components/homePage/Banner";
import Banner from "../components/homepage/Banner.jsx"
import FeaturedAnimals from "@/components/homePage/FeaturedAnimals";
import TipsAndBreeds from "@/components/homePage/TipsAndBreeds";


export default function Home() {
  return (
     <div>
      <Banner></Banner>
      <FeaturedAnimals></FeaturedAnimals>
      <TipsAndBreeds></TipsAndBreeds>
     
     </div>
  );
}