import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayfair Atlas | Boutique Investment Firm",
  description:
    "Mayfair Atlas is a boutique investment firm. A considered approach to capital, with a long view.",
  openGraph: {
    title: "Mayfair Atlas | Boutique Investment Firm",
    description: "A considered approach to capital, with a long view.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121b25",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'document.documentElement.classList.add("js","has-js")',
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
