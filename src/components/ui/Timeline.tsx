export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

/** Vertical timeline used on the About > History page. */
export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <ol className="relative border-l border-gia-teal/30 pl-6">
      {events.map((event) => (
        <li key={`${event.year}-${event.title}`} className="mb-8 last:mb-0">
          <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-gia-teal" />
          <span className="text-sm font-semibold text-gia-teal">{event.year}</span>
          <h3 className="text-lg font-semibold text-gia-blue">{event.title}</h3>
          <p className="text-sm text-gray-600">{event.description}</p>
        </li>
      ))}
    </ol>
  );
}
