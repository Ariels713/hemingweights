import React from 'react'

function Logo(props) {
  const title = props.title || 'Logo'

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
          d='M10.759,20.706,9.358,9.429A7.5,7.5,0,0,1,15.87,1.058,7.7,7.7,0,0,1,16.8,1H31.2a7.509,7.509,0,0,1,7.5,7.5,7.415,7.415,0,0,1-.058.929l-1.4,11.274-2.977-.368,1.4-11.277A4.5,4.5,0,0,0,31.2,4H16.8a4.632,4.632,0,0,0-.565.035,4.5,4.5,0,0,0-3.9,5.023l1.4,11.278Z'
          fill='#444'
        />
        <path
          d='M35.3,47H12.7a1,1,0,0,1-.628-.222,19,19,0,1,1,23.856,0A1,1,0,0,1,35.3,47Z'
          fill='#5b5b5b'
        />
        <circle cx='24.003' cy='32' fill='#444' r='8' />
      </g>
    </svg>
  )
}

export default Logo
