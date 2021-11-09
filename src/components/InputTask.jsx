import { memo } from 'react';

export const InputTask = memo((props) => {
  const { text, onChangeTaskText, addTask } = props;
  return (
    <>
      <input type="text" value={text} onChange={onChangeTaskText} />
      <button onClick={addTask}>追加</button>
    </>
  )
});