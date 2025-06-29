import { Card } from "@gl/types/card";

// This is your level card. It powers the `Credits` link on your level. As you
// add collaborators, include their details so they get credited for their work.
// If you use any assets that require attribution (like many Creative Commons
// licenses), include those as well.
export function card(): Card {
  return {
    level: {
      name: "The Edge of Creation",
      version: 1,
    },
    credits: [
      {
        name: "Andrew",
        role: "Author",
        link: "https://x.com/GetLostTheGame",
      },
      {
        name: "Krishna Palacio",
        role: "Tileset",
        link: "https://x.com/krishna_palacio",
      },
      {
        name: "Tim Beek",
        role: "Music",
        link: "https://x.com/timbeekmusic",
      },
      {
        name: "ansimuz",
        role: "Gmork",
        link: "https://x.com/ansimuz",
      },
    ],
  };
}
