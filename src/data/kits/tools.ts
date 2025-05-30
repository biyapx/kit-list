import primereact from "@/assets/images/primereact.png";
import { StaticImageData } from "next/image";
import ayalkbetsIcon from "@/assets/images/abio.ico";
import imgsrc from "@/assets/images/imgsrc.png";
import decagon from "@/assets/images/decagon.png";
import gsap from "@/assets/images/gsap.png";
import twingate from "@/assets/images/twingate.png";
import seesaw from "@/assets/images/seesaw.png";
import supercreative from "@/assets/images/supercreative.png";
import superpower from "@/assets/images/superpower.png";
import openhomes from "@/assets/images/openhomes.png";
import markflow from "@/assets/images/markflow.png";

export type Kit = {
  title?: string;
  image: StaticImageData;
  author: {
    name: string;
    url: string;
    avatar?: StaticImageData;
  };
};
//
export const toolsKit = [
  {
    title: "Image Src",
    image:
      "https://res.cloudinary.com/deffkhv2g/image/upload/v1748559710/imgsrc_yhzgwx.png",
    tags: ["Tools"],
    url: "https://imgsrc.io",
    author: {
      name: "biyacraft",
      url: "https://biyacraft.vercel.app",
      avatar: ayalkbetsIcon,
    },
  },
  {
    title: "Decagon AI",
    image:
      "https://res.cloudinary.com/deffkhv2g/image/upload/v1748559511/decagon_koovgi.png",
    tags: ["Tools"],
    url: "https://decagon.ai",
    author: {
      name: "biyacraft",
      url: "https://biyacraft.vercel.app",
      avatar: ayalkbetsIcon,
    },
  },
  {
    title: "GSAP",
    image:
      "https://res.cloudinary.com/deffkhv2g/image/upload/v1748559590/gsap_hdyriz.png",
    tags: ["Tools"],
    url: "https://gsap.com",
    author: {
      name: "biyacraft",
      url: "https://biyacraft.vercel.app",
      avatar: ayalkbetsIcon,
    },
  },
  {
    title: "Twingate",
    image:
      "https://res.cloudinary.com/deffkhv2g/image/upload/v1748560178/twingate_v7apmx.png",
    tags: ["Tools"],
    url: "https://twingate.com",
    author: {
      name: "biyacraft",
      url: "https://biyacraft.vercel.app",
      avatar: ayalkbetsIcon,
    },
  },
  {
    title: "Primereact UI Library",
    image:
      "https://res.cloudinary.com/deffkhv2g/image/upload/v1748559908/primereact_lugzzx.png",
    tags: ["Tools"],
    url: "https://primereact.dev",
    author: {
      name: "biyacraft",
      url: "https://biyacraft.vercel.app",
      avatar: ayalkbetsIcon,
    },
  },
  {
    title: "See + Saw",
    image:
      "https://res.cloudinary.com/deffkhv2g/image/upload/v1748560003/seesaw_xlnfaf.png",
    tags: ["Tools"],
    url: "https://seesaw.website",
    author: {
      name: "biyacraft",
      url: "https://biyacraft.vercel.app",
      avatar: ayalkbetsIcon,
    },
  },
  {
    title: "Supercreative",
    image:
      "https://res.cloudinary.com/deffkhv2g/image/upload/v1748560036/supercreative_myacee.png",
    tags: ["Tools"],
    url: "https://supercreative.design",
    author: {
      name: "biyacraft",
      url: "https://biyacraft.vercel.app",
      avatar: ayalkbetsIcon,
    },
  },
  {
    title: "Superpower",
    image:
      "https://res.cloudinary.com/deffkhv2g/image/upload/v1748560167/superpower_bw3wui.png",
    tags: ["Tools"],
    url: "https://superpower.com",
    author: {
      name: "biyacraft",
      url: "https://biyacraft.vercel.app",
      avatar: ayalkbetsIcon,
    },
  },
  {
    title: "Open Homes",
    image:
      "https://res.cloudinary.com/deffkhv2g/image/upload/v1748559850/openhomes_jpzfws.png",
    tags: ["Tools"],
    url: "https://openhomes.xyz",
    author: {
      name: "biyacraft",
      url: "https://biyacraft.vercel.app",
      avatar: ayalkbetsIcon,
    },
  },
  {
    title: "Markflow",
    image:
      "https://res.cloudinary.com/deffkhv2g/image/upload/v1748559831/markflow_q036lo.png",
    tags: ["Tools"],
    url: "https://markflow.app",
    author: {
      name: "biyacraft",
      url: "https://biyacraft.vercel.app",
      avatar: ayalkbetsIcon,
    },
  },
];
