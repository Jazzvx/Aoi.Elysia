
module.exports = {

name:"$alwaysExecute",

code:`$channelSendMessage[$channelID;$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] is AFK: $splitText[2] - $parseDate[$sub[$dateStamp;$getUserVar[time;$mentioned[1]]];time] ago ]

$onlyIf[$checkcontains[$splitText[1];on]==true;]

$textSplit[$getUserVar[AFK;$mentioned[1]];/]

$onlyIf[$checkContains[$message;<@$mentioned[1]>;<@!$mentioned[1]>]==true;]`}

