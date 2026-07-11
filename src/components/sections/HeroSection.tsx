import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gia-blue text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gia-sand">
            Groundwater Institute of Africa
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Securing potable water for Africa through groundwater science
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gia-light">
            GIA advances research, innovation, and partnerships that safeguard
            groundwater resources and expand access to safe, potable water
            across the continent.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/research" variant="secondary" size="lg">
              Explore Our Research
            </Button>
            <Button href="/partnerships/become-a-partner" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Become a Partner
            </Button>
          </div>
        </div>
        <div className="relative hidden min-h-[320px] lg:block">
          {/* TODO: Replace with real hero photograph */}
          <Image
            src="https://placehold.co/800x600?text=GIA+Field+Research"
            alt="GIA field researchers studying a groundwater site"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
