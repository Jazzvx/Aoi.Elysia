module.exports = {
  name: 'setstatus',
  code: `Succes Set Status To $getVar[status]
$botTyping
$setVar[status;$message]
$onlyForIDs[846577487491629096;Only For My Developer :c]`
}
