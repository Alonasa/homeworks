import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
  >

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                       options,
    className,
    onChange,
    onChangeOption,
    value,
    id,
    ...restProps
}) => {
    const mappedOptions: any[] = options
        ? options.map((o) => (
              <MenuItem
                  id={'hw7-option-' + o.value}
                  className={s.option}
                  key={o.id}
                  value={o.id}
                  style={{border: '1px solid #C2C2C2'}}
              >
                  {o.value}
              </MenuItem>
          ))
        : []

    const onChangeCallback = (e: SelectChangeEvent) => {
        onChangeOption && onChangeOption(e.target.value)
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

  
  return (
    <select
      className={finalSelectClassName}
      onChange={onChangeCallback}
      {...restProps}
    >
      {mappedOptions}
    </select>
  )
}

export default SuperSelect