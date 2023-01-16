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
      type: "ascii",
    },
    {
      trigger: ["automod"],
      response: `i am a discord m*d 🤢`,
      type: "text",
    },
    {
      trigger: ["good bot"],
      response: `🥺😊`,
      type: "text",
    },
    {
      trigger: ["bad bot"],
      response: `😢🤧`,
      type: "text",
    },
    {
      trigger: ["super", "idol"],
      response: `Super Idol的笑容 都没你的甜 八月正午的阳光 都没你耀眼 热爱 105 °C的你 滴滴清纯的蒸馏水`,
      type: "text",
    },
    {
      trigger: ["touch", "grass"],
      response: `"touch grass" is not an insult towards gamers, rather it is advice for them. When participating in intense periods of gaming, the human hand has a tendency to get sweaty. The sweat causes the hand to become slick, and it b becomes more difficult to retain a grip on the gamers gaming mouse, thus making it more difficult to perform well in intense gaming moments. By touching grass with the gamers hand, the grass will impart a layer of particulate onto the gamers hand, the particulate can be made of a variety of dusts, dirts and other natural matter. This particulate will then act in a similar form to climbers chalk, absorbing the sweat and drying out the gamers hand. With dry hands, the gamer can now perform to their maximum when gaming. This is why when an enemy or teammate tells you to touch grass, they are simply trying to assist you in performing better.`,
      type: "text",
    },
    {
      trigger: ["covid", "vaccine"],
      response: `I have gotten the covid vaccine about 20 times now. 4 Pfizer, 12 moderna, 4 Johnson. Once I got my first vaccine, I started cravings for it. There is something so great knowing I am reducing the spread of the coronavirus with each of them. I am feeling so empowered. I think I may be addicted ngl 😅. At least it won't kill me.`,
      type: "text",
    },
    {
      trigger: ["valorant", "uninstall"],
      response: `
UNINSTALLING VALORANT
▇▇▇▇▇▇▇▇▇▇▇▇▇▇▢
　　╭━╮╭━╮╭╮　╱ 　　
　　╰━┫╰━┫╰╯╱╭╮ 　　
　　╰━╯╰━╯　╱　╰╯ 　　　　　
　　　     COMPLETE
      `,
      type: "ascii",
    },
    {
      trigger: ["asked"],
      response: `
      ⠀⠀⠀⠀⠀⠀.　　　　　　　　　　　　　.　　　ﾟ .　　　　　　　　　　　　　. 　　　　　　　　　　　　　　　✦ 　　　　　,　　　　　　　. ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 　　　　　　　　　　　. .　　　　　　　　　　　　　. 　　✦⠀　   　　　,　　　　　　　　　 ⠀　　　　⠀　　, ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀.　　　　　 　　⠀　　　⠀.　 ˚　　　⠀　⠀  　　,　　　　　　. . ⠀　　⠀  　　　　　⠀✦⠀　 . .　　　　.　　　⠀ .  ˚　　　　　　　　ﾟ　　　　　. .⠀　　⠀‍⠀‍⠀‍⠀‍⠀‍⠀‍⠀‍⠀‍⠀‍⠀‍⠀, *　　⠀. .　　　　　　　　　　⠀✦ ˚　　　　　　　　　　　　　　 .⠀　　　　　　　　　　 　　　　　　　　　　.　　　　　　　　. ✦⠀　   　　　,　　     ⠀　　 .　　　　　 　　⠀　　　. ˚　　　⠀　⠀  　　　　 　　　　　　　　　　　, .　　　 ⠀ 　　    　　　　　 　　　　　. Traveled the entire galaxy trying to find out who asked⠀⠀⠀⠀⠀⠀⠀.　　　　　　　　　　⠀⠀⠀✦ ⠀ ⠀　　　　　　　　　　　　　　⠀⠀⠀⠀⠀* ⠀⠀⠀.　　　　　　　　　　. ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀✦⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀ ⠀⠀⠀⠀⠀⠀.　　　　　　　　　　　　　.　　　ﾟ .　　　　　　　　　　　　　.
      `,
      type: "text",
    },
    {
      trigger: ["based", "redpilled"],
      response: `Based? Based on what? In your dick? Please shut the fuck up and use words properly you fuckin troglodyte, do you think God gave us a freedom of speech just to spew random words that have no meaning that doesn't even correllate to the topic of the conversation? Like please you always complain about why no one talks to you or no one expresses their opinions on you because you're always spewing random shit like poggers based cringe and when you try to explain what it is and you just say that it's funny like what? What the fuck is funny about that do you think you'll just become a stand-up comedian that will get a standing ovation just because you said "cum" in the stage? HELL NO YOU FUCKIN IDIOT, so please shut the fuck up and use words properly`,
      type: "text",
    },
    {
      trigger: ["grammar"],
      response: `Writing's not easy. That's why Grammarly can help. This sentence is grammatically correct, but it's wordy, and hard to read. It undermines the writer's message and the word choice is bland. Grammarly's cutting edge technology helps you craft compelling, understandable writing that makes an impact on your reader. Much better. Are you ready to give it a try? Installation is simple and free. Visit Grammarly.com today!`,
      type: "text",
    },
    {
      trigger: ["sex"],
      response: `
⣿⣿⣷⡁⢆⠈⠕⢕⢂⢕⢂⢕⢂⢔⢂⢕⢄⠂⣂⠂⠆⢂⢕⢂⢕⢂⢕⢂⢕⢂
⣿⣿⣿⡷⠊⡢⡹⣦⡑⢂⢕⢂⢕⢂⢕⢂⠕⠔⠌⠝⠛⠶⠶⢶⣦⣄⢂⢕⢂⢕
⣿⣿⠏⣠⣾⣦⡐⢌⢿⣷⣦⣅⡑⠕⠡⠐⢿⠿⣛⠟⠛⠛⠛⠛⠡⢷⡈⢂⢕⢂
⠟⣡⣾⣿⣿⣿⣿⣦⣑⠝⢿⣿⣿⣿⣿⣿⡵⢁⣤⣶⣶⣿⢿⢿⢿⡟⢻⣤⢑⢂
⣾⣿⣿⡿⢟⣛⣻⣿⣿⣿⣦⣬⣙⣻⣿⣿⣷⣿⣿⢟⢝⢕⢕⢕⢕⢽⣿⣿⣷⣔
⣿⣿⠵⠚⠉⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⢕⢕⢕⢕⢕⣽⣿⣿⣿⣿
⢷⣂⣠⣴⣾⡿⡿⡻⡻⣿⣿⣴⣿⣿⣿⣿⣿⣿⣷⣵⣵⣵⣷⣿⣿⣿⣿⣿⣿⡿
⢌⠻⣿⡿⡫⡪⡪⡪⡪⣺⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
⠣⡁⠹⡪⡪⡪⡪⣪⣾⣿⣿⣿⣿⠋⠐⢉⢍⢄⢌⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈
⡣⡘⢄⠙⣾⣾⣾⣿⣿⣿⣿⣿⣿⡀⢐⢕⢕⢕⢕⢕⡘⣿⣿⣿⣿⣿⣿⠏⠠⠈
⠌⢊⢂⢣⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢐⢕⢕⢕⢕⢕⢅⣿⣿⣿⣿⡿⢋⢜⠠⠈
⠄⠁⠕⢝⡢⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣕⣑⣑⣑⣵⣿⣿⣿⡿⢋⢔⢕⣿⠠⠈
⠨⡂⡀⢑⢕⡅⠂⠄⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⢔⢕⢕⣿⣿⠠⠈
⠄⠪⣂⠁⢕⠆⠄⠂⠄⠁⡀⠂⡀⠄⢈⠉⢍⢛⢛⢛⢋⢔⢕⢕⢕⣽⣿⣿⠠⠈
      `,
      type: "ascii",
    },
    {
      trigger: ["fuck you"],
      response: `What if I'm already fucking myself? Behind this simple insult hides a universal paradox that may put your sexuality in question. Let's do a simple thought experiment: imagine us two standing in front of each other. I, of course, am wearing a pair of jeans, that are covering my genitals and my butt. You then command me to "go fuck myself". I may be fucking myself already. I may as well not be fucking myself already. Until my dick and its position relative to my ass is observed, it is simultaneously in my ass, but also outside of it - thus, it stays in superposition. The moment you lay eyes on my penis, both states collide with each other and become either one. You may have already guessed what the problem here is. As soon as a single photon reflected by my dick enters either one of your eyes, you become gay. The only way to avoid this is to not observe my penis. But if you don't look at it, then you will never know if your insult had any effect, thus rendering it meaningless. Since you have already made the insult, you are now, too, in superposition - you're either wrong, or gay. It's unfortunate, really - you dug a hole for yourself without even knowing it. All you can do now is accept it, and learn from your mistakes.`,
      type: "text",
    },
    {
      trigger: ["cock"],
      response: `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⢿⣿⣿⠿⠛⠿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠉⠄⣀⡤⢤⣤⣈⠁⣠⡔⠶⣾⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋⠁⠄⠄⠄⣼⣿⠁⡀⢹⣿⣷⢹⡇⠄⠎⣿⣿⣿
⣿⣿⣿⠿⠛⠉⠁⠄⠄⠄⠄⠄⠄⠄⠹⣇⣀⣡⣾⣿⡿⠉⠛⠒⠒⠋⠉⢸
⡿⠋⠁⠄⠄⢀⣤⣤⡀⠄⠄⠄⠄⠄⠄⠈⠙⠛⠛⠉⠄⠄⠄⠄⠄⠄⠄⠈
⠄⠄⠄⠄⠄⢹⣧⡈⠿⣷⣄⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⢄⣾
⠄⠄⠄⠄⠄⠈⠻⢿⣶⣌⣙⡛⠛⠿⠶⠶⠶⠶⠶⠖⣒⣒⣚⣋⡩⢱⣾⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⠛⠛⠛⠻⠿⠿⠟⠛⠛⠛⠉⢉⣥⣶⣾⣿⣿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠒⠶⣿⣿⣿⣿⣿⣿⣿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿
⣿⡿⠛⠛⠛⢻⣿⠿⠛⠛⠛⢿⣿⣿⡿⠛⠛⠛⢻⡟⠛⣿⡿⠛⣻⣿⣿⣿
⡟⠄⣼⣿⣿⣿⡇⠄⣾⣿⣧⠄⢻⡏⠄⣼⣿⣿⣿⡇⠄⡟⢀⣴⣿⣿⣿⣿
⡇⠄⣿⣿⣿⣿⡄⠄⣿⣿⣿⠄⢸⡇⠄⣿⣿⣿⣿⡇⠄⣀⠈⢻⣿⣿⣿⣿
⣿⣄⠈⠙⠛⢻⣧⡄⠙⠛⠉⣠⣿⣷⣄⠈⠙⠛⢹⡇⠄⣿⣧⠄⠻⣿⣿⣿
      `,
      type: "ascii",
    },
    {
      trigger: ["minecraft", "mc"],
      response:
        "What if I... put my Minecraft bed... 😳 next to yours... 😳 aha ha, just kidding.. 😂 unless.. ? 😳",
      type: "text",
    },
    {
      trigger: ["raid", "shadow", "legends"],
      response: `Today's video is sponsored by Raid Shadow Legends, one of the biggest mobile role-playing games of 2019 and it's totally free! Currently almost 10 million users have joined Raid over the last six months, and it's one of the most impressive games in its class with detailed models, environments and smooth 60 frames per second animations! All the champions in the game can be customized with unique gear that changes your strategic buffs and abilities! The dungeon bosses have some ridiculous skills of their own and figuring out the perfect party and strategy to overtake them's a lot of fun! Currently with over 300,000 reviews, Raid has almost a perfect score on the Play Store! The community is growing fast and the highly anticipated new faction wars feature is now live, you might even find my squad out there in the arena! It's easier to start now than ever with rates program for new players you get a new daily login reward for the first 90 days that you play in the game! So what are you waiting for? Go to the video description, click on the special links and you'll get 50,000 silver and a free epic champion as part of the new player program to start your journey! Good luck and I'll see you there!`,
      type: "text",
    },
    {
      trigger: ["moai", "moyai", ":moai:", ":moyai:", "🗿"],
      response: "🗿",
      type: "reaction",
    },
    {
      trigger: ["bitch"],
      response: `
———————————No bitches?———————————
⠀⣞⢽⢪⢣⢣⢣⢫⡺⡵⣝⡮⣗⢷⢽⢽⢽⣮⡷⡽⣜⣜⢮⢺⣜⢷⢽⢝⡽⣝
⠸⡸⠜⠕⠕⠁⢁⢇⢏⢽⢺⣪⡳⡝⣎⣏⢯⢞⡿⣟⣷⣳⢯⡷⣽⢽⢯⣳⣫⠇
⠀⠀⢀⢀⢄⢬⢪⡪⡎⣆⡈⠚⠜⠕⠇⠗⠝⢕⢯⢫⣞⣯⣿⣻⡽⣏⢗⣗⠏⠀
⠀⠪⡪⡪⣪⢪⢺⢸⢢⢓⢆⢤⢀⠀⠀⠀⠀⠈⢊⢞⡾⣿⡯⣏⢮⠷⠁⠀⠀
⠀⠀⠀⠈⠊⠆⡃⠕⢕⢇⢇⢇⢇⢇⢏⢎⢎⢆⢄⠀⢑⣽⣿⢝⠲⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡿⠂⠠⠀⡇⢇⠕⢈⣀⠀⠁⠡⠣⡣⡫⣂⣿⠯⢪⠰⠂⠀⠀⠀⠀
⠀⠀⠀⠀⡦⡙⡂⢀⢤⢣⠣⡈⣾⡃⠠⠄⠀⡄⢱⣌⣶⢏⢊⠂⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢝⡲⣜⡮⡏⢎⢌⢂⠙⠢⠐⢀⢘⢵⣽⣿⡿⠁⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠨⣺⡺⡕⡕⡱⡑⡆⡕⡅⡕⡜⡼⢽⡻⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⣳⣫⣾⣵⣗⡵⡱⡡⢣⢑⢕⢜⢕⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣴⣿⣾⣿⣿⣿⡿⡽⡑⢌⠪⡢⡣⣣⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⡟⡾⣿⢿⢿⢵⣽⣾⣼⣘⢸⢸⣞⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠁⠇⠡⠩⡫⢿⣝⡻⡮⣒⢽⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
—————————————————————————————
      `,
      type: "ascii",
    },
    {
      trigger: ["simp"],
      response: `SORRY SLUTS‼️😤🌞SIMP SUMMER🌞IS OVER🙅🏻‍♀️🚫YOU BETTER FUCK OFF 🏃🏼‍♀️BECAUSE NO ❌SIMP ❌SEPTEMBER HAS ONLY JUST BEGUN👌🏻🙏🏻 YOU KNOW WHAT THAT MEANS 👀😳 LOOKS LIKE THE 🍗TURKEY🍗 ISNT GETTING ANY SLURPY 🌧 TONIGHT🌚‼️ PREPARE 🤞🏻UR PUSSIES 👉🏻👉🏻FOR A DRY SPELL ☀️ CAUSE ITS TIME🕑 FOR THE BOYS 😤💪🏼TO FOCUS 👀 ON THEMSELVES 😇YOU SLUTS BEST SAVE YOURSELVES FOR THAT GOOD DICK🙌🏻🍆 SEND THIS TO 7️⃣ OF YOUR BIGGEST HOES👯‍♀️TO LET THEM KNOW YOU'RE READY😎FOR NO ❌SIMP❌SEPTEMBER👏🏻👏🏻`,
      type: "text",
    },
    {
      trigger: ["cum"],
      response: `Infinite cum. You sit on the toilet to jack off, but you begin to cum uncontrollably. After ten spurts you start to worry. Your hand is sticky and it reeks of semen. You desperately shove your dick into a wad of toilet paper, but that only makes your balls hurt. The cum accelerates. It’s been three minutes. You can’t stop cumming. Your bathroom floor is covered in a thin layer of baby fluid. You try to cum into the shower drain but it builds up too fast. You try the toilet. The cum is too thick to be flushed. You lock the bathroom door to prevent the cum from escaping. The air grows hot and humid from the cum. The cum accelerates. You slip and fall in your own sperm. The cum is now six inches deep, almost as long as your still-erect semen hose. Sprawled on your back, you begin to cum all over the ceiling. Globs of the sticky white fluid begin to fall like raindrops, giving you a facial with your own cum. The cum accelerates. You struggle to stand as the force of the cum begins to propel you backwards as if you were on a bukkake themed slip-and-slide. Still on your knees, the cum is now at chin height. To avoid drowning you open the bathroom door. The deluge of man juice reminds you of the Great Molasses Flood of 1919, only with cum instead of molasses. The cum accelerates. It’s been two hours. Your children and wife scream in terror as their bodies are engulfed by the snow-white sludge. Your youngest child goes under, with viscous bubbles and muffled cries rising from the goop. You plead to God to end your suffering. The cum accelerates. You squeeze your dick to stop the cum, but it begins to leak out of your asshole instead. You let go. The force of the cum tears your urethra open, leaving only a gaping hole in your crotch that spews semen. Your body picks up speed as it slides backwards along the cum. You smash through the wall, hurtling into the sky at thirty miles an hour. From a bird’s eye view you see your house is completely white. Your neighbor calls the cops. The cum accelerates. As you continue to ascend, you spot police cars racing towards your house. The cops pull out their guns and take aim, but stray loads of cum hit them in the eyes, blinding them. The cum accelerates. You are now at an altitude of 1000 feet. The SWAT team arrives. Military helicopters circle you. Hundreds of bullets pierce your body at once, yet you stay conscious. Your testicles have now grown into a substitute brain. The cum accelerates. It has been two days. With your body now destroyed, the cum begins to spray in all directions. You break the sound barrier. The government deploys fighter jets to chase you down, but the impact of your cum sends one plane crashing to the ground. The government decides to let you leave the earth. You feel your gonads start to burn up as you reach the edges of the atmosphere. You narrowly miss the ISS, giving it a new white paint job as you fly past. Physicists struggle to calculate your erratic trajectory. The cum accelerates. The cum begins to gravitate towards itself, forming a comet trail of semen. Astronomers begin calling you the “Cummet.” You are stuck in space forever, stripped of your body and senses, forced to endure an eternity of cumshots. Eventually, you stop thinking.`,
      type: "text",
    },
    {
      trigger: ["cat", "shane", "dawson"],
      response: 'i didnt fuck my cat. i didnt cum on my cat. i didnt put my dick anywhere near my cat. Ive never done anything weird with my cats. I promised myself i wasnt going to make apology videos after last years thing so im just trying to be as short and honest with this as possible. (1/?)',
      type: "text",
    },
    {
      trigger: ["bozo", "ratio"],
      response: `don’t care + didn’t ask + cry about it + who asked + stay mad + get real + L + bleed + mald seethe cope harder + dilate + incorrect + hoes mad + pound sand + basic skill issue + typo + ratio + ur dad left + you fell off + no u + the audacity + triggered + repelled + ur a minor + k. + any askers + get a life + ok and? + cringe + copium + go outside + touch grass + kick rocks + quote tweet + think again + not based + not funny didn’t laugh + social credits -999, 999, 999, 999 + get good + reported + ad hominem + ok boomer + small pp + ur allergic to sunlight + GG! + get rekt + trolled + your loss + muted + banned + kicked + permaban + useless + i slept with ur mom + yo momma + yo momma so fat + redpilled + no bitches allowed + i said it better + tiktok fan + get a life + unsubscribed + plundered + go tell reddit + donowalled + simp + get sticked bug LOL + talk nonsense + trump supporter + your’re a full time discord mod + you’re* + grammar issue + nerd + get clapped + kys + lorem ipsum dolor sit amet + go outside + bleach + lol + gay + retard + autistic + reported + ask deez + ez clap + straight
      cash + idgaf + ratio again + stay mad + read FAQ + youre lost + you “re” + stay pressed + reverse double take back + pedophile + cancelled + done for + don't give a damn + get a job + sus + baka + sussy baka + get blocked + mad free + freer than air + furry + rip bozo + you're a (insert stereotype) + slight_smile + aired + cringe again + Super Idol的笑容 + mad cuz bad + my pronouns are xe, xem & xyr + irrelevant + deal with it + screencapped your bio + karen/kyle + jealous + you're deaf + balls + i'll be right back + go ahead whine about it + 日本語がお上手ですね + get fucked + you can’t understand what the word intelligence means with your dumb ass + you have hair + queued + put some thought into what you're going to do with that + stfu + go to bed + yes, i'm taller than you + i think your joke is funny + i rejected your mother's advances + marooned + you can’t read + I win + final ratio+ backup ratio + yb better + you take fucking redpills and say that its and to "socialize" + you have no social credit + BING CHILLING
      + super idol 105 C is the best musical performance in the whole history of mankind + Adolf Hitler (German: [ˈadɔlf ˈhɪtlɐ] (About this soundlisten); 20 April 1889 – 30 April 1945) was an Austrian-born German politician who was the dictator of Germany from 1933 until his death in 1945. He rose to power as the leader of the Nazi Party,[a] becoming the chancellor in 1933 and then assuming the title of Führer und Reichskanzler in 1934.[b] During his dictatorship, he initiated World War II in Europe by invading Poland on 1 September 1939. He was closely involved in military operations throughout the war and was central to the perpetration of the Holocaust, the genocide of about six million Jews and millions of other victims + don't care + didn't ask + you're white + cry about it + stay mad + get real + L + repeat + mald seethe cope harder + hoes mad + basic + skill issue + ratio + you fell off + the audacity + triggered + any askers + redpilled + get a life + ok and? + cringe + touch grass + donowalled + not based + y
      our're a (insert stereotype) + not funny didn't laugh + you're* + grammar issue + go outside + get good + reported + ad hominem + GG! + ask deez + ez clap + straight cash + ratio again + final ratio + stay mad + stay pressed + pedophile + cancelled + done for + mad free + freer than air + rip bozo + slight_smile + cringe again + mad cuz bad + lol + irrelevant + cope + jealous + go ahead whine about it + your problem + don't care even more + sex offender + not okay + glhf + problematic + GOOF the famous rapper has gone diamond on his album "ON DA SKATEBOARD" + can i get a Chick-fil-a Chicken Sandwich and a Spicy Chicken Sandwich + FAMOUS RAPPER GOOF JUST GROOMED A CHILD IN REAL LIFE HE WAS ACTUALLY THE ZAMN GUY ALL ALONG + black person + white person + mexican person + squid game person + left wing + right wing + chicken wing+ you fell off + ratio + you're white + you're british + who asked + no u + deez nuts + radio + don't care + didn't ask + i'm a minor + i'm neurodivergent + caught in 4k + cope + seethe + GG + in 1947 the world's first general purpose computer, the 30 ton ENIAC was created + your mom's + the hood watches markiplier now + grow up + L + L (part 2) + retweet + ligma + taco bell tortilla crunch + think outside the bun + ur benched + ur a wrench + i own you + ur dad fell off + my dad could beat ur dad up + ur aimhacking + silver elite + tryhard + boomer + sksksksk + ur beta + i'm sigma + ur submissive + L (part 3) + yb better + ur sus + this is a cry for help and i'm extremely depressed. + quote tweet + you're cringe + i did your mom + you bought monkey nft + you're weirdchamp + you're a clown + my father left me at the age of 4 and i never recovered since + my dad owns steam + who want me? + i'm lonely + they didn't think it could possibly happen, but they're releasing L
      `,
      type: "text",
    }
  ],
};

client.on(Events.MessageCreate, (message) => {
  // Check if message author is automod#0068
  // create a list of already sent copypastas
  var already_sent = [];

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
            // Group the message into groups containing 2000 characters
            var groups = [];
            for (let k = 0; k < copypasta.all[i].response.length; k += 2000) {
              groups.push(copypasta.all[i].response.substring(k, k + 2000));
            }

            // Send the message
            for (let k = 0; k < groups.length; k++) {
              if (!already_sent.includes(groups[k])) {
                message.reply({
                  content: groups[k],
                  allowedMentions: { repliedUser: false },
                });

                // Add the copypasta to the list of already sent copypastas
                already_sent.push(groups[k]);
              }
            }
          } else if (copypasta.all[i].type === "ascii") {
            if (!already_sent.includes(copypasta.all[i].response)) {
              message.reply({
                content: copypasta.all[i].response.substring(0, 2000),
                allowedMentions: { repliedUser: false },
              });

              // Add the copypasta to the list of already sent copypastas
              already_sent.push(copypasta.all[i].response);
            }
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
