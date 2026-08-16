"use client";

import Image from "next/image";
import { useRef } from "react";
import { referenceRigArtwork } from "../../lib/brand/referenceRigArtwork";

/**
 * Premium hero composition: dimensional RIG monogram, warm orb and three
 * floating value cards. Motion is pointer-only and reduced-motion friendly.
 */
export function HeroGraphic() {
  const wrapRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-x", `${(y * -8).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(x * 10).toFixed(2)}deg`);
    el.style.setProperty("--shift-x", `${(x * 16).toFixed(2)}px`);
    el.style.setProperty("--shift-y", `${(y * 16).toFixed(2)}px`);
  }

  function handlePointerLeave() {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--shift-x", "0px");
    el.style.setProperty("--shift-y", "0px");
  }

  return (
    <div
      ref={wrapRef}
      className="hero-orb"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="Reserve Investment Group monogram with planning themes"
      role="img"
    >
      <div className="hero-orb-shape" aria-hidden="true" />
      <div className="hero-rig-mark" aria-hidden="true">
        <Image
          className="hero-rig-mark-image"
          src={referenceRigArtwork}
          alt=""
          width={335}
          height={315}
          unoptimized
        />
      </div>
      <div className="hero-float-card hero-float-card-1">
        <p className="hero-float-card-title">Clarity first</p>
        <p className="hero-float-card-item"><span className="hero-float-card-dot" aria-hidden="true" />Understand the whole picture</p>
      </div>
      <div className="hero-float-card hero-float-card-2">
        <p className="hero-float-card-title">Your priorities</p>
        <p className="hero-float-card-item"><span className="hero-float-card-dot" aria-hidden="true" />Plan around real life</p>
      </div>
      <div className="hero-float-card hero-float-card-3">
        <p className="hero-float-card-title">Long-term focus</p>
        <p className="hero-float-card-item"><span className="hero-float-card-dot" aria-hidden="true" />Decisions with perspective</p>
      </div>
    </div>
  );
}
