import React from 'react'

function Join(props) {
  const title = props.title || 'Join'

  return (
    <svg
      height='16'
      width='16'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>{title}</title>
      <g>
        <path
          d='M4.29 4.62a13.81 13.81 0 0 0 0.17 2.46c0.25 1.08 1.31 2.21 1.5 2.71 1.05-1.24 4.7-2.64 6.95-1.46 2.57 1.66 2.36 4.46 0.68 5.67-0.52 0.37-2.15 1.12-4.33 1.17-1.73 0.04-2.98-0.14-3.53-0.41-0.9 0.12-2.8 0.1-3.57-0.68-0.53-0.54-1.62-3.65-0.97-6.97 0.69-3.5 1.85-6.45 3.09-6.45 0.61 0 1.6 0.02 2.07 0.4s0.11 1.54-0.01 1.65a0.79 0.79 0 0 1 0.16 1.06c-0.24 0.4-1.09 0.82-1.42 0.91a1.89 1.89 0 0 1-0.79-0.06z'
          fill='#eebc99'
        />
        <path
          d='M8.94 12.39a4.61 4.61 0 0 1-1.39-0.2 0.33 0.33 0 0 1 0.2-0.62c1.47 0.47 3.71-0.18 4.27-0.59a0.33 0.33 0 0 1 0.4 0.53l-0.01 0.01c-0.55 0.4-2.05 0.87-3.47 0.87z'
          fill='#dd9b6f'
        />
      </g>
    </svg>
  )
}

export default Join
