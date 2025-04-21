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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_52_04_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDczLFxuICAgICAgICA2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg1LFxuICAgICAgICA2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk2LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODksXG4gICAgICAgIDUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNyxcbiAgICAgICAgODksXG4gICAgICAgIDM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxNVjB1N2VZdWJCOGprM2tzaFJUNWp4dXJzZTVLdzRPcmhGVEc3aGk4QjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQwODA2MjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRDFERjE0MTBEQkU0QTMxRjlBMTdENTFBRjc4Nzk4N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDUyNTA3NDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDA4MDYyMTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY0MUQwMkE5RkIxRDg4QkU4QjhEOTJFRjM2NTEyQzdFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NTI1MDc1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJydTVscTBESFJNaVpDU3NqZ2lOa3lnXCIsXG4gIFwicGhvbmVJZFwiOiBcImE2MjQ5NGNhLTc4NDMtNDU5OC1iODExLWU4Nzk5OWYxZDE3ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICAzMSxcbiAgICAgIDcyLFxuICAgICAgMjU1LFxuICAgICAgOTgsXG4gICAgICAxMTIsXG4gICAgICAzNSxcbiAgICAgIDIxLFxuICAgICAgMjI4LFxuICAgICAgMTM0LFxuICAgICAgMTk5LFxuICAgICAgODgsXG4gICAgICAxNTQsXG4gICAgICAyMjksXG4gICAgICAxMzgsXG4gICAgICAxNTMsXG4gICAgICAxMDYsXG4gICAgICA0MyxcbiAgICAgIDE2NyxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgMjksXG4gICAgICA0LFxuICAgICAgNTcsXG4gICAgICAyOSxcbiAgICAgIDM1LFxuICAgICAgMjIxLFxuICAgICAgMTgxLFxuICAgICAgMTkxLFxuICAgICAgMTIzLFxuICAgICAgOTgsXG4gICAgICAyMjUsXG4gICAgICAxMzAsXG4gICAgICAxMjEsXG4gICAgICA1LFxuICAgICAgMzYsXG4gICAgICAyNTQsXG4gICAgICAxMDMsXG4gICAgICAyMjcsXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRldGR0NIQkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDgwNjIxMDozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInNpbGVudCBraWxsZXJcIixcbiAgICBcImxpZFwiOiBcIjE5NzI0MjUxNDMzNzk5MTozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMR3hxOThCRUxYVG1jQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5xR2ZtWTB4WTBYYlI3NmVKOVJRcEtrbGp5elhjN1pHRGVVdUxhQlBBaVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWmkxbG5JTkQ4b0hHdjhtNzJIVXlQTVNza0c4SVVaRTZYNUhUREkwU1ArYUlFYmJaNXowakRDeEdjdDdHV3U1dXRBMGNMV2VhcEZsVCtlVzJRWTViRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWVFRdldVQjVJa1F1Y0gyKzlyKzNXRDhoZ1FtWExxZVFhVzhxd1N2RU16OVZTdUdKMzdpUmRDWVpFdnNsVkR3a05RVWJVdnIwSWtOcFcyaldCcDAxZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTI1MDc0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJUZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlRmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiME04VmZ4QUZ6QjNrMmRrYVhXTVJBKytMZ2ozWWR0YnJNMWhFOW9lVmJlTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjgzNzU3MjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTI1MDc0NjA3NVwifSIKfQ=="  // PUT your SESSION_ID 


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
