import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRadio.module.css'


type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
  
  
  
  
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // onChange, onChangeOption
    onChangeOption && onChangeOption(e.currentTarget.value)
    onChange && onChange(e)
  }
  
  
  const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
    <label key={name + '-' + i} className={s.label}>
      <input
        className={s.radio}
        type={'radio'}
        name={name}
        value={name}
        checked={o === value}
        onChange={onChangeCallback}
        // name, checked, value, onChange
      
      />
      {o}
    </label>
  )) : []
  
  return (
    <>
      {mappedOptions}
    </>
  )
}

export default SuperRadio
