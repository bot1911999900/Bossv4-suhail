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


global.devs = "923295112243" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923295112243";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923295112243";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_50_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICAzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICA2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU2LFxuICAgICAgICA4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU2LFxuICAgICAgICA1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MixcbiAgICAgICAgMjE1LFxuICAgICAgICA5OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICA4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDgyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMwLFxuICAgICAgICA5MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDExNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNixcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ0lZMkV3UDl4ZnBJdTdUZmlseklWUmdBWDVRVzVldUhlb0s5K1FmblNNTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTUxMTIyNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU3MTg5MUI0MkEzN0E1MTYyRkI4M0IxNEFDRUQzMjI5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0ODI0MjIxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2dmdTa2lNMFJzLVhMNlFYbWphOTRnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEwYTM5NzFlLTczMGUtNDg3ZC04ZGVhLTc5ZDUyMzdlN2U0YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OSxcbiAgICAgIDEwLFxuICAgICAgMTAsXG4gICAgICAyMjUsXG4gICAgICAyMzIsXG4gICAgICAxNixcbiAgICAgIDE5MCxcbiAgICAgIDE0OSxcbiAgICAgIDExOCxcbiAgICAgIDExLFxuICAgICAgOTUsXG4gICAgICAyOSxcbiAgICAgIDE2MixcbiAgICAgIDY0LFxuICAgICAgMTM2LFxuICAgICAgMjQwLFxuICAgICAgMTY4LFxuICAgICAgMTQzLFxuICAgICAgNTEsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgNDEsXG4gICAgICA1LFxuICAgICAgMTc5LFxuICAgICAgNjksXG4gICAgICAyMzAsXG4gICAgICA5NyxcbiAgICAgIDIwNCxcbiAgICAgIDkwLFxuICAgICAgMTA5LFxuICAgICAgMTUyLFxuICAgICAgMTk1LFxuICAgICAgMjMwLFxuICAgICAgMTUwLFxuICAgICAgMTYwLFxuICAgICAgNTAsXG4gICAgICA0NCxcbiAgICAgIDIzNixcbiAgICAgIDI2LFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPWE1zU3dRbko3UXdRWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9jb2hzaU9vN2N5aVl6cGJldHY3UTVnYW1ZYytneU9ua2lTT0ZuWEl5Rms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNUo2dFIxSXp2QWFzQnM0WisrS0VsNnJ1aFJya3AwSWRBb0VXTzVZNS9IS1ozZ0xhWEk4aW50aFd6NmkwMUZhNHlhL3A1dTB2MXZ5SXREdXVBNU1QQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWWo2TTdVS3VpbUl3bkhEVjZTOXNMY2FRNXMyd1p3NTdmVjBNWE9sdHN3cTNxNCtnRG9mSHlOL3hOTzVneTViUjdaNDNpOVFQRWhLNUZKTm5mUFRGaVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyOTUxMTIyNDM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg1ODA1ODIxNzg5MTU6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLigI7wnZOh8J2TqvCdk7PwnZO+IDU5MTFcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI5NTExMjI0Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4MjQyMjA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRW1uXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFbW4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEbWh5d2R5eW42QmcrYmMzYWNUWlJHT0haMmt6QmN6eU40SGF0aUZzWlVFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkzMDg3MzMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDc1ODU0NjgzNTBcIn0iCn0=="  // PUT your SESSION_ID 


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
