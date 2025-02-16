// class Book{
//     constructor(title, author, year){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     checkYear(){
//         if (this.year<0){
//             this.year = false;
// console.log("Введите коректное значение");
//         }
//         else {
//             console.log(this.year);
//         }
//     }
//     getDescription(){
//         console.log(`Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`)
//     }

// }
// const Book1 = new Book("Мумий тролль", "туве янсон", 1979);
// const Book2 = new Book("Мертвые души", "Гоголь", -12);

// console.log(Book1);
// console.log(Book2);


// class Student {
//     constructor(name, age){
//         this.name= name;
//         this.age = age;
//         this.grades = [];
//     }
//     addGrade(grade) {
//         this.grades.push(grade)
//     }
// }
// const s1 = new Student("Яна", 21)
// studen1.addGrade(5)
// console.log(Student1)


class Student {
    constructor(name, age){
        this.name= name;
        this.age = age;
        this.grades = [];
    }
    addGrade(grade) {
        this.grades.push(grade)
    }
    GoodStudent(){
        if(this.grade.length == 0){
            return " no grade";
        }
        let sum = 0;
        let gradesLen = this.grades.length

        for(let g of this.garde) {
            sum += g
        }
        return `Средняя оценка ${sum / gradesLen}`
    }
}
const s = new Student("Яна", 27)
s.addGrade(5);
s.addGrade(4);
s.addGrade(2);
s.addGrade(5);
s.addGrade(5);
s.addGrade(3);

console.log(s)
console.log(s.GoodStudent)