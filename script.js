//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this._age = age;
	}
	getName(){
		return this._name;
	}
	setAge(n){
		return this._age = n;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
