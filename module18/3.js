const students =[
    { name: "Mithali",
        marks: 95

    },
    {
        name:"Tanmay",
        marks:99
    },
    {
       name:"Ajay",
       marks:87
    },
    {
        name:"Vijay",
        marks:96
    },
    {
        name:"Ganga",
        marks:85
    },
];
const checkResults = (name) =>{
    for(let student of students){
        if (student.name ===name){
            return student.marks>90
            ? console.log(
                `Congratulations ${student.name}! You have cleared the exam.`
            )
            :console.log(`Sorry! You have not cleared the exam.`);
        }
    }
    console.log("Invalid user Id!!!");
};
checkResults("Tanmay");