export const EXAMPLE_CONSTANT = "This is an example constant.";

export const PAY_CURRENCY_UNIT = [
  {
    name: "ETH",
    img: "/images/01.png",
  },
  { name: "BTC", img: "/images/bnb.png" },
  { name: "LTC", img: "/images/meta.png" },
  { name: "XRP", img: "/images/01.png" },
  { name: "BCH", img: "/images/rainbow.png" },
];
export const RECEIVE_COUNTRY = [
  {
    name: "NGN",
    img: "/images/flag.png",
  },
  { name: "CAD", img: "/images/bnb.png" },
  { name: "GBP", img: "/images/meta.png" },
  { name: "USA", img: "/images/01.png" },
  { name: "JPN", img: "/images/rainbow.png" },
];

export const PAYMENT_OPTIONS = [
  {
    name: "Metamask",
    img: "/images/meta.png",
  },
  { name: "Rainbow", img: "/images/rainbow.png" },
  { name: "WalletConnect", img: "/images/wallet.png" },
  {
    name: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
    img: "/icons/Wallet.svg",
  },
];

export const TABS: Tab[] = [
  { id: "cryptoToCash", label: "Crypto to cash" },
  { id: "cashToCrypto", label: "Cash to crypto" },
  { id: "cryptoToFiatLoan", label: "Crypto to fiat loan" },
];

export const COMING_SOON_MESSAGES: Record<string, string> = {
  cashToCrypto:
    "Cash to Crypto is almost here.\nEnter your email and we'll let you know the moment it's live.",
  cryptoToFiatLoan:
    "Crypto to Fiat Loan is almost here.\nEnter your email and we'll let you know the moment it's live.",
};
