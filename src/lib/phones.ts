export interface PhoneSpecs {
  id: string;
  name: string;
  brand: string;
  releaseYear: number;
  releaseMonth: number;
  display: {
    size: string;
    resolution: string;
    type: string;
    refreshRate: number;
    protection: string;
  };
  processor: {
    name: string;
    cpu: string;
    gpu: string;
    process: string;
  };
  memory: {
    ram: string[];
    storage: string[];
  };
  camera: {
    rear: Array<{
      mp: number;
      type: string;
      aperture: string;
      features: string[];
    }>;
    front: {
      mp: number;
      aperture: string;
      features: string[];
    };
    video: string[];
  };
  battery: {
    capacity: number;
    charging: {
      wired: string;
      wireless?: string;
      reverse?: string;
    };
  };
  os: {
    launch: string;
    current: string;
  };
  dimensions: {
    height: number;
    width: number;
    thickness: number;
    weight: number;
  };
  build: {
    frame: string;
    back: string;
    ipRating?: string;
  };
  connectivity: {
    network: string[];
    wifi: string;
    bluetooth: string;
    nfc: boolean;
    usb: string;
    audioJack: boolean;
  };
  features: {
    biometrics: string[];
    sensors: string[];
    colors: string[];
  };
  price: {
    launch: { usd: number; eur: number; gbp: number };
    current?: { usd: number; eur: number; gbp: number };
  };
  scores?: {
    overall?: number;
    performance?: number;
    camera?: number;
    battery?: number;
    display?: number;
    gaming?: number;
  };
  sources?: {
    nanoreview?: string;
    gsmarena?: string;
    official?: string;
    notebookcheck?: string;
    other?: string[];
  };
}

export const phones: PhoneSpecs[] = [
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    releaseYear: 2023,
    releaseMonth: 9,
    display: {
      size: "6.7\"",
      resolution: "2796 x 1290",
      type: "Super Retina XDR OLED",
      refreshRate: 120,
      protection: "Ceramic Shield",
    },
    processor: {
      name: "A17 Pro",
      cpu: "6-core (2 performance + 4 efficiency)",
      gpu: "6-core Apple GPU",
      process: "3 nm",
    },
    memory: {
      ram: ["8 GB"],
      storage: ["256 GB", "512 GB", "1 TB"],
    },
    camera: {
      rear: [
        { mp: 48, type: "Main", aperture: "f/1.78", features: ["Sensor-shift OIS", "100% Focus Pixels", "Photonic Engine"] },
        { mp: 12, type: "Ultra Wide", aperture: "f/2.2", features: ["120° FOV", "Macro photography"] },
        { mp: 12, type: "Telephoto", aperture: "f/2.8", features: ["5x optical zoom", "OIS", "Night mode"] },
      ],
      front: { mp: 12, aperture: "f/1.9", features: ["Autofocus", "TrueDepth", "Photonic Engine"] },
      video: ["4K@60fps", "4K@24/25/30fps ProRes", "1080p@60fps ProRes", "Cinematic mode 4K@30fps", "Action mode 2.8K@60fps"],
    },
    battery: {
      capacity: 4441,
      charging: { wired: "Up to 50% in 30 min (20W+)", wireless: "MagSafe 15W", reverse: "4.5W" },
    },
    os: { launch: "iOS 17", current: "iOS 17.x" },
    dimensions: { height: 159.9, width: 76.7, thickness: 8.25, weight: 221 },
    build: { frame: "Titanium", back: "Textured matte glass", ipRating: "IP68" },
    connectivity: { network: ["5G (sub-6 GHz)", "5G mmWave (US)"], wifi: "Wi-Fi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2 Gen 2 (10 Gbps)", audioJack: false },
    features: { biometrics: ["Face ID"], sensors: ["LiDAR Scanner", "Accelerometer", "Gyroscope", "Proximity", "Ambient light", "Barometer"], colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"] },
    price: { launch: { usd: 1199, eur: 1329, gbp: 1199 }, current: { usd: 1199, eur: 1329, gbp: 1199 } },
    scores: {
      overall: 92,
      performance: 95,
      camera: 93,
      battery: 88,
      display: 94,
      gaming: 96,
    },
    sources: {
      nanoreview: "https://nanoreview.net/en/phone/apple-iphone-15-pro-max",
      gsmarena: "https://www.gsmarena.com/apple_iphone_15_pro_max-12673.php",
      official: "https://www.apple.com/iphone-15-pro/",
    },
  },
  {
    id: "galaxy-s24-ultra",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    releaseYear: 2024,
    releaseMonth: 1,
    display: {
      size: "6.8\"",
      resolution: "3120 x 1440",
      type: "Dynamic AMOLED 2X",
      refreshRate: 120,
      protection: "Gorilla Glass Armor",
    },
    processor: {
      name: "Snapdragon 8 Gen 3 for Galaxy",
      cpu: "8-core (1×3.39 GHz + 3×3.1 GHz + 2×2.9 GHz + 2×2.2 GHz)",
      gpu: "Adreno 750",
      process: "4 nm",
    },
    memory: {
      ram: ["12 GB"],
      storage: ["256 GB", "512 GB", "1 TB"],
    },
    camera: {
      rear: [
        { mp: 200, type: "Main", aperture: "f/1.7", features: ["OIS", "Pixel binning", "Laser AF", "Super HDR"] },
        { mp: 12, type: "Ultra Wide", aperture: "f/2.2", features: ["120° FOV", "Super Steady video"] },
        { mp: 50, type: "Telephoto (5x)", aperture: "f/3.4", features: ["OIS", "10x optical quality zoom"] },
        { mp: 10, type: "Telephoto (3x)", aperture: "f/2.4", features: ["OIS", "3x optical zoom"] },
      ],
      front: { mp: 12, aperture: "f/2.2", features: ["Dual Pixel AF", "Super HDR"] },
      video: ["8K@30fps", "4K@60fps", "4K@120fps", "1080p@240fps", "Super Steady 4K@60fps"],
    },
    battery: {
      capacity: 5000,
      charging: { wired: "45W (65% in 30 min)", wireless: "15W", reverse: "4.5W" },
    },
    os: { launch: "Android 14 (One UI 6.1)", current: "Android 14 (One UI 6.1)" },
    dimensions: { height: 162.3, width: 79.0, thickness: 8.6, weight: 232 },
    build: { frame: "Titanium", back: "Gorilla Glass Armor", ipRating: "IP68" },
    connectivity: { network: ["5G (sub-6)", "5G mmWave"], wifi: "Wi-Fi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2 Gen 1", audioJack: false },
    features: { biometrics: ["Ultrasonic fingerprint", "Face recognition"], sensors: ["Accelerometer", "Gyroscope", "Barometer", "Compass", "Proximity", "Light"], colors: ["Titanium Gray", "Titanium Black", "Titanium Violet", "Titanium Yellow"] },
    price: { launch: { usd: 1299, eur: 1449, gbp: 1249 }, current: { usd: 1299, eur: 1449, gbp: 1249 } },
    scores: {
      overall: 94,
      performance: 96,
      camera: 95,
      battery: 92,
      display: 95,
      gaming: 97,
    },
    sources: {
      nanoreview: "https://nanoreview.net/en/phone/samsung-galaxy-s24-ultra",
      gsmarena: "https://www.gsmarena.com/samsung_galaxy_s24_ultra-13177.php",
      official: "https://www.samsung.com/us/smartphones/galaxy-s24-ultra/",
    },
  },
  {
    id: "pixel-8-pro",
    name: "Pixel 8 Pro",
    brand: "Google",
    releaseYear: 2023,
    releaseMonth: 10,
    display: {
      size: "6.7\"",
      resolution: "2992 x 1344",
      type: "LTPO OLED",
      refreshRate: 120,
      protection: "Gorilla Glass Victus 2",
    },
    processor: {
      name: "Google Tensor G3",
      cpu: "9-core (1×3.0 GHz + 4×2.45 GHz + 4×2.15 GHz)",
      gpu: "Mali-G715 MC10",
      process: "4 nm",
    },
    memory: {
      ram: ["12 GB"],
      storage: ["128 GB", "256 GB", "512 GB", "1 TB"],
    },
    camera: {
      rear: [
        { mp: 50, type: "Main", aperture: "f/1.68", features: ["OIS", "Octa PD", "Super Res Zoom"] },
        { mp: 48, type: "Ultra Wide", aperture: "f/1.95", features: ["125.5° FOV", "Macro Focus", "Autofocus"] },
        { mp: 48, type: "Telephoto (5x)", aperture: "f/2.8", features: ["OIS", "5x optical zoom", "Super Res Zoom 30x"] },
      ],
      front: { mp: 10.5, aperture: "f/2.2", features: ["Autofocus", "Fixed focus", "Dual exposure"] },
      video: ["4K@60fps", "4K@30fps", "1080p@60fps", "1080p@240fps", "Video Boost (cloud processing)"],
    },
    battery: {
      capacity: 5050,
      charging: { wired: "30W (50% in 30 min)", wireless: "23W (Pixel Stand)", reverse: "4.5W" },
    },
    os: { launch: "Android 14", current: "Android 14" },
    dimensions: { height: 162.6, width: 76.5, thickness: 8.8, weight: 213 },
    build: { frame: "Aluminum", back: "Gorilla Glass Victus 2", ipRating: "IP68" },
    connectivity: { network: ["5G (sub-6)", "5G mmWave"], wifi: "Wi-Fi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2 Gen 2", audioJack: false },
    features: { biometrics: ["Fingerprint (under display)", "Face unlock"], sensors: ["Accelerometer", "Gyroscope", "Proximity", "Ambient light", "Barometer", "Temperature sensor"], colors: ["Obsidian", "Porcelain", "Bay"] },
    price: { launch: { usd: 999, eur: 1099, gbp: 999 }, current: { usd: 999, eur: 1099, gbp: 999 } },
    scores: {
      overall: 89,
      performance: 82,
      camera: 94,
      battery: 87,
      display: 91,
      gaming: 78,
    },
    sources: {
      nanoreview: "https://nanoreview.net/en/phone/google-pixel-8-pro",
      gsmarena: "https://www.gsmarena.com/google_pixel_8_pro-12917.php",
      official: "https://store.google.com/product/pixel_8_pro",
    },
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    releaseYear: 2024,
    releaseMonth: 1,
    display: {
      size: "6.82\"",
      resolution: "3168 x 1440",
      type: "LTPO AMOLED",
      refreshRate: 120,
      protection: "Gorilla Glass Victus 2",
    },
    processor: {
      name: "Snapdragon 8 Gen 3",
      cpu: "8-core (1×3.3 GHz + 3×3.2 GHz + 2×3.0 GHz + 2×2.3 GHz)",
      gpu: "Adreno 750",
      process: "4 nm",
    },
    memory: {
      ram: ["12 GB", "16 GB"],
      storage: ["256 GB", "512 GB"],
    },
    camera: {
      rear: [
        { mp: 50, type: "Main", aperture: "f/1.6", features: ["OIS", "1/1.43\" LYT-808", "Dual Pixel AF"] },
        { mp: 48, type: "Ultra Wide", aperture: "f/2.2", features: ["114° FOV", "1/2\" Sony IMX581"] },
        { mp: 64, type: "Telephoto (3x)", aperture: "f/2.6", features: ["OIS", "3x optical zoom", "1/2\" OV64B"] },
      ],
      front: { mp: 32, aperture: "f/2.4", features: ["Fixed focus", "Sony IMX615"] },
      video: ["8K@30fps", "4K@60fps", "4K@120fps", "1080p@240fps", "4K@30fps Dolby Vision"],
    },
    battery: {
      capacity: 5400,
      charging: { wired: "100W (100% in 26 min)", wireless: "50W (100% in 55 min)", reverse: "10W" },
    },
    os: { launch: "Android 14 (OxygenOS 14)", current: "Android 14 (OxygenOS 14)" },
    dimensions: { height: 164.3, width: 75.8, thickness: 9.2, weight: 220 },
    build: { frame: "Aluminum", back: "Gorilla Glass Victus 2", ipRating: "IP65" },
    connectivity: { network: ["5G (sub-6)", "5G mmWave"], wifi: "Wi-Fi 7", bluetooth: "5.4", nfc: true, usb: "USB-C 3.2 Gen 1", audioJack: false },
    features: { biometrics: ["Fingerprint (optical)", "Face unlock"], sensors: ["Accelerometer", "Gyroscope", "Proximity", "Compass", "Color spectrum"], colors: ["Fluent Emerald", "Silky Black"] },
    price: { launch: { usd: 799, eur: 899, gbp: 849 }, current: { usd: 799, eur: 899, gbp: 849 } },
    scores: {
      overall: 90,
      performance: 96,
      camera: 85,
      battery: 93,
      display: 92,
      gaming: 95,
    },
    sources: {
      nanoreview: "https://nanoreview.net/en/phone/oneplus-12",
      gsmarena: "https://www.gsmarena.com/oneplus_12-13187.php",
      official: "https://www.oneplus.com/12",
    },
  },
  {
    id: "xiaomi-14-ultra",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    releaseYear: 2024,
    releaseMonth: 2,
    display: {
      size: "6.73\"",
      resolution: "3200 x 1440",
      type: "LTPO AMOLED",
      refreshRate: 120,
      protection: "Gorilla Glass Victus 2",
    },
    processor: {
      name: "Snapdragon 8 Gen 3",
      cpu: "8-core (1×3.3 GHz + 3×3.2 GHz + 2×3.0 GHz + 2×2.3 GHz)",
      gpu: "Adreno 750",
      process: "4 nm",
    },
    memory: {
      ram: ["12 GB", "16 GB"],
      storage: ["256 GB", "512 GB", "1 TB"],
    },
    camera: {
      rear: [
        { mp: 50, type: "Main", aperture: "f/1.63-f/4.0", features: ["1\" Sony LYT-900", "Variable aperture", "OIS", "HyperOIS"] },
        { mp: 50, type: "Ultra Wide", aperture: "f/1.8", features: ["122° FOV", "1/2.51\" Sony IMX858", "OIS"] },
        { mp: 50, type: "Telephoto (3.2x)", aperture: "f/1.8", features: ["75mm equiv", "1/2.51\" Sony IMX858", "OIS", "Macro"] },
        { mp: 50, type: "Periscope (5x)", aperture: "f/2.5", features: ["120mm equiv", "1/2.51\" Sony IMX858", "OIS", "Macro"] },
      ],
      front: { mp: 32, aperture: "f/2.0", features: ["0.7µm", "Fixed focus"] },
      video: ["8K@30fps", "4K@60fps", "4K@120fps", "1080p@240fps", "10-bit LOG", "Dolby Vision 4K@60fps"],
    },
    battery: {
      capacity: 5300,
      charging: { wired: "90W (100% in 34 min)", wireless: "80W (100% in 46 min)", reverse: "10W" },
    },
    os: { launch: "Android 14 (HyperOS)", current: "Android 14 (HyperOS)" },
    dimensions: { height: 161.4, width: 75.3, thickness: 9.2, weight: 219.8 },
    build: { frame: "Aluminum", back: "Gorilla Glass Victus 2 / Nano-tech vegan leather", ipRating: "IP68" },
    connectivity: { network: ["5G (sub-6)", "5G mmWave"], wifi: "Wi-Fi 7", bluetooth: "5.4", nfc: true, usb: "USB-C 3.2 Gen 1", audioJack: false },
    features: { biometrics: ["Fingerprint (ultrasonic)", "Face unlock"], sensors: ["Accelerometer", "Gyroscope", "Proximity", "Compass", "Color spectrum", "IR blaster"], colors: ["Black", "White", "Titanium Gray"] },
    price: { launch: { usd: 1299, eur: 1499, gbp: 1299 }, current: { usd: 1299, eur: 1499, gbp: 1299 } },
    scores: {
      overall: 91,
      performance: 96,
      camera: 95,
      battery: 90,
      display: 93,
      gaming: 95,
    },
    sources: {
      nanoreview: "https://nanoreview.net/en/phone/xiaomi-14-ultra",
      gsmarena: "https://www.gsmarena.com/xiaomi_14_ultra-13189.php",
      official: "https://www.mi.com/global/product/xiaomi-14-ultra/",
    },
  },
];

export function getPhoneById(id: string): PhoneSpecs | undefined {
  return phones.find(p => p.id === id);
}

export function getAllPhones(): PhoneSpecs[] {
  return phones;
}

export function getPhonesByBrand(brand: string): PhoneSpecs[] {
  return phones.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
}

export function getBrands(): string[] {
  return [...new Set(phones.map(p => p.brand))].sort();
}

export function formatPrice(price: { usd: number; eur: number; gbp: number }, currency: "usd" | "eur" | "gbp" = "usd"): string {
  const symbols: Record<"usd" | "eur" | "gbp", string> = { usd: "$", eur: "€", gbp: "£" };
  const value = price[currency];
  return `${symbols[currency]}${value.toLocaleString()}`;
}

export function formatNumber(num: number): string {
  return num.toLocaleString();
}