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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_48_04_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDM3LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDczLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzksXG4gICAgICAgIDUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODAsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDczLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImF2WU4vY3ZFQjY0VFFHYlhSaDhpME9Lb3VZUERrN2c1aFBYZS9kSUlEc009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImg2eEhBUXQtUXhhS0FTZDZRUUZKU2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjkwODQxZjMtY2E2Mi00ZTNmLWJlZDUtYWYwMWM5YjM5Y2Y5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMTcsXG4gICAgICAxMjUsXG4gICAgICAzMyxcbiAgICAgIDIxNCxcbiAgICAgIDEwNCxcbiAgICAgIDE1MixcbiAgICAgIDQ3LFxuICAgICAgNTEsXG4gICAgICAyMDcsXG4gICAgICAxMjgsXG4gICAgICAxMjAsXG4gICAgICAxNTEsXG4gICAgICAxNTQsXG4gICAgICAxMzYsXG4gICAgICA5MCxcbiAgICAgIDk5LFxuICAgICAgOSxcbiAgICAgIDcsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDkwLFxuICAgICAgMTI5LFxuICAgICAgNTksXG4gICAgICAxODgsXG4gICAgICAxNzIsXG4gICAgICAxMjYsXG4gICAgICAyNDQsXG4gICAgICAyNTUsXG4gICAgICAxMDMsXG4gICAgICAxNjMsXG4gICAgICAxNjgsXG4gICAgICAxODQsXG4gICAgICAxMDEsXG4gICAgICA4MCxcbiAgICAgIDM0LFxuICAgICAgMjE4LFxuICAgICAgMjIxLFxuICAgICAgMTA4LFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEhOMTM0NVJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDgwNjIxMDoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInNpbGVudCBraWxsZXJcIixcbiAgICBcImxpZFwiOiBcIjE5NzI0MjUxNDMzNzk5MToyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObWt2L29ERVBXZ2lzQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRoalplUE5WR0l4SEJ2OFhPcGQreGxQTHh3REpkcHlGTzE4TVd5NGxCUlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibEcweURPZU5tRDZoTW9lcnJaaXRKcFNDbjZHKzcxdWVLUWVPRzNEVVhteTQ0dlRXWUkxeFhsby92SUNCdlQrNmZqNjdjWUFnZ3BaTEVMNFFEM3hpQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVDBORHRiY1dkRlljVTFza082bUxvR3ZmN29scWUvR05JUWhUZ0JIQk5DNStROFgyM1dONDBYT3RldUYzWFAvUjAxa3plNy9uL2NUcG9sTDh4aWZSZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0OTk4NTIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS3BVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLcFUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzSk81U2toWGJKZS9nSEN5bTRnQko2ZWZRR3Nva0ZObThjY2c5NVRlZnBrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNjIxOTU4MDAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
