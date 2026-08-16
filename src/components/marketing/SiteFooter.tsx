import Image from "next/image";
import Link from "next/link";
import { referenceRigArtwork } from "../../lib/brand/referenceRigArtwork";
import { DisclosureBlock } from "./DisclosureBlock";

export function SiteFooter() {
  return (
    <footer className="site-footer container">
      <div className="site-footer-top">
        <Link href="/" className="site-footer-brand" aria-label="Reserve Investment Group, Inc. home">
          <span className="site-brand-mark site-brand-mark-footer" aria-hidden="true">
            <Image
              className="site-brand-mark-image"
              src={referenceRigArtwork}
              alt=""
              width={335}
              height={315}
              unoptimized
            />
          </span>
          <span>Reserve Investment Group, Inc.</span>
        </Link>
        <nav aria-label="Legal">
          <Link href="/disclosures/">Form CRS &amp; Disclosures</Link>
          <Link href="/privacy/">Privacy Policy</Link>
          <Link href="/terms/">Terms of Use</Link>
          <Link href="/accessibility/">Accessibility Statement</Link>
        </nav>
      </div>
      <DisclosureBlock>
        Reserve Investment Group, Inc. is not a registered investment adviser or broker-dealer. Insurance products, where offered, are provided under state insurance license number 1293258.
        This website is for informational purposes and does not constitute
        an offer or solicitation in any jurisdiction where the firm is not
        appropriately registered.
      </DisclosureBlock>
    </footer>
  );
}
