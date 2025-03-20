//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this._age = age;
	}
	set Name(name){
		this._name=name;
	}
	get Name(){
		return this._name;
	}
	setAge(n){
		this._age = n;
	}
	getAge(){
		return this._age;
	}

}

class Student extends Person {
	constructor(name,age){
		super(name,age)
	}
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age)
	}
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
