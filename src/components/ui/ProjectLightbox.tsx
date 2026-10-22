"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export interface ProjectLightboxProps {
  images: { src: string; alt: string }[];
}

export function ProjectLightbox({ images }: ProjectLightboxProps) {
  const [index, setIndex] = useState(-1);

  if (images.length === 0) return null;

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setIndex(idx)}
            className="group relative aspect-16/10 cursor-pointer overflow-hidden rounded-card border border-ink-200 bg-cream-100 shadow-xs focus-visible:outline-brand-600"
            tabIndex={0}
            role="button"
            aria-label={`Buka gambar layar penuh: ${img.alt}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIndex(idx);
              }
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-brand-950 shadow-md">
                Perbesar Gambar &rarr;
              </span>
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink-950/70 to-transparent p-3 text-white text-xs">
              <p className="line-clamp-1">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-ink-500 italic">
        Klik foto mana saja untuk melihat tampilan layar penuh (gunakan tombol Esc atau tanda silang untuk menutup).
      </p>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </div>
  );
}
