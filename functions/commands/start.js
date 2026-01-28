
module.exports = (bot) => {
    bot.start((ctx) => ctx.reply(
        `
        <b>🎓 Signature Akademia</b>
<i>Empowering your learning journey</i>

━━━━━━━━━━━━━━━━
🚀 <b>What you can do</b>

📘 <b>/start</b> — Begin your journey  
🆘 <b>/help</b> — Get guidance  
📊 <b>/stats</b> — Track your progress  

━━━━━━━━━━━━━━━━
✨ <i>More features coming soon!</i>
        `,
        {
            parse_mode : 'HTML',
            reply_markup: {
                inline_keyboard : [
                    [{text : "Visit Facebook Page", url : "https://www.facebook.com/SignatureAkademia"}],
                    [{text : "Subscribe To Our Telegram Channel", url : "https://t.me/signature_akademia"}]
                ]
            }
        }
    ))
}