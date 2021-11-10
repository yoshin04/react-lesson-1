import { memo } from 'react';
import { InputTaskType } from '../types/task/input-task';

export const InputTask = memo((props: InputTaskType) => {
  const { text, onChangeTaskText, addTask } = props;
  return (
    <>
      <input type="text" value={text} onChange={onChangeTaskText} />
      <button onClick={addTask}>追加</button>
    </>
  )
});