import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";
import envelopeImg from "@/assets/env.png";
import envelopeVideo from "@/assets/envet.mov";

export const wedding = {
  brideEn: "Miral",
  groomEn: "Mohammed",
  brideAr: "ميرال",
  groomAr: "محمد",
  monogram: "M&M",
  date: new Date("2026-12-12T18:00:00"),
  welcome:
    "With joy in our hearts, we invite you to share in the celebration of our love — a day woven from years of laughter, quiet moments, and a thousand small yeses.",
  ceremony: {
    title: "The Ceremony",
    date: "Saturday, December 12, 2026",
    time: "6:00 PM",
    venue: "Al Bustan Palace",
    address: "Quron Beach, Muscat, Oman",
  },
  reception: {
    title: "The Reception",
    date: "Saturday, December 12, 2026",
    time: "8:00 PM",
    venue: "Al Bustan Palace — Grand Ballroom",
    address: "Quron Beach, Muscat, Oman",
  },
  dressCode: "Black tie · Cream, gold, and deep jewel tones welcomed",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.612!2d58.6406!3d23.5436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzM3LjAiTiA1OMKwMzgnMjYuMCJF!5e0!3m2!1sen!2s!4v1700000000000",
  story: [
    {
      year: "2019",
      title: "How We Met",
      body: "A spilled cup of cardamom coffee in a Muscat bookstore. He apologized. She laughed. The book she was holding became the first thing we shared.",
      photo: photo1,
    },
    {
      year: "2022",
      title: "The Question",
      body: "Under a sky of unbearable stars, on the dunes of Wahiba, a gold ring caught the last of the sun. She said yes before the question was finished.",
      photo: photo5,
    },
    {
      year: "2026",
      title: "Forever Begins",
      body: "Seven years, three cities, and an uncountable number of late-night conversations later — we are ready to begin the chapter we've been writing all along.",
      photo: photo6,
    },
  ],
  gallery: [photo1, photo2, photo3, photo4, photo5, photo6],
  envelopeImage: envelopeImg,
  envelopeVideo: envelopeVideo,
};

export type Wedding = typeof wedding;
