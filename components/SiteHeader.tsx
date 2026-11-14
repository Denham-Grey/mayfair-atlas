import Image from "next/image";
import { navItems } from "@/content/site";
import MobileNav from "./MobileNav";

export default function SiteHeader() {
  return (
    <header className="site-header" id="top">
      <div className="frame masthead">
        <a className="brand" href="#top" aria-label="Mayfair Atlas home">
          <Image
            src="/assets/mayfair-atlas-logo.svg"
            width={538}
            height={117}
            alt=""
          />
        </a>
        <MobileNav items={navItems} />
      </div>
    </header>
  );
}
