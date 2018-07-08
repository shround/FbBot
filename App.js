'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAAC8DLNIU28BANMSZAM4simFydZAvJzc0SkQwTKqUEDTFawKJM8zKbiQZCyl3jFqZBewqZCGcjhyhB5fClSGXx7awsgR3tcVMhh6rJAVTafXkZCxHBMRhZA3MtaxEKNdWA7kEoY6sILEEgCpQUwTpC5TIiYZBxEr4Wx4XWNoW8det4DXSoElvIm0',
  verifyToken: 'Skn47Jw2d4ZUz94TztpexSnL2GPODeByrA7gyTTRBqjQeHyGc6', 
  appSecret: '1a59db92bbca561a6f64a22bbdbc7bbe'
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  //chat.say(`Echo: ${text}`);
});

bot.start();

bot.on('message', (payload, chat) => {
	const text = payload.message.text;
	console.log(`The user said: ${text}`);
});

bot.hear(['hello', 'hi'], (payload, chat) => {
  console.log('The user said "hello", "hi", "hey", or "hey there"');
  
  chat.say('Hello, human friend!').then(() => {
		chat.say('How are you today?', { typing: true });
	});
});