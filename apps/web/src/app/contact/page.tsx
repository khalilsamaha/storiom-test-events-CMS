export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">

      <div className="pt-12 pb-8">
        <h1 className="font-display text-5xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-2 text-muted-foreground font-light">Visit us, call us, or send us a message.</p>
      </div>

      {/* Contact info cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pb-8">
        {[
          {
            icon: "📍",
            title: "Address",
            id: "location",
            lines: ["Kornet Chehwan", "Antelias–Bikfaya Road, Lebanon"],
          },
          {
            icon: "🕐",
            title: "Opening hours",
            id: "hours",
            lines: ["Mon–Sat: 8:00 AM – 9:30 PM", "Sunday: 8:30 AM – 9:30 PM", "L1 & L2 close at 9:00 PM"],
          },
          {
            icon: "📞",
            title: "Phone",
            id: "phone",
            lines: ["+961 4 922 934 / 935"],
            link: "tel:+96149229345",
          },
          {
            icon: "✉️",
            title: "Email",
            id: "email",
            lines: ["info@storiomsaliba.com"],
            link: "mailto:info@storiomsaliba.com",
          },
        ].map(({ icon, title, id, lines, link }) => (
          <div key={id} id={id} className="rounded-2xl bg-card border border-border p-6 flex gap-4">
            <div className="h-10 w-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-lg shrink-0">
              {icon}
            </div>
            <div>
              <div className="font-display text-lg font-semibold mb-1">{title}</div>
              {lines.map((line, i) =>
                link && i === 0 ? (
                  <a key={line} href={link} className="block text-sm text-brand-teal hover:underline font-medium">
                    {line}
                  </a>
                ) : (
                  <p key={line} className="text-sm text-muted-foreground font-light">{line}</p>
                )
              )}
            </div>
          </div>
        ))}
      </div>
      <div id="map" className="pb-16">
        <div className="rounded-2xl overflow-hidden border border-border" style={{ height: "420px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.797240266813!2d35.62800957636583!3d33.920617673206955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f3ee76b1a8f63%3A0x825abedf30a3b935!2sStoriom%20-%20Supercenter!5e0!3m2!1sen!2sfr!4v1773360084058!5m2!1sen!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Storiom — Kornet Chehwan"
          />
        </div>
      </div>

    </div>
  )
}
