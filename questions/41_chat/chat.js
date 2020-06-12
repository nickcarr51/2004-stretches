//	Chat is almost complete - solve the last spec

class Chat {
  constructor() {
    this.listeners = {};
  }

  join(str, fn) {
    Object.values(this.listeners).forEach((listener) =>
      listener(`${str} has joined chat!`)
    );
    this.listeners[str] = fn;
    
    const chatter = {
      name: str,
      listeners: this.listeners,
      talk: function(message) {
        Object.keys(this.listeners).forEach(listener => {
          if (this.name !== listener) {
            let func = this.listeners[listener]
            func(`${this.name} says ${message}`);
          }
        })
      }
    }
    
    return Object.create(chatter);
  }

}

module.exports = { Chat };
