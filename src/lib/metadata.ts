import { Metadata } from "next";

export function constructMetadata({
  title = "Dinh Hoang Duy - Frontend Developer",
  description = "I am a software engineer with a passion for building scalable and efficient web applications.",
  image = "/uix.png", // Will show in facebook,...
  icons = "/avatar.svg",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@duythenights",
    },
    icons,
    metadataBase: new URL("https://duythenights.vercel.app"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
