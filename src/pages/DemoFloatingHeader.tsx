import { FloatingHeader } from "@/src/components/ui/floating-header";
import { cn } from '@/src/lib/utils';

export default function DemoFloatingHeader() {
 return (
		<div className="relative w-full px-4 min-h-screen bg-background">
			<FloatingHeader />
			<div className="max-w-4xl mx-auto py-24 text-center">
        <h1 className="text-6xl font-black mb-6">Floating Header Demo</h1>
        <p className="text-xl text-text-secondary">A compact, sticky navbar that floats at the top of the screen.</p>
      </div>

			{/* Dots */}
			<div
				aria-hidden="true"
				className={cn(
					'absolute inset-0 -z-10 size-full',
					'bg-[radial-gradient(color-mix(in_oklab,var(--primary)_0.1,transparent)_2px,transparent_2px)]',
					'bg-[size:24px_24px]',
				)}
			/>
		</div>
	);
}
