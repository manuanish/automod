require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  Events,
  ActivityType,
  Collection,
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const token = process.env.DISCORD_TOKEN;

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
  client.user.setPresence({
    activities: [{ name: "mod simulator 🤢", type: ActivityType.Streaming }],
  });
});

const copypasta = {
  all: [
    {
      trigger: ["manu", "ihxp"],
      response: "sex",
      type: "text",
    },
    {
      trigger: ["🤓", ":nerd:"],
      response: "🤓",
      type: "reaction",
    },
    {
      trigger: [],
      response: `Thank you for putting an spoiler tag on your message. 

However, it did not stop me from masturbating furiously in the bus in front of 43 people. They realized what was going on, opened Discord to this message and all 43 started to fap furiously too. Even the 64 year old Malaysian nun on the front seat couldn't contain herself - her entire arm was up her vagina as she screamed with pleasure.
      
I was so horny that my phone flew out of my hand & broke through the window, letting in a relentless tide of horny pigeons who were instantly fucked to death by the passengers. The nun shoved an entire pigeon family up her v. Now there is a bus full of exhausted passengers, dead pigeons and buckets of cum and squirt, all because you shared this. 
      `,
      type: "text",
    },
    {
      trigger: ["among us", "amogi", "amongus", "amogus"],
      response: `STOP POSTING ABOUT AMONG US! I'M TIRED OF SEEING IT! MY FRIENDS ON TIKTOK SEND ME MEMES, ON DISCORD IT'S FUCKING MEMES! I was in a server, right? and ALL OF THE CHANNELS were just among us stuff. I-I showed my champion underwear to my girlfriend and t-the logo I flipped it and I said "hey babe, when the underwear is sus HAHA DING DING DING DING DING DING DING DI DI DING" I fucking looked at a trashcan and said "THAT'S A BIT SUSSY" I looked at my penis I think of an astronauts helmet and I go "PENIS? MORE LIKE PENSUS" AAAAAAAAAAAAAAHGESFG`,
      type: "text",
    },
    {
      trigger: ["navy seal"],
      response: `What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.`,
      type: "text",
    },
    {
      trigger: ["goblin"],
      response: `How do I get my husband to stop going ‘Goblin Mode’ during sex?

TLDR; My husband says ‘Goblin Mode activated’ when we start to have sex, growls and acts like a caveman, and then says ‘Goblin Mode off’ when we stop, and then pretends not to remember afterward.
      
I really love my husband and he’s always been great in bed. But recently he’s been acting really weird. So, a couple of days ago, my son went on a rampage through our house and said he was in ‘Goblin Mode’. We didn’t really know what to do with him, so we sent him to live with my parents so he can go to a special needs school. My husband a really great relationship with our son and loved him more than anything. Naturally, he was upset when he had to leave. He’s an incredibly tough man, but this was the first time I’ve ever seen him cry. I think since then, he’s been a little emotionally unwell. I’ve heard him muttering, ‘Goblin’ repeatedly when he didn’t notice me, staring blankly into his food, and just going alone by himself to do who knows what. I feel awful for him, but we both agreed that this was for the best. Last night, the day after our son went away, we decided to have sex to relieve our stress. However, my husband said ‘Goblin Mode activated’, starting growling, and went wild having sex with me. Admittedly, it was some of the best and most experimental sex I’ve ever had, but I’m worried that something might be going on with my husband. Any advice?`,
      type: "text",
    },
    {
      trigger: ["girl", "shoulder"],
      response: `I saw exactly 1.09441 square inches of a girls shoulder today, I immediately fell to my knees, as the rush of dopamine signaling my impending, earth shattering orgasm started making me moan loud enough to deafen EVERYONE in the immediate vicinity.

What followed was a torrential downpour of every single sperm cell I ever had, or ever will produce shot out SO HARD that my dick was ripped apart by my Übernut, accelerating to 5% of the speed of light by the time it left my urethra.
      
It vaporized the girl as it punched right through her, it barely slowed before cutting through a structural support beam in the school as if it were a nuclear powered angle grinder. the sheer weight of this historical nut, combined with the total destruction of everything in its path caused the school to collapse, and every female in the state of illinois became pregnant with my children.`,
      type: "text",
    },
    {
      trigger: ["bts", "army"],
      response: `Please DO NOT buy the BTS meal if you don't stan them. You're preventing the actual BTS fans who have waited for months from having the BTS meal experience. Eating the sauces without understanding their significance is literally cultural appropriation and it's not okay`,
      type: "text",
    },
    {
      trigger: ["shit", "sink"],
      response: `If you shit in the sink at exactly 4:20 am and yell “amogus” 69 times,a shadowy figured called mom will come to beat you up and you will wake up in a place called the orphanage`,
      type: "text",
    },
    {
      trigger: ["uno"],
      response: `
⠐⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠂
⠄⠄⣰⣾⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠄⠄
⠄⠄⣿⣿⣿⡿⠋⠄⡀⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠋⣉⣉⣉⡉⠙⠻⣿⣿⠄⠄
⠄⠄⣿⣿⣿⣇⠔⠈⣿⣿⣿⣿⣿⡿⠛⢉⣤⣶⣾⣿⣿⣿⣿⣿⣿⣦⡀⠹⠄⠄
⠄⠄⣿⣿⠃⠄⢠⣾⣿⣿⣿⠟⢁⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠄⠄
⠄⠄⣿⣿⣿⣿⣿⣿⣿⠟⢁⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⠄
⠄⠄⣿⣿⣿⣿⣿⡟⠁⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄
⠄⠄⣿⣿⣿⣿⠋⢠⣾⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄
⠄⠄⣿⣿⡿⠁⣰⣿⣿⣿⣿⣿⣿⣿⣿⠗⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄
⠄⠄⣿⡿⠁⣼⣿⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⣠⣄⢰⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄
⠄⠄⡿⠁⣼⣿⣿⣿⣿⣿⣿⣿⡇⠄⢀⡴⠚⢿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢠⠄⠄
⠄⠄⠃⢰⣿⣿⣿⣿⣿⣿⡿⣿⣿⠴⠋⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⡟⢀⣾⠄⠄
⠄⠄⢀⣿⣿⣿⣿⣿⣿⣿⠃⠈⠁⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⡟⢀⣾⣿⠄⠄
⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⢶⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⣾⣿⣿⠄⠄
⠄⠄⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⠋⣠⣿⣿⣿⣿⠄⠄
⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣼⣿⣿⣿⣿⣿⠄⠄
⠄⠄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣴⣿⣿⣿⣿⣿⣿⣿⠄⠄
⠄⠄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢁⣴⣿⣿⣿⣿⠗⠄⠄⣿⣿⠄⠄
⠄⠄⣆⠈⠻⢿⣿⣿⣿⣿⣿⣿⠿⠛⣉⣤⣾⣿⣿⣿⣿⣿⣇⠠⠺⣷⣿⣿⠄⠄
⠄⠄⣿⣿⣦⣄⣈⣉⣉⣉⣡⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⠉⠁⣀⣼⣿⣿⣿⠄⠄
⠄⠄⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⡿⠟⠄⠄
⠠⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
      `,
      type: "text",
    },
    {
      trigger: ['automod'],
      response: `i am a discord m*d 🤢`,
      type: "text",
    },
    {
      trigger: ['good bot'],
      response: `🥺😊`,
      type: "text",
    },
    {
      trigger: ['bad bot'],
      response: `😢🤧`,
      type: "text",
    }
    // {
    //   trigger: [''],
    //   response: ``,
    //   type: "text",
    // }
  ],
};

client.on(Events.MessageCreate, (message) => {
  // Check if message author is automod#0068

  if (message.author.id != 1056930155509075968) {
    // Loop through all copypasta
    for (let i = 0; i < copypasta.all.length; i++) {
      // Loop through all triggers
      for (let j = 0; j < copypasta.all[i].trigger.length; j++) {
        // Check if the message contains the trigger
        if (
          message.content.toLowerCase().includes(copypasta.all[i].trigger[j])
        ) {
          // Send the response
          // If the response type is a reaction, react to the message
          if (copypasta.all[i].type === "reaction") {
            message.react(copypasta.all[i].response);
          }
          // If the response type is text, send the message
          if (copypasta.all[i].type === "text") {
            message.reply({
              content: copypasta.all[i].response,
              allowedMentions: { repliedUser: false },
            });
          }
        }
      }
    }

    if (new Collection(message.attachments).size > 0) {
      // Loop through all attachments
      var img_array = Array.from(new Collection(message.attachments));
      var once = false;
      for (let i = 0; i < img_array.length; i++) {
        if (img_array[i][1].name.startsWith("SPOILER_") && !once) {
          // Send the response
          message.reply({
            content: copypasta.all[2].response,
            allowedMentions: { repliedUser: false },
          });
          once = true;
        }
      }
    }
  }
});

client.login(token);
