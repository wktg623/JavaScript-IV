// CODE here for your Lambda Classes
class Person{
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak(){
       return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
};



class Instructor extends Person{
    constructor(instructorProps){
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    }

    grade(subject){
        
        return `${this.name} receives a perfect score on ${subject}.`
    }
}

class ProjectManager extends Instructor{
    constructor(pmProps){
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;

    }
    standUp(channel){
return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(name, subject){
return `${this.name} debugs ${name}'s code on ${subject}`
    }
}

class Student extends Person{
    constructor(studentProps){
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
        
    }
    listsSubjects(){
 return this.favSubjects;
};
    
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

const sarah = new Instructor({
    name: 'Sarah',
    location: 'Fairview',
    age: 39,
    favLanguage: 'HTML',
    specialty: 'Front-End',
    catchPhrase: 'Lets Do This'

})

const kim = new Instructor({
    name: 'Kim',
    location: 'Manassas',
    age: 47,
    favLanguage: 'CSS',
    specialty: 'Front-End',
    catchPhrase: 'Cowabunga!'
})

const wesley = new ProjectManager({
    name: 'Wesley',
    location: 'Manassas',
    age: 2,
    favLanguage: 'JS',
    specialty: 'Back-End',
    catchPhrase: 'Do you mind',
    gradClassName: 'PT1',
    favInstructor: 'Pace'
})

const alaina = new ProjectManager({
    name: 'Alaina',
    location: 'Indiana',
    age: 35,
    favLanguage: 'JS',
    specialty: 'Back-End',
    catchPhrase: 'Money, please',
    gradClassName: 'PT11',
    favInstructor: 'Kyle'
})

const jeff = new Student({
    name: 'Jeff',
    location: 'Nashville',
    age: 23,
    previousBackground: 'McDonalds',
    className: 'PT9',
    favSubjects: ['HTML', 'CSS', "JS"]

});

const tom = new Student({
    name: 'Tom',
    location: 'Nashville',
    age: 33,
    previousBackground: 'teacher',
    className: 'PT11',
    favSubjects: ['HTML', "JS"]

})
console.log(tom.favSubjects)
console.log(tom.speak());
console.log(jeff.sprintChallenge('arrays'));
console.log(jeff.PRAssignment('arrays'));
console.log(tom.listsSubjects());
console.log(alaina.name);
console.log(alaina.favInstructor);
console.log(alaina.speak());
console.log(alaina.standUp('pt11'))
console.log(wesley.debugsCode('jo','arrays'))
console.log(wesley.catchPhrase)
console.log(kim.demo('arrays'))
console.log(kim.grade('arrays'))