
const Commando = require('discord.js-commando');

class JoinChannel extends Commando.Command {


    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'join a channel'

        })
    }


    async run(message, args)
    {
       if(message.member.voiceChannel){
           if(!message.guild.voiceConnection)
           {
               message.member.voiceChannel.join()
               .then(connection => {
                   message.reply("I am here bish");
               })
           }
       }else {
           message.reply("JOIN FIRST SO I CAN COME")
       }

    }
}


module.exports = JoinChannel;
