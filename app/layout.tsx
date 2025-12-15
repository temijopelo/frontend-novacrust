import "./globals.css";
import { Metadata } from "next";
import { funnel, instrument, outfit } from "./font";

export const metadata: Metadata = {
  title: {
    template: "Assessment | %s",
    default: "Assessment",
  },
  description:
    "Send, Spend, Shop Perform cross-border transaction with ease on Cre8core.",
  icons: { icon: "/images/favicon.png" },
  keywords: [
    "cross-border payments",
    "NFC",
    "NFC payments",
    "Contactless payments",
    "QR payments",
    "international money transfer",
    "send money to Africa",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${instrument.variable} ${funnel.variable} bg-[#F8F8F8]`}
      >
        {children}
      </body>
    </html>
  );
}
