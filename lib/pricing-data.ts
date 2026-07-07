export type RestorationRow = {
  size: string;
  paint: number;
  paintDiamond: number;
  diamondOnly: number;
};

export const restorationRows: RestorationRow[] = [
  { size: "R14", paint: 2500, paintDiamond: 4200, diamondOnly: 3600 },
  { size: "R15", paint: 2500, paintDiamond: 4600, diamondOnly: 3600 },
  { size: "R16", paint: 3000, paintDiamond: 4800, diamondOnly: 3600 },
  { size: "R17", paint: 3000, paintDiamond: 5000, diamondOnly: 3600 },
  { size: "R18", paint: 3000, paintDiamond: 5400, diamondOnly: 3600 },
  { size: "R19", paint: 3400, paintDiamond: 5800, diamondOnly: 3600 },
  { size: "R20", paint: 3800, paintDiamond: 6200, diamondOnly: 4000 },
  { size: "R21", paint: 4200, paintDiamond: 6600, diamondOnly: 4000 },
  { size: "R22", paint: 4600, paintDiamond: 7000, diamondOnly: 4000 },
  { size: "R23", paint: 5000, paintDiamond: 7400, diamondOnly: 4000 },
];

export const restorationExtras = ["exhaust", "brakeSupport"] as const;

export type SwapRow = { size: string; price: number };

export const swapRows: SwapRow[] = [
  { size: "R13–R14", price: 400 },
  { size: "R14 cargo", price: 500 },
  { size: "R15", price: 450 },
  { size: "R15 cargo", price: 600 },
  { size: "R16", price: 480 },
  { size: "R16 SUV", price: 580 },
  { size: "R17", price: 500 },
  { size: "R17 SUV", price: 600 },
  { size: "R18", price: 600 },
  { size: "R18 SUV", price: 680 },
  { size: "R19", price: 700 },
  { size: "R19 SUV", price: 800 },
  { size: "R20", price: 900 },
  { size: "R20 SUV", price: 1000 },
  { size: "R21", price: 1100 },
  { size: "R22", price: 1200 },
  { size: "R23", price: 1400 },
];

export const swapExtras = [
  "removeSmall",
  "removeBig",
  "sensor",
  "runflat",
] as const;

export const swapNotes = ["clean1", "clean2", "wash"] as const;
