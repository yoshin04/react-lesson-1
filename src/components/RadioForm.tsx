import { memo } from 'react';
import { RadioType } from '../types/task/radio';

export const RadioForm = memo((props: RadioType) => {
  const { value, handleChange } = props;
  return (
    <>
      <input type="radio" name="radio_button" value="all" onChange={handleChange} checked={value === 'all'} />すべて
      <input type="radio" name="radio_button" value="worked" onChange={handleChange} checked={value === 'worked'} />作業中
      <input type="radio" name="radio_button" value="completed" onChange={handleChange} checked={value === 'completed'} />完了
    </>
  )
});
