const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!'); 
    });

client.on('message', message => {
    if (message.content === '!stats') {
    	message.channel.send('https://cdn.battlemetrics.com/b/standardVertical/2443908.png?foreground=%23EEEEEE&linkColor=%231185ec&lines=%23333333&background=%2336393f&chart=&chartColor=%23FF0700&showPlayers=1&maxPlayersHeight=300');
    }
 });

client.on('message', message => {
    if (message.content === '!wipe') {
    	message.reply('The next wipe is on: 1.11.18 around 3PM EST');
  	}
});

client.on('message', message => {
    if (message.content === '!betaal') {
    	message.channel.send('https://paypal.me/mickje');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
