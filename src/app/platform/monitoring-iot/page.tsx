import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Monitoring & IoT",
  description: "Real-time IoT sensor networks monitoring groundwater levels and potable water quality.",
};

export default function MonitoringIotPage() {
  return (
    <>
      <PageHero eyebrow="Platform" heroType="E" title="Monitoring and IoT" description="Station operations, device management, and measurement-quality workflows." />
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <p className="mb-6 inline-block rounded-full border border-gia-teal/40 bg-gia-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gia-blue">
          Demonstration data
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "station map",
            "device status",
            "measurements",
            "quality flags",
            "calibration",
            "alerts",
            "maintenance",
            "export",
          ].map((item) => (
            <Card key={item} className="h-full">
              <p className="text-sm font-semibold capitalize text-gia-blue">{item}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/platform/maps" className="rounded-md border border-gia-blue px-5 py-3 text-sm font-semibold text-gia-blue">Station map</Link>
          <Link href="/platform/access" className="rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white">Request access</Link>
        </div>
      </section>
    </>
  );
}
