const Discord = require(`discord.js`)
const bot = new Discord.Client();
const prefix = ""
var nazwabota = "Mini Kwadratowa Bot"
const token = `NzExNDk3ODE1Mzg1NDQwMzQ5.XsD4JQ.PADovVPEuEzehGJFGLrpG4-47to`;

bot.on(`ready`, ()=>{
    console.log(`bot ${nazwabota} zostal wlaczony!!!`);
})

bot.on("message", async message => {
    if (message.author.bot) return;
 
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()


if(command == "!ip"){
    message.channel.send("ip niedługo!")  


}
if(command == "!strona"){
    message.channel.send("strona nie długo!") 


}
if(command == "!pytania"){
    message.channel.send("Pytania które są najczęściej zadawane")
    message.channel.send("Jakie jest ip? sprawdzi pod komędą `!ip`")
    message.channel.send("Czy jest rekru na admina? `NIE!`")
    message.channel.send("Czy mogę range? 1.Zależy jaką i czy jest wgl rekru")
    message.channel.send("Jak zdobyć range yt? musisz przejść rekrutacje! `Wzór podania pod komędą` ```!podanie```")

}
if(command == "!podanie"){
    message.channel.send("Wzór podania")
    message.channel.send("Ile masz lat: ")
    message.channel.send("Jak masz na imię: ")
    message.channel.send("(`Nie wymagane`) Nagrywasz na YT:")
    message.channel.send("Nick z Minecraft:")
    message.channel.send("Ile będziesz grał dziennie:")
    message.channel.send("Coś o sobie:")
    message.channel.send("Ile masz subów:")
    message.channel.send("Link do kanału:")
    console.log(`Ktoś użył komędy !podanie`);

}
if(command == "!rekrutacja"){
    message.channel.send("rekrutacje przejdziesz na stronie >> !strona")
    message.channel.send("ps nie przyjmujemy bez napisania rekrutacji")
}
if(command == "!pingowanie"){
    message.channel.send(":x: Dlaczego warto nie pingować here, everyone?:x: ")
    message.channel.send(":thumbsup: Ludzi to wkurza więc tego ne rób a jak admin sie wkurzy to da ci mute :thumbsup: ")
}
if(command == "!xd"){
    message.channel.send("https://media.discordapp.net/attachments/690251252533428256/706602961949949952/IMG_20200503_222736.jpg")

}
if(command == "!papug"){
    message.delete();
    message.channel.send("JAWOR")
}
if(command == "!bindy"){
    message.delete();
    message.channel.send("TO NIE BINDY TWÓJ STARY WCHODZI DO WINDY!")
}
});     
bot.login(token);
