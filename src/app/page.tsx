import Image from "next/image";
import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 my-6">
      <HeroSection/>
      <LatestQuestions/>
      <TopContributers/>
    </main>
  );
}
