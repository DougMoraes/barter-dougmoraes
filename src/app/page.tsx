import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-full flex flex-col">
        <Header />
        <Footer />
      </div>
      <div className="hidden lg:flex w-1/3 bg-[var(--color-dark-background)] px-6 md:px-12 py-10 flex-col text-white">
      </div>
    </main>
  );
}
