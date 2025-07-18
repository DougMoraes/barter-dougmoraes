import Partners from "@/components/Partners";
import Header from "@/components/Header";
import Section from "@/components/Section";
import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="flex flex-col flex-grow">
        <Header />
        <SignUp />
        <Partners />
      </div>
      <Section/>
    </main>
  );
}
