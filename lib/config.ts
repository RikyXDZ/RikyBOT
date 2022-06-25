import {makeWASocket} from '@adiwajshing/baileys'

function start(argument) {
  const wa = makeWASocket({
    printQRInTerminal: true
  })
  
  wa.ev.on("connection.update", (update) => {
    const {lastDisconnect, connection} = update;
    if (connection == "close") {
      wa.logout();
      console.log("Connection is close");
    }
    if (connection == "open") {
      wa.ev.on("creds.update", null);
      console.log("Connecting to Whatsapp");
      wa.ev.on("messages.upsert", ({messages, type}) => {
        let pesan;
        let kirim = messages[0].key.remoteJid;
        if (messages[0].message) {
          pesan = messages[0].message.conversation;
        }
        
        if (kirim == "status@broadcast" || messages[0].key.fromMe) {
          return;
        }
        if (pesan == "hallo") {
          wa.sendMessage(kirim, {
            text: "apa ? mau ap hah ?"
          }
        }
      })
    }
  })
}

try {start();}
catch (exc) {
  console.log(exc);
}