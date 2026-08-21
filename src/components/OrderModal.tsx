import { useEffect, useRef, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import ReCAPTCHA from 'react-google-recaptcha'
import { findOrderable, site, type PackageId } from '../content/site'
import { trackLead } from '../lib/analytics'
import './OrderModal.css'

const FORMSPREE_ID = 'xwvgzkkl'
const recaptchaSiteKey =
  (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined) || site.recaptchaSiteKey
const whatsappNumber =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) || site.whatsapp

type OrderModalProps = {
  packageId: PackageId | null
  open: boolean
  onClose: () => void
}

export function OrderModal({ packageId, open, onClose }: OrderModalProps) {
  const pkg = findOrderable(packageId)
  const [state, handleFormspreeSubmit] = useForm(FORMSPREE_ID)
  const captchaRef = useRef<ReCAPTCHA>(null)
  const [captchaError, setCaptchaError] = useState('')
  const leadTracked = useRef(false)
  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`

  useEffect(() => {
    if (!open) return
    leadTracked.current = false
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => {
    if (state.succeeded && !leadTracked.current) {
      leadTracked.current = true
      trackLead('order_form')
    }
  }, [state.succeeded])

  if (!open || !pkg) return null

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setCaptchaError('')

    const captchaToken = captchaRef.current?.getValue()
    if (recaptchaSiteKey && !captchaToken) {
      setCaptchaError('Please complete the reCAPTCHA checkbox.')
      return
    }

    await handleFormspreeSubmit(event)
    captchaRef.current?.reset()
  }

  return (
    <div className="order-modal" role="presentation" onClick={onClose}>
      <div
        className="order-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="order-modal__close" type="button" onClick={onClose} aria-label="Close">
          ×
        </button>

        {state.succeeded ? (
          <div className="order-modal__success" role="status">
            <p className="order-modal__badge">Order received</p>
            <h2 id="order-modal-title">Thank you — your order request is in!</h2>
            <p>
              We received your request for <strong>{pkg.name}</strong>. Our team will contact you
              shortly on your phone / email to confirm details.
            </p>
            <a className="btn btn--primary" href={whatsappHref} target="_blank" rel="noreferrer">
              Message on WhatsApp
            </a>
            <button className="btn btn--ghost-dark" type="button" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="order-modal__badge">Place your order</p>
            <h2 id="order-modal-title">{pkg.name}</h2>
            <p className="order-modal__price">{pkg.priceLabel}</p>
            <p className="order-modal__hint">
              Enter your email and phone number to complete this order request. We will notify our
              team and contact you soon.
            </p>

            <form className="order-modal__form" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="form_type" value="package_order" />
              <input type="hidden" name="package" value={pkg.name} />
              <input type="hidden" name="package_id" value={pkg.id} />
              <input type="hidden" name="price" value={pkg.priceLabel} />
              <input type="hidden" name="_subject" value={`New Order: ${pkg.name}`} />

              <label>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                />
              </label>
              <ValidationError field="email" errors={state.errors} className="order-modal__error" />

              <label>
                Phone number
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="01XXXXXXXXX"
                />
              </label>
              <ValidationError field="phone" errors={state.errors} className="order-modal__error" />

              {recaptchaSiteKey ? (
                <div className="order-modal__captcha">
                  <ReCAPTCHA ref={captchaRef} sitekey={recaptchaSiteKey} theme="light" />
                </div>
              ) : null}

              {captchaError ? (
                <p className="order-modal__error" role="alert">
                  {captchaError}
                </p>
              ) : null}

              <ValidationError errors={state.errors} className="order-modal__error" />

              <button className="btn btn--primary" type="submit" disabled={state.submitting}>
                {state.submitting ? 'Placing order…' : 'Confirm Order'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
