const { SlashCommandBuilder } = require("discord.js");

class OwO {
  constructor(options) {
    options = options != null ? options : {};
    let defaults = {
      rltow: true,
      yaftern: true,
      repeaty: true,
      replaceWords: true,
      wordMap: {
        love: "wuv",
        mr: "mistuh",
        dog: "doggo",
        cat: "kitteh",
        hello: "henwo",
        hell: "heck",
        fuck: "fwick",
        fuk: "fwick",
        shit: "shoot",
        friend: "fwend",
        stop: "stawp",
        god: "gosh",
        dick: "peepee",
        penis: "peepee",
        damn: "darn",
      },
      doStutter: true,
      stutterChance: 0.1,
      doPrefixes: true,
      prefixChance: 0.05,
      prefixes: [
        "OwO",
        "OwO whats this?",
        "*unbuttons shirt*",
        "*nuzzles*",
        "*waises paw*",
        "*notices bulge*",
        "*blushes*",
        "*giggles*",
        "hehe",
      ],
      doSuffixes: true,
      suffixChance: 0.15,
      suffixes: [
        "(ﾉ´ з `)ノ",
        "( ´ ▽ ` ).｡ｏ♡",
        "(´,,•ω•,,)♡",
        "(*≧▽≦)",
        "ɾ⚈▿⚈ɹ",
        "( ﾟ∀ ﾟ)",
        "( ・ ̫・)",
        "( •́ .̫ •̀ )",
        "(▰˘v˘▰)",
        "(・ω・)",
        "✾(〜 ☌ω☌)〜✾",
        "(ᗒᗨᗕ)",
        "(・`ω´・)",
        ":3",
        ">:3",
        "hehe",
        "xox",
        ">3<",
        "murr~",
        "UwU",
        "*gwomps*",
      ],
    };
    for (let key in defaults) {
      this[key] = options[key] != null ? options[key] : defaults[key];
    }
    this.prefixes.sort((a, b) => a.length - b.length);
    this.suffixes.sort((a, b) => a.length - b.length);
  }

  static replaceAll(text, map) {
    let source = Object.keys(map).map((i) => `\\b${i}`);
    let re = new RegExp(`(?:${source.join(")|(?:")})`, "gi");
    return text.replace(re, (match) => {
      let out = map[match.toLowerCase()];
      // Not very tidy way to work out if the word is capitalised
      if ((match.match(/[A-Z]/g) || []).length > match.length / 2)
        out = out.toUpperCase();
      return out;
    });
  }

  static weightedRandom(list) {
    // Returns a random choice from the list based on the length of string in the list
    // Shorter strings are proportionally more likely to be picked
    // ** List should already be sorted shortest to longest **
    let max = list[list.length - 1].length + 1;
    let acc = 0;
    let weights = list.map((i) => (acc += max - i.length));
    let random = Math.floor(Math.random() * acc);
    for (var [index, weight] of weights.entries()) {
      if (random < weight) break;
    }
    return list[index];
  }

  owoify(text) {
    // Replace words
    if (this.replaceWords) {
      text = OwO.replaceAll(text, this.wordMap);
    }
    // OwO
    if (this.rltow) {
      text = text.replace(/[rl]/gi, (match) =>
        match.charCodeAt(0) < 97 ? "W" : "w"
      );
    }
    // Nya >;3
    if (this.yaftern) {
      text = text.replace(
        /n[aeiou]/gi,
        (match) =>
          `${match[0]}${match.charCodeAt(1) < 97 ? "Y" : "y"}${match[1]}`
      );
    }
    // Repeaty wepeaty
    if (this.repeaty) {
      text = text.replace(
        /\b(?=.*[aeiou])(?=[a-vx-z])[a-z]{4,}y\b/gi,
        (match) =>
          `${match} ${match.charCodeAt(0) < 97 ? "W" : "w"}${match
            .match(/.[aeiouy].*/i)[0]
            .slice(1)}`
      );
    }
    // S-stutter
    if (this.doStutter) {
      text = text
        .split(" ")
        .map((word) => {
          if (word.length === 0 || word[0].match(/[a-z]/i) == null) return word;
          while (Math.random() < this.stutterChance) {
            word = `${word[0]}-${word}`;
          }
          return word;
        })
        .join(" ");
    }
    // Prefixes
    if (this.doPrefixes) {
      if (Math.random() < this.prefixChance) {
        text = `${OwO.weightedRandom(this.prefixes)} ${text}`;
      }
    }
    // Suffixes
    if (this.doSuffixes) {
      if (Math.random() < this.suffixChance) {
        text = `${text} ${OwO.weightedRandom(this.suffixes)}`;
      }
    }
    return text;
  }
}

const owo = new OwO();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("owoify")
    .setDescription("*waises paw* h-hewwo (*≧▽≦)")
    .addStringOption((option) =>
      option.setName("message").setDescription("type here 😀").setRequired(true)
    )
    .addBooleanOption((option) =>
      option
        .setName("private")
        .setDescription("only you can see 😳")
        .setRequired(false)
    ),
  async execute(interaction) {
    if (interaction.options.getBoolean("private") === true) {
      await interaction.reply({
        content: owo.owoify(interaction.options.getString("message")),
        ephemeral: true,
      });
    } else {
      await interaction.reply(
        owo.owoify(interaction.options.getString("message"))
      );
    }
  },
};
