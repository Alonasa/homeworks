import React from 'react'
import {AffairType, deleteAffair, filterAffairs} from './HW2';
import s from './Affairs.module.css';
import Affairs from './Affairs';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
      props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div key={props.affair._id} className={s.list}>
            <span>{props.affair.name}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
