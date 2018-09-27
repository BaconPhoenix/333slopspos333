const discord = require ('discord.js');

var client = new discord.Client();

client.on ("ready", () => {
    console.log ("Main File Ready!");

    client.user.setActivity ("$commands");
});

const fs = require("fs");
client.msgs = require ("./msgs.json");

$Hello = require ("./8ball");

let cooldown = new Set();
let cdseconds = 3;

const prefix = "$";

client.on ("message", (message) => {

    msg = message.content.toLowerCase();

    if (message.author.bot) return;

    if (msg.startsWith ("this is so sad, slipbot play something emotional")) {
        message.channel.send ("***Now playing: Garfield 2 Theme Song***");
    }

    if (msg.startsWith ("slipspace is big doodoo head")) {
        message.channel.send ("Correction: Slipspace is THE BIGGEST doodoo head.", {files: ["./Images/Kappa.png"]});
    }

    if (msg.startsWith ("highfive slipbot")) {
        message.channel.send (":raised_hand:");
    }

    if (msg.startsWith ("hi slipbot")) {
        message.reply ("Hi I'm Slipspace! I'm the android sent by Cyberlife to watch over this server!");
    }

    if(!message.content.startsWith(prefix)) return;
    if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("You have to wait 3 seconds between commands.").then(d_msg => { d_msg.delete(3000); });
}
    if(!message.member.hasPermission("BAN_MEMBERS")){
    cooldown.add(message.author.id);
}

    if (msg.startsWith (prefix + "twitch")) {
        message.channel.send ("https://www.twitch.tv/slipspacetv");
    }

    if (msg.startsWith (prefix + "rabbit")) {
        message.channel.send ("https://rabb.it/Slipspace");
    }

    if (msg.startsWith (prefix + "epic")) {
        message.delete();
        message.channel.send ("NOW THIS IS EPIC");
    }

    if (msg.startsWith (prefix + "notepic")) {
        message.delete();
        message.channel.send ("THIS IS SO NOT EPIC");
    }

    if (msg.startsWith (prefix + "big")) {
        message.delete();
        message.channel.send ("Now THAT is big dick energy.");
    }

    if (msg.startsWith (prefix + "small")) {
        message.delete();
        message.channel.send ("This right here? This is small dick energy.");
    }

    if (msg.startsWith (prefix + "howdy")) {
        message.channel.send ("HOW D");
    }
    //HIDDEN COMMANDS
    if (msg.startsWith (prefix + "xi")) {
        message.delete();
        message.channel.send ("xi is a smelly soap pirate.");
    }

    if (msg.startsWith (prefix + "ethan")) {
        message.delete();
        message.channel.send ("THIS IS ETHAN");
    }

    if (msg.startsWith (prefix + "evyn")) {
        message.delete();
        message.channel.send ("cunt");
    }

    if (msg.startsWith (prefix + "doodoo")) {
        message.delete();
        message.channel.send ("SlipSpace is big doodoo head. ( ͡° ͜ʖ ͡°)");
    }

    if (msg.startsWith (prefix + "nano")) {
        message.delete();
        message.channel.send ("Stay Hydrated!");
    }

    if (msg.startsWith (prefix + "hover")) {
        message.delete();
        message.channel.send (":point_right: ***ADMINS HOVER BAN*** :point_left:");
    }

    if (msg.startsWith (prefix + "champ")) {
        message.delete();
        message.channel.send ("I AM THE CHAMP");
    }

    if (msg.startsWith ("┴┬┴┤( ͡° ͜ʖ├┬┴┬")) {
        message.delete();
        message.channel.send ("Sorry but the hidden command list is protected by the Lenny Security System. You try to get past Lenny? You boutta get clapped. :^)");
    }

    if (msg.startsWith (prefix + "devhidden")) {
        message.delete();
        message.channel.send ("Hidden commands: \n $xi \n $ethan \n $evyn \n $doodoo \n $nano \n $hover \n $champ \n shev").then(d_msg => { d_msg.delete(3000); });
    }

    if (msg.startsWith (prefix + "shev")) {
        message.delete();
        message.channel.send ("YERRRRRR");
    }

    if (msg.includes (prefix + "botinfo")) {
        embed = new discord.RichEmbed ()
            .setAuthor("SlipBot")
            .setDescription ("A bot that does stuff. Oh and it also does things.")
            .setFooter ("SlipBot Developer: Bacon Phoenix, \n Assistant Developer: Kralem, \n Assistant Designer/SlipBot's Dad: Slipspace")
            .addField ("Type $commands to get a list of available features!", "Enjoy! :)")
            .setThumbnail ("https://cdn.discordapp.com/attachments/480771581879123990/494316770979610647/SlipSpaceTV.jpg")
            .setColor ("#f0a84f");

        message.channel.send (embed);
    }

    if (msg.includes (prefix + "commands")) {
        embed = new discord.RichEmbed ()
            .setAuthor("SlipBot Command List")
            .setDescription ("A bot that does stuff. Oh and it also does things.")
            .setFooter ("If you have any suggestions on what to change/add feel free to tell us! :)")
            .addField ("Fun Commands: ", "\n $8ball \n $dice \n $epic \n $notepic \n $big \n $small \n $howdy")
            .addField ("Info Commands: ", "\n $botinfo \n $twitch \n $rabbit")
            .addField ("Plus some hidden ones: ", "┴┬┴┤( ͡° ͜ʖ├┬┴┬")
            .setThumbnail ("https://cdn.discordapp.com/attachments/480771581879123990/494316770979610647/SlipSpaceTV.jpg")
            .setColor ("#f0a84f");

        message.channel.send (embed);
    }
//DICE
    if (msg.startsWith (prefix + "dice")) {
        ballMessage = message.content.slice (7);
        number = 6;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ("It's a 1!"); break;
            case 2: message.channel.send ("It's a 2!"); break;
            case 3: message.channel.send ("It's a 3!"); break;
            case 4: message.channel.send ("It's a 4!"); break;
            case 5: message.channel.send ("It's a 5!"); break;
            case 6: message.channel.send ("It's a 6!"); break;
        }
//DICE
    }
//vv THIS COMMAND IS FOR THE FUTURE, NOT REALLY USEFULL RIGHT NOW
    if (msg.startsWith (prefix + "devwrite")) {
        editmessage = message.content.slice (9);

        client.msgs [message.author.username] = {
            message: editmessage
        }
        fs.writeFile ("./msgs.json", JSON.stringify (client.msgs, null, 4), err => {
            if (err) throw err;
            message.channel.send ("Message Written!");
        });

    }

    if (msg.startsWith (prefix + "devget")) {
        message.delete();
        let _message = client.msgs[message.author.username].message;
        message.channel.send ("message is : " + _message);
    }
//^^

setTimeout(() => {
    cooldown.delete(message.author.id)
}, cdseconds * 1000);

});

client.login (process.env.token);
