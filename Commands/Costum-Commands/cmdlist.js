module.exports = {
  name: "cmd-list",
  aliases: 'cmdlist',
code: `
$title[**__Custom Commands__**]
$color[RANDOM]
$thumbnail[$servericon]
$description[\`$replacetext[$replacetext[$replacetext[$getservervar[ccmd];#right_click#;>];#left_click#;<];/;, ]\`]
$addtimestamp
$onlyif[$gettextsplitlength>=2;{description:There are no custom commands on the server \`$servername\`}{color:ff2050}]
$textsplit[$getServerVar[ccmd];/] 
`
}