import type { CSSProperties } from "react";
import { lens } from "@/content/site";

export default function InvestmentLens() {
  return (
    <section className="lens section" id="investment-lens" aria-labelledby="lens-title">
      <div className="frame lens-grid">
        <div className="lens-heading">
          <p className="eyebrow section-label" data-reveal="">
            <span>{lens.number}</span> {lens.label}
          </p>
          <h2 id="lens-title" data-reveal="">
            {lens.titleLead} <em>{lens.titleEmphasis}</em>
          </h2>
        </div>
        <ol className="lens-list" role="list">
          {lens.items.map((item, index) => (
            <li
              key={item.index}
              data-reveal=""
              style={
                {
                  "--reveal-delay": `${index * 80}ms`,
                } as CSSProperties
              }
            >
              <span className="principle-index" aria-hidden="true">
                {item.index}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
