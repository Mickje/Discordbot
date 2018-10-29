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
    if (message.content === 'thx') {
    	message.reply('niks thx zoek een leven');
  	}
});

client.on('message', message => {
    if (message.content === 'nice') {
    	message.reply('wat nou nice lik een piemel');
  	}
});

client.on('message', message => {
    if (message.content === 'lol') {
    	message.channel.send('je moeder is een snol');
  	}
});

client.on('message', message => {
    if (message.content === 'Oke') {
    	message.reply('vagina');
  	}
});

client.on('message', message => {
    if (message.content === 'Nice') {
    	message.reply('wat nou nice lik een piemel');
  	}
});

client.on('message', message => {
    if (message.content === 'gvd') {
    	message.reply('Niet schelden tering mens');
  	}
});

client.on('message', message => {
    if (message.content === 'haha') {
    	message.reply('Je vind jezelf wel grappig he');
  	}
});

client.on('message', message => {
    if (message.content === 'Haha') {
    	message.reply('Je vind jezelf wel grappig he');
  	}
});

client.on('message', message => {
    if (message.content === 'hahaha') {
    	message.reply('Je vind jezelf wel grappig he');
  	}
});

client.on('message', message => {
    if (message.content === 'Hahaha') {
    	message.reply('Je vind jezelf wel grappig he');
  	}
});

client.on('message', message => {
    if (message.content === 'Gvd') {
    	message.reply('Niet schelden tering mens');
  	}
});

client.on('message', message => {
    if (message.content === 'Hoi') {
    	message.reply('doei');
  	}
});

client.on('message', message => {
    if (message.content === 'Thx') {
    	message.reply('niks thx zoek een leven');
  	}
});

client.on('message', message => {
    if (message.content === 'xD') {
    	message.reply('Land uit');
  	}
});

client.on('message', message => {
    if (message.content === 'xd') {
    	message.reply('land uit');
  	}
});

client.on('message', message => {
    if (message.content === 'XD') {
    	message.reply('land uit');
  	}
});

client.on('message', message => {
    if (message.content === 'Xd') {
    	message.reply('land uit');
  	}
});

client.on('message', message => {
    if (message.content === 'sorry') {
    	message.reply('slijmbal');
  	}
});

client.on('message', message => {
    if (message.content === 'Sorry') {
    	message.reply('slijmbal');
  	}
});

client.on('message', message => {
    if (message.content === 'Yo') {
    	message.reply('hey homo');
  	}
});

client.on('message', message => {
    if (message.content === 'ja') {
    	message.reply('alle tieners zeggen ja tegen MDMA');
  	}
});

client.on('message', message => {
    if (message.content === 'Ja') {
    	message.reply('alle tieners zeggen ja tegen MDMA');
  	}
});

client.on('message', message => {
    if (message.content === 'Lol') {
    	message.channel.send('je moeder is een snol');
  	}
});

client.on('message', message => {
    if (message.content === 'Dankje') {
    	message.channel.send('je moeder is een plankje');
  	}
});

client.on('message', message => {
    if (message.content === 'dankje') {
    	message.channel.send('je moeder is een plankje');
  	}
});

client.on('message', message => {
    if (message.content === 'kut') {
    	message.channel.send('Niet schelden godverdomme');
  	}
});

client.on('message', message => {
    if (message.content === 'famke louise') {
    	message.channel.send('Is een platvis');
  	}
});

client.on('message', message => {
    if (message.content === 'Famke louise') {
    	message.channel.send('Is een platvis');
  	}
});

client.on('message', message => {
    if (message.content === 'Famke Louise') {
    	message.channel.send('Is een platvis');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
