import { useDispatch, useSelector } from 'react-redux'
import { CountState } from '@/duck/myButton/countReducer'
import MyButton from '@/components/MyButton'

import React, { FC } from 'react'
import styles from '@/styles/Home.module.css'

const Home: FC = () => {
  const counter = useSelector<CountState, CountState['counter']>((state) => state.counter)
  const dispatch = useDispatch()

  const handleCountUpBtn = (value: number) => {
    dispatch({ type: 'count/increment', payload: value })
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
