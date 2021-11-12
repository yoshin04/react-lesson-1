import { memo } from 'react';
import { TaskListType } from '../types/task/task-list';

export const TaskList = memo((props: TaskListType) => {
  const { tasks, checkTaskStatus } = props;

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
                <td><button>{  checkTaskStatus(task.isComplete) }</button></td>
                <td><button>削除</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
});