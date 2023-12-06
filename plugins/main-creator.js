let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Gael;;\nFN:Gael\nORG:Gael\nTITLE:\nitem1.TEL;waid=51907913096:51907913096\nitem1.X-ABLabel:Gael\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:おDaniel\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDaniel', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
