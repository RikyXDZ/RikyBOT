/*
  @Author: Riky Ripaldo
  @Github: https://github.com/RikyXDZ
*/

const data = require("./data.json");
var banner = "\x1b[0;91m"+
"████████ ██ ██  ██ ██    ██ ██████  ███████ ██████"+"\n"+
"██    ██ ██ ██ ██   ██  ██  ██   ██ ██   ██   ██"+"\n"+
"████████ ██ ████     ████   ███████ ██   ██   ██"+"\x1b[0;97m\n"+
"██  ██   ██ ██ ██     ██    ██   ██ ██   ██   ██"+"\n"+
"██  ████ ██ ██  ██    ██    ██████  ███████   ██";

var info = "\x1b[0;93m"
  + "================================================\x1b[0m\n"
  + "\x1b[0;94m[+] \x1b[0;92mAuthor \x1b[0;96m: \x1b[0;97m" + data.RikyBOT.author + "\n" 
  + "\x1b[0;94m[+] \x1b[0;92mGithub \x1b[0;96m: \x1b[0;97m" + data.RikyBOT.github + "\n" 
  + "\x1b[0;94m[+] \x1b[0;92mWhatsapp \x1b[0;96m: \x1b[0;97m" + data.RikyBOT.whatsapp + "\n" 
  + "\x1b[0;94m[+] \x1b[0;92mFacebook \x1b[0;96m: \x1b[0;97m" + data.RikyBOT.facebook + "\n" 
  + "\x1b[0;94m[+] \x1b[0;92mBOT Name \x1b[0;96m: \x1b[0;97m" + data.RikyBOT.name + "\n\x1b[0;93m"
  + "================================================\x1b[0m\n";

var no = "\x1b[0m";
var status = "\x1b[0;97m[\x1b[0;91m+\x1b[0;97m] \x1b[0;92m";

module.exports = {
  banner,
  info,
  status,
  no
}