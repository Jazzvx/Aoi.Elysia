module.exports = {

name:"$alwaysExecute",

code:`$setUserVar[AFK;off;$authorID]

<@$authorID>, I have removed your AFK

$onlyif[$checkcontains[$message;afk]==false;]

$onlyIf[$checkcontains[$splitText[1];on]==true;]

$textSplit[$getUserVar[AFK];/]`}