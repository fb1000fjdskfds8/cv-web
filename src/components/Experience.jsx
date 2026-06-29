const bullets = [
  'Desarrollé un robot en Java + Selenium para descarga automática de facturas y organización en carpetas.',
  'Diseñé y ejecuté casos de prueba manuales y automatizados sobre la plataforma interna de la empresa.',
  'Documenté bugs, elaboré reportes de calidad y participé en ciclos de regresión.',
]

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--gray-bg)', borderTop: '0.5px solid var(--gray-border)', borderBottom: '0.5px solid var(--gray-border)' }}>
      <div className="container">
        <p className="section-label">trayectoria</p>
        <h2 className="section-title">Experiencia profesional</h2>

        <div style={{
          background: 'var(--white)', border: '0.5px solid var(--gray-border)',
          borderRadius: 'var(--radius)', padding: '24px 28px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--black)' }}>
              Savia Salud EPS
            </p>
            <span style={{ fontSize: 12, color: 'var(--gray-muted)' }}>
              2025 · Medellín (presencial / remoto)
            </span>
          </div>

          <p style={{ fontSize: 13, color: 'var(--blue-mid)', fontWeight: 500, marginBottom: 16 }}>
            QA Engineer — prácticas profesionales (6 meses)
          </p>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--gray-text)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--blue-border)', marginTop: 2, flexShrink: 0 }}>▸</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Educación */}
        <h2 className="section-title" style={{ marginTop: 48 }}>Educación</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { school: 'SENA', degree: 'Tecnología en Desarrollo de Software', period: '2023 – 2025' },
            { school: 'Bachiller Académico', degree: '', },
          ].map((e, i) => (
            <div key={i} style={{
              background: 'var(--white)', border: '0.5px solid var(--gray-border)',
              borderRadius: 'var(--radius)', padding: '16px 22px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8,
            }}>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--black)' }}>{e.school}</p>
                {e.degree && <p style={{ fontSize: 13, color: 'var(--gray-text)', marginTop: 2 }}>{e.degree}</p>}
              </div>
              <span style={{ fontSize: 12, color: 'var(--blue-mid)', fontWeight: 500 }}>{e.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}