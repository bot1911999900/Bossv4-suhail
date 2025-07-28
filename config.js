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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923240806210";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_31_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNixcbiAgICAgICAgMTUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUxLFxuICAgICAgICA4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUxLFxuICAgICAgICAzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUzLFxuICAgICAgICA5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDcyLFxuICAgICAgICA5MixcbiAgICAgICAgNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLeDQvUnVFTUxLWGI1bUlBNHlONkVjTUNFQmhPKzh2OWp4RkJwTzdKK0dZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYUFJ0Sl9LcFJoS041NWFQakRBZnl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImEyNDhiYmIzLWM0YzMtNGE3My1iZDQ2LWNiMWVmNDNmNGE5ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDg0LFxuICAgICAgMjI4LFxuICAgICAgOTcsXG4gICAgICAxNTcsXG4gICAgICA0LFxuICAgICAgMjI1LFxuICAgICAgMjAxLFxuICAgICAgMzEsXG4gICAgICA0MCxcbiAgICAgIDcsXG4gICAgICAyMzEsXG4gICAgICAxMSxcbiAgICAgIDE1OSxcbiAgICAgIDkxLFxuICAgICAgMjM4LFxuICAgICAgNjksXG4gICAgICA2NyxcbiAgICAgIDEsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgNzAsXG4gICAgICA4MixcbiAgICAgIDE5MSxcbiAgICAgIDg0LFxuICAgICAgMTI2LFxuICAgICAgODYsXG4gICAgICAxMDUsXG4gICAgICAyNyxcbiAgICAgIDIxNixcbiAgICAgIDExNSxcbiAgICAgIDExLFxuICAgICAgMjA3LFxuICAgICAgMTg0LFxuICAgICAgMjAxLFxuICAgICAgOTgsXG4gICAgICAxNjQsXG4gICAgICAxNzAsXG4gICAgICA4MCxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTU9kOU80RkVKNllrY1FHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1em5TMmY2QzAxQXJyRTZTY1E2aTYycTdzamtqdHhSMGFtbzZ3ZmsvakJ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhjRWZWcjRpNXRMRmx0YzZIakZWNEd5MHVQSTFWeDJ3WWdlMW8wVDVFdjlqNC9mb3VxcGJhUUdNN1FpNERQY2xrTUxTbnI1THBQMlBEcGw1QWw2RkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRjY3RlekFXeXdEd2RPckNYeCtUNzFqZGhjcnpWMGJadURBaHkxK0V0S1h5UVJZdzZqVmVWK0lnQTZwV0RtU2JVN1grT29TbnB3SldiVXZKRGhnakJBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNTUyODgxMjE0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NjY4MTQ0MTQ0ODE4NDozQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNTUyODgxMjE0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUzNTAwNzA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSS81XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJX181Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQTByUklHUm5ZaWdMSmNXN2tLbTBZZnVjMXlPOHh5OVNGRnVONlRnYVJTYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTc0NzY4MzIzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTMyOTIxNTk2MzBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJX183Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNFBXWE4yOEVYeUtoWkphTnFLbmxLaGlQWjIxaHlDQ0lMR1d2YnFSZkh2ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTc0NzY4MzIzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTc1MzQ5MzA1ODMyMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlfXzkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4N0lTenIvemYrM2dwZUxSa3NsVkhRazY5VFdQOHNieHRCNXd3ZlBDMUFVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NzQ3NjgzMjMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MzQ5MzA5MDg1NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUVBQUlfXzYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0U1FTUm5NZ3I4Qk1nUWRvTEdtVWFWeXR5bmM5WDBMd2pEeG8rMExTUHc4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NzQ3NjgzMjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBRUFBSV9fNy5qc29uIjogIntcImtleURhdGFcIjpcIksrblRzMXVJZHpzeitNWkRmMVpYNkFiZ0pjQkh1REJ2eWdiOU5lbytOcUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU3NDc2ODMyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTM0OTMwNjM1MDNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFFQUFJX184Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMHp5cUwreHlORFJwU2toTmJHcUltaXNpYmlZUGltaDZlVTJJL2FzR2VNUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTc0NzY4MzIzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTM0OTMwNjY5ODJcIn0iCn0="  // PUT your SESSION_ID 


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
