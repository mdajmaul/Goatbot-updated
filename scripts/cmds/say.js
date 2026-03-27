const fs = require("fs-extra");
const path = require("path");
const edgeTTS = require("edge-tts");

module.exports = {
  config: {
    name: "say",
    version: "4.0.0",
    author: "Anime Voice",
    countDown: 0,
    role: 0,
    description: "Cute anime girl voice",
    category: "media"
  },

  onStart: async function ({ api, event, args }) {
    try {
      const text = args.join(" ");

      if (!text) {
        return api.sendMessage("❌ | Write something", event.threadID, event.messageID);
      }

      const filePath = path.join(__dirname, "cache", `anime_${Date.now()}.mp3`);

      // 💖 Cute anime style voice
      const voice = "en-US-JennyNeural";

      await edgeTTS.save({
        text: text,
        voice: voice,
        file: filePath
      });

      return api.sendMessage({
        body: "🎀 Cute Anime Voice:",
        attachment: fs.createReadStream(filePath)
      }, event.threadID, () => {
        fs.unlinkSync(filePath);
      }, event.messageID);

    } catch (err) {
      console.log(err);
      return api.sendMessage("❌ Voice error", event.threadID, event.messageID);
    }
  }
};
