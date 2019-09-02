const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("618003844554686474")
setInterval(function() {
channel.send(`Do you love me Do you Do you Do you love me Do you Do you`);
}, 30)
})

client.login(process.env.BOT_TOKEN);