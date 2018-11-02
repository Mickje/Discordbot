const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 
    client.user.setGame('Elias') 
})

client.on('message', message => {
    if (message.content === '!stats') {
    	message.channel.send('https://www.battlemetrics.com/servers/rust/2784502').then(m => m.delete(10000));
    }
 });

client.on('message', message => {
    if (message.content === '!wipe') {
    	message.reply('The next wipe is on: 6.12.18 around 3PM EST').then(m => m.delete(10000));
  	}
});

client.on('message', message => {
    if (message.content === '!betaal') {
    	message.channel.send('https://paypal.me/mickje').then(m => m.delete(10000));
  	}
});

client.on('message', message => {
    if (message.content === '!factuur') {
    	message.channel.send('https://digispark.saintware.club/files/leukefoto.png').then(m => m.delete(10000));
  	}
});

client.on('message', message => {
    if (message.content === '!serverip') {
    	message.channel.send('client.connect 108.61.98.158:28046').then(m => m.delete(10000));
  	}
});

client.on('message', message => {
    if (message.content === '!invite') {
    	message.channel.send('https://discord.gg/gzGfmzd').then(m => m.delete(10000));
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
