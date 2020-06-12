//YOUR CODE HERE

class Box {
    constructor(color, capacity) {
        this.color = color;
        this.capacity = capacity;
        this.contents = [];
    }

    pack(name, capacity) {
        this.contents.push(new Box(name, capacity));
    }
}

module.exports = { Box };
