//Add two methods to this box class.

class Box {
  //Solution code for Boxes part 1-3
  constructor(color, capacity) {
    this.color = color;
    this.capacity = capacity;
    this.contents = [];
  }
  pack(col, cap) {
    if (this.contents.length !== this.capacity) {
      this.contents.push(new Box(col, cap));
    } else {
      throw new Error('Capacity Met!');
    }
  }
  unpack() {
    const result = [];
    if (!this.contents.length) {
      result.push(this.color);
    } else {
      result.push(this.color);
      for (let i = 0; i < this.contents.length; i++) {
        result.push(...this.contents[i].unpack());
      }
    }
    return result;
  }
  movingVan(dur) {
    return setTimeout(() => this.unpack(), dur);
  }
  //*****YOUR CODE STARTS HERE******
  expand(num, arr) {
    this.capacity = this.capacity + num;
    arr.forEach(newBox => {
      this.contents.push(new Box(newBox[0], newBox[1]))
    })
  }

  loot(idx) {
    if (this.contents[idx]) {
      return new Box(this.contents[idx].color, this.contents[idx].capacity)
    } else {
      let randomIdx = Math.floor(Math.random() * this.capacity);
      return new Box(this.contents[randomIdx].color, this.contents[randomIdx].capacity)
    }
  }
}

module.exports = { Box };
