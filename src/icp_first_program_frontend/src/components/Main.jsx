import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'
import quizfinityLogo from '../../../icp_first_program_frontend/assets/quizfinity_transparent.png';

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }
    

  return (
    <div className='container'>
        <h1 className='title text-light'><img src={quizfinityLogo} className='logo' />Quizfinity</h1>

        <ol>
            <li>Get ready for a quest of wit and wisdom with 10 consecutive questions!</li>
            <li>Score a perfect 10 by nailing each correct answer - 10 points for every victory!</li>
            <li>Choose wisely! Each question boasts three options; pick the one that sparks joy.</li>
            <li>It's not set in stone! Feel free to tweak your answers before the quiz curtain falls.</li>
            <li>Drumroll, please! The moment of truth arrives at the grand finale - results reveal all the glory!</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Let's Begin</Link>
        </div>

    </div>
  )
}
