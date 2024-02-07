type Person = {
    fullName : string,
    age : number
};

const listPersons:Person[] =[
    // {fullName: "Name1", age: 30},
    // {fullName: "Name2", age: 26},
    // {fullName: "Name3", age: 13},
    // {fullName: "Name4", age: 52},
    // {fullName: "Name5", age: 28},
    // {fullName: "Name6", age: 36},
    // {fullName: "Name7", age: 41},
];

listPersons.push({fullName: "Name1", age: 30});
listPersons.push({fullName: "Name2", age: 26});
listPersons.push({fullName: "Name3", age: 13});
listPersons.push({fullName: "Name4", age: 52});
listPersons.push({fullName: "Name5", age: 28});
listPersons.push({fullName: "Name6", age: 36});
listPersons.push({fullName: "Name7", age: 41});

function sortByAge(list:Person[]): Person[] {
    return listPersons.sort((a: Person, b: Person)  => a.age - b.age)
}
console.log("Сортированный массив: ");
console.log(sortByAge(listPersons));

// pask2

type Product = {
    title : string,
    price : number
};

const listProduct:Product[] = [];
listProduct.push({title: "Phone", price: 856});
listProduct.push({title: "glass", price: 1});
listProduct.push({title: "NewsPapper", price: 0.5});
listProduct.push({title: "Chocolat", price: 2});
listProduct.push({title: "Dog's food", price: 13});
listProduct.push({title: "NoteBook", price: 1500});
listProduct.push({title: "Book", price: 15});
listProduct.push({title: "Hairbrush", price: 5});

function filterOfPrice(list:Product[]): Product[]{
    const result = listProduct.filter(product => product.price < 50);
    return result;
}
console.log(filterOfPrice(listProduct));

// pask 3

type Book = {
    title : string
};

const listBooks:Book[] = [];
listBooks.push({title: "1984"});
listBooks.push({ title: "The Great Gatsby" });
listBooks.push({ title: "The Catcher in the Rye" });
listBooks.push({ title: "Animal Farm" });
listBooks.push({ title: "Lord of the Flies" });
listBooks.push({ title: "Brave New World" });
listBooks.push({ title: "Pride and Prejudice" });
listBooks.push({ title: "The Hobbit" });
listBooks.push({ title: "The Grapes of Wrath" });

function findBookOfTitle(title: string): Book | undefined{
    const result = listBooks.find(book => book.title === title);
    return result;
}
console.log(findBookOfTitle("1984"));

// task 4

function totalSum(list:Product[]): number{
    let totalSum:number = 0;
    listProduct.forEach(product => totalSum += product.price)
    return totalSum;
}
console.log(totalSum(listProduct));

// task 5

type Student = {fullName : string, assessment: number}

const listOfStudents: Student[] = [];
listOfStudents.push({fullName: "Name1", assessment: 5});
listOfStudents.push({fullName: "Name2", assessment: 3});
listOfStudents.push({fullName: "Name3", assessment: 4});
listOfStudents.push({fullName: "Name4", assessment: 2});
listOfStudents.push({fullName: "Name5", assessment: 5});

function updateAssesOfStudent(name: string, newAssessment: number): Student[] {
    const studentToUpdate = listOfStudents.find(student => student.fullName === name);
    if (studentToUpdate) {
        studentToUpdate.assessment = newAssessment;
    } else {
        console.log("Студента с таким именем нет в списке.");
    }
    return listOfStudents;
}
console.log(updateAssesOfStudent("Name5", 2));
console.log(updateAssesOfStudent("Name6", 5));

//task 6

type Order = {title: string, status: string}

const statusOrderList : Order[] = [];
statusOrderList.push({ title: "Stak", status: "completed" });
statusOrderList.push({ title: "Burger", status: "pending" });
statusOrderList.push({ title: "Pizza", status: "in progress" });
statusOrderList.push({ title: "Salad", status: "ready" });
statusOrderList.push({ title: "Soup", status: "cancelled" });
statusOrderList.push({ title: "Pasta", status: "pending" });
statusOrderList.push({ title: "Sandwich", status: "pending" });
statusOrderList.push({ title: "Fries", status: "in progress" });
statusOrderList.push({ title: "Chicken", status: "ready" });
statusOrderList.push({ title: "Fish", status: "cancelled" });

function countStatus(list: Order[], status: string): number{
    let count : number = 0;
    statusOrderList.forEach(n => n.status === status ? count++ : count)
    return count;
}
console.log(countStatus(statusOrderList, "ready"));
console.log(countStatus(statusOrderList, "pending"));

//task 7

function maxPrice(list : Product[]): number{
    let max: number = 0;
    listProduct.forEach(n =>{
        max = n.price > max ? n.price : max;
    } )
    return max
}
console.log(maxPrice(listProduct));

//task 8

type Car = {
    brand: string,
    year: number
};

const cars: Car[] = [
    { brand: "Toyota", year: 2015 },
    { brand: "Honda", year: 2018 },
    { brand: "Ford", year: 2017 },
    { brand: "Ford", year: 2017 },
    { brand: "Mini", year: 2019 },
    { brand: "BMW", year: 2020 },
    { brand: "Mercedes", year: 2019 }
];

function sortByCar(list: Car[], brand:string, year: number): Car[]{
    const resultSort: Car[] = cars.filter(n => (n.brand === brand && n.year === year))
    return resultSort
}
console.log(sortByCar(cars, "Ford", 2017));
console.log(sortByCar(cars, "BMW", 2020));


//task 9

const oldCars: Car[] = [
    { brand: "Toyota", year: 1915 },
    { brand: "Honda", year: 1915 },
    { brand: "Ford", year: 1915 },
    { brand: "Ford", year: 1915 },
    { brand: "Mini", year: 1915 },
    { brand: "BMW", year: 1915 },
    { brand: "Mercedes", year: 1915 }
];

function unityArrays(list1:Car[], list2:Car[]): Car[]{
    return [...list1, ...list2]
}
console.log(unityArrays(cars, oldCars));