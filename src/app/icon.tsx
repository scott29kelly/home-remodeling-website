import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#B08D57',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          fontWeight: 700,
          fontSize: 15,
          color: '#1a1a1a',
          letterSpacing: -0.5,
        }}
      >
        SR
      </div>
    ),
    { ...size }
  );
}
