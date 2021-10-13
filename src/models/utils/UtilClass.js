export default class UtilClass {
  // constructor(createdAt, updatedAt) {
  //   this.createdAt = new Date();
  //   this.updatedAt = null;
  // }

  properCase = (value) => {
    return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
  };

  update = (props) => {
    // update logic
  };

  add = (array, itemToAdd) => {
    console.log(itemToAdd);
    this[array].push({
      id: itemToAdd.id,
      fullName: itemToAdd.getFullName(),
      isActive: true,
      addedAt: new Date(),
    });
    console.log(`${itemToAdd}: with id: ${itemToAdd.id} added to`);
  };

  remove(array, itemToRemove) {
    this[array] = this[array].filter((item) => item.id !== itemToRemove.id);
  }

  list = (array, text) => {
    console.log(`${text ?? 'Array'}: \n`, this[array]);
    console.log(`${text ?? 'Number of items'} : ${this[array].length}`);
  };

  consoleList = (array, text) => {
    console.log(`${text ?? 'Array'}: \n`, this[array]);
    console.log(`${text ?? 'Number of items'} : ${this[array].length}`);
  };

  getThis = () => {
    return this;
  };
}
