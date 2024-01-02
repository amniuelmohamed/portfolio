import About from "@/components/about";
import Hero from "@/components/hero";
import SectionDivider from "@/components/section-divider";

export default function Home() {
    return (
        <main className="max-w-4xl mx-auto px-4">
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider />
        </main>
    );
}
