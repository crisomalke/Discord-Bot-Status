const { MessageEmbed } = require("discord.js")
const discord = require("discord.js")
const client = new discord.Client()
const ch = "" //Enter the status channel id
const guild = "" //Enter the server id
const bot = "" //Enter the bot id 
const message = "" //Enter the message id

client.on("ready", () => {

  setInterval(function() {

    let guild = client.guilds.cache.get(guild);

    let user = guild.members.cache.get(bot)
    let status = user.presence.status
    client.channels.cache.get(ch).messages.fetch("1003609168143470653").then(msg => {

      let offline = new MessageEmbed()
        .setTitle("**Status Panel**")
      
      .setDescription(`The fields below will update when ${client.user.username} find any status updates in the bot.`)
        .addField("Bot Status", ":red_circle: Offline")
        .setColor("RED")
        .setTimestamp()
      let online = new MessageEmbed()
        .setTitle("**Dsco Status**")
        .setDescription(`The fields below will update when ${client.user.username} find any status updates in the bot.`)
        .addField("Bot Status", ":green_circle: Online")
        .setColor("GREEN")
        .setTimestamp()

      if (status === "online") {
        msg.edit(online)
      } else {
        if (status === "dnd") {
          msg.edit(online)
        } else {
          if (status === "idle") {
            msg.edit(online)
          } else {
            if (status === "offline") {
              msg.edit(offline)
            }
          }
        }
      }
    }).catch(err => {})
  }, 5000) 
  console.log(`${client.user.tag} is ready!`)
});

client.on("message", async message => {

  if (message.content === "s!status") {
if (!message.author.permissions.has("ADMINISTRATOR")) return message.reply(`${client.emoji.wrong} **You can't use this command.**`)
    let execute = new MessageEmbed()
      .setTitle("Status Embed")
      .setDescription("This embed will update when Dsco API found any status changes in our bot, website and api.")
      .setColor("BLURPLE")
      .setTimestamp()

    return message.channel.send(execute)

  }
    if(message.content == 's!help') {
        let embed = new MessageEmbed()
        .setTitle("Help Menu")
        .setDescription("I'm a Hosting Server Managee for Dsco. I have most of hosting features like status panel, console edition etc.")
        .addField("Commands", "`s!status` - status panel\n`s!help` - help menu\n`s!start` - start the server\n`s!stop` - stop the server\n`s!console log` - send a cmd in console")
        .setColor("BLURPLE")
        .setFooter("Coded by Criso#7107")
        message.reply({ embeds: [embed] })
    }
    if(message.content == 's!start') {
        message.delete()
    }
    if(message.content == 's!msg') {
        let imp_msg = message.content;
        let embed = new MessageEmbed()
        .setTitle("Important Message")
        .setColor("BLURPLE")
        
        .setDescription(imp_msg.slice("s!msg").join(""))
                        
        
       client.channels.cache.get("1003283868775895092").messages.fetch("1003609168143470653").then(msg => {
           
           msg.reply(embed)
           message.reply("I have successfully sent the important message in status channel.")
           }).catch(console.error)
                                                                                                  
       }
    })


client.login("token")
