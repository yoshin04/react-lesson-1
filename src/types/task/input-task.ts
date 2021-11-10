import { AddTaskType } from './add-task';
import { OnChangeTaskTextType } from './on-change-task-text';
export type InputTaskType = {
  text: string,
  onChangeTaskText: OnChangeTaskTextType,
  addTask: AddTaskType
}