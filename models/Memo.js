class Memo {
    static idSeq = 0;

    constructor(name, text) {
        this.id = Memo.idSeq;
        this.name = name || "Not Named Yet";
        this.text = text || "";

        Memo.idSeq++;
    }
}


module.exports = Memo;