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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_10_05_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODksXG4gICAgICAgIDcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEzLFxuICAgICAgICA4LFxuICAgICAgICAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzLFxuICAgICAgICA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg0LFxuICAgICAgICA3MixcbiAgICAgICAgODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxLFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAzLFxuICAgICAgICA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDYzLFxuICAgICAgICA2LFxuICAgICAgICA3MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibDY1RUl4M3d0K1lmMUVzMnpCa2lTQ2ZNQWRLU0pQSERjSzk4NlBYZWt0QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDA4MDYyMTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQzQjMwNEY5N0ExOTdDODQ5NjcxQUZGMkIyRTU4OEIwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NjIwMjI1NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0MDgwNjIxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzIyNEVFMEQ1REUwNUVGOUNBMkM3RERGODE3MTUxM0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ2MjAyMjU0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllGOG1FczFRUmJLMEJMLWhzR2ZwUVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzVlNWRmYzQtZGU3ZC00M2FmLWJlOWYtZWIyNWJlODFhOTA3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDc3LFxuICAgICAgMjEsXG4gICAgICA4OCxcbiAgICAgIDUyLFxuICAgICAgNjMsXG4gICAgICAxMjgsXG4gICAgICAxMDYsXG4gICAgICA1NCxcbiAgICAgIDIxNixcbiAgICAgIDEwLFxuICAgICAgMTk5LFxuICAgICAgMjM2LFxuICAgICAgMTcsXG4gICAgICA4MyxcbiAgICAgIDE0NixcbiAgICAgIDEzMixcbiAgICAgIDE5NCxcbiAgICAgIDI1MixcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDgsXG4gICAgICAyMjAsXG4gICAgICAxNDgsXG4gICAgICAxODgsXG4gICAgICAxMzYsXG4gICAgICAxNDcsXG4gICAgICA2NixcbiAgICAgIDI0MyxcbiAgICAgIDQ0LFxuICAgICAgMjIwLFxuICAgICAgMTM1LFxuICAgICAgMTQsXG4gICAgICAxNjAsXG4gICAgICAxNzcsXG4gICAgICAxODQsXG4gICAgICAxNTksXG4gICAgICAxMSxcbiAgICAgIDU3LFxuICAgICAgMjEzLFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNYVkc5U1lTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDA4MDYyMTA6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmO8J2QiuGthOKCisy24bek4oKJzLbNpeKCgsy24bee4oKDzLbNpOKCgsy24beh4oKEzLbNreKCgMy2zLbhqrPigojMtuG3nOKCgMy2zaXigobMtuG3nuKCgsy24bee4oKBzLbNpOKCgMy24beiXCIsXG4gICAgXCJsaWRcIjogXCIxOTcyNDI1MTQzMzc5OTE6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTE94cTk4QkVJUGQwOEFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOcUdmbVkweFkwWGJSNzZlSjlSUXBLa2xqeXpYYzdaR0RlVXVMYUJQQWlZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklHeGZ4Z0RBOUpiYk5ld2Q3R3R5am1rZUx3aDZYbzkxVGxZcEMzSkRqYWpnZ211ZHZuUmtjbnE2SUUzV3pGb2JRcDhFbmZNQWdVV3ZxVjdQL0gvTkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlQzNlRkem1LUERxVlBjV2d3aU5BMi8wUnpGRS9oYWNDcWNkckJhR3h0UmxWRkU3WUVnckRPN2w1U0hIdkhNZHk1aHdaTnBaZkRQcCtqY29Yc0ZWdGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0MDgwNjIxMDozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDYyMDIyNDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEWXBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURZcC5qc29uIjogIntcImtleURhdGFcIjpcImZmR1FZZzF6akdLK1VoVWpERVlVakRmVEhSWWlsM3hZdklsbmNseCtRc009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY4Mzc1NzMxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDYyMDIyNTQwNzRcIn0iCn0="  // PUT your SESSION_ID 


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
