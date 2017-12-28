var person = {
    name: 'Jesse'
};

person.age = 25;

debugger;

person.name = 'Mike';

console.log(person);

//use node inspect <filename> to launch debuggin tool
//n skips to next statement in the program
//c continues until the next debugger statement or the end of the program
//type repl while in debug to evaluate variable and set them equal to things.

//use node or nodemon --inspect-brk <filename> to debug in chrome dev tools