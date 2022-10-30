console.clear()

const listOfQuestions = [
    {
        id: 0,
        question: "jadsojf ;ads",
        listOfOptions: [1, 2, 3, 4, 5],
        correctAnswerIndex: 0,
    },
    {},
]


class Question {
    constructor(id, question, listOfOptions, correctAnswerIndex) {
        this.id = id || 0;
        this.question = question || "There is no question"
        this.listOfOptions = listOfOptions || [];
        this.correctAnswerIndex = correctAnswerIndex || 0;
        // console.log("Constructing Question")
    }
}





const question1 = new Question(500, undefined, [100, 200, 300], 1)
// const question2 = new Question()

question1.question = "Please, rate your experience"

// question1.id = 1
// question1.question = "What to do?"
// question1.listOfOptions = [1, 2, 3, 4, 5]
// question1.correctAnswerIndex = 0;

// console.log(listOfQuestions[0])
console.log(question1)
// console.log(question2)


let id;
console.log()
console.log()
// console.log(0 || false || 0 || "" | NaN || 0)
// console.log("ID:", id || 0)