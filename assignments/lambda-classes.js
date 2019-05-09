// CODE here for your Lambda Classes
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(quality) {
    super(quality);
    this.speciality = quality.speciality;
    this.favLanguage = quality.favLanguage;
    this.catchPhrase = quality.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} reveives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listSubjects() {
    return this.favSubjects;
  }
  PRAssingments(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times.`;
  }
  debugsCode(student, subject) {
    return `${this.name} degugs ${student.name}'s code on ${subject} `;
  }
}

/* Instructor */
const Dan = new Instructor({
  name: 'Dan',
  location: 'Bedrock',
  age: 33,
  favLanguage: 'JavaScript',
  speciality: 'Backend',
  catchPhrase: 'Kitty kat..'
});

/* Student */
const Sunil = new Student({
  name: 'Sunil',
  location: 'Colorado',
  age: 22,
  previousBackground: 'College',
  className: 'WEB20',
  favSubjects: ['HTML', 'CSS', 'JAVASCRIPT']
});

/* Project Manager */
const Skyelar = new ProjectManager({
  name: 'Skyelar',
  locationn: 'California',
  age: 19,
  speciality: 'JavaScript',
  chatchPhrase: 'BOOYAAAA...',
  gradClassName: 'WEB17',
  favInstructor: 'Josh'
});

console.log(Dan.demo('JavaScript'));
console.log(Dan.grade(Sunil, 'Javascript'));

console.log(Sunil.listSubjects(this.favSubjects));
console.log(Sunil.PRAssingments('HTML'));
console.log(Sunil.sprintChallenge('JavaScript'));

console.log(Skyelar.standUp('WEB20'));
console.log(Skyelar.debugsCode(Sunil, 'JavaScript'));
