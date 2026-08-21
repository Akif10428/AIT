import { supportTerms } from '../content/site'
import './SupportTerms.css'

export function SupportTerms() {
  return (
    <section className="support-terms" id="support" aria-labelledby="support-heading">
      <div className="section-head support-terms__head" data-reveal>
        <h2 id="support-heading">Support &amp; Service Terms</h2>
      </div>
      <ul className="support-terms__grid">
        {supportTerms.map((item, index) => (
          <li
            key={item.title}
            className="support-terms__card"
            data-reveal
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
