module.exports = {
name:"reroll",
aliases:['greroll','g-reroll','gw-reroll'],
code:`
$if[$message[1]==]
$if[$hasRole[$authorID;$findRole[giveaways]]==true]
$channelSendMessage[$channelID;Congratulations <@$randomText[$joinSplitText[;]]>! You are new winner of **$getMessageVar[reward;$getChannelVar[giveaway]]**!]
$concatTextSplit[$replaceText[$getReactions[$channelID;$getchannelvar[giveaway];🎉;id];,$clientID;;];,]
$onlyIf[$reactionCount[$channelID;$getchannelvar[giveaway];🎉]>1;No valid entrants, so a winner could not be determined!]
$else
$channelSendMessage[$channelID;Congratulations <@$randomText[$joinSplitText[;]]>! You are new winner of **$getMessageVar[reward;$getChannelVar[giveaway]]**!]
$concatTextSplit[$replaceText[$getReactions[$channelID;$getchannelvar[giveaway];🎉;id];,$clientID;;];,]
$onlyIf[$reactionCount[$channelID;$getchannelvar[giveaway];🎉]>21No valid entrants, so a winner could not be determined!]
$onlyPerms[manageserver;]
$endif
$elseIf[$getMessage[$channelID;$message[1];userID]==$clientID]
$if[$hasRole[$authorID;$findRole[giveaways]]==true]
$channelSendMessage[$channelID;Congratulations <@$randomText[$joinSplitText[;]]>! You are new winner of **$getMessageVar[reward;$message[1]]**!]
$concatTextSplit[$replaceText[$getReactions[$channelID;$message[1];🎉;id];,$clientID;;];,]
$onlyIf[$reactionCount[$channelID;$message[1];🎉]>1;No valid entrants, so a winner could not be determined!]
$onlyIf[$getMessage[$channelID;$message[1];userID]==$clientID;]
$onlyIf[$getMessageVar[reward;$message[1]]!=;Invalid message ID]
$onlyIf[$messageExists[$channelID;$message[1]]==true;Invalid message id]
$else
$channelSendMessage[$channelID;Congratulations <@$randomText[$joinSplitText[;]]>! You are new winner of **$getMessageVar[reward;$message[1]]**!]
$concatTextSplit[$replaceText[$getReactions[$channelID;$message[1];🎉;id];,$clientID;;];,]
$onlyIf[$reactionCount[$channelID;$message[1];🎉]>1;No valid entrants, so a winner could not be determined!]
$onlyIf[$getMessage[$channelID;$message[1];userID]==$clientID;]
$onlyIf[$getMessageVar[reward;$message[1]]!=;Invalid message ID]
$onlyIf[$messageExists[$channelID;$message[1]]==true;Invalid message id]
$onlyPerms[manageserver;]
$endif
$endElseIf
$endif
`
}