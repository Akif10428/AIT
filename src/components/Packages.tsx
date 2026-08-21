import { useCallback, useEffect, useState } from 'react'
import { packageFeatures, packages, type PackageId } from '../content/site'
import { trackInitiateCheckout } from '../lib/analytics'
import { OrderModal } from './OrderModal'
import './Packages.css'

function readOrderFromUrl(): PackageId | null {
  const params = new URLSearchParams(window.location.search)
  const fromQuery = params.get('order')
  if (fromQuery && packages.some((p) => p.id === fromQuery)) {
    return fromQuery as PackageId
  }

  const hash = window.location.hash.replace(/^#/, '')
  if (hash.startsWith('order=')) {
    const id = hash.slice('order='.length)
    if (packages.some((p) => p.id === id)) return id as PackageId
  }
  return null
}

export function Packages() {
  const [orderId, setOrderId] = useState<PackageId | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openOrder = useCallback((id: PackageId) => {
    const pkg = packages.find((p) => p.id === id)
    if (pkg) trackInitiateCheckout(pkg.name)
    setOrderId(id)
    setModalOpen(true)
  }, [])

  const closeOrder = useCallback(() => {
    setModalOpen(false)
  }, [])

  useEffect(() => {
    const fromUrl = readOrderFromUrl()
    if (fromUrl) {
      openOrder(fromUrl)
      requestAnimationFrame(() => {
        document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
      })
    } else if (window.location.hash === '#packages') {
      requestAnimationFrame(() => {
        document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [openOrder])

  return (
    <section className="packages" id="packages" aria-labelledby="packages-heading">
      <div className="section-head packages__head">
        <p className="packages__eyebrow">Website price list</p>
        <h2 id="packages-heading">Choose the best solution for your business</h2>
        <p>Professional websites & mobile apps to grow your business. Order now — we will contact you.</p>
      </div>

      <ul className="packages__grid">
        {packages.map((pkg) => (
          <li key={pkg.id} className={`packages__card packages__card--${pkg.accent}`}>
            <span className="packages__num">{pkg.number}</span>
            <h3>{pkg.name}</h3>
            <p className="packages__price">{pkg.priceLabel}</p>
            <p className="packages__blurb">{pkg.blurb}</p>
            <button
              className="btn btn--primary packages__cta"
              type="button"
              onClick={() => openOrder(pkg.id)}
            >
              Order Now
            </button>
          </li>
        ))}
      </ul>

      <ul className="packages__features">
        {packageFeatures.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <OrderModal
        key={orderId ?? 'closed'}
        packageId={orderId}
        open={modalOpen}
        onClose={closeOrder}
      />
    </section>
  )
}
