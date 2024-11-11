import { Footer } from "@/components/Footer";
import { FrequentlyAskedQuestions } from "@/components/FrequentlyAskedQuestions";
import { HowDoesItWork } from "@/components/HowDoesItWork";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col container mx-auto">
      <HowDoesItWork />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  );
}
