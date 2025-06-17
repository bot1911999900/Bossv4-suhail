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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_24_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNixcbiAgICAgICAgMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MixcbiAgICAgICAgMjA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODEsXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY3LFxuICAgICAgICA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjksXG4gICAgICAgIDg5LFxuICAgICAgICA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4LFxuICAgICAgICA0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTExLFxuICAgICAgICA4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDcyLFxuICAgICAgICA1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICA2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkF6ZUNIam5xYlNLODAzQmo3Y3lIazhxTG5JbmxyWHYxNDUwMU5memVKRkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpMbGcwUVdJUWZhelQ3a3ktdjRDRUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzZiOTZmMGItYWU4OC00MjdmLWI2ZTktYjU2MTc0MWZkM2YwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDIxMSxcbiAgICAgIDI1MyxcbiAgICAgIDIxNCxcbiAgICAgIDIzOCxcbiAgICAgIDMwLFxuICAgICAgNDQsXG4gICAgICA2MCxcbiAgICAgIDE2NCxcbiAgICAgIDgxLFxuICAgICAgMjQxLFxuICAgICAgMTMxLFxuICAgICAgMTcyLFxuICAgICAgMTc5LFxuICAgICAgOSxcbiAgICAgIDI2LFxuICAgICAgMTYzLFxuICAgICAgMixcbiAgICAgIDE5MSxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTU2LFxuICAgICAgNzgsXG4gICAgICAxNzEsXG4gICAgICA4MCxcbiAgICAgIDE3NSxcbiAgICAgIDcwLFxuICAgICAgNTgsXG4gICAgICAxNzYsXG4gICAgICAxNzIsXG4gICAgICAxMzEsXG4gICAgICAxNjEsXG4gICAgICA3OCxcbiAgICAgIDEzOCxcbiAgICAgIDIzNixcbiAgICAgIDE1MCxcbiAgICAgIDI1MyxcbiAgICAgIDE0NSxcbiAgICAgIDcsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xleHE5OEJFTXF0eHNJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTnFHZm1ZMHhZMFhiUjc2ZUo5UlFwS2tsanl6WGM3WkdEZVV1TGFCUEFpWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQWDhBZGh4Tk1FN3g3SDFVU0JxczRxMEdzckJCYkFDbk9JazhRL3dBTG85Y3E3MnlPbTZZVmR4UWxTeE5ZQ2hZWGJJanJBSXVLQjUrbzE2cXRPbWhCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqOVdnaXh6SUJEcjBKUVRNVGlDb2wvN1pmbCtETlhkb1VjMmZ3UFljUEkxYW4xMGdxcDVqMCtFZWRraFp6QzBjY1NLQkNBYmV4cWVDMVFGcVZodmdqZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDgwNjIxMDozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmY7wnZCK4a2E4oKKzLbht6TigonMts2l4oKCzLbht57igoPMts2k4oKCzLbht6HigoTMts2t4oKAzLbMtuGqs+KCiMy24bec4oKAzLbNpeKChsy24bee4oKCzLbht57igoHMts2k4oKAzLbht6JcIixcbiAgICBcImxpZFwiOiBcIjE5NzI0MjUxNDMzNzk5MTozNUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0MDgwNjIxMDozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTAxNzc0ODcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEWW5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURZbi5qc29uIjogIntcImtleURhdGFcIjpcImNhcUE0Zmp3dkw0clFrVjRxZHM2TzJwZk1PR21YaFVmYTMvbjZvaFMrVEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY4Mzc1NzMwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEWXAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmZkdRWWcxempHSytVaFVqREVZVWpEZlRIUllpbDN4WXZJbG5jbHgrUXNNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2ODM3NTczMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFlxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT3FiOFdVaEtYWmM5dnFCRVRPN1YyZVI2UFNBc0VGMVVMY2J0M0NvM3RHQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjgzNzU3MzEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURZci5qc29uIjogIntcImtleURhdGFcIjpcImh2V0NHS2NrdjNvVmtRdlA2TWZ2UWV6RFh6WjNWL2M2RGFUTGYrOHBJNE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY4Mzc1NzMxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzUwMTc2NDU3NjkyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFlzLmpzb24iOiAie1wia2V5RGF0YVwiOlwicXRjbWpydHA0aFZOV0VnenlJOHJoYkR4YlExc1Z0c1laUGp5OVBWeWJyOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjgzNzU3MzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTAxNzcyODQzNThcIn0iCn0="  // PUT your SESSION_ID 


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
