import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const isTurkish =
    typeof navigator !== "undefined" && navigator.language === "tr";

  return {
    name: "we codez",
    description: isTurkish
      ? "We codez, geliştirici ve tasarımcılardan oluşan bir şirkettir. web ve mobil uygulamalar geliştirir."
      : "We codez is a company of developers and designers. It develops web and mobile applications.",
    short_name: "we codez",
    start_url: "/",
    lang: isTurkish ? "tr" : "en",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    icons: [
      {
        type: "image/svg+xml",
        sizes: "32x32",
        src: "/we.svg",
      },
      {
        type: "image/x-icon",
        sizes: "16x16",
        src: "/we.svg",
      },
      {
        type: "apple-touch-icon",
        sizes: "180x180",
        src: "/we.svg",
      },
    ],
  };
}
