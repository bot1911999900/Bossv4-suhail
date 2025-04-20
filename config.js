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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_10_04_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NixcbiAgICAgICAgMjI5LFxuICAgICAgICA2OSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NCxcbiAgICAgICAgODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTE0LFxuICAgICAgICA5NixcbiAgICAgICAgMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyLFxuICAgICAgICA3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk5LFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg4LFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUzLFxuICAgICAgICA1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDY4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMzLFxuICAgICAgICA4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNixcbiAgICAgICAgMTAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4LFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDQsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTTVMdGoyTDhTMXJTNCt3UkNmZ3kwalg1ZkdqU0FtOEN1ZDhyT08xbEhyWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTVowNUQwcmFSSjZETkNCSXJUR09pUVwiLFxuICBcInBob25lSWRcIjogXCJjZTdiMmZkZC04ZDVkLTQ3MDktYjk5OS1mODg2MWVmZmEyNTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMzYsXG4gICAgICAxNzUsXG4gICAgICAxNDksXG4gICAgICAxMjQsXG4gICAgICA5NyxcbiAgICAgIDksXG4gICAgICAyNTEsXG4gICAgICA3NCxcbiAgICAgIDEyLFxuICAgICAgMTgxLFxuICAgICAgMjE3LFxuICAgICAgMjcsXG4gICAgICAyMTMsXG4gICAgICAxMTYsXG4gICAgICAyMzUsXG4gICAgICAxNTgsXG4gICAgICAxOTYsXG4gICAgICA4NCxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAxMzMsXG4gICAgICAyMTksXG4gICAgICAxMjEsXG4gICAgICAxODEsXG4gICAgICA3NSxcbiAgICAgIDE2NyxcbiAgICAgIDc4LFxuICAgICAgNzksXG4gICAgICAxNTQsXG4gICAgICAxNjksXG4gICAgICAyMCxcbiAgICAgIDI0NixcbiAgICAgIDM5LFxuICAgICAgMTI0LFxuICAgICAgOCxcbiAgICAgIDI3LFxuICAgICAgNDIsXG4gICAgICAxNTYsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDFYNDM2RkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDgwNjIxMDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInNpbGVudCBraWxsZXJcIixcbiAgICBcImxpZFwiOiBcIjE5NzI0MjUxNDMzNzk5MToyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOdWt2L29ERU4vVWxNQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRoalplUE5WR0l4SEJ2OFhPcGQreGxQTHh3REpkcHlGTzE4TVd5NGxCUlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMnpnMnM0N0FkQ255YnpYaVdpeXFyUEQrMU4zMHR0clhKeVVrSGZVTkJNZzQzeTlLRHgyYmZlSWhSSzcrS2x0Q0N3K2tIQ2NNNjlUVVVUcnprVSs3Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYUdSZzFLZVJqWDVFNjVRcFUyaDdrQ1NQL2VsSVU5ZnpLckJ2THZvbjlabVN4ck16Q3BhSVM0VHZ0TkhRUTgzdVBBRVI2VVpOeDlWYWROVUFka1plamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1MTY4OTk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQmJIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCYkguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKdS9RUEs4L01kZUxaTzFCVnZBc01aN05SdWRlcTN5dEpxSFdoaEgwaEVBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNjIxOTU4MDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTE2OTAwMTE3NVwifSIKfQ=="  // PUT your SESSION_ID 


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
