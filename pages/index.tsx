import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CountState } from '@/duck/myButton/countReducer'
import { countIncrement } from '@/duck/myButton/action'
import MyButton from '@/components/MyButton'

const Home: FC = () => {
  const counter = useSelector<CountState, CountState['counter']>((state) => state.counter)
  const dispatch = useDispatch()

  const handleCountUpBtn = (value: number) => {
    dispatch(countIncrement(value))
  }

  return (
    <div>
      <p>counter: {counter}</p>
      <button
        onClick={() => {
          handleCountUpBtn(1)
        }}
      >
        [+] (index.tsx)
      </button>
      <MyButton />
    </div>
  )
}

export default Home
