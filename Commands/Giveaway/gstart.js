module.exports = [{
    name:"gstart",
    aliases:['start','giveaway','gw-start','gwstart','g-start'],
    code:`
$if[$hasRole[$authorID;$findRole[giveaways]]==true]
$setMessageVar[host;$authorID;$get[msg]]
$setMessageVar[reward;$messageSlice[1];$get[msg]]
$setChannelVar[giveaway;$get[msg]]
$deletecommand
$setTimeout[$message[1];messageID: $get[msg]
reward: $messageslice[1]
time: $message[1]
channelID: $channelID
user: $authorID]
$let[msg;$sendMessage[{title:$messageSlice[1]}{description:React with 🎉 to enter.
End$replacetext[:;:;#COLON#] $replacetext[<t:$round[$math[($dateStamp+$parseTime[$message[1]])/1000]]:R>;:;#COLON#] | $replacetext[<t:$round[$math[($dateStamp+$parseTime[$message[1]])/1000]]:f>;:;#COLON#]
Hosted by: <@$authorID>}{color:#FFFFFF}{reactions:🎉}{footer:Ends at | $replacetext[$parseDate[$math[$dateStamp+$parseTime[$message[1]]]];:;#COLON#]};yes]]
$else
$setMessageVar[host;$authorID;$get[msg]]
$setMessageVar[reward;$messageSlice[1];$get[msg]]
$setChannelVar[giveaway;$get[msg]]
$deletecommand
$setTimeout[$message[1];messageID: $get[msg]
reward: $messageslice[1]
time: $message[1]
channelID: $channelID
user: $authorID]
$let[msg;$sendMessage[:tada: Giveaway :tada: {title:$messageSlice[1]}{description:React with :tada: to enter.
End$replacetext[:;:;#COLON#] $replacetext[<t:$round[$math[($dateStamp+$parseTime[$message[1]])/1000]]:R>;:;#COLON#] | $replacetext[<t:$round[$math[($dateStamp+$parseTime[$message[1]])/1000]]:f>;:;#COLON#]
Hosted by: <@$authorID>}{color:#FFFFFF}{reactions:🎉}{footer:Ends at | $replacetext[$parseDate[$math[$dateStamp+$parseTime[$message[1]]]];:;#COLON#]};yes]]
$onlyPerms[manageserver;]
$endif
$argsCheck[>2;Usage: *gstart time reward]
$onlyIf[$checkContains[$message[1];d;h;m;s]==true;Please put the valid time. s = second(s) | m = minute(s) | h = hour(s) | d = day(s)]
`
},
                  {
                      type:"timeoutCommand",
                      code:`
$setMessageVar[gwstatus;ended;$timeoutData[messageID]]
$editMessage[$timeoutData[messageID];🎉 Giveaway ended 🎉{title:$timeoutData[reward]}{description:Winner$replacetext[:;:;#COLON#] <@$randomText[$joinSplitText[;]]>
Hosted by: <@$timeoutdata[user]>};$timeoutData[channelID]]
$channelSendMessage[$timeoutData[channelID];🎉 Congratulations <@$randomText[$joinSplitText[;]]>! You won the **$timeoutData[reward]**!]
$concatTextSplit[$getReactions[$timeoutdata[channelID];$timeoutdata[messageID];🎉;id];,]
$onlyIf[$getmessagevar[gwstatus;$timeoutdata[messageID]]!=ended;]
$onlyIf[$messageExists[$timeoutData[channelID];$timeoutData[messageID]]!=false;]
`
                  }]