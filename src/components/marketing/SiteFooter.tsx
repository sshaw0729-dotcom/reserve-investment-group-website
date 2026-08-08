import { DisclosureBlock } from "./DisclosureBlock";

/**
 * Site-wide footer. Entity disclosure and Form CRS link are placeholders
 * pending compliance confirmation — see MISSING-INFORMATION-REGISTER.md
 * and DISCLOSURE-INVENTORY.md. Do not remove the DisclosureBlock or ship
 * this footer with the placeholder text still in place.
 */
export function SiteFooter() {
  return (
    <footer className="site-footer container">
      <nav aria-label="Legal">
        <a href="/disclosures/">Form CRS &amp; Disclosures</a>
        <a href="/privacy/">Privacy Policy</a>
        <a href="/terms/">Terms of Use</a>
        <a href="/accessibility/">Accessibility Statement</a>
      </nav>
      <DisclosureBlock>
        Reserve Investment Group, Inc. [APPROVED BROKER-DEALER DISCLOSURE]
        [APPROVED INVESTMENT-ADVISER DISCLOSURE]. [FORM CRS LINK REQUIRED].
        This website is for informational purposes and does not constitute
        an offer or solicitation in any jurisdiction where the firm is not
        appropriately registered.
      </DisclosureBlock>
    </footer>
  );
}
