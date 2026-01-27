
module.exports = (bot) => {
    bot.start((ctx) => ctx.reply(
        `
        <b>Welcome to Signature Akademia!</b>

        <i>For features coming soon</i>
           ━━━━━━━━━━━━━━
           📘 <b>Commands</b>
           • /start — Start the bot
           • /help — Get help
           • /stats — Your progress
           ━━━━━━━━━━━━━━
        `,
        {
            parse_mode : 'HTML',
            reply_markup: {
                inline_keyboard : [
                    [{text : "Visit Facebook Page", url : "https://www.facebook.com/signatureakademia/"}],
                    [{text : "Subscribe To Our Telegram Channel", url : "https://t.me/signatureakademia"}]
                ]
            }
        }
    ))
}