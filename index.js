

const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const bot = new Commando.CommandoClient();
const key = 'NTMxMTM3MDY1Nzc0MjE5Mjg2.DxJlPw.a_m1aKs72LqTq13_s2nWRz1wM24';
const gremory = require('./gremory.js');
const Coin = require('./commands/simple/Person.js');
bot.registry.registerGroup('simple');
bot.registry.registerGroup('music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname+'/commands')
gremory.gremoryInitiated(bot,key);


const coin = new Coin();
console.log(coin);









