//YOUR CODE HERE

class Box {
    constructor(color, capacity) {
        this.color = color;
        this.capacity = capacity;
        this.contents = [];
    }

    pack(name, capacity) {
        if (this.contents.length === this.capacity) throw new Error('too many boxes in the box?')
        this.contents.push(new Box(name, capacity));
    }

    unpack() {
        let colors = [];
        colors.push(this.color);
        this.contents.forEach(box => {
            colors.push(box.color);
            if (box.contents.length > 0) {
                colors.push(box.unpack());
            }
        })
        
        return colors.flat(2);
    }
}

module.exports = { Box };
