const items = [
  { icon: '✉', label: 'Correo',    value: 'bedoyafelipe111@gmail.com', url: 'mailto:bedoyafelipe111@gmail.com' },
  { icon: '⌂', label: 'GitHub',    value: 'github.com/fb1000fjdskfds8', url: 'https://github.com/fb1000fjdskfds8' },
  { icon: '☏', label: 'WhatsApp',  value: '+57 305 247 6895', url: 'https://wa.me/573052476895' },
]

export default function Contact() {
  return (
    <section id="contact" style={{
      background: 'var(--gray-bg)',
      borderTop: '0.5px solid var(--gray-border)',
    }}>
      <div className="container">
        <p className="section-label">hablemos</p>
        <h2 className="section-title">Contacto</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 48 }}>
          {items.map(item => (
            <a key={item.label} href={item.url} target="_blank" rel="noreferrer"
              style={{
                background: 'var(--white)', border: '0.5px solid var(--gray-border)',
                borderRadius: 'var(--radius)', padding: '16px 20px',
                display: 'flex', alignItems: 'center', gap: 14,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--blue-border)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--gray-border)'}>
              <div style={{
                width: 36, height: 36, borderRadius: 'var(--radius-sm)',
                background: 'var(--blue-light)', color: 'var(--blue-mid)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--black)' }}>{item.label}</p>
                <p style={{ fontSize: 11, color: 'var(--gray-muted)', marginTop: 2 }}>{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          borderTop: '0.5px solid var(--gray-border)', paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12, color: 'var(--gray-muted)' }}>
            Andrés Felipe Bedoya Murillo · Medellín, Colombia · 2026
          </p>
          <a href="#" style={{ fontSize: 12, color: 'var(--gray-muted)',
            display: 'flex', alignItems: 'center', gap: 4 }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--black)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--gray-muted)'}>
            ↑ volver arriba
          </a>
        </div>
      </div>
    </section>
  )
}