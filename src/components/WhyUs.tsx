import { whyUs } from '../content/site'
import './WhyUs.css'

export function WhyUs() {
  return (
    <section className="why-us" id="why" aria-labelledby="why-heading">
      <div className="section-head" data-reveal>
        <p className="section-eyebrow">Why AIT</p>
        <h2 id="why-heading">Why work with us</h2>
        <p>15 years of global IT experience applied to websites that need to convert.</p>
      </div>
      <ul className="why-us__list">
        {whyUs.map((item, index) => (
          <li key={item.title} data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
            <span className="why-us__num">{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
