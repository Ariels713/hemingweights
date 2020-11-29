import React from 'react'

function PhoneButton(props) {
  const title = props.title || 'phone button'

  return (
    <svg
      height='48'
      width='48'
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>{title}</title>
      <g>
        <path
          d='M34.91 46.88h-21.94a3.99 3.99 0 0 1-3.99-3.99v-37.9a3.99 3.99 0 0 1 3.99-3.99h21.94a3.99 3.99 0 0 1 3.99 3.99v37.9a3.99 3.99 0 0 1-3.99 3.99z'
          fill='#E6E6E6'
        />
        <path
          d='M23.94 39.9a2 2 0 1 0 0 3.99 2 2 0 1 0 0-3.99z'
          fill='#CCCCCC'
        />
        <path
          d='M34.91 36.91h-21.94a1 1 0 0 1-1-1v-27.93a1 1 0 0 1 1-1h21.94a1 1 0 0 1 1 1v27.93a1 1 0 0 1-1 1z'
          fill='#41ccb7'
        />
      </g>
    </svg>
  )
}

export default PhoneButton
