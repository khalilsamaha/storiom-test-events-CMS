import Link from "next/link"
import Image from "next/image"
import {client, urlFor} from "@/lib/sanity"

type EventItem = {
  title: string
  slug: {current: string}
  status: "past" | "ongoing" | "upcoming"
  startDate?: string
  endDate?: string
  shortDescription?: string
  coverImage?: any
}

const query = `*[_type == "event"] | order(startDate desc) {
  title,
  slug,
  status,
  startDate,
  endDate,
  shortDescription,
  coverImage
}`

export const revalidate = 60

export default async function EventsPage() {
  const events: EventItem[] = await client.fetch(query)

  const groups = [
    {title: "Ongoing Events", status: "ongoing"},
    {title: "Upcoming Events", status: "upcoming"},
    {title: "Past Events", status: "past"},
  ]

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Storiom Saliba</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Events</h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Discover upcoming, ongoing, and past events at Storiom Saliba.
        </p>
      </div>

      {groups.map(group => {
        const groupEvents = events.filter(event => event.status === group.status)

        return (
          <section key={group.status} className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold">{group.title}</h2>

            {groupEvents.length === 0 ? (
              <p className="text-muted-foreground">No events available yet.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {groupEvents.map(event => (
                  <Link
                    key={event.slug.current}
                    href={`/events/${event.slug.current}`}
                    className="overflow-hidden rounded-2xl border bg-background transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {event.coverImage && (
                      <div className="relative h-56">
                        <Image
                          src={urlFor(event.coverImage).width(900).height(600).url()}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {event.startDate}
                        {event.endDate ? ` - ${event.endDate}` : ""}
                      </p>
                      <p className="mt-4 text-muted-foreground">{event.shortDescription}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        )
      })}
    </main>
  )
}
