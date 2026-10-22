"use client";

import { buildFloatingWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const waUrl = buildFloatingWhatsAppUrl();

  return (
    <aside
      aria-label="Pusat Chat WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp dengan tim PT Cakra Indo Yuma (buka di tab baru)"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-emerald-500 focus-visible:outline-emerald-600"
      >
        <span className="sr-only">Hubungi via WhatsApp</span>
        {/* WhatsApp Icon */}
        <svg
          className="h-7 w-7 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.5 2 2.016 6.484 2.016 12.016c0 1.766.453 3.484 1.328 5L2 22l5.125-1.344c1.469.813 3.125 1.359 4.906 1.359 5.531 0 10.016-4.484 10.016-10.016C22.047 6.484 17.562 2 12.031 2zm5.828 14.172c-.25.688-1.422 1.297-1.984 1.359-.531.063-1.219.094-1.953-.141-.453-.141-1.047-.344-1.813-.672-3.188-1.375-5.266-4.594-5.422-4.813-.156-.203-1.281-1.703-1.281-3.25 0-1.547.813-2.313 1.094-2.625.281-.313.625-.391.828-.391.203 0 .422.016.594.016.188 0 .438-.078.688.516.25.609.859 2.094.938 2.234.078.141.125.313.031.5-.094.203-.141.313-.281.484-.141.172-.313.375-.438.5-.141.141-.297.297-.125.594.172.297.766 1.266 1.641 2.047 1.125 1 2.078 1.313 2.375 1.453.297.141.469.125.641-.078.172-.203.734-.859.938-1.156.203-.297.406-.25.688-.141.281.094 1.781.844 2.094 1 .313.156.516.234.594.359.078.141.078.781-.172 1.469z" />
        </svg>

        {/* Tooltip on hover */}
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-md bg-ink-900 px-3 py-1.5 text-xs font-medium text-white shadow-md sm:group-hover:inline-block">
          Konsultasi Cepat via WhatsApp
        </span>
      </a>
    </aside>
  );
}
