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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_49_04_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYwLFxuICAgICAgICA5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgODYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQxLFxuICAgICAgICA2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDY5LFxuICAgICAgICAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMCxcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMixcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1LFxuICAgICAgICA5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDksXG4gICAgICAgIDQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxODksXG4gICAgICAgIDQwLFxuICAgICAgICA0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYyLFxuICAgICAgICA0NixcbiAgICAgICAgODQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg1LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFzTUFxRG52T2FGdWhkTG5vMndVbmxoV0dZblgxUmR3anlGcldSVFZyVzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhrNTNSbEM5VGxXejZrLUhMdDhpWVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjAzMjhkNWMtY2U1Yi00Njg4LThkNjAtODExMjY4Nzc3NjJkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDU4LFxuICAgICAgMTEyLFxuICAgICAgMTg5LFxuICAgICAgMTg0LFxuICAgICAgMTcxLFxuICAgICAgNzQsXG4gICAgICAyMjgsXG4gICAgICAyMixcbiAgICAgIDIwNCxcbiAgICAgIDEzMyxcbiAgICAgIDIxOCxcbiAgICAgIDExMCxcbiAgICAgIDEwNCxcbiAgICAgIDIwOSxcbiAgICAgIDI5LFxuICAgICAgMjI4LFxuICAgICAgOTgsXG4gICAgICAyMTksXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICAxMDUsXG4gICAgICAxNjQsXG4gICAgICAyNTIsXG4gICAgICAxOTYsXG4gICAgICAxOCxcbiAgICAgIDE5NCxcbiAgICAgIDEzNSxcbiAgICAgIDIxNixcbiAgICAgIDIxMCxcbiAgICAgIDk2LFxuICAgICAgNTQsXG4gICAgICAxNDgsXG4gICAgICAxMzAsXG4gICAgICAxNSxcbiAgICAgIDM4LFxuICAgICAgMzEsXG4gICAgICA1MixcbiAgICAgIDEyMixcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCTTgyNDVIS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQwODA2MjEwOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic2lsZW50IGtpbGxlclwiLFxuICAgIFwibGlkXCI6IFwiMTk3MjQyNTE0MzM3OTkxOjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05xa3Yvb0RFUDZuajhBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVGhqWmVQTlZHSXhIQnY4WE9wZCt4bFBMeHdESmRweUZPMThNV3k0bEJSUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnWjZYbk0vTGVEQUVoT1FNWm03Q2FWOUhhYjd0SDZCdnNnYk9JOGpLL3JlN2R3azZiQ2tsaVpqbkRGa3YrZ09FNXBqUFR6eXg3dGxNQmxiSG1xOTJDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjbEY5VFdSdnV2SE1pOXdUY3pNK0hHd1Q5ZUlJMlJPQUV5NlQ2Uk4rM3lUZENSWTNOMmZqSGZzS2hrQjgrVit3aFU3NVd3eHJBa2pPNjgxQm9XMGJCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDA4MDYyMTA6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDUwODEzNDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLTjJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtOMi5qc29uIjogIntcImtleURhdGFcIjpcIitoelN3d3FEc2hWcVdXU3VCMkF4ck1CZTcwZk14Vm5uNVpDUUhmTDhxQlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA2MjE5NTgwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ1MDgxMzQ4ODQ5XCJ9Igp9"  // PUT your SESSION_ID 


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
