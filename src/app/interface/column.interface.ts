import { Task } from "./task.interface";

export interface Column {
  id: number;
  columnName: string;
  tasks: Task[]
}
