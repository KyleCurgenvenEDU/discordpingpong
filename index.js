const Discord = require("discord.js");
const Token = require('./token.js');

const client = new Discord.Client();

const token = Token.mytoken;

client.on('ready', () => {
   console.log('I am ready!');
    
});

client.on('message', message => {
    if(message.content.toLowerCase()==='ping'){
        message.channel.send('pong');
    }
});

client.login(token);