class TaskClass {
    static id = 0;

    constructor(taskDescription) {
        this.id = TaskClass.id;
        this.taskDescription = taskDescription || ""
        this.isCompleted = false;

        TaskClass.id++;
    }
}


export default TaskClass;