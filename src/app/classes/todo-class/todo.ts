export class Todo {
    todo: string;
    isDone: boolean;

    constructor(todo?:string,indicator?:boolean){
        this.todo = todo;
        this.isDone = indicator;
    }
}
