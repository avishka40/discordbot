
const Commando = require('discord.js-commando');
make = function (){
    return 'keep it coming ';
};

exports.gremoryInitiated = function(bot,key){

    bot.on('message',function(message){
        if(message.content == ';')
        {
            message.reply(make());
        }
    });

    bot.on('ready',function(){

    });

    bot.login(key);
}



