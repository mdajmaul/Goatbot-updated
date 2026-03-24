module.exports = {
  config: {
    name: "slot",
    aliases: ["spin"],
    permission: 0,
    description: "🎰 Anime Slot Game",
  },

  onStart: async ({ api, event }) => {
    const { threadID, messageID, senderID } = event;

    const symbols = ["🍒", "🍉", "🍓", "🍍", "🍇", "🍋"];
    
    const getRandom = () => symbols[Math.floor(Math.random() * symbols.length)];

    const a = getRandom();
    const b = getRandom();
    const c = getRandom();

    let result = "";
    let reward = 0;

    // 🎉 Win Conditions
    if (a === b && b === c) {
      reward = 100;
      result = "🌸✨ JACKPOT!!! ✨🌸";
    } else if (a === b || b === c || a === c) {
      reward = 50;
      result = "💖 Nice Match!";
    } else {
      result = "💔 Try Again...";
    }

    return api.sendMessage(
`🎰 𝘼𝙉𝙄𝙈𝙀 𝙎𝙇𝙊𝙏 🎰

┏━━━━━━━━━━━━━━━┓
   ${a} │ ${b} │ ${c}
┗━━━━━━━━━━━━━━━┛

${result}

💰 Reward: ${reward} coins 🌙`,
      threadID, messageID
    );
  }
};
