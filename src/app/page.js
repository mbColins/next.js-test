import Image from "next/image";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import CategoryBar from "./components/categorybar";
import TopProducts from "./components/topProducts";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100  ">
      <Navbar />
      <Carousel />
      <div className="bg-white w-full my-5 h-[50px] "> <h1 className="p-5 text-2xl text-blue-950 font-bold"> Top Products </h1> </div>
      <TopProducts />
      <div className="bg-white w-full my-5 h-[50px] "></div>
      <Footer />
    </main>
  );
}
