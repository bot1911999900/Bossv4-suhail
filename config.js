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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_52_04_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICA5MyxcbiAgICAgICAgOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICA4MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMixcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDgyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIitLYUhPbjJFWnBpZndURklpNG56V0VyRmZ6WmdkM3NNYmV3WkVEMzkzZXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldPTmxvYlo2UlhTZDRJbUhEcXJ5V1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWNhOWQ3YmMtYWE3Zi00ZWRkLTgwYTAtODk2MDlkNzg1ZjNkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDgxLFxuICAgICAgMTY5LFxuICAgICAgMTMwLFxuICAgICAgNjAsXG4gICAgICAxNjAsXG4gICAgICAyMTgsXG4gICAgICAxMTQsXG4gICAgICAxMzMsXG4gICAgICAxODIsXG4gICAgICAxNjYsXG4gICAgICAxNzYsXG4gICAgICAxMDUsXG4gICAgICAyMDAsXG4gICAgICAzMixcbiAgICAgIDkxLFxuICAgICAgMTcyLFxuICAgICAgMTY2LFxuICAgICAgMjIyLFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgMjAwLFxuICAgICAgMjI2LFxuICAgICAgMTM3LFxuICAgICAgMTgsXG4gICAgICAxODUsXG4gICAgICA0MSxcbiAgICAgIDI1NCxcbiAgICAgIDE0OCxcbiAgICAgIDIyMCxcbiAgICAgIDc4LFxuICAgICAgMjE0LFxuICAgICAgMjAsXG4gICAgICAxNyxcbiAgICAgIDIyLFxuICAgICAgMzksXG4gICAgICA2OCxcbiAgICAgIDE0NCxcbiAgICAgIDEyMixcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCWTdaQTdZWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQwODA2MjEwOjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic2lsZW50IGtpbGxlclwiLFxuICAgIFwibGlkXCI6IFwiMTk3MjQyNTE0MzM3OTkxOjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xLeHE5OEJFS2oybnNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTnFHZm1ZMHhZMFhiUjc2ZUo5UlFwS2tsanl6WGM3WkdEZVV1TGFCUEFpWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1QmpxRHhsaEJTQW9nNXJvUWRhcitpbWNwUlUwZFpxN3U5TGVCUTRhTmlabFQxUE1wK0ZOMzdKVjRBWkZJeUpGV3MyZkxjcUEwaHhubU56cENtcjRDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrNS93VUVKSHpSdGlidFBibHk2cnpTV1FPRUVXN09BMHUwMFhoZU40RGxsQkcvYVVXTDYzeTJtVTBYZUNpNFVvLy9HdmFhQzllQVZEM1lyNWdWM3lqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDA4MDYyMTA6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMixcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1MzM3MTMyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFluXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEWW4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjYXFBNGZqd3ZMNHJRa1Y0cWRzNk8ycGZNT0dtWGhVZmEzL242b2hTK1RJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2ODM3NTczMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ1MzM3MTM1ODMwXCJ9Igp9"  // PUT your SESSION_ID 


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
