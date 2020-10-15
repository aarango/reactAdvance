import * as React from 'react'
import { Svg } from './styles'
import { Link } from '@reach/router'

export const Logo = (props) => {
  return (
    <Link to='/1'>
      <Svg
        width={379.04}
        height={120.81}
        viewBox='60.48 14.595 379.04 120.81'
        style={{
          background: '#fdfdfd'
        }}
        preserveAspectRatio='xMidYMid'
        {...props}
      >
        <defs>
          <filter
            id='prefix__editing-reflect'
            x='-100%'
            y='-100%'
            width='300%'
            height='300%'
            primitiveUnits='objectBoundingBox'
          >
            <feFlood floodColor='#d5ebff' result='flood' />
            <feComposite
              operator='in'
              in='flood'
              in2='SourceAlpha'
              result='flood-in'
            />
            <feImage
              preserveAspectRatio='none'
              xlinkHref='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNjRweCIgaGVpZ2h0PSI3NC4xMjVweCIgdmlld0JveD0iMCAwIDI2NCA3NC4xMjUiPgo8ZGVmcz4KICA8bGluZWFyR3JhZGllbnQgaWQ9InJlZmxlY3QtZ3JhZGllbnQiIHgxPSIwIiB4Mj0iMCIgeTE9IjAiIHkyPSIxIj4KICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmMDYyMyIgc3RvcC1vcGFjaXR5PSIwLjAiLz4KICAgIDxzdG9wIG9mZnNldD0iMC4zIiBzdG9wLWNvbG9yPSIjZmYwNjIzIiBzdG9wLW9wYWNpdHk9IjAuMCIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmYwNjIzIiBzdG9wLW9wYWNpdHk9IjAuOSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHBhdGggZD0iTTAgMCBMMCAzMy4zNTYyNSBRMTMyIDQ4LjE4MTI1IDI2NCAzMy4zNTYyNSBMMjY0IDAgWiIgZmlsbD0idXJsKCNyZWZsZWN0LWdyYWRpZW50KSIvPgo8L3N2Zz4='
              result='image'
            />
            <feComposite
              operator='in'
              in='image'
              in2='SourceAlpha'
              result='image-in'
            />
            <feGaussianBlur
              in='flood-in'
              stdDeviation='0.003 0.03'
              result='blur'
            />
            <feOffset in='blur' dy={0.03} result='offset' />
            <feComponentTransfer in='offset' result='comp'>
              <feFuncA type='linear' slope={0.5} />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in='comp' />
              <feMergeNode in='SourceGraphic' />
              <feMergeNode in='image-in' />
            </feMerge>
          </filter>
        </defs>
        <g filter='url(#prefix__editing-reflect)'>
          <path
            d='M144.43 54.71q15.68 0 15.68 11.07 0 6.08-3.9 9.73-3.84 3.65-10.56 3.65-3.14 0-5.57-1.79-1.15-.77-1.92-1.79 4.67 0 7.14-2.85 2.46-2.85 2.46-8.42t-5.5-5.57h-1.54q-.38 0-.7.07l-7.36 38.59h-13.89l7.87-41.92q6.85-.64 10.82-.7 3.96-.07 6.97-.07zm41.92 31.87q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.52 2.11-4.41 0-7-.96-2.6-.96-4.32-2.75-3.4-3.39-3.4-9.6 0-9.67 5.25-15.55 5.63-6.34 15.43-6.34 6.08 0 9.08 2.56 2.24 1.92 2.24 5.06 0 11.26-19.45 11.26-.26 1.66-.26 3.07 0 2.95 1.31 4.07 1.32 1.12 3.75 1.12 2.43 0 5.02-1.12 2.59-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.16-2.82 2.63-2.69 2.63-6.97 0-1.48-.55-2.28-.54-.8-1.63-.8-1.09 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zM195.5 91q0-1.73.9-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.26 17.28q-.84 3.97-.84 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.26 0-5.12-2.05-1.86-2.05-1.86-5.63zm47.04-23.17q.96-1.92.96-3.71t-.19-2.78q-.19-1-.64-1.76-.96-1.67-2.88-1.67-2.37 0-4.29 1.73-2.04 1.79-2.04 4.61 0 1.79 1.24 3.17 1.25 1.37 3.17 2.65 1.92 1.28 4.1 2.56 2.17 1.28 4.09 2.82 4.42 3.52 4.42 8.25 0 3.2-1.7 5.92-1.69 2.72-4.51 4.71-6.14 4.35-14.27 4.35-6.59 0-9.98-2.14-3.4-2.15-3.4-5.41 0-5.83 4.55-7.3 1.28-.45 3.23-.45t4.19.84q-1.02 2.62-1.02 4.99 0 5.12 3.65 5.12 2.36 0 4.32-1.73 1.95-1.73 1.95-3.68 0-1.95-1.25-3.36t-3.1-2.53q-1.86-1.12-4-2.21-2.15-1.08-4-2.62-4.36-3.52-4.36-9.15 0-3.65 1.8-6.5 1.79-2.85 4.67-4.77 5.76-3.9 12.83-3.9t10.5 2.11q3.42 2.11 3.42 5.7 0 3.13-2.43 5.12-2.11 1.66-4.67 1.66t-4.36-.64zM256.37 91q0-1.73.89-6.08l3.4-17.28h-3.78l.26-1.92q7.68-2.3 15.1-7.94h3.07l-1.53 6.98h4.99l-.58 2.88h-4.93L270 84.92q-.83 3.97-.83 5.31 0 3.07 2.69 3.71-.64 2.18-2.95 3.46-2.3 1.28-5.57 1.28-3.26 0-5.12-2.05-1.85-2.05-1.85-5.63zm35.77 7.68q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.5 16.19-5.38 5.89-14.6 5.89zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.37 6.69-.77 4.09-.77 9.15 0 1.66.54 2.75.55 1.09 2.02 1.09t2.4-.7q.93-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62zm42.24 8.58q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.17 6.02l-3.33 20.35-13.25 1.28 6.53-33.92 10.56-1.28-1.15 6.46q3.13-6.46 10.17-6.46 3.71 0 5.73 1.92 2.02 1.92 2.02 5.86 0 3.93-2.6 6.43-2.59 2.49-7 2.49-1.92 0-2.69-.76zm39.23 7.16q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.21 1.53-3.2 2.56-4.09 2.11-8.51 2.11-4.41 0-7.01-.96-2.59-.96-4.32-2.75-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.45 11.26-.26 1.66-.26 3.07 0 2.95 1.31 4.07t3.75 1.12q2.43 0 5.02-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.55 0 7.17-2.82 2.63-2.69 2.63-6.97 0-1.48-.55-2.28-.54-.8-1.63-.8-1.09 0-2.02.42-.92.42-1.88 1.82-2.37 3.2-3.72 10.63z'
            fill='#851c91'
          />
        </g>
        <style />
      </Svg>
    </Link>
  )
}

export default Logo
