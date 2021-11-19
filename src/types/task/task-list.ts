import { TaskType } from './task';
import { CheckTaskStatusType } from './chek-task-status';
import { DeleteTaskType } from './delete-task';
export type TaskListType = {
  tasks: TaskType[],
  checkTaskStatus: CheckTaskStatusType
  deleteTask: DeleteTaskType
};
