import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#C8102E',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '5px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '1px',
          }}
        >
          <span
            style={{
              color: '#F5C200',
              fontSize: 14,
              fontWeight: 900,
              lineHeight: 1,
              fontFamily: 'Georgia, serif',
              letterSpacing: '-0.5px',
            }}
          >
            C
          </span>
          <span
            style={{
              color: '#ffffff',
              fontSize: 14,
              fontWeight: 900,
              lineHeight: 1,
              fontFamily: 'Georgia, serif',
              letterSpacing: '-0.5px',
            }}
          >
            B
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '2px',
            marginTop: '1px',
          }}
        >
          <div style={{ width: 10, height: 2, background: '#ffffff', borderRadius: 1 }} />
          <div style={{ width: 4, height: 2, background: '#F5C200', borderRadius: 1 }} />
        </div>
      </div>
    ),
    { ...size }
  )
}
