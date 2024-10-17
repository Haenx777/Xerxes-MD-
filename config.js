/*

# Base By 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
# Owner ? : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['254742491666']
global.ownMain = '254742491666'
global.NamaOwner = '𝕶𝖎𝖓𝖌 𝕾𝖆𝖒' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = '𝙎𝙋𝙄𝘿𝙀𝙍 - 𝙑7' //
global.author = '𝕶𝖎𝖓𝖌 𝕾𝖆𝖒' //
global.packname = 'spider-v8' //
global.url1 = 'https://whatsapp.com/channel/0029VamlYh41SWssaEvw4E2i' //
global.url2 = 'https://whatsapp.com/channel/0029VamlYh41SWssaEvw4E2i' //
global.linkgc = 'https://whatsapp.com/channel/0029VamlYh41SWssaEvw4E2i'
global.delayjpm = 3500
//Panel
global.domain = 'https://guru.sellerpanell.me' // your domian
global.apikey = 'ptla_aRq7aFBbQowvPwLChvjNLX5uE0rYZ6dUdGbFIhqUwUg' // 
global.capikey = 'ptlc_mI4q2CFLyxYSG9lqtpWVJSkqtxbQvZyheemGqW56VUH' // 
global.eggsnya = '15' // 
global.location = '1' // 

global.mess = { // 
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think Im stupid?`,
wait: '*Waiting for processing*',
success: 'Success sent by Spider V8',
bugrespon: `Processs.....`
}

global.nick = { // Custom Sesuka Lu
aaa: "‏‎S҉ P҉ I҉ D҉ E҉ E҉R҉  V҉ 8",
bbb: "⃰C҉ R҉ A҉ S҉ H҉ ̺",
ccc: "M҉ A҉ S҉ T҉ E҉ R҉  M҉ I҉ N҉ D҉ 🔥 �? ‌‌‌‌‌‌‌‌‌‌�?",
ddd: "K҉ I҉ N҉ G҉  S҉ P҉ I҉ D҉ E҉ R҉ 🌎",
eee: "A҉ L҉ L҉  H҉ A҉ I҉ L҉  S҉ P҉ I҉ D҉ E҉ R҉ ҉ 🔥🔥"
}

global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})