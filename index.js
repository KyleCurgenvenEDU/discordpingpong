/*jshint esversion: 6 */

const Discord = require("discord.js");
const Token = require('./token.js');

const client = new Discord.Client();
const guild = new Discord.Guild();

const token = Token.mytoken;

client.on('ready', () => {
   console.log('I am ready!');
//    console.log(client.users);
   
   
});
client.on('message', message => {
    if(message.content.toLowerCase()==='ping'){
        message.channel.send('pong');
    }
    //experimentation


});


client.on("guildCreate", (guild) => {
    
        console.log(client.user.username + " was invited to and joined " + guild.name);
    });
    client.on("guildMemberAdd", (guild, member) => {
    
        console.log(member.user.username + " joined " + guild.name);
    });


client.login(token);


//JSON file with info from last sent message
//console.log(message.author);

//Username and echo content back
//console.log(message.author.username);
//console.log(message.author.lastMessage.content);