import { services } from '../content/site'
import './Services.css'

export function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="section-head" data-reveal>
        <p className="section-eyebrow">What we deliver</p>
        <h2 id="services-heading">What you get</h2>
        <p>Practical website and app support for businesses that already talk to customers on Facebook.</p>
      </div>
      <ul className="services__list">
        {services.map((item, index) => (
          <li key={item.title} data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
