module.exports = {
name:"end",
aliases:['gend','g-end','gw-end'],
code:`
$if[$message[1]==]
$if[$hasRole[$authorID;$findRole[giveaways]]==true]
$setMessageVar[gwstatus;ended;$getchannelvar[giveaway]]
$channelSendMessage[$channelID;Congratulations <@$randomText[$joinSplitText[;]]>! You are winner of **$getMessageVar[reward;$getChannelVar[giveaway]]**!]
$concatTextSplit[$replaceText[$getReactions[$channelID;$getchannelvar[giveaway];🎉;id];,$clientID;;];,]
$onlyIf[$reactionCount[$channelID;$getchannelvar[giveaway];🎉]>1;No valid entrants, so a winner could not be determined!]
$else
$setMessageVar[gwstatus;ended;$getchannelvar[giveaway]]
$channelSendMessage[$channelID;Congratulations <@$randomText[$joinSplitText[;]]>! You are winner of **$getMessageVar[reward;$getChannelVar[giveaway]]**!]
$concatTextSplit[$replaceText[$getReactions[$channelID;$getchannelvar[giveaway];🎉;id];,$clientID;;];,]
$onlyIf[$reactionCount[$channelID;$getchannelvar[giveaway];🎉]>1;No valid entrants, so a winner could not be determined!]
$onlyPerms[manageserver;]
$endif
$elseIf[$getMessage[$channelID;$message[1];userID]==$clientID]
$if[$hasRole[$authorID;$findRole[giveaways]]==true]
$setMessageVar[gwstatus;ended;$message[1]]
$channelSendMessage[$channelID;Congratulations <@$randomText[$joinSplitText[;]]>! You are winner of **$getMessageVar[reward;$message[1]]**!]
$concatTextSplit[$replaceText[$getReactions[$channelID;$message[1];🎉;id];,$clientID;;];,]
$else
$setMessageVar[gwstatus;ended;$message[1]]
$channelSendMessage[$channelID;Congratulations <@$randomText[$joinSplitText[;]]>! You are winner of **$getMessageVar[reward;$message[1]]**!]
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