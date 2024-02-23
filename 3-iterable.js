/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

class Group {
  // Your code here.
  constructor(array) {
    this.array = array;
  }
  static from(array) {
    return new Group(array);

  }
  has(hasnum) {
    for (let x of this.array) {
      if (x === hasnum) {
        return true;
      } else {
        return false;
      }
    }

  }
  add(addnum) {
    for (let y of this.array) {
      if (y === addnum) {
        this.array.push(addnum);
        return this.array;
      } else {
        return this.array;
      }
    }
  }
  delete(delnum) {
    this.array = this.array.filter((n) => n !== delnum)
  }
  [Symbol.iterator]() {
    let array = this.array;
        let i = 0;
    return {
      next() {
        if (i == array.length) {
          return { done: true }
        }
        else{
          i++;
          return { value: array[i-1], done: false }
        }
      }
    }
  }
}


// Tests:
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c