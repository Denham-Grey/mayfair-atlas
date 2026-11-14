import type { CSSProperties } from "react";
import { approach } from "@/content/site";

export default function Approach() {
  return (
    <section className="approach section" id="approach" aria-labelledby="approach-title">
      <div className="frame">
        <div className="approach-intro">
          <div>
            <p className="eyebrow section-label" data-reveal="">
              <span>{approach.number}</span> {approach.label}
            </p>
            <h2 id="approach-title" data-reveal="">
              {approach.titleLead}
              <br />
              <em>{approach.titleEmphasis}</em>
            </h2>
          </div>
          <p
            data-reveal=""
            style={{ "--reveal-delay": "80ms" } as CSSProperties}
          >
            {approach.intro}
          </p>
        </div>
        <ol className="principles">
          {approach.principles.map((principle, index) => (
            <li
              key={principle.index}
              data-reveal=""
              style={
                {
                  "--reveal-delay": `${index * 80}ms`,
                } as CSSProperties
              }
            >
              <span className="principle-index" aria-hidden="true">
                {principle.index}
              </span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
