import { memo } from 'react';
import { TaskListType } from '../types/task/task-list';

export const TaskList = memo((props: TaskListType) => {
  const { tasks, checkTaskStatus, deleteTask, changeTaskStatus } = props;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <tr>
                <td>{ index }</td>
                <td>{ task.text }</td>
                <td><button onClick={() => changeTaskStatus(index)}>{  checkTaskStatus(task.isCompleted) }</button></td>
                <td><button onClick={() => deleteTask(index)}>削除</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
});