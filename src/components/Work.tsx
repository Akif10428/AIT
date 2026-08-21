import { workSamples } from '../content/site'
import './Work.css'

export function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-heading">
      <div className="section-head" data-reveal>
        <p className="section-eyebrow">Portfolio</p>
        <h2 id="work-heading">Work / samples</h2>
        <p>Real projects delivered for clients.</p>
      </div>
      <ul className="work__list">
        {workSamples.map((item) => (
          <li key={item.title} data-reveal>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.href ? (
              <a
                className="work__link"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site →
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
