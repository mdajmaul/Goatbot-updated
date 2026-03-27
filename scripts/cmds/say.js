const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "say",
    version: "2.0.0",
    author: "You",
    countDown: 0,
    role: 0,
    description: "Cute anime girl voice (Bangla + English)",
    category: "media"
  },

  onStart: async function ({ api, event, args }) {
    try {
      const text = args.join(" ");
      if (!text) {
        return api.sendMessage("❌ | Write something", event.threadID);
      }

      const filePath = path.join(__dirname, "cache", `say_${Date.now()}.mp3`);

      // Better TTS (female soft voice)
      const url = `https://api.ryzendesu.vip/api/tts2?text=${encodeURIComponent(text)}&voice=en-US-AriaNeural`;

      const res = await axios({
        url,
        method: "GET",
        responseType: "arraybuffer"
      });

      fs.writeFileSync(filePath, Buffer.from(res.data));

      return api.sendMessage({
        body: "🎧 Cute Voice:",
        attachment: fs.createReadStream(filePath)
      }, event.threadID, () => fs.unlinkSync(filePath));

    } catch (err) {
      console.log(err);
      api.sendMessage("❌ Voice error", event.threadID);
    }
  }
};
