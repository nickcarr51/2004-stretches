// I'm stumped...

const LockBox = (code, message) => {
  if (typeof code !== 'number') throw('wrong type');
  this.code = code;
  this.message = message;
};

lockBox.prototype.modCode = function(newCode) {
  this.code = newCode;
}
lockBox.prototype.modMessage = function() {

}
lockBox.prototype.revealMessage = function() {

}


module.exports = { lockBox };
