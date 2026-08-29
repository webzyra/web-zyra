import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Webzyra — Professional Website Design & Development",
    short_name: "Webzyra",
    description:
      "Webzyra builds professional, responsive websites and ecommerce experiences for businesses, brands, and individuals.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF9",
    theme_color: "#0B0D12",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
