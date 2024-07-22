const { REST, Routes } =require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTI2NDkwMTE3NTIzMzIxNjYyNQ.GCbfOD.fGCmx0HuZBOQ3XIS2NXVuQBxmbsxXCICWvQvBw");

(async()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands("1264901175233216625"), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }

})()
