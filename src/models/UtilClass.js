export default class UtilClass {
  properCase(value) {
    return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
  }

  update(props) {
    // update logic
  }

  add(array, itemToAdd) {
    this[array].push(
      Object.assign(itemToAdd, {
        isActive: true,
        addedAt: new Date(),
      })
    );
    console.log(`[ADD] ${itemToAdd.getFullName()} to ${this.getFullName()}`);
  }

  remove(array, itemToRemove) {
    this[array] = this[array].filter((item) => item.id !== itemToRemove.id);
    console.log(
      `[REMOVE] ${itemToRemove.getFullName()} to ${this.getFullName()}`
    );
  }

  getAll(array) {
    console.log(`\n[LIST] ${this.getFullName()}, ${this.properCase(array)}`);
    this[array].forEach((item, index) => {
      console.log(`${++index}# ${item.toConsoleString()}`);
    });
    console.log(`${this.properCase(array)} count: ( ${this[array].length} )`);
  }
}
