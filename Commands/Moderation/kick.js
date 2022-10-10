module.exports = {
 name: "kick",
 type: "interactionCommand",
 code: 
`
$if[$hasPerms[$authorID;kick]==true]
$if[$userExists[$findUser[$message[1]]]==true]
$if[$isBot[$findUser[$message[1]]]==false]
$if[$findUser[$message[1]]!=$authorID]
$if[$findUser[$message[1]]!=$ownerID]
$interactionReply[;
 {description:Kicked $username[$findUser[$message[1]]]!}

 {color:ORANGE}
]
$kick[$findUser[$message[1]];$replacetext[$replacetext[$checkcondition[$message[2]==];true;No reason was specified.];false;$messageslice[1]]]]
$else
$interactionReply[;
 {description:You can't use on \`OWNER\`!}
]
$endIf
$else
$interactionReply[;
 {description:You can't use on \`YOURSELF\`!}

 {color:RED}
]
$endIf
$else
$interactionReply[;
 {description:Sorry! This user is \`BOT\`!}

 {color:RED}
]
$endIf
$else
$interactionReply[;
 {description:This user is not \`EXIST\`!}

 {color:RED}
]
$endIf
$else
$interactionReply[;
 {description:You can't run this command! You must have \`KICK\`!}

 {color:RED}
]
$endIf
`
}