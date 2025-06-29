import * as host from "@gl/api/w2h/host";
import { String } from "@gl/types/i18n";
import * as twine from "@gl/utils/twine";
import * as level from "../main";

const log = host.debug.log;
const logError = host.debug.logError;

class State {
  title: string;
  constructor() {
    this.title = "Echo of G'mork";
  }
}

export const state = new State();

// If we're using an alias on our link, then we need to map from our shown
// choice id to our alias choice id.
const choiceToPassage = new Map<string, string>();
choiceToPassage.set("1ccc7c51", "e1e1ddc3");
choiceToPassage.set("057a1926", "e1e1ddc3");

export function strings(): String[] {
  return [
    {
      key: "interact",
      values: [
        {
          text: "Interact",
          lang: "en",
        },
      ],
    },

    {
      key: "8c5807f8",
      values: [
        {
          text: "The shattered waters are a gateway back to creation. Swim into them and you will leave this place.",
          lang: "en",
        },
      ],
    },

    {
      key: "12c63041",
      values: [
        {
          text: "Why are you helping me?",
          lang: "en",
        },
      ],
    },

    {
      key: "268bc183",
      values: [
        {
          text: "Thank you",
          lang: "en",
        },
      ],
    },

    {
      key: "39e61f0e",
      values: [
        {
          text: "Ha! Your arrogance reminds me of a young warrior...",
          lang: "en",
        },
      ],
    },

    {
      key: "69ff1620",
      values: [
        {
          text: "Just tell me how to fight it",
          lang: "en",
        },
      ],
    },

    {
      key: "099de93d",
      values: [
        {
          text: "You came to this place because there was nowhere else to go. No one has connected the world you came from to a world of their own imagination. So you were sent here, to me, at the edge of creation.\n\nTo push back the Nothing, someone must add a level to Get Lost. Then, all future travels will go there, instead of here.",
          lang: "en",
        },
      ],
    },

    {
      key: "f287420a",
      values: [
        {
          text: "Echo of G'mork",
          lang: "en",
        },
      ],
    },

    {
      key: "4c620786",
      values: [
        {
          text: "The Nothing grows stronger... Before long, it will devour this place. Leave now, before it is too late.",
          lang: "en",
        },
      ],
    },

    {
      key: "80495816",
      values: [
        {
          text: "Who are you?",
          lang: "en",
        },
      ],
    },

    {
      key: "1ccc7c51",
      values: [
        {
          text: "What is the Nothing?",
          lang: "en",
        },
      ],
    },

    {
      key: "65e17d6e",
      values: [
        {
          text: "How do I leave?",
          lang: "en",
        },
      ],
    },

    {
      key: "ed5d9d40",
      values: [
        {
          text: "Talk to Gmork",
          lang: "en",
        },
      ],
    },

    {
      key: "78c753ff",
      values: [
        {
          text: "I was once a servant to the power behind the Nothing.",
          lang: "en",
        },
      ],
    },

    {
      key: "057a1926",
      values: [
        {
          text: "But what is it?",
          lang: "en",
        },
      ],
    },

    {
      key: "50388ea1",
      values: [
        {
          text: "You remind me of someone from long ago... And the mistakes that I made when I knew them...\n\nFarewell, $playerName.",
          lang: "en",
        },
      ],
    },

    {
      key: "27bdcc6f",
      values: [
        {
          text: "The Nothing is despair. It is the absence of dreams. It is what is left when people lose hope and forget how to create.",
          lang: "en",
        },
      ],
    },

    {
      key: "adae8f46",
      values: [
        {
          text: "How do I stop it?",
          lang: "en",
        },
      ],
    },

    {
      key: "5d5254c5",
      values: [
        {
          text: "Echo of G'mork",
          lang: "en",
        },
      ],
    },
  ];
}

/**
 * Called when the player interacts with a choice dialog.
 *
 * @param passageId The id of the passage that the user interacted with.
 * @param passageId The id of the choice that the user made.
 */
export function choiceMadeEvent(passageId: string, choiceId: string): void {
  if (choiceId === "") {
    log(`Passage ${passageId} closed.`);
    level.dialogClosedEvent(passageId);
    return;
  }
  log(`Choice made for ${passageId}: ${choiceId}`);
  if (choiceToPassage.has(choiceId)) {
    choiceId = choiceToPassage.get(choiceId);
  }
  dispatch(choiceId);
}

// Show interact button for "How do I leave?"
export function stage_65e17d6e(entered: bool): void {
  if (entered) {
    host.controls.setButtons([
      {
        label: "interact",
        slug: "passage/65e17d6e",
      },
    ]);
  } else {
    host.controls.setButtons([]);
  }
}

// "How do I leave?"
export function passage_65e17d6e(): void {
  // "Echo of G'mork"
  const title = "5d5254c5";
  const animate = true;
  let text = "";
  const choices: string[] = [];
  const params = new Map<string, string>();
  twine.incrementVisitCount("65e17d6e");

  // "The shattered waters are a gateway back to creation. Swim into them and you will leave this place."
  text = "8c5807f8";
  // Why are you helping me?
  choices.push("12c63041");

  // Thank you
  choices.push("268bc183");

  host.text.display("65e17d6e", title, text, choices, params, animate);
}

// Show interact button for "How do I stop it?"
export function stage_adae8f46(entered: bool): void {
  if (entered) {
    host.controls.setButtons([
      {
        label: "interact",
        slug: "passage/adae8f46",
      },
    ]);
  } else {
    host.controls.setButtons([]);
  }
}

// "How do I stop it?"
export function passage_adae8f46(): void {
  // "Echo of G'mork"
  const title = "5d5254c5";
  const animate = true;
  let text = "";
  const choices: string[] = [];
  const params = new Map<string, string>();
  twine.incrementVisitCount("adae8f46");

  // "Ha! Your arrogance reminds me of a young warrior..."
  text = "39e61f0e";
  // Just tell me how to fight it
  choices.push("69ff1620");

  host.text.display("adae8f46", title, text, choices, params, animate);
}

// Show interact button for "Just tell me how to fight it"
export function stage_69ff1620(entered: bool): void {
  if (entered) {
    host.controls.setButtons([
      {
        label: "interact",
        slug: "passage/69ff1620",
      },
    ]);
  } else {
    host.controls.setButtons([]);
  }
}

// "Just tell me how to fight it"
export function passage_69ff1620(): void {
  // "Echo of G'mork"
  const title = "5d5254c5";
  const animate = true;
  let text = "";
  const choices: string[] = [];
  const params = new Map<string, string>();
  twine.incrementVisitCount("69ff1620");

  // "You came to this place because there was nowhere else to go. No one has connected the world you came from to a world of their own imagination. So you were sent here, to me, at the edge of creation.\n\nTo push back the Nothing, someone must add a level to Get Lost. Then, all future travels will go there, instead of here."
  text = "099de93d";

  host.text.display("69ff1620", title, text, choices, params, animate);
}

// Show interact button for "Talk to Gmork"
export function stage_EchoOfGmork(entered: bool): void {
  if (entered) {
    host.controls.setButtons([
      {
        label: "interact",
        slug: "passage/ed5d9d40",
      },
    ]);
  } else {
    host.controls.setButtons([]);
  }
}

// "Talk to Gmork"
export function passage_EchoOfGmork(): void {
  // "Echo of G'mork"
  const title = "5d5254c5";
  const animate = true;
  let text = "";
  const choices: string[] = [];
  const params = new Map<string, string>();
  twine.incrementVisitCount("ed5d9d40");

  // "The Nothing grows stronger... Before long, it will devour this place. Leave now, before it is too late."
  text = "4c620786";
  // Who are you?
  choices.push("80495816");

  // What is the Nothing?
  choices.push("1ccc7c51");

  // How do I leave?
  choices.push("65e17d6e");

  host.text.display("ed5d9d40", title, text, choices, params, animate);
}

// Show interact button for "Who are you?"
export function stage_80495816(entered: bool): void {
  if (entered) {
    host.controls.setButtons([
      {
        label: "interact",
        slug: "passage/80495816",
      },
    ]);
  } else {
    host.controls.setButtons([]);
  }
}

// "Who are you?"
export function passage_80495816(): void {
  // "Echo of G'mork"
  const title = "5d5254c5";
  const animate = true;
  let text = "";
  const choices: string[] = [];
  const params = new Map<string, string>();
  twine.incrementVisitCount("80495816");

  // "I was once a servant to the power behind the Nothing."
  text = "78c753ff";
  // But what is it?
  choices.push("057a1926");

  // How do I leave?
  choices.push("65e17d6e");

  host.text.display("80495816", title, text, choices, params, animate);
}

// Show interact button for "Why are you helping me?"
export function stage_12c63041(entered: bool): void {
  if (entered) {
    host.controls.setButtons([
      {
        label: "interact",
        slug: "passage/12c63041",
      },
    ]);
  } else {
    host.controls.setButtons([]);
  }
}

// "Why are you helping me?"
export function passage_12c63041(): void {
  // "Echo of G'mork"
  const title = "5d5254c5";
  const animate = true;
  let text = "";
  const choices: string[] = [];
  const params = new Map<string, string>();
  twine.incrementVisitCount("12c63041");

  // "You remind me of someone from long ago... And the mistakes that I made when I knew them...\n\nFarewell, $playerName."
  text = "50388ea1";

  host.text.display("12c63041", title, text, choices, params, animate);
}

// Show interact button for "what-is-nothing"
export function stage_e1e1ddc3(entered: bool): void {
  if (entered) {
    host.controls.setButtons([
      {
        label: "interact",
        slug: "passage/e1e1ddc3",
      },
    ]);
  } else {
    host.controls.setButtons([]);
  }
}

// "what-is-nothing"
export function passage_e1e1ddc3(): void {
  // "Echo of G'mork"
  const title = "5d5254c5";
  const animate = true;
  let text = "";
  const choices: string[] = [];
  const params = new Map<string, string>();
  twine.incrementVisitCount("e1e1ddc3");

  // "The Nothing is despair. It is the absence of dreams. It is what is left when people lose hope and forget how to create."
  text = "27bdcc6f";
  // How do I stop it?
  choices.push("adae8f46");

  // Who are you?
  choices.push("80495816");

  // How do I leave?
  choices.push("65e17d6e");

  host.text.display("e1e1ddc3", title, text, choices, params, animate);
}

export function dispatch(passageId: string): void {
  let found = false;

  if (passageId === "65e17d6e") {
    found = true;
    passage_65e17d6e();
  }

  if (passageId === "adae8f46") {
    found = true;
    passage_adae8f46();
  }

  if (passageId === "69ff1620") {
    found = true;
    passage_69ff1620();
  }

  if (passageId === "ed5d9d40") {
    found = true;
    passage_EchoOfGmork();
  }

  if (passageId === "80495816") {
    found = true;
    passage_80495816();
  }

  if (passageId === "12c63041") {
    found = true;
    passage_12c63041();
  }

  if (passageId === "e1e1ddc3") {
    found = true;
    passage_e1e1ddc3();
  }

  if (!found) {
    log(`No passage found for ${passageId}, does it have content?`);
  }
}

