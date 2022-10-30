console.clear()


class Question {
    constructor(id, question, listOfOptions, correctAnswerIndex) {
        this.id = id || 0;
        this.question = question || "There is no question"
        this.listOfOptions = listOfOptions || [];
        this.correctAnswerIndex = correctAnswerIndex || 0;
        // console.log("Constructing Question")
    }
}

const questionsList = []

const q1 = new Question(1, "Question 1", [1, 2, 3, 4], 2)
const q2 = new Question(2, "Question 1", [1, 2, 3, 4], 2)
const q3 = new Question(3, "Question 1", [1, 2, 3, 4], 2)

questionsList.push(q1, q2, q3)


// console.log(questionsList[2])


const questionsArray = [
    new Question(1, "Question 1", [1, 2, 3, 4], 2),
    new Question(2, "Question 1", [1, 2, 3, 4], 2),
    new Question(3, "Question 1", [1, 2, 3, 4], 2)
]


// console.log(questionsArray)

//{id: }

function addQuestion(questionObj, questionsArray) {
    questionsArray.push(questionObj)
}


addQuestion(new Question(4, "Something here..", [1], 0), questionsArray)

console.log(questionsArray)

// for (let i = 0; i < listOfQuestions.length; i++) {
//     console.log({ i: listOfQuestions[i] })
// }

// let myFoundQuestion;

// //! Looping through arays "of":
// for (const q of listOfQuestions) {
//     if (q.id === 0) {
//         myFoundQuestion = q
//         // console.log("Element with the ID of : " + q.id)
//         // console.log(q)
//     }
// }


// // console.log(myFoundQuestion)
// //! Looping through Objects "in":
// for (const key in myFoundQuestion) {
//     console.log(key)
//     console.log(myFoundQuestion[key])
// }



// {
//     id: 3,
//         question: "jadsojf ;ads",
//             listOfOptions: [1, 2, 3, 4, 5],
//                 correctAnswerIndex: 0,
//     }

// for (const item of listOfQuestions) {
//     console.log(item.question)
// }