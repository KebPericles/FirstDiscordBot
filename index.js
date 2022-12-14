// Config
/*
const { token } = require('./config.json');
*/
try {
	// required .env file to load environment variables
	const dotenv = require('dotenv');
	dotenv.config();
}
catch (error) {
	// continue regardless error
}

// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);