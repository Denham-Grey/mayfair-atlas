import Image from "next/image";
import { hero } from "@/content/site";
import ArrowIcon from "./ArrowIcon";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image
        className="hero-image"
        src="/assets/ridgeline.jpg"
        alt=""
        fill
        sizes="100vw"
        fetchPriority="high"
      />
      <div className="frame hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-label">{hero.eyebrow}</p>
          <h1 id="hero-title">
            {hero.titleLead}
            <br />
            <em>{hero.titleEmphasis}</em>
          </h1>
          <p className="hero-deck">{hero.deck}</p>
          <a className="text-link light" href="#approach">
            {hero.cta} <ArrowIcon />
          </a>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span></span> {hero.indexLabel}{" "}
          <span className="hero-number">{hero.indexNumber}</span>
        </div>
      </div>
    </section>
  );
}
