const groups = [
  { label: 'Backend',      tags: ['.NET', 'ASP.NET Core', 'C#', 'Java', 'SQL Server', 'Entity Framework'] },
  { label: 'Frontend',     tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'] },
  { label: 'Mobile',       tags: ['Flutter', 'Dart', 'Kotlin'] },
  { label: 'QA & testing', tags: ['Selenium', 'Pruebas manuales', 'Casos de prueba', 'Automatización'] },
  { label: 'Herramientas', tags: ['Git', 'Firebase', 'Cloudinary', 'Vercel', 'REST APIs'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">stack</p>
        <h2 className="section-title">Habilidades técnicas</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
          {groups.map(g => (
            <div key={g.label} style={{
              background: 'var(--white)', border: '0.5px solid var(--gray-border)',
              borderRadius: 'var(--radius)', padding: '16px 18px',
            }}>
              <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
                letterSpacing: '0.08em', color: 'var(--gray-muted)', marginBottom: 10 }}>
                {g.label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {g.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}