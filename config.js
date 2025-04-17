const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923240806210" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923240806210";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_16_04_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgODMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYyLFxuICAgICAgICA5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNCxcbiAgICAgICAgODQsXG4gICAgICAgIDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1LFxuICAgICAgICAzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkwLFxuICAgICAgICA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE3LFxuICAgICAgICA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgNjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1Kc3oxVEtpVWdHQTlOZWp3a0ZQRjQvYytnRExZeU1WaFRVK3VDN01kek09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjEtcVkyelh2Um1TSjdENzlUZ3RWYWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzYyNTc4NDMtODAxMy00NjEzLWIyMTItYWYyZTYzZGYyY2I4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgODQsXG4gICAgICA2MixcbiAgICAgIDE5NCxcbiAgICAgIDE0LFxuICAgICAgMjA1LFxuICAgICAgMjcsXG4gICAgICAxNSxcbiAgICAgIDI3LFxuICAgICAgNTQsXG4gICAgICA2MixcbiAgICAgIDIwOCxcbiAgICAgIDEwMixcbiAgICAgIDIzNCxcbiAgICAgIDEzNCxcbiAgICAgIDI0MyxcbiAgICAgIDE5MyxcbiAgICAgIDE0LFxuICAgICAgMjE5LFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDI0MCxcbiAgICAgIDIxOSxcbiAgICAgIDY3LFxuICAgICAgNTMsXG4gICAgICA2MyxcbiAgICAgIDI1MyxcbiAgICAgIDI0NyxcbiAgICAgIDIyOSxcbiAgICAgIDE3NixcbiAgICAgIDI0MCxcbiAgICAgIDE0MyxcbiAgICAgIDIwMixcbiAgICAgIDE1NCxcbiAgICAgIDIwNixcbiAgICAgIDYsXG4gICAgICAxNTQsXG4gICAgICAxODAsXG4gICAgICAyMDUsXG4gICAgICAxMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ01BQjhSTlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDgwNjIxMDoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmY7wnZCK4a2E4oKKzLbht6TigonMts2l4oKCzLbht57igoPMts2k4oKCzLbht6HigoTMts2t4oKAzLbMtuGqs+KCiMy24bec4oKAzLbNpeKChsy24bee4oKCzLbht57igoHMts2k4oKAzLbht6JcIixcbiAgICBcImxpZFwiOiBcIjE5NzI0MjUxNDMzNzk5MToyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZWt2L29ERU92U2hNQUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRoalplUE5WR0l4SEJ2OFhPcGQreGxQTHh3REpkcHlGTzE4TVd5NGxCUlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZUdsS2RiV3hTeTJHWEJvbzNORkhZMXZPM3FtV0FQQi8zREowTzRRbFVnMnBJbHZmVXRFcGQyZ29mYkpEdm5KZ05VMUIxN1NkcmtRRkpFelRrbm5CQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibTJ5WUZoNDVsOVMzcFdZcjdpRW5CVFZibDZJNk9wOXhNQUROZ1FhNmtmUlA3M0FCcFR2Y2ozekIrdGZmWW1qUUhzUWZ3OWlOODNkeGhBTFhGZjBSQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0OTA2NjEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkRNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCRE0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzUUVzV0tnUjhTMEJJRnJnZ2Z1TC9TQmhRU2tINEkzQnRLV2hzVzdDZTI4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNjIxOTU3OTksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDkwNjU2OTIzNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
