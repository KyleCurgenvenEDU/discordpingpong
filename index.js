/*jshint esversion: 6 */

const Discord = require("discord.js");
const Token = require('./token.js');

const client = new Discord.Client();

const token = Token.mytoken;
client.on('ready', () => {
   console.log('I am ready!');
//    console.log();
    
});
client.on('message', message => {
    //ignore bot messages
    if(message.author.bot){
        console.log('Bot typed');
        return;
    }
    //reply with pong
    if(message.content.toLowerCase()==='ping'){
        message.channel.send('pong');
        // message.reply('pong');
    }
    //experimentation
    // console.log(client.guilds);
    console.log(`${message.author.username} sent a message in: ${message.channel.name}`);
});

// console.log(client.channels);
// let userName = client.users.get('218553725000744961');
// console.log(userName);

// guildMemberUpdate working
client.on('guildMemberUpdate', () =>{
    console.log(`guild memeber updated`);
});


// client.on('guildMemberAdd', () => {
//     console.log(`test`);
// });

client.on('guildMemberAvailable', () => {
    console.log(`guild member online`);
});

//logs event when server is updated
client.on('guildUpdate', guildUpdate =>{
    console.log('Server updated');
});

client.login(token);

//=============
//NOTES
//=============
//JSON file with info from last sent message
// console.log(message.author);

//Username and echo content back
//console.log(message.author.username);
//console.log(message.author.lastMessage.content);
// message.content.startsWith('') // startsWith  === String JS

// console.log(Date.now()-message.createdTimestamp);

//search user collection by id for user
// client.users.get('218553725000744961')

//send DM
// client.users.get('218553725000744961').sendMessage("test");