import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CountState } from '@/duck/myButton/countReducer'
import { countIncrement } from '@/duck/myButton/action'

const MyButton: FC = () => {
  const mycounter = useSelector<CountState, CountState['counter']>((state) => state.counter)
  const dispatch = useDispatch()

  const handleCountUpBtn = (value: number) => {
    dispatch(countIncrement(value))
  }

  return (
    <div>
      <button
        onClick={() => {
          handleCountUpBtn(1)
        }}
      >
        [+] (myButton)
      </button>
      <p>※debug counter:{mycounter}</p>
    </div>
  )
}
export default MyButton
