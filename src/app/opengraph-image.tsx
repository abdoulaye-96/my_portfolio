import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0B0F',
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(34,211,238,0.18), transparent 60%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            fontWeight: 600,
            color: '#22D3EE',
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 28,
          }}
        >
          Full Stack Developer · DevOps Engineer
        </div>
        <div style={{ display: 'flex', fontSize: 92, fontWeight: 800, color: 'white' }}>
          Abdoulaye Sène
        </div>
        <div style={{ display: 'flex', fontSize: 34, color: '#94A3B8', marginTop: 28 }}>
          Building scalable products end-to-end
        </div>
        <div style={{ display: 'flex', fontSize: 24, color: '#475569', marginTop: 48 }}>
          Dakar, Senegal · Open to worldwide remote
        </div>
      </div>
    ),
    { ...size }
  )
}
