type TabType = "cryptoToCash" | "cashToCrypto" | "cryptoToFiatLoan";

interface Tab {
  id: TabType;
  label: string;
}

interface StepData {
  [key: string]: any;
}
