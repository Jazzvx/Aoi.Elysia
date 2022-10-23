
module.exports = ({
  name: "calculator",
  code: `$djsEval[(async () => {
const Discord = require('discord.js');
const { Calculator } = require("leaf-utils");

const Leafcalculator = new Calculator({
  destroy: "You locked me",
  invalid: "Next time just put in a valid calculation!", 
  notauthor: "You aren't the calculator owner",
  deactivatemessasge: "I deactivated me",
  deactivatetime: 1000000, 
  message: message,
});

await Leafcalculator.start();

})()]`
}); 
