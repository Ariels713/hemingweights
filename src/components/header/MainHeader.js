import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'

// core components

function MainHeader() {
  let pageHeader = React.createRef()

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)'
      }
      window.addEventListener('scroll', updateScroll)
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll)
      }
    }
  })

  return (
    <>
      <div
        className='page-header'
        ref={pageHeader}
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/2ER3tSxwIbL0SIfJHVV8SaCRkFFn7PvOQRhH2ICr6KeDJFi7WgIkn3U3slypaLG8dENDiIndbPvNd4PZfRxgql2xhTRlZJxM1A1iBquxFN3LOnlUTItPtOzZ5XYzgBf1PtQJmF2qYu0RCR1eiFycnHC0l9YphZwfODP2BcDCob3P4KKiFFEUvFY6WRa0gojxZB-UI8O21d6yjM3MVP4RkeB9bEEwGowkNgNhMLC_9w0UUTjzAG4CnHeDBKLfUAqnJRrD21GgaMwu0s4zpsE3htipA9vN8IR7hkcgN5ey1ygm9-aGsxny6nlJ4jdLuvrLRGeW-aMUaL4qJseABzGcsa4bSuTeqwuw1pXgeEdDjkaXNh7OCx18fxX8Qz9xVfkuz-4F-9QjfXUHydE_F5v2-0Xo9Qeik7qLy19A-rpjb-wN3yheB27ySWzHdH45uhSVSkw0jDgQnvfUBEw5bD7NUcgNOfLxoY0NeDzreN4crqi346GmV2rhN_WU9aAW3-7sJat7H6SAJWUd1bL2efsqgqKQdlKNVjT_Urv6VqmaYiWr2bdLv1K8fccRjkJKg7epjKqjmv1syxu942_Lq3Ggkx4rd1RySZjJC2qJVUH1RjdaEbXpdQ1CtdzQ2TDp157uTdXr7sEkDp-fcdSIdKrnnl4NNZOgF-_xsNL2az-_606fRJdvg8yTgkVTSGwdqp8=w2734-h1824-no?authuser=0')`,
        }}
      >
        <div className='filter' />
        <div className='content-center'>
          <Container>
            <div className='motto'>
              <h1 className='title'>H.I.G.H.</h1>
              <h3 className='description'>
                Hemingway Institute for Growth & Health
              </h3>
              <br />
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default MainHeader
