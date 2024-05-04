import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['+256789810043', '₦ɆӾ₳▂ ▄ ▅ ▆ ▇ █', true], 
  ['+263780129060', 'Ashley kakashi', true],
  ['2348026018074', 'David develop', true], 
  ['+256708316668', 'off_street_256', true],
  ['256701507880', 'NEXA 2', true],
  ['+918360234087', 'watch your back', true],
  
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['923184070915', '94789481495', '923184474176','256789810043','233208179431'] 
global.prems = ['923184070915','256708316668','94789481495', '918360234087','233531910067']
global.allowed = ['923184070915', '256789810043', '94789481495', '918360234087','233531910067']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'BULLSEYE-MD'
global.premium = 'true'
global.packname = 'NEXA TEAM' 
global.author = '@BULLSEYE-MD' 
global.menuvid = 'https://telegra.ph/file/d6c3912b87f8affcb8733.mp4'
global.igfg = '▢✓ Follow My channel\nhttps://whatsapp.com/channel/0029VaWeUY9Jf05hxbJkVW23\n' 
global.dygp = 'https://chat.whatsapp.com/LpacbNXvuhqLAr7AZwyU3r'
global.fgsc = 'https://github.com/henrygokugt99/NEXA-MD' 
global.fgyt = 'https://youtube.com/@henrygokugt256'
global.fgpyp = 'https://youtube.com/@henrygokugt256'
global.fglog = 'XLICON.jpg' 
global.thumb = fs.readFileSync('./XLICON.jpg')


global.wait = '*🏂 _BULLSEYE IS LOADIND..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '📜'
global.dmoji = '🌝'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
