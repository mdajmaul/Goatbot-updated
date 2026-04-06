module.exports = {
	config: {
		name: "help",
		version: "2.0",
		author: "xalman",
		countDown: 5,
		role: 0,
		shortDescription: "Show all commands",
		longDescription: "Show full command list",
		category: "system",
		guide: "{p}help"
	},

	onStart: async function ({ api, event }) {

		const msg = `━━━☠️ 𝗡𝗲𝗼𝗞𝗘𝗫 𝗔𝗜 ☠️━━━

╭──『 ADMIN 』
× delete
╰────────────◊

╭──『 AI 』
× ai × genx × metaai × pi × prompt × gpt
╰────────────◊

╭──『 AI-GENERATED 』
× nijix
╰────────────◊

╭──『 AI-IMAGE 』
× art × dalle3 × fluxkontext × fluxpro × imagen4 × supanime × flux10pro × flux11pro × fluxdev × fluxdevlora × fluxkontextpro × fluxkontextproedit × fluxschnell × seedreamv4
╰────────────◊

╭──『 AI-VIDEO 』
× animate
╰────────────◊

╭──『 BOX CHAT 』
× adduser × admin × all × antichangeinfobox × autosetname × badwords × busy × count × filteruser × kick × onlyadminbox × refresh × rules × sendnoti × setname × theme × unsend × warn
╰────────────◊

╭──『 CONFIG 』
× prefix × setalias
╰────────────◊

╭──『 CONTACTS ADMIN 』
× callad
╰────────────◊

╭──『 CUSTOM 』
× setleave × setwelcome × shortcut
╰────────────◊

╭──『 ECONOMY 』
× balance × balanceBot × bank × daily
╰────────────◊

╭──『 FUN 』
× anisearch × emojimix × fakechat × gay × iqtest × jail × nigga × punch × toilet × pair
╰────────────◊

╭──『 FUN GAME 』
× slap × slot
╰────────────◊

╭──『 GAME 』
× coc × dhbc × guessnumber × maze
╰────────────◊

╭──『 GROUP 』
× topexp × grouptag
╰────────────◊

╭──『 IMAGE 』
× 4k × 4o × aiphoto × avatar × edit × moon × nanobanana × pinterest × rbg × sorthelp
╰────────────◊

╭──『 MEDIA 』
× download × tiktok × youtube × alldl × ytb
╰────────────◊

╭──『 OWNER 』
× adminonly × backupdata × cmd × developer × eval × event × getfbstate × hubble × ignoreonlyad × ignoreonlyadbox × jsontomongodb × jsontosqlite × loadconfig × notification × offbot × premium × restart × savetext × setavt × setlang × setrankup × shell × spamban × thread × update × user × whitelist
╰────────────◊

╭──『 SYSTEM 』
× file × fork × help × spam × uptime × refresh
╰────────────◊

➥ Use: !help [command name] for details
➥ Use: !callad to talk with bot admins '_'`;

		api.sendMessage(msg, event.threadID);
	}
};
