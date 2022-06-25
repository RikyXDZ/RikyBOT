/*
  @Author: Riky Ripaldo
  @Github: https://github.com/RikyXDZ
*/

var data = require("./lib/data.json");
var {banner, info, status, no} = require("./lib/logo");

const {makeWALegacySocket, useSingleFileLegacyAuthState,
  DisconnectReason} = require("@adiwajshing/baileys");

const {state, saveState} = useSingleFileLegacyAuthState("./sessions.json");
const {Boom} = require("@hapi/boom");

const riky = makeWALegacySocket({
    printQRInTerminal: true,
    auth: state
})

function RikyBOT(argument) {
  //connection info
  riky.ev.on("connection.update", (up) => {
    const {lastDisconnect, connection} = up;

    if (connection) {
      console.log(status + " Connection status : " + connection + no);
    }

    if (connection == "close") {
      let reason = new Boom(lastDisconnect?.error)
        ?.output?.statusCode;

      console.log(reason);
      console.log(DisconnectReason);
      if (reason == DisconnectReason.badSession) {
        console.log(status + " Berkas session.json rusak ! tolong hapus berkas tersebut dan coba lagi" + no);
        riky.logout();
      } else if (reason == DisconnectReason.connectionClosed) {
        console.log(status + " Connection close !, reconnecting..." + no);
        RikyBOT();
      } else if (reason ==  DisconnectReason.Lost) {
        console.log(status + " Connection lost from server !, reconnecting.." + no);
        RikyBOT();
      } else if (reason == DisconnectReason.connectionReplaced) {
        console.log(status + " Connection replaced !, another new session opened, please close current session first" + no);
        //riky.logout();
      } else if (reason == DisconnectReason.loggedOut) {
        console.log(status + " Device logout !, please delete session.json file and try again" + no);
        riky.logout();
      } else if (reason == DisconnectReason.restartRequired) {
        console.log(status + " Restart required !, restarting..." + no);
        RikyBOT();
      } else if (reason == DisconnectReason.timedOut) {
        console.log(status + " Connection timed out !, reconnecting..." + no);
        RikyBOT();
      } else {
        riky.end("unknown DisconnectReason")
      }
    }
  })
  
  //sessions
  riky.ev.on("creds.update", saveState);
  
  //response
  riky.ev.on("messages.upsert", ({messages, type}) => {

    //console.log(messages, type);
    let pesan;
    let pengirim = messages[0].key.remoteJid;
    if (messages[0].message) {
      pesan = messages[0].message.conversation;
    }
    
    //Auto Response
    if (pengirim == 'status@broadcast' || messages[0].key.fromMe) {
      //return;
      riky.sendMessage(pengirim, {
        text: "Kok balas wa sendiri ? "
      })
    }
    if (pesan == "P" || pengirim == "p") {
      riky.sendMessage(pengirim, {
        text: "Iya apa ?"
      })
    }
    if (pesan == "Assalamualaikum" || pengirim == "assalamualaikum") {
      riky.sendMessage(pengirim, {
        text: "Walaikumsallam Warahmatullahi Wabarakatuh"
      })
    }
  })
}

function main() {
  console.log(banner);
  console.log(info);
  try {
    RikyBOT();
  } catch (ex) {
    console.log(status + " "  + ex);
  }
}
main();