import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
      <div className={s.error__404}>
        <div className={s.error__wrapper}>
          <div>404</div>
          <div>Page not found!</div>
          <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
      </div>
    )
}

export default Error404
