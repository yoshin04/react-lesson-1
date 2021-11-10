import { TaskType } from './task';
import { CheckTaskStatusType } from './chek-task-status';
export type TaskListType = {
  tasks: TaskType[],
  checkTaskStatus: CheckTaskStatusType
};
