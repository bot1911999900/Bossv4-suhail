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


global.devs = "923071782626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071782626";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_38_05_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDg3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDcyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY1LFxuICAgICAgICA4NixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMixcbiAgICAgICAgMixcbiAgICAgICAgOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU3LFxuICAgICAgICA5NixcbiAgICAgICAgMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk42b1NqNitpVHF1SGw1RTlLeE5DKzJNazJ5UTBYZVlzNWhhamZmRE5PeHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxNzgyNjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MUY5OTZBN0MxNTI0NjcxMkFFQTQxQzk5ODMzMzE2RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDYxOTY2OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzE3ODI2MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk5MzFBNzdGMkRDN0MyRUYyMTI0RTQ5NjIyODE5RUFEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NjE5NjY5OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwZjZldTFwTVFqR2lQUTVVdldPLWpBXCIsXG4gIFwicGhvbmVJZFwiOiBcImU1OTljN2E2LThiYjUtNDIwNS1iNzc4LWZlNTEyMzFkOGU3NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAyMzUsXG4gICAgICA3OSxcbiAgICAgIDE3NyxcbiAgICAgIDY0LFxuICAgICAgNDMsXG4gICAgICAxNTksXG4gICAgICA3MCxcbiAgICAgIDE3MixcbiAgICAgIDI0LFxuICAgICAgMjUsXG4gICAgICAyMTEsXG4gICAgICAyOSxcbiAgICAgIDE3MSxcbiAgICAgIDQ1LFxuICAgICAgNyxcbiAgICAgIDI2LFxuICAgICAgMTEwLFxuICAgICAgODcsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgMTE2LFxuICAgICAgNTgsXG4gICAgICAxMTgsXG4gICAgICAzOCxcbiAgICAgIDU4LFxuICAgICAgODQsXG4gICAgICAyMTksXG4gICAgICAxMDAsXG4gICAgICA2MSxcbiAgICAgIDE5MCxcbiAgICAgIDIzMixcbiAgICAgIDE2OSxcbiAgICAgIDE4OSxcbiAgICAgIDIyOSxcbiAgICAgIDIwLFxuICAgICAgNDgsXG4gICAgICA0MCxcbiAgICAgIDQxLFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhIMU1FMlhCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzE3ODI2MjY6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2MjI2NDE5MjAyMDcyNDoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQLzNxNHdFRU5LeDA4QUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndrK0pmMFo3UG9pV25kRFdGdUdEbzlHTDdqeWQzYXl4eE1sZWdXbGhueTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWW5tU01Nc0JkZzBRSUdMa3ZTclJ3WHRRNTNpSjA4aktjNTRZVjlsU2xqdkszOGZVWFNGL3d1SFdNeVpMVmMvaUhDTFJNMTJhVzNJVE8yVGxvTlU3QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM0dHVXhxOXdEVG9hUktDL0pVSnNHTk1SdTlkUk1HeVZkYzVQSXpPM1ozWFlJaXJQb3B2eG84aDJnR3lRUlJSK2wrWmxYNVJhZUdIM3NpNjFJS25FQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxNzgyNjI2OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjE5NjY5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1iaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWJpLmpzb24iOiAie1wia2V5RGF0YVwiOlwicTZDUlJhVHduekdrZ0dQSGhRSzFPY25ZYUxLQVhVeU5rOFg5aGpEK2pKcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDk5NjI3NTE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDYxOTY2OTkwNTlcIn0iCn0="  // PUT your SESSION_ID 


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
