import photo1 from "@/assets/photo-1.png";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.png";
import photo6 from "@/assets/photo-6.jpg";
import envelopeImg from "@/assets/env.png";
import envelopeVideo from "@/assets/envet.mov";
import kidsImg from "@/assets/kids.png";

export const wedding = {
  brideEn: "Miral",
  groomEn: "Mohammed",
  brideAr: "ميرال",
  groomAr: "محمد",
  monogram: "M&M",
 date: new Date("2026-07-10T19:00:00"),
  welcome:
    "With joy in our hearts, we invite you to share in the celebration of our love — a day woven from years of laughter, quiet moments, and a thousand small yeses.",
  ceremony: {
    title: "The Ceremony",
    date: "Friday, July 10, 2026",
    time: "7:00 PM",
    venue: "Beit El Rahman Mosque",
    address: "Tripoli, Lebanon",
  },
  reception: {
    title: "The Reception",
    date: "Friday, July 10, 2026",
    time: "7:00 PM",
    venue: "Beit El Rahman Mosque",
    address: "Tripoli, Lebanon",
  },
  dressCode: "Black tie · Cream, gold, and deep jewel tones welcomed",
  kidsNote: "This is an adults-only celebration. We kindly ask that little ones be left at home so all can celebrate freely.",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.5!2d35.8407921!3d34.398929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f7288a5f5343%3A0x414ef4100bc74b81!2sBeit%20El%20Rahman%20Mosque!5e0!3m2!1sen!2s!4v1700000000000",
  story: [
    {
      year: "2004",
      title: "How We Met",
      body: "Two classmates in 2004. Childhood love. Fifteen years later, fate brought us back together at Papaya.",
      photo: photo1,
    },
    {
      year: "2026",
      title: "The Question",
      body: "Under a sky of unbearable stars, on the dunes of Wahiba, a gold ring caught the last of the sun. She said yes before the question was finished.",
      photo: photo5,
    },
    {
      year: "2026",
      title: "Forever Begins",
      body: "Fifteen years, three cities, and an uncountable number of late-night conversations later — we are ready to begin the chapter we've been writing all along.",
      photo: photo6,
    },
  ],
  gallery: [photo2, photo1, photo3, photo4, photo5, photo6],
  envelopeImage: envelopeImg,
  envelopeVideo: envelopeVideo,
  kidsImage: kidsImg,
};

export type Wedding = typeof wedding;
