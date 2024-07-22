const { Client, GatewayIntentBits }=require('discord.js')
const os=require('os');
const cpus=os.cpus().length;
console.log(cpus);
const client = new Client({ 
    intents: 
    [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
] });

client.on('messageCreate',(message)=>{
    if(message.author.bot) return ; // if user message instead of real user
    if(message.content.startsWith("create")){
        const url=message.content.split('create')[1];
        return message.reply({
            content:"Generating Short ID for" +url,
        })
    }
    message.reply({content:"Welcome to server !🙋‍♂️🙌👋"})
console.log(message.content);
})

client.on("interactionCreate",(interaction)=>{
console.log(interaction);
interaction.reply('pong !!');
})
client.login("MTI2NDkwMTE3NTIzMzIxNjYyNQ.GCbfOD.fGCmx0HuZBOQ3XIS2NXVuQBxmbsxXCICWvQvBw")