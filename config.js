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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_07_04_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0LFxuICAgICAgICA1LFxuICAgICAgICAzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjksXG4gICAgICAgIDczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDMzLFxuICAgICAgICA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyLFxuICAgICAgICA1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAzNixcbiAgICAgICAgODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0LFxuICAgICAgICAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdyeE9PTEdTdmRGMEZYOTNwdlk5MU1mMWRpMXJFSElPNm9yQ2xPQ1V4STQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxNzgyNjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNTJBQTI0REQwNUUyODFERUUzRjk5NDVCM0ZBOUU2MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDU4OTI0NzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRWxJRmR5aWpTSW1xYzhaVnpfOWI0UVwiLFxuICBcInBob25lSWRcIjogXCI0MjQ3MDk4Zi02NGI5LTQwMzktYmNiOS1jM2M0OWVjMDUzZTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgMTA0LFxuICAgICAgMjM0LFxuICAgICAgMjQ0LFxuICAgICAgMjQ3LFxuICAgICAgOTksXG4gICAgICAxNjAsXG4gICAgICA0NSxcbiAgICAgIDIzMCxcbiAgICAgIDI1MixcbiAgICAgIDIyLFxuICAgICAgMTEwLFxuICAgICAgMTQ0LFxuICAgICAgMTI3LFxuICAgICAgMTY0LFxuICAgICAgMjgsXG4gICAgICAxNjYsXG4gICAgICAxODksXG4gICAgICAxNTcsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDE1NCxcbiAgICAgIDIzMSxcbiAgICAgIDMsXG4gICAgICAyMyxcbiAgICAgIDIyNSxcbiAgICAgIDg1LFxuICAgICAgNjYsXG4gICAgICAwLFxuICAgICAgMTQ3LFxuICAgICAgMjIzLFxuICAgICAgMTg5LFxuICAgICAgMjEzLFxuICAgICAgNzcsXG4gICAgICAwLFxuICAgICAgMTcwLFxuICAgICAgMTI4LFxuICAgICAgMTQ5LFxuICAgICAgMjMzLFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVdRRUROTlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTc4MjYyNjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYyMjY0MTkyMDIwNzI0OjEzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdk6HwnZOq8J2Ts/Cdk74gNTkxMVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A3M3E0d0VFTy9vd01BR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid2srSmYwWjdQb2lXbmREV0Z1R0RvOUdMN2p5ZDNheXh4TWxlZ1dsaG55OD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNelF0clI5cEY3Y0grZEYyREt6L3NZaW1peG1ON0ZtdXBTNW0xVVZUREZHUWc3azdSR3ZkdXBDVW1zbnF1cnAvaGo2am1NNU5GN3ZiQllaUE1hVGRBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWWEZiMDVnYTVxU2h5bGtTZWxTWDViNlhFbW5FaktRa1J3VC9vY2piZTR3dzNTVGp4WXc0cndOcmpYdkhXb3gwdlkwVm9KaVFSYzNNSVhzWFhhdGlBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzE3ODI2MjY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1ODkyNDY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDlEXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMOUQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpTzZHcFFjZTlHVlBTbUpNQjNHOVN6Zkh2blBWbFZ5TnhjTkdkMmhPemdVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTk2Mjc1MTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTgyMDE3NDE3MlwifSIKfQ=="  // PUT your SESSION_ID 


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
