import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Android", "Samsung Galaxy S24 Ultra", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Introducing Snapdragon 8 Gen 2.",
      "Game-changing performance.",
      "Powerful and efficient chip.",
    ],
    video: highlightFirstVideo,
    videoDuration: 13,
  },
  {
    id: 2,
    textLists: ["Gorilla Glass Victus.", "Strong and durable protection."],
    video: highlightSecondVideo,
    videoDuration: 6,
  },
  {
    id: 3,
    textLists: [
      "Samsung Galaxy S24 Ultra has the",
      "best camera system on",
      "any Android phone. Stunning shots.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Introducing the new Magic Eraser.", "Make photos perfect."],
    video: highlightFourthVideo,
    videoDuration: 8,
  },
];

export const models = [
  {
    id: 1,
    title: "Samsung Galaxy S24 Ultra in Obsidian Black",
    color: ["#2E2C2F", "#5A5A5A", "#101010"],
    img: blackImg,
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra in Sky Blue",
    color: ["#779ECF", "#87CEFA", "#4682B4"],
    img: blueImg,
  },
  {
    id: 3,
    title: "Samsung Galaxy S24 Ultra in Porcelain White",
    color: ["#F5F5F5", "#FFFFFF", "#D3D3D3"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "Samsung Galaxy S24 Ultra in Lemongrass",
    color: ["#F8D800", "#FFF700", "#DAA520"],
    img: yellowImg,
  },
];

export const sizes = [
  { label: '6.3"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
