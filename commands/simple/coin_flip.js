
const Commando = require('discord.js-commando');

class CoinFlipCommand extends Commando.Command {



    constructor(client)
    {
        super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'flips a coin'

        })
        this.coinValuie =10;
    }


    async run(message, args)
    {
        var chance = Math.floor(Math.random()*2);
        if (chance ==0) {
            message.reply("heads");
        }else {
            message.reply("Tails");
        }

    }
}


module.exports = CoinFlipCommand;
