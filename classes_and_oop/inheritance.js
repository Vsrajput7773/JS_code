class Student {
    constructor(studentname,saction,age,studentId){
        this.studentname = studentname;
        this.saction =saction;
        this.age =age;
        this.studentId = studentId;
    }
    studentInfo(){
      console.log(`${this.studentname} ID =${this.studentId}`);
    }
}

class Teacher extends Student {
constructor(teachername,saction){
super(saction)
this.teachername = teachername;
}
findsaction(){
console.log(this.saction);
}
}

const student= new Student("studnet1","A","12","23")

const teacher = new Teacher("Ravi sir","m")


student.studentInfo()

teacher.findsaction()