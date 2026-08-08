import { Clients } from "@/components/hashtag_components/clients";
import { DomainExpertise } from "@/components/hashtag_components/edge/DomainExpertise";
import { AccredianEdge } from "@/components/hashtag_components/edge/edge";
import { HomePage } from "@/components/hashtag_components/home";
import { Stats } from "@/components/hashtag_components/stats";
import { StrategicSkillEnhancement } from "@/components/hashtag_components/edge/strategicskill";
import { TailoredCourseSegmentation } from "@/components/hashtag_components/edge/tailor";
import Navbar from "@/components/navbar";
import { TheCatFramework } from "@/components/hashtag_components/cat-framework";
import { DeliverResults } from "@/components/hashtag_components/deliver-result";
import { FAQ } from "@/components/hashtag_components/faq";
import { Testimonials } from "@/components/hashtag_components/testimonials";
import { TrainingSolutions } from "@/components/training-solution";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <section id="home">
          <HomePage />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="clients">
          <Clients />
        </section>
        <section id="edge">
          <AccredianEdge />
          <DomainExpertise />
          <TailoredCourseSegmentation />
          <StrategicSkillEnhancement />
        </section>
        <section id="cat">
          <TheCatFramework />
        </section>
        <section id="works">
          <DeliverResults />
        </section>
        <section id="faqs">
          <FAQ />
        </section>
        <section id="testimonials">
          <Testimonials />
          <TrainingSolutions />
        </section>
        <Footer />
      </div>
    </>
  );
}
