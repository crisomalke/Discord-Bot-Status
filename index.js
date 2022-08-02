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
        .setFooter("Coded by Criso#7107") //Note: Removing credits will result in a legal action.
        .setTimestamp()
      let online = new MessageEmbed()
        .setTitle("**Status Panel**")
        .setDescription(`The fields below will update when ${client.user.username} find any status updates in the bot.`)
        .addField("Bot Status", ":green_circle: Online")
        .setColor("GREEN")
        .setFooter("Coded by Criso#7107") //Note: Removing credits will result in a legal action.
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
  console.log(`Coded by Criso#7107`)
  console.log(`This code come under MIT LICENCE`)
});

client.on("message", async message => {

  if(message.content === "s!status") {
if (!message.author.permissions.has("ADMINISTRATOR")) return message.reply(`${client.emoji.wrong} **You can't use this command.**`)
    let execute = new MessageEmbed()
      .setTitle("Status Embed")
      .setDescription(`This embed will update when ${client.user.username} found any status changes in the bot.`)
      .setColor("BLURPLE")
        .setFooter("Coded by Criso#7107") //Note: Removing credits will result in a legal action.
      .setTimestamp()

    return message.channel.send(execute)

  }
   if(message.content == 's!help') {
        let embed = new MessageEmbed()
        .setTitle("Help Menu")
        .addField("Commands", "`s!status` - status panel\n`s!help` - help menu")
        .setColor("BLURPLE")
        .setFooter("Coded by Criso#7107")
        message.reply({ embeds: [embed] })
    }
    })


client.login("token")
