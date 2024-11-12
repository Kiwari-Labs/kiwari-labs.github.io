import { Feature } from "@/components/Feature";
import { Footer } from "@/components/Footer";
import { FrequentlyAskedQuestions } from "@/components/FrequentlyAskedQuestions";
import { Hero } from "@/components/Hero";
import { HowDoesItWork } from "@/components/HowDoesItWork";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <div className="flex flex-col container mx-auto">
        <Feature />
        <HowDoesItWork />
        <FrequentlyAskedQuestions />
        <Footer />
      </div>
    </div>
  );
}
