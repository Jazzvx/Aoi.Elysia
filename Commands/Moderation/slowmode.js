module.exports = {
 name: 'slowmode',
	code: `$slowmode[$channelID;$message]
 $title[Successfully Updated Slowmode!]
 $description[Successfully Updated Slow Mode Of<#$channelID>! $message]
 $footer[]
 $color[GREEN]
 $suppressErrors[:x: Failed To Update Slowmode!]
 $onlyPerms[manageserver; :X: You Need To Be An MANAGE_SERVER]`
}
