import About from "@/components/personal-web/About";
import Projects from "@/components/personal-web/Projects";
import Skills from "@/components/personal-web/Skills";
import SectionSeparator from "@/components/SectionSeparator";

export default function Home() {
  return (
    <main className="bg-whiteivory-500 min-h-screen w-full flex flex-col items-center justify-center">
      <About />
      <SectionSeparator
        numberFirst={false}
        number="01"
        firstTitle="RECENT"
        secondTitle="PROJECTS"
      />
      <Projects />
      <SectionSeparator
        numberFirst={true}
        number="02"
        firstTitle="SKILLS &"
        secondTitle="EXPERTISE"
      />
      <Skills />
    </main>
  );
}
