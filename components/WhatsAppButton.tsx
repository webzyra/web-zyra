import { CONTACT } from "@/lib/data";

export default function WhatsAppButton({
  message,
  className = "btn-blue w-full",
  label = "Contact via WhatsApp",
}: {
  message?: string;
  className?: string;
  label?: string;
}) {
  const href = `https://wa.me/${CONTACT.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.6 6.32A8.86 8.86 0 0 0 12 4.2 8.83 8.83 0 0 0 3.17 13a8.7 8.7 0 0 0 1.19 4.4L3 21l3.7-1.32A8.85 8.85 0 0 0 12 21.05 8.83 8.83 0 0 0 20.83 13a8.77 8.77 0 0 0-3.23-6.68Zm-5.6 13.5a7.3 7.3 0 0 1-3.73-1.03l-.27-.16-2.2.78.72-2.15-.18-.28A7.32 7.32 0 1 1 12 19.82Zm4.01-5.47c-.22-.11-1.3-.64-1.5-.72s-.35-.11-.5.11-.57.72-.7.87-.26.17-.48.06a6 6 0 0 1-1.77-1.09 6.6 6.6 0 0 1-1.23-1.53c-.13-.22 0-.34.1-.45s.22-.26.32-.39a1.5 1.5 0 0 0 .22-.37.4.4 0 0 0 0-.39c-.06-.11-.5-1.2-.68-1.65s-.36-.37-.5-.38h-.43a.82.82 0 0 0-.6.28 2.5 2.5 0 0 0-.78 1.85 4.35 4.35 0 0 0 .91 2.3 9.95 9.95 0 0 0 3.8 3.36c.53.23.94.36 1.26.47.53.17 1.01.14 1.39.09.43-.07 1.3-.53 1.48-1.04s.19-.95.13-1.04-.2-.14-.42-.25Z" />
      </svg>
      {label}
    </a>
  );
}
