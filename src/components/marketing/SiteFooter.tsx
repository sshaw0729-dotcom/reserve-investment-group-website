import { DisclosureBlock } from "./DisclosureBlock";

/**
 * Site-wide footer. Disclosure language reflects Reserve Investment Group,
 * Inc.'s confirmed regulatory status (not a registered investment adviser or
 * broker-dealer). See DISCLOSURE-INVENTORY.md. Do not remove the
 * DisclosureBlock.
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
        Reserve Investment Group, Inc. is not a registered investment adviser or broker-dealer. Insurance products, where offered, are provided under state insurance license number 1293258.
        This website is for informational purposes and does not constitute
        an offer or solicitation in any jurisdiction where the firm is not
        appropriately registered.
      </DisclosureBlock>
    </footer>
  );
}
