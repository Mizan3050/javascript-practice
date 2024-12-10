// this
console.log(this); //window object and null if strict mode
const student = {
  name: "Meezan",
  printName: function () {
    console.log(this);
    console.log(this.name);
  },
  printName2: () => {
    console.log(this);
    console.log(this.name);
  },
  printName3:  ()=> {
    const nested = "lol";
    const fn = () => {
      console.log("nested");
      console.log(this);
    };
    fn()
  },
};

student.printName();
student.printName2();
student.printName3();

const x = student;
console.log("Called with object");
x.printName();
x.printName2();
x.printName3()
