const math = require('mathjs')
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if (primaryCommand == "tested") {
        helpCommand(receivedMessage)
    } else {
        receivedMessage.channel.send("Wrong Command NIBBA use 'tested'!")
    }
}

function helpCommand(receivedMessage) {
	var resolves = ["Abusive", "Fearful", "Hopeless", "Irrational", "Masochistic", "Paranoid", "Selfish", "Courageous", "Focused", "Powerful", "Stalwart", "Vigorous"]
    var a = Math.floor(Math.random() * 11);
	console.log("Math: " + a)
        receivedMessage.channel.send(receivedMessage.author.toString() + " Resolve is tested: " + resolves[a].toString())

}


client.login("NTU5NjE4OTM1MjQ3NDcwNTkz.D3oBkw.vsf-qy79m1aX1gjtDjyFcJdJmMA") // Replace XXXXX with your bot token