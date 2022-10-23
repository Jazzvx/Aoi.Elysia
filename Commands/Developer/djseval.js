module.exports = {
name: "djs",
  code: `
$title[Discord.js Evaluation]
$author[$userTag[$authorID];$authorAvatar]
$description[
$addField[📤 Output:;\`\`\`js
$djsEval[(async () => {
try {
    return $message
} catch (error) {
    return error
}})();yes]\`\`\`;yes]
$addField[📥 Input:;\`\`\`js
$message\`\`\`;yes]
]
$color[BLUE]
$addTimestamp
$onlyForIDs[$botOwnerID;Only For My Developer]
$suppressErrors`
}