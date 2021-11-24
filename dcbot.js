const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const prefix = "-";

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', msg => {
if (msg.content === prefix + "ping")  
    msg.channel.send (`Pong`);
});

client.login(token);


/*
config.json


{
  "token": "token"
}

*/
