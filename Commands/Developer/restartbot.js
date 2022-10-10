module.exports = ({
    name: "reboot",
    code: `
$reboot[index.js]
$wait[5]
$reply[$messageID;Rebooting in 5 seconds, see ya' next time;no]
$onlyForIDs[$botOwnerID;Only For My Developer]
`
})