import Image from "next/image";
import type { CSSProperties } from "react";
import { firm } from "@/content/site";
import ArrowIcon from "./ArrowIcon";

export default function Firm() {
  return (
    <section className="firm section" id="firm" aria-labelledby="firm-title">
      <div className="frame">
        <p className="eyebrow section-label firm-heading" data-reveal="">
          <span>{firm.number}</span> {firm.label}
        </p>
      </div>
      <div className="frame firm-grid">
        <figure
          className="firm-figure"
          data-reveal=""
          style={{ "--reveal-delay": "80ms" } as CSSProperties}
        >
          <Image
            src={firm.figure.src}
            width={firm.figure.width}
            height={firm.figure.height}
            sizes="(max-width: 760px) 100vw, 45vw"
            alt={firm.figure.alt}
          />
          <figcaption>
            <span>{firm.figure.captionIndex}</span>
            <span>{firm.figure.captionLabel}</span>
          </figcaption>
        </figure>
        <div className="firm-copy">
          <h2
            id="firm-title"
            data-reveal=""
            style={{ "--reveal-delay": "40ms" } as CSSProperties}
          >
            {firm.titleLead}
            <br />
            <em>{firm.titleEmphasis}</em>
          </h2>
          {firm.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              data-reveal=""
              style={
                {
                  "--reveal-delay": `${100 + index * 60}ms`,
                } as CSSProperties
              }
            >
              {paragraph}
            </p>
          ))}
          <a
            className="text-link"
            href="#approach"
            data-reveal=""
            style={{ "--reveal-delay": "240ms" } as CSSProperties}
          >
            {firm.cta} <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
