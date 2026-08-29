import { CONTACT } from "@/lib/data";

export default function EmailButton({
  subject,
  body,
  className = "btn-outline w-full",
  label = "Contact via Email",
}: {
  subject?: string;
  body?: string;
  className?: string;
  label?: string;
}) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  const href = `mailto:${CONTACT.email}${query ? `?${query}` : ""}`;

  return (
    <a href={href} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
      {label}
    </a>
  );
}
