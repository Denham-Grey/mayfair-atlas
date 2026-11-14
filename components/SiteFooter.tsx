import Image from "next/image";
import { footer } from "@/content/site";
import ArrowIcon from "./ArrowIcon";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="frame footer-inner">
        <a className="brand" href="#top" aria-label="Mayfair Atlas, back to top">
          <Image
            src="/assets/mayfair-atlas-logo.svg"
            width={538}
            height={117}
            alt=""
          />
        </a>
        <small>{footer.copyright}</small>
        <a className="back-top" href="#top">
          Back to top <ArrowIcon />
        </a>
      </div>
    </footer>
  );
}
