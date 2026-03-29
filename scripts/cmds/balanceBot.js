// balanceBot.js
const fs = require("fs");
const path = require("path");

// ডাটাবেস ফাইলের লোকেশন
const dbPath = path.join(__dirname, "userBalances.json");

// ব্যালেন্স লোড বা নতুন ফাইল তৈরি
function loadBalances() {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({}));
  }
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
}

// ব্যালেন্স আপডেট করার ফাংশন
function updateBalance(username, amount) {
  const balances = loadBalances();
  if (!balances[username]) {
    balances[username] = 0;
  }
  balances[username] += amount;
  fs.writeFileSync(dbPath, JSON.stringify(balances, null, 2));
  return balances[username];
}

// ব্যালেন্স চেক করার ফাংশন
function checkBalance(username) {
  const balances = loadBalances();
  return balances[username] || 0;
}

// কমান্ড হ্যান্ডলার
function handleCommand(commandText) {
  const parts = commandText.trim().split(" ");

  // ব্যালেন্স অ্যাড করা
  if (parts[0] === "!addbalance" && parts.length === 3) {
    const username = parts[1];
    const amount = parseInt(parts[2], 10);
    if (isNaN(amount)) {
      console.log("দয়া করে সঠিক পরিমাণ দিন!");
      return;
    }
    const newBalance = updateBalance(username, amount);
    console.log(`${username} এর নতুন ব্যালেন্স: ${newBalance}`);

  // ব্যালেন্স চেক করা
  } else if (parts[0] === "!balance" && parts.length === 2) {
    const username = parts[1];
    const balance = checkBalance(username);
    console.log(`${username} এর বর্তমান ব্যালেন্স: ${balance}`);

  } else {
    console.log("কমান্ড ভুল! সঠিক ফরম্যাট:\n!addbalance <username> <amount>\n!balance <username>");
  }
}

// ===== উদাহরণ ব্যবহার =====
// নিজের জন্য ব্যালেন্স অ্যাড করতে:
handleCommand("!addbalance jc 500"); // jc এর ব্যালেন্স 500 এড
handleCommand("!balance jc");        // jc এর ব্যালেন্স চেক

// অন্য ইউজারের জন্য ব্যালেন্স:
handleCommand("!addbalance ami 300"); // অন্য ইউজার 'ami'
handleCommand("!balance ami");
