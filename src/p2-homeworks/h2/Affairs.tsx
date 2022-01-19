import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
  data: Array<AffairType>
  setFilter: (value: FilterType) => void
  deleteAffairCallback: (_id: number) => void
  filter: FilterType
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}
    
    const setFilterChecked= (filter: FilterType) => {
      return props.filter === filter ? s.selected : s.affair
    }
  
    return (
        <div>

            {mappedAffairs}

            <button className={setFilterChecked('all')} onClick={setAll}>All</button>
            <button className={setFilterChecked('high')} onClick={setHigh}>High</button>
            <button className={setFilterChecked('middle')} onClick={setMiddle}>Middle</button>
            <button className={setFilterChecked('low')} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
