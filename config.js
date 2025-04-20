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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_47_04_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExLFxuICAgICAgICA5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDU3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyLFxuICAgICAgICA5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMixcbiAgICAgICAgMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDczLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDUxLFxuICAgICAgICA0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxNixcbiAgICAgICAgODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxLFxuICAgICAgICAxODksXG4gICAgICAgIDExMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhCL0orcE5BY0dKbUJMaWJPTDBZbXdka3g3YnB6d00wOTA2NDRsQnFJeE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVGTE8yTjdOUjJPeFZhdkVFOGk3YVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjQ4NGMwY2YtYjRjZC00YTk3LWJkNWUtMTE1OGQxZGEwOTVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDE5MCxcbiAgICAgIDcxLFxuICAgICAgNjcsXG4gICAgICAxOTQsXG4gICAgICA0MixcbiAgICAgIDExOSxcbiAgICAgIDgzLFxuICAgICAgMTA1LFxuICAgICAgMTk1LFxuICAgICAgMTA0LFxuICAgICAgMTg2LFxuICAgICAgODEsXG4gICAgICAxNDIsXG4gICAgICAxNDgsXG4gICAgICAxMzYsXG4gICAgICAyNTAsXG4gICAgICAxNjgsXG4gICAgICAxNTYsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDIzLFxuICAgICAgNDYsXG4gICAgICAyNTAsXG4gICAgICAyMjcsXG4gICAgICAxMjIsXG4gICAgICAxNDYsXG4gICAgICAxOCxcbiAgICAgIDIwMCxcbiAgICAgIDIzNSxcbiAgICAgIDIyMCxcbiAgICAgIDIxNyxcbiAgICAgIDUyLFxuICAgICAgMTE3LFxuICAgICAgMTIxLFxuICAgICAgMTU3LFxuICAgICAgOCxcbiAgICAgIDM5LFxuICAgICAgMTM3LFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTVISDNYTjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTc4MjYyNjo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjIyNjQxOTIwMjA3MjQ6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQejNxNHdFRUpEaGhNQUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndrK0pmMFo3UG9pV25kRFdGdUdEbzlHTDdqeWQzYXl4eE1sZWdXbGhueTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYmVCVGgrVWg4WnprTU4raFRURTVmU2JLalU2b2Z6b1JhZzhxWGZISFphVi9hZGV1NW1RU1JENDJ2MWRNTVYvVkZCcklDZEc4SGNzV1FOeStTUE1CQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWmtoVDdhOHQyRFhhRnBFZzJnQitpVFI3ck9FbWJzU1d6NFRSUEQ4VFdEbTlvN2hPRm1rSGltemhEVnZodkViMUZ1dlpaUU9nMEFKa0dpMmpKeXRPaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxNzgyNjI2OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0OTA4NDM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRk9aXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGT1ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwTTVVSzNjQktkSDA0L1ZrMWtiN0ZSS2FQM2lyQUlRajI5YnBKcmVpbVhrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTk2Mjc1MTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDIwMjY4MjkyMVwifSIKfQ=="  // PUT your SESSION_ID 


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
