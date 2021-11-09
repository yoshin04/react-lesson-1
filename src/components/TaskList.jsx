import { memo } from 'react';

export const TaskList = memo((props) => {
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
                <td><button>{  checkTaskStatus(task.status) }</button></td>
                <td><button>削除</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
});