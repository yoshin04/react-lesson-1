import { TaskType } from './task';
import { CheckTaskStatusType } from './chek-task-status';
import { DeleteTaskType } from './delete-task';
import { ChangeTaskStatus } from './change-task-status';
export type TaskListType = {
  tasks: TaskType[],
  checkTaskStatus: CheckTaskStatusType,
  changeTaskStatus: ChangeTaskStatus,
  deleteTask: DeleteTaskType,
};
