let fetch = require('node-fetch')
let limit = 30
let handler = async function (m, { conn, text, isPrems, isOwner }) {
  if (!text) throw 'Lah teksnya mana'
  conn.reply(m.chat, `_Sedang diproses..._`, m)
  let glxy = `https://api.zeks.xyz/api/hartatahta?apikey=ZTEAM&text=${text}`
  conn.sendFile(m.chat, glxy, 'harta tahta.png', `${text}`, m)
}
handler.help = ['harta <teks>']
handler.tags = ['fun']
handler.command = /^harta/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 1

module.exports = handler