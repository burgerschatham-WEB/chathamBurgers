import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
          borderRadius: '28px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '4px',
          }}
        >
          <span
            style={{
              color: '#F5C200',
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 1,
              fontFamily: 'Georgia, serif',
              letterSpacing: '-2px',
            }}
          >
            C
          </span>
          <span
            style={{
              color: '#ffffff',
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 1,
              fontFamily: 'Georgia, serif',
              letterSpacing: '-2px',
            }}
          >
            B
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '6px',
            marginTop: '6px',
          }}
        >
          <div style={{ width: 52, height: 5, background: '#ffffff', borderRadius: 3 }} />
          <div style={{ width: 18, height: 5, background: '#F5C200', borderRadius: 3 }} />
        </div>
        <span
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: 18,
            fontFamily: 'Georgia, serif',
            letterSpacing: '4px',
            marginTop: '8px',
            textTransform: 'uppercase',
          }}
        >
          1985
        </span>
      </div>
    ),
    { ...size }
  )
}
