import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "we codez",
    description:
      "WeCodez, geliştirici ve tasarımcılardan oluşan bir şirkettir. web ve mobil uygulamalar geliştirir.",
    short_name: "we codez",
    start_url: "/",
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
