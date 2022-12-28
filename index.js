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
      type: "text",
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
      type: "text",
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
      type: "text",
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
    }
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
