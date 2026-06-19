import Image from "next/image"
import {notFound} from "next/navigation"
import {PortableText} from "next-sanity"
import {client, urlFor} from "@/lib/sanity"

type EventItem = {
  title: string
  startDate?: string
  endDate?: string
  description?: any[]
  coverImage?: any
  gallery?: any[]
}

const query = `*[_type == "event" && slug.current == $slug && published == true][0] {
  title,
  startDate,
  endDate,
  description,
  coverImage,
  gallery
}`

export const revalidate = 60

export default async function EventDetailsPage({params}: {params: {slug: string}}) {
  const event: EventItem | null = await client.fetch(query, {slug: params.slug})

  if (!event) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Event</p>

      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">{event.title}</h1>

      <p className="mt-4 text-muted-foreground">
        {event.startDate}
        {event.endDate ? ` - ${event.endDate}` : ""}
      </p>

      {event.coverImage && (
        <div className="relative mt-10 h-[420px] overflow-hidden rounded-3xl">
          <Image
            src={urlFor(event.coverImage).width(1400).height(900).url()}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {event.description && (
        <div className="prose prose-neutral mt-10 max-w-none">
          <PortableText value={event.description} />
        </div>
      )}

      {event.gallery && event.gallery.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold">Photos</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {event.gallery.map((image, index) => (
              <div key={index} className="relative h-72 overflow-hidden rounded-2xl">
                <Image
                  src={urlFor(image).width(900).height(700).url()}
                  alt={`${event.title} photo ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
