import { asset } from '../lib/asset.js'

export default function Logo({ className = 'h-11 w-11', mark = 'navy' }) {
  const img = (
    <img
      src={asset('images/logo-icon.png')}
      alt="MARA’s Overseas Exports logo"
      className={`${className} object-contain`}
    />
  )

  if (mark === 'white') {
    return <span className="inline-flex items-center justify-center rounded-md bg-white p-1">{img}</span>
  }

  return img
}
