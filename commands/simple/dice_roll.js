const Commando = require('discord.js-commando');


class DiceRoll extends Commando.Command {

    constructor(client){
        super(client,{
            name: 'dice',
            group: 'simple',
            memberName: 'dice',
            description: 'roll a dice'
        })
    }


    async run(message, args)
    {
        var chance = Math.floor(Math.random()*6)+1;
        message.reply("You dice landed on "+chance);

    }
}


module.exports=DiceRoll;
