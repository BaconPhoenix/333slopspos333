const discord = require ('discord.js');

var client = new discord.Client();

const token = process.env.token;

client.on ("ready", () => {
    console.log ("8ball File Ready!");

    client.user.setGame ("$commands");
});

const fs = require("fs");

const prefix = "$";
client.on ("message", (message) => {

    msg = message.content.toLowerCase();

    if (message.author.bot) return;

    if (msg.startsWith (prefix + "8ball")) {
        ballMessage = message.content.slice (7);
        number = 30;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            //negative: 10--positive: 10--troll: 10
            case 1: message.channel.send ("Imma keep it real with you chief, no."); break; //neg 
            case 2: message.channel.send ("It do be like that sometimes."); break; //pos 
            case 3: message.channel.send ("Not likely!"); break; //neg
            case 4: message.channel.send ("Idk homie."); break; //?
            case 5: message.channel.send ("This aint it chief."); break; //neg
            case 6: message.channel.send ("mmmm try again."); break; //?
            case 7: message.channel.send ("Why the fuck are you asking me this? ◉ ͟ʖ ◉ "); break; //?
            case 8: message.channel.send ("Go google it or something."); break; //?
            case 9: message.channel.send ("Fuck off. :^)"); break; //?
            case 10: message.channel.send ("My actual 8ball says no."); break; //neg
            case 11: message.channel.send ("All signs point to yes, or whatever the good one is."); break; //pos
            case 12: message.channel.send ("I mean, I guess?"); break; //pos
            case 13: message.channel.send ("Dude, no..."); break; //neg
            case 14: message.channel.send ("Hell fucking yeah!"); break; //pos
            case 15: message.channel.send ("Stop asking."); break; //?
            case 16: message.channel.send ("Wouldn't you like to know? ; :^)"); break; //?
            case 17: message.channel.send ("Eat my ass. ( ͡° ͜ʖ ͡°)"); break; //?
            case 18: message.channel.send ("No, not at all."); break; //neg
            case 19: message.channel.send ("Are you kidding? I ain't answering that. ໒( •̀ ╭ ͟ʖ╮ •́ )७"); break; //?
            case 20: message.channel.send ("You already know!"); break; //pos
            case 21: message.channel.send ("In the distant future maybe?"); break; //pos
            case 22: message.channel.send ("I know you asked me a question, but have you ever asked yourself how you look in the eyes of God? :thinking:"); break; //?
            case 23: message.channel.send ("Huh? Sorry I was watching hentai. Uhh...the answer is yes? ( • ͜ʖ • )"); break; //pos
            case 24: message.channel.send ("Nope. Just kidding it's yes. But is it though? It is. ( ͝° ͜ʖ͡°)"); break; //pos
            case 25: message.channel.send ("乁( ･ w ･ )ㄏ maybe yes?"); break; //pos
            case 26: message.channel.send ("Sure thing, man."); break; //pos
            case 27: message.channel.send ("What?! Who would even believe it even if I told you it was true?"); break; //neg
            case 28: message.channel.send ("You crazy?! Heeeeell no."); break; //neg
            case 29: message.channel.send ("Well do bears shit in the sea? :thinking:"); break; //neg
            case 30: message.channel.send ("Sorry chief, but that's a NO from me."); break; //neg
        }

    }

});

client.login (token);
