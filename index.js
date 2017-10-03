/*jshint esversion: 6 */

const Discord = require("discord.js");
const Token = require('./token.js');

const client = new Discord.Client();

const token = Token.mytoken;
client.on('ready', () => {
    console.log('I am ready!');
      
    
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
    // console.log(`${message.author.username} sent a message in: ${message.channel.name}`);
    // console.log(client.users.find(username));
});

//logs event when server is updated
client.on('guildUpdate', guildUpdate =>{
    console.log('Server updated');
});

// guildMemberUpdate working
client.on('guildMemberUpdate', (newMember, oldMember) =>{
    // let theId = newMember.id;
    if (oldMember.nickname === null){
        console.log(oldMember.username);
    }else{
        console.log(oldMember.nickname);
    }
    console.log(newMember.nickname);
    // console.log(client.users.get(theId).username);
    // console.log(client.users.get('218553725000744961'));
    console.log(`guild memeber updated. it is ${newMember.nickname}`);
});


// console.log(client.channels);
// let userName = client.users.get('218553725000744961');
// console.log(userName);


client.on("guildMemberAdd", (member) => {
    let serverName = member.guild;
    console.log();
    // console.log(serverName.channels("name", "general").id);
    //will only report default channel not entered channel.
    
    // serverName.channels.get(serverName.systemChannel.id);

    member.send(`${member.displayName} welcome the ${serverName.systemChannel.name} channel on server: ${serverName}.`).catch(console.error);
    console.log(`${member.displayName} welcome the ${serverName.systemChannel.name} channel on server: ${serverName}.`);
});   


//######################################################################
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