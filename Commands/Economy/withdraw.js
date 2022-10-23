module.exports = {
  name: 'withdraw',
  aliases: 'with',
  code: `$setGlobalUserVar[uang;$sum[$getGlobalUserVar[uang;$authorID];$message];$authorID]
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank;$authorID];$message];$authorID]
$title[Withdrew]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, you withdrew ⏣ $numberSeparator[$message] from your bank!]
$footer[💵 ⏣ $numberSeparator[$sum[$getGlobalUserVar[uang;$authorID];$message]] | 🏦 ⏣ $numberSeparator[$sub[$getGlobalUserVar[bank;$authorID];$message]] | 📊 ⏣ $numberSeparator[$sum[$getGlobalUserVar[uang;$authorID];$getGlobalUserVar[bank;$authorID]]]]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[bank;$authorID];Cannot withdraw more than what's in your bank!]
$argsCheck[>1;How much are you withdrawing?]
$onlyIf[$getGlobalUserVar[bank;$authorID]>0;There's nothing to withdraw!]`
}