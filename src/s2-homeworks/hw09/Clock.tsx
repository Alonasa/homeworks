import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined)
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
  const [show, setShow] = useState<boolean>(false)
  const [disableTimer, setDisableTimer] = useState<boolean>(false)
  
  
  
  const start = () => {
	stop();
	setDisableTimer(true)
	setTimerId(+setInterval(()=>setDate(new Date()), 1000))
	
	
	// пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
	// сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
	
  }
  
  
  const stop = () => {
    setTimerId(undefined)
	setDisableTimer(!disableTimer)
	clearInterval(timerId)
	// пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
  }
  
  const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
	setShow(true)
  }
  const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
	setShow(false)
  }
  
  
  const currentTime = () => {
	return `${date?.getHours().toString().padStart(2,'0')}:${date?.getMinutes().toString().padStart(2,'0')}:${date?.getSeconds().toString().padStart(2,'0')}`
  }
  
  const currentDay = () => {
	let day = date?.getDay()
	switch (day) {
	  case 1: {
	    return 'Monday'
	  }
	  case 2: {
		return 'Tuesday'
	  }
	  case 3: {
		return 'Wednesday'
	  }
	  case 4: {
		return 'Thursday'
	  }
	  case 5: {
		return 'Friday'
	  }
	  case 6: {
	    return 'Saturday'
	  }
	}
	return 'Sunday'
  }
  
  const currentDate = () => {
    return `${date?.getDate().toString().padStart(2,'0')}.${(date?.getMonth()+1).toString().padStart(2,'0')}.${date?.getFullYear()}`
  }
  
  const currentMonth = () => {
	return date.toLocaleString('default', { month: 'long' })
  }
  
  const stringTime = currentTime() || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringDate = currentDate() || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
  
  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = currentDay() || <br/> // пишут студенты
  const stringMonth = currentMonth() || <br/> // пишут студенты
  
  return (
	<div className={s.clock}>
	  <div
		id={'hw9-watch'}
		className={s.watch}
		onMouseEnter={onMouseEnter}
		onMouseLeave={onMouseLeave}
	  >
		<span id={'hw9-day'}>{stringDay}</span>,{' '}
		<span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
	  </div>
	  
	  <div id={'hw9-more'}>
		<div className={s.more}>
		  {show ? (
			<>
			  <span id={'hw9-month'}>{stringMonth}</span>,{' '}
			  <span id={'hw9-date'}>{stringDate}</span>
			</>
		  ) : (
			<>
			  <br/>
			</>
		  )}
		</div>
	  </div>
	  
	  <div className={s.buttonsContainer}>
		<SuperButton
		  id={'hw9-button-start'}
		  disabled={disableTimer} // пишут студенты // задизэйблить если таймер запущен
		  onClick={start}
		>
		  start
		</SuperButton>
		<SuperButton
		  id={'hw9-button-stop'}
		  disabled={!disableTimer} // пишут студенты // задизэйблить если таймер не запущен
		  onClick={stop}
		>
		  stop
		</SuperButton>
	  </div>
	</div>
  )
}

export default Clock
