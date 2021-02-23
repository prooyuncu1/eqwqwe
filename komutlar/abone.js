let Discord = require("discord.js")
let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message, args) => {
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonelog = await database.fetch(`abonelog.${message.guild.id}`)
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(`:x: | Abone Rolü Ayarlanmamış! | Ayarlamak İçin !abone-rol @Rol`)
  if(!abonelog) return message.channel.send(`:x: | Abone Log Kanalı Ayarlanmamış! | Ayarlamak İçin !abone-log #kanalismi`)
  if(!aboneyetkilisi) return message.channel.send(`:x: | Abone Yetkili Tolü Ayarlanmamış! | Ayarlamak İçin !abone-y-rol @rol`)
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  await(abonekisi.roles.add(abonerol))
  message.channel.send(`Kullanıcıya abone rolünü başarıyla verdin :white_check_mark: `)
  const embed = new Discord.MessageEmbed()
  .setTitle(`Abone Rolü Verildi!`)
  .addField(`Abone Rolünü Veren Kişi:`, `Adı:${message.author.tag} İD:${message.author.id}`, true)
  .addField(`Abone Rolü Verilen Kişi`, `${user}`, true)
  .addField(`Abone Botu`, true)
  .setColor(`BLUE`)
  .setFooter(`${client.user.username} Abone Sistemi`)
  message.guild.channels.cache.get(abonelog).send(embed)
}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

exports.conf = {
  enabled: true,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: false,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: ['abone'],//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  perm: 0//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}
exports.help = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'a'
}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

exports.play = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kullanım: '!abone-y-rol @rol',//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kategori: 'Abone'//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}

//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5