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


global.devs = "92071782626" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_32_04_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAwLFxuICAgICAgICA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDU4LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDg5LFxuICAgICAgICAyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDczLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMixcbiAgICAgICAgMTA3LFxuICAgICAgICA4MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODksXG4gICAgICAgIDM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTUyLFxuICAgICAgICA0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUxLFxuICAgICAgICA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkQ5Q0lpSW9GMXlFU2ROWHN1c2JMSkx4cUFIUU5aK1dpSzBmZW5WRCtQdGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxNzgyNjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MUI1MzhCRTg2RTdGQ0UzOUQ1QUM5MEU4OTE3RUZDNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDU3NDI3NDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzE3ODI2MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ4MTQ5RjY2Q0Q2NDdDRkVENDA5ODYyMjdGNkI3QkEzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NTc0Mjc0MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1M0ViSGtEQlMzaWRCWnM0WUVJcnp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjkyN2I1MjU4LTE3NDUtNDliYS1hM2VlLTdmNTNiOTUwYTkzY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICA0NixcbiAgICAgIDEyMixcbiAgICAgIDIzLFxuICAgICAgMjA2LFxuICAgICAgMTIwLFxuICAgICAgMTY1LFxuICAgICAgMTE5LFxuICAgICAgMTQwLFxuICAgICAgNTgsXG4gICAgICAxNixcbiAgICAgIDYsXG4gICAgICAxNjYsXG4gICAgICAyOCxcbiAgICAgIDIyMyxcbiAgICAgIDEwMSxcbiAgICAgIDIyNyxcbiAgICAgIDE0OCxcbiAgICAgIDE5MSxcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDE3MCxcbiAgICAgIDc0LFxuICAgICAgMjIwLFxuICAgICAgMTE3LFxuICAgICAgMTQwLFxuICAgICAgMTI4LFxuICAgICAgMTgxLFxuICAgICAgMjA1LFxuICAgICAgMjQ1LFxuICAgICAgMTg0LFxuICAgICAgMTkyLFxuICAgICAgNyxcbiAgICAgIDM1LFxuICAgICAgMjQ2LFxuICAgICAgMjQzLFxuICAgICAgMjMsXG4gICAgICAxOTEsXG4gICAgICAyNDIsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlA0U0pCMzVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTc4MjYyNjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYyMjY0MTkyMDIwNzI0OjEwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdk6HwnZOq8J2Ts/Cdk74gNTkxMVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzM3E0d0VFSTNYdDhBR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid2srSmYwWjdQb2lXbmREV0Z1R0RvOUdMN2p5ZDNheXh4TWxlZ1dsaG55OD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0SlVta21idU1ucGNGbVFoR2hwNjZycEZGUlF5aXR5K3lZcXdDSkxCUlNmSmZtb3hXdHBBM1lHdUZqMTlCcnUrZGdEOG8vanJzaVRjdmlJa0pFTkFBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVZXFmZ0tYZENaTXY3YmdrSlpvVnVVZEkzT3pzTE82S1FZWHNjNWg0UFJTc1Q5cDM1V1libVJsd0ZQUEI5V25KcG9MOStZc2FyV0w3aTVXNmJJQVVBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzE3ODI2MjY6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1NzQyNzM2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2dpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPZ2kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0NW8ySkhFcXFYdkhUT295VlJ0aHdlM0tZT1h5TFFrMCszR282V1NSWWVJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTk2Mjc1MTcsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTc0MjUyOTY3MFwifSIKfQ=="  // PUT your SESSION_ID 


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
