import Card from "@/components/ui/Card";

interface InnovationQuestionGridProps {
  problem: string;
  solution: string;
  audience: string;
  research: string;
  readiness: string;
  engagement: string;
}

export default function InnovationQuestionGrid({
  problem,
  solution,
  audience,
  research,
  readiness,
  engagement,
}: InnovationQuestionGridProps) {
  const sections = [
    { title: "1. What problem is addressed?", body: problem },
    { title: "2. What solution does GIA provide?", body: solution },
    { title: "3. Who is it for?", body: audience },
    { title: "4. What research supports it?", body: research },
    { title: "5. What is its readiness status?", body: readiness },
    { title: "6. How can someone engage?", body: engagement },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {sections.map((section) => (
        <Card key={section.title} className="h-full">
          <h2 className="text-lg font-semibold text-gia-blue">{section.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">{section.body}</p>
        </Card>
      ))}
    </div>
  );
}
