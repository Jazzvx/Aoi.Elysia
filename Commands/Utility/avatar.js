module.exports = [{
    name: "avatar",
    aliases: ['av'],
    code: `
$if[$findMembers[$message;10;{position}]!=1]
$author[$userTag[$authorID];$authorAvatar]
$description[Please choose the following...
 
$findMembers[$message;10;**{position}.)** [{tag}](https://youtu.be/Qskm9MTz2V4=16)]]
$color[BLUE]
$awaitMessages[$authorID;1m;everything;avatar;$getVar[no] Cancelled]
$setUserVar[userav;$findMembers[$message;10;{id}]]
$elseIf[$findMembers[$message;10;{position}]==1]
$author[$userTag[$get[id]];$userAvatar[$get[id]]]
$image[$userAvatar[$get[id]?size=2048]]
$color[BLUE]
$addTimestamp
$let[id;$findMembers[$message;10;{id}]]
$endElseIf
$endIf
$onlyIf[$message!=;{execute:avatar2}]
$onlyIf[$findMembers[$message;10;{id}]!=;{execute:avatar2}]
`,
}, {
    type: "awaitedCommand",
    name: "avatar",
    code: `
$if[$isNumber[$message[1]]==true]
$author[$userTag[$get[id]];$userAvatar[$get[id]]]
$image[attachment://avatar.$get[if]]
$color[BLUE]
$addTimestamp
$attachment[$userAvatar[$get[id]];avatar.$get[if]]
$let[if;$replaceText[$replaceText[$stringEndsWith[$get[replace];png];true;png];false;gif]]
$let[replace;$replaceText[$userAvatar[$get[id]];webp;png]]
$let[id;$splitText[$message[1]]]
$textSplit[$getUserVar[userav];\n]
$elseIf[$toLowercase[$message[1]]==cancel]
$getVar[no] Cancelled
$endElseIf
$else
$getVar[no] Cancelled
$endIf
$suppressErrors[$getVar[no] Cancelled]
`,
}, {
    type: "awaitedCommand",
    name: "avatar2",
    code: `
$author[$userTag[$get[id]];$userAvatar[$get[id]]]
$image[attachment://avatar.$get[if]]
$color[BLUE]
$addTimestamp
$attachment[$userAvatar[$get[id]];avatar.$get[if]]
$let[if;$replaceText[$replaceText[$stringEndsWith[$userAvatar[$get[id]];png];true;png];false;gif]]
$let[replace;$replaceText[$userAvatar[$get[id]];webp;png]]
$let[id;$findUser[$message]]
`
}]