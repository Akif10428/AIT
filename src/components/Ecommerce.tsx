import { useCallback, useEffect, useState } from 'react'
import { ecommerce, findOrderable, type PackageId } from '../content/site'
import { trackInitiateCheckout } from '../lib/analytics'
import { OrderModal } from './OrderModal'
import './Ecommerce.css'

function readEcomOrderFromUrl(): PackageId | null {
  const params = new URLSearchParams(window.location.search)
  const fromQuery = params.get('order')
  const hash = window.location.hash.replace(/^#/, '')
  const fromHash = hash.startsWith('order=') ? hash.slice('order='.length) : null
  const candidate = fromQuery || fromHash
  if (!candidate) return null
  const found = findOrderable(candidate)
  if (!found) return null
  if (!found.id.startsWith('ecom-')) return null
  return found.id as PackageId
}

export function Ecommerce() {
  const { eyebrow, heading, summary, stats, tiers, demo, note } = ecommerce
  const [orderId, setOrderId] = useState<PackageId | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openOrder = useCallback((id: PackageId) => {
    const pkg = findOrderable(id)
    if (pkg) trackInitiateCheckout(pkg.name)
    setOrderId(id)
    setModalOpen(true)
  }, [])

  const closeOrder = useCallback(() => {
    setModalOpen(false)
  }, [])

  useEffect(() => {
    const fromUrl = readEcomOrderFromUrl()
    if (fromUrl) {
      openOrder(fromUrl)
      requestAnimationFrame(() => {
        document.getElementById('ecommerce')?.scrollIntoView({ behavior: 'smooth' })
      })
    } else if (window.location.hash === '#ecommerce') {
      requestAnimationFrame(() => {
        document.getElementById('ecommerce')?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [openOrder])

  return (
    <section className="ecom" id="ecommerce" aria-labelledby="ecom-heading">
      <div className="ecom__head" data-reveal>
        <p className="ecom__eyebrow">{eyebrow}</p>
        <h2 id="ecom-heading">{heading}</h2>
        <p className="ecom__summary">{summary}</p>
      </div>

      <ul className="ecom__stats" data-reveal>
        {stats.map((stat) => (
          <li key={stat.label}>
            <span className="ecom__stat-value">{stat.value}</span>
            <span className="ecom__stat-label">{stat.label}</span>
          </li>
        ))}
      </ul>

      <div className="ecom__tiers">
        {tiers.map((tier, index) => {
          const comingSoon: readonly string[] = 'comingSoon' in tier ? tier.comingSoon : []
          return (
            <article
              key={tier.id}
              className={`ecom__tier ecom__tier--${tier.accent}`}
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <h3>{tier.name}</h3>
              <p className="ecom__tier-blurb">{tier.blurb}</p>
              <ul className="ecom__features">
                {tier.features.map((feature) => (
                  <li key={feature}>
                    <span>{feature}</span>
                    {comingSoon.includes(feature) ? (
                      <span className="ecom__soon">Coming Soon</span>
                    ) : null}
                  </li>
                ))}
              </ul>
              <button
                className="btn btn--primary ecom__cta"
                type="button"
                onClick={() => openOrder(tier.id)}
              >
                Order Now
              </button>
            </article>
          )
        })}
      </div>

      <div className="ecom__demo" data-reveal>
        <div>
          <p className="ecom__demo-title">{demo.title}</p>
          <p className="ecom__demo-sub">{demo.subtitle}</p>
        </div>
        <div className="ecom__demo-links">
          <p>
            {demo.siteLabel}:{' '}
            <a href={demo.siteHref} target="_blank" rel="noopener noreferrer">
              {demo.siteText}
            </a>
          </p>
          <p>
            {demo.adminLabel}:{' '}
            <a href={demo.adminHref} target="_blank" rel="noopener noreferrer">
              {demo.adminText}
            </a>
          </p>
        </div>
      </div>

      <p className="ecom__note">{note}</p>

      <OrderModal
        key={orderId ?? 'ecom-closed'}
        packageId={orderId}
        open={modalOpen}
        onClose={closeOrder}
      />
    </section>
  )
}
