import { cn } from "@/src/lib/utils";
import { GridPattern } from "@/src/components/ui/grid-pattern";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { Section } from "@/src/components/ui/Section";

export default function DemoGridPattern() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow pt-32">
        <Section>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-4">Grid Pattern Showcase</h1>
            <p className="text-xl text-text-secondary">Flexible background patterns for your UI sections.</p>
          </div>

          <div className="grid gap-12 max-w-6xl mx-auto">
            {/* Variant 1: Dotted/Squares */}
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-none border border-white/10 bg-surface md:shadow-xl">
              <p className="z-10 whitespace-pre-wrap text-center text-5xl font-black tracking-tighter text-text-primary">
                Radial Centered Grid
              </p>
              <GridPattern
                squares={[
                  [4, 4],
                  [5, 1],
                  [8, 2],
                  [5, 3],
                  [5, 5],
                  [10, 10],
                  [12, 15],
                  [15, 10],
                  [10, 15],
                ]}
                className={cn(
                  "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                  "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
              />
            </div>

            {/* Variant 2: Linear Gradient */}
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-none border border-white/10 bg-surface md:shadow-xl">
              <p className="z-10 whitespace-pre-wrap text-center text-5xl font-black tracking-tighter text-text-primary">
                Linear Fade Grid
              </p>
              <GridPattern
                width={20}
                height={20}
                x={-1}
                y={-1}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
              />
            </div>

            {/* Variant 3: Dashed */}
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-none border border-white/10 bg-surface md:shadow-xl">
              <p className="z-10 whitespace-pre-wrap text-center text-5xl font-black tracking-tighter text-text-primary">
                Dashed Line Grid
              </p>
              <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                  "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
              />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
