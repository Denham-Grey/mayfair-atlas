import type { CSSProperties } from "react";
import { contact } from "@/content/site";

export default function Contact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="frame contact-inner">
        <p className="eyebrow section-label" data-reveal="">
          <span>{contact.number}</span> {contact.label}
        </p>
        <h2
          id="contact-title"
          data-reveal=""
          style={{ "--reveal-delay": "60ms" } as CSSProperties}
        >
          {contact.titleLead} <em>{contact.titleEmphasis}</em>
        </h2>
        <address
          className="contact-details"
          data-reveal=""
          style={{ "--reveal-delay": "140ms" } as CSSProperties}
        >
          {contact.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </address>
      </div>
    </section>
  );
}
