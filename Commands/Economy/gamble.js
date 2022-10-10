
module.exports = {
 name: "bet",
 code: `$if[$randomText[success;fail;draw]==success]
 $title[$username WIN GAMBLING]
 $description[You've Won **⏣ $numberSeparator[$message[1]]**
 $random[0;100]% **Percent Won Chance**
 
$username Rolled \`$random[6;36]\` 
Dealer Rolled \`$random[1;5]\`
 ]
 $thumbnail[$authorAvatar]
 $color[RANDOM]
$setGlobalUserVar[uang;$sum[$getGlobalUserVar[uang];$message[1]]]
$else
$if[$randomText[success;draw;fail]==draw]
 $title[$username DRAW GAMBLING]
 $description[You've Won **NOTHING** 🤣
__**You Lose Nothing**__
 
$username Rolled \`$random[1;10]\` 
Dealer Rolled \`$random[1;10]\` 
 ]
 $color[#FFA500]
 $thumbnail[$authorAvatar]
$else
$if[$randomText[success;draw;fail]==fail]
 $title[$username LOSE GAMBLING]
 $description[You've lose **⏣$numberSeparator[$message[1]]**
 
$username Rolled \`$random[1;5]\` 
Dealer Rolled \`$random[6;10]\`
 ]
$setGlobalUserVar[uang;$sub[$getGlobalUserVar[uang];$message[1]]]
 $thumbnail[$authorAvatar] $color[RED]
 $footer[How sad.]


$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[uang]>=$noMentionMessage;Sorry You don't Have enough money]
$onlyIf[$noMentionMessage>499;{description:**Hey mate, you need atleast bet ⏣ 500!**}{color:RED}] 
$argsCheck[1;{description:Please enter the amount you want to bet!}{color:RED}]
$globalCooldown[5s;Dont Spam]
`
}