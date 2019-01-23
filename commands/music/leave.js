
const Commando = require('discord.js-commando');

class LeaveChannel extends Commando.Command {


    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'leave a channel'

        })
    }


    async run(message, args)
    {
       if(message.guild.voiceConnection){
        message.guild.voiceConnection.disconnect();
       }else {
           message.reply("uhh ur stupid to trick me!")
       }

    }
}


module.exports = LeaveChannel;
