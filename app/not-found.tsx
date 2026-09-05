import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden mesh-light">
      <div aria-hidden className="pointer-events-none absolute top-10 right-10 w-72 h-72 rounded-full bg-blue/10 blur-3xl animate-floatSlow" />
      <div className="relative max-w-content mx-auto px-6 md:px-10 py-24 w-full animate-fadeUp">
        <p className="eyebrow mb-6">404</p>
        <h1 className="text-5xl md:text-7xl font-display font-semibold text-gradient">
          Page Not Found
        </h1>
        <p className="mt-5 text-muted text-lg max-w-md leading-relaxed">
          The page you're looking for doesn't exist, or may have moved.
        </p>
        <Link href="/" className="btn-blue mt-9">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
