import localFont from "next/font/local";

export const outfit = localFont({
  variable: "--font-outfit", // <— name of the CSS custom property
  display: "swap",
  src: [
    {
      path: "../public/fonts/Outfit-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
});

export const instrument = localFont({
  variable: "--font-instrument", // <— name of the CSS custom property
  display: "swap",
  src: [
    {
      path: "../public/fonts/InstrumentSans-VariableFont_wdth,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
});

export const funnel = localFont({
  variable: "--font-funnel", // <— name of the CSS custom property
  display: "swap",
  src: [
    {
      path: "../public/fonts/FunnelDisplay-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
});
