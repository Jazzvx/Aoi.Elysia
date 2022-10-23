module.exports = {
  name: "unban",
 code: `$unban[$message[1];By $userTag[$authorID] Reason: $sliceMessage[1]]
$username[$message[1]] **has been unbanned 👌**
$onlyBotPerms[ban; I don't have ban perms]
$argsCheck[>1; Please Provide User ID To Unban**]
$onlyPerms[ban; You need ban permission]
$suppressErrors[I can't find that user]`
}