const prefix = `$getServerVar[prefix]`

module.exports = [{
  name: "$alwaysExecute",
  code: `
$if[$stringStartsWith[$message[1];${prefix}]==true]
$log[$username tried to use $message[1] command that does not even exists]
that command does not exists
$onlyIf[$commandInfo[$replaceText[$message[1];${prefix};];name]==;]
$onlyIf[$message[1]!=${prefix};]
$deleteIn[3s]
  $endIf
  `
}] 