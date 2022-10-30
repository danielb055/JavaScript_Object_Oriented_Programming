class Memo {
    static idSeq = 0;

    constructor(name, text) {
        this.id = Memo.idSeq;
        this.name = name || "Not Named Yet";
        this.text = text || "";

        Memo.idSeq++;
    }
}



const memosList = [];




memosList.push(new Memo("Exam tomorrow", "Study for the exam tomorrow @9 am"));
memosList.push(new Memo("Exam tomorrow", "Study for the exam tomorrow @9 am"));
memosList.push(new Memo("Exam tomorrow", "Study for the exam tomorrow @9 am"));
memosList.push(new Memo("Exam tomorrow", "Study for the exam tomorrow @9 am"));
memosList.push(new Memo("The last one was added", "Study for the exam tomorrow"));


console.log(memosList);



