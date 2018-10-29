const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!'); 
    });

client.on('message', message => {
    if (message.content === 'tyfus') {
    	message.reply('Niet schelden godverdomme');
  	}
});

client.on('message', message => {
    if (message.content === 'Kut') {
    	message.reply('Niet schelden godverdomme');
  	}
});

client.on('message', message => {
    if (message.content === 'tering') {
    	message.reply('Niet schelden godverdomme');
  	}
});

client.on('message', message => {
    if (message.content === 'hoi') {
    	message.reply('doei');
  	}
});

client.on('message', message => {
    if (message.content === 'yo') {
    	message.reply('hey homo');
  	}
});

client.on('message', message => {
    if (message.content === 'hey') {
    	message.reply('doei');
  	}
});

client.on('message', message => {
    if (message.content === 'oke') {
    	message.reply('vagina');
  	}
});

client.on('message', message => {
    if (message.content === 'nee') {
    	message.reply('piemels likken');
  	}
});

client.on('message', message => {
    if (message.content === '!wipe') {
    	message.reply('The next wipe is on: 1.11.18 around 3PM EST');
  	}
});

client.on('message', message => {
    if (message.content === 'spoderman') {
    	message.channel.send('is een geile anime beer');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
