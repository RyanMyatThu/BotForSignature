require('dotenv').config()
const {Telegraf} = require('telegraf');
const { message } = require('telegraf/filters')
const fs = require('fs')
const path = require('path')

const bot = new Telegraf(process.env.TOKEN)

/* Dynamically load all handler files from the 'functions' directory */

function loadHandlers(dir){
    fs.readdirSync(dir).forEach((file) => {
        const fullPath = path.join(dir, file);
        if(fs.statSync(fullPath).isDirectory()){
            loadHandlers(fullPath);
        } else if(file.endsWith('.js')){
            const handler = require(fullPath);
            if(typeof handler === 'function'){
                handler(bot);
            }
        }
    })
}

loadHandlers(path.join(__dirname, 'functions'));
bot.launch()

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))