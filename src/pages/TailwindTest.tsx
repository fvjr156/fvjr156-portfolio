import { useState, useEffect } from "react";
import { Circle } from "react-feather";

export const useAverageColor = (imageSrc: string) => {
  const [color, setColor] = useState("rgba(0,0,0,0)");
  useEffect(() => {
    if (!imageSrc) return;
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = 1;
      canvas.height = 1;
      ctx!.drawImage(img, 0, 0, 1, 1);
      const [r, g, b] = ctx!.getImageData(0, 0, 1, 1).data;
      setColor(`rgb(${r}, ${g}, ${b})`);
    };
  }, [imageSrc]);

  return color;
};

const albumdat = [
  {
    caption1: "albums i fw #1",
    caption2: "never found 3am driving tracks better than this one has",
    img: "/my-portfolio/albums/ar.jpg",
    title: "あるがままに",
    artist: "角松敏生",
    year: 1992,
    genre: "J-Pop",
    runtime: "31:23",
    bg: "bg-background",
    txt: "text-text/80",
  },
  {
    caption1: "albums i fw #2",
    caption2: "all this has are good vibes",
    img: "/my-portfolio/albums/gs.jpg",
    title: "Grey Skies",
    artist: "大貫妙子",
    year: 1976,
    genre: "Jazz, Rock",
    runtime: "42:37",
    bg: "bg-text",
    txt: "text-background/80",
  },
  {
    caption1: "albums i fw #3",
    caption2: "driving by a windy coastline and a view of the B E A C H",
    img: "/my-portfolio/albums/bw.jpg",
    title: "bewith",
    artist: "今井美樹",
    year: 1988,
    genre: "Kayokyoku, Synth Pop, City Pop",
    runtime: "35:33",
    bg: "bg-[color-mix(in_srgb,#F35F36,white_70%)]",
    txt: "text-background/80",
  },
  {
    caption1: "albums i fw #4",
    caption2: "up on the hill, people never stare. they just don't care",
    img: "/my-portfolio/albums/aj.jpg",
    title: "Aja",
    artist: "Steely Dan",
    year: 1977,
    genre: "Jazz, Rock",
    runtime: "28:19",
    bg: "bg-black",
    txt: "text-text/80",
  },
  {
    caption1: "albums i fw #5",
    caption2: "the guy with the surfboard guitar never gets old",
    img: "/my-portfolio/albums/ih.jpg",
    title: "An Insatiable High",
    artist: "高中正義",
    year: 1977,
    genre: "Jazz Fusion, Funk, City Pop",
    runtime: "35:10",
    bg: "bg-[color-mix(in_srgb,#00AEEF,white_70%)]",
    txt: "text-background/80",
  },
  {
    caption1: "albums i fw #6",
    caption2: "persona bgm",
    img: "/my-portfolio/albums/ju.jpg",
    title: "JUICY",
    artist: "吉沢梨絵",
    year: 2000,
    genre: "Jazz / Funk, Pop",
    runtime: "45:29",
    bg: "bg-[color-mix(in_srgb,#F35F36,white_80%)]",
    txt: "text-background/80",
  },
];

export default function TailwindTest() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const src = albumdat[selectedIndex].img;
  const mybg = useAverageColor(src);

  const handleClick = () => {
    setSelectedIndex((selectedIndex + 1) % albumdat.length);
  };

  return (
    <main
      className={`min-h-screen ${albumdat[selectedIndex].bg} font-display flex flex-col items-center justify-center
      ${albumdat[selectedIndex].txt} transition-all duration-500 ease-in-out-sine`}
    >
      <div className="w-70">
        <p className="mb-0 text-md text-left font-hero w-80 self-start">
          {albumdat[selectedIndex].caption1}
        </p>
        <p className="mb-5 text-md text-left font-hero w-60 self-start">
          {albumdat[selectedIndex].caption2}
        </p>

        <div
          data-componentid="albumcard"
          style={{ borderColor: mybg }}
          className="flex flex-col border-2 p-10 rounded-2xl"
        >
          <div data-componentid="albumimg" className="w-45 h-full bg-accent">
            <img src={src} alt="Showcase" />
          </div>
          <p className="mt-7 text-2xl text-left font-extrabold">
            {albumdat[selectedIndex].title}
          </p>
          <p className="mt-0 text-sm font-hero">
            {albumdat[selectedIndex].artist}・{albumdat[selectedIndex].year}・
            {albumdat[selectedIndex].genre}
          </p>
          <p className="mt-0 text-sm font-hero">
            {albumdat[selectedIndex].runtime}
          </p>
        </div>
      </div>

      <button
        className="p-2 rounded-full text-text cursor-pointer fixed bottom-6 right-6 bg-secondary 
    before:content-['Click_to_change'] 
    before:absolute before:right-10 before:top-2 before:w-30
    before:px-2 before:text-[10px] before:py-1 before:rounded before:text-xs
    before:text-white before:bg-gray-500/80
    before:hidden hover:before:block"
        onClick={handleClick}
      >
        <Circle className="w-5 h-5 text-red-500 stroke-2" />
      </button>
    </main>
  );
}
