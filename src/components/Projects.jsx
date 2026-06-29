import logo_predicfy from '../assets/logo_predicfy.png'

const projects = [
    {
        name: 'Predicfy',
        subtitle: 'App móvil de fútbol',
        desc: 'App móvil en inglés y español, tema claro y oscuro, con sesión, predicciones de partidos, live scores, notificaciones push bilingüe, ranking, favoritos, detalles del partido (estadio, árbitro, capacidad, canal de transmisión), enfrentamientos directos, tabla de clasificación, logo de la liga, buscador de equipos/ligas/jugadores, sesión de noticias y feed tipo TikTok.',
        tags: ['Flutter', 'Dart', 'ASP.NET Core', 'C#', 'Firebase', 'SQL Server'],
        color: 'var(--blue-light)',
        iconBg: '#185FA5',
        icon: logo_predicfy,
        isImage: true,
        github: 'https://github.com/fb1000fjdskfds8',
    },
    {
        name: 'Robot de facturas',
        subtitle: 'Automatización · Savia Salud EPS',
        desc: 'Automatización end-to-end de descarga y clasificación de facturas con navegación web y gestión del sistema de archivos. Desarrollado durante las prácticas profesionales.',
        tags: ['Java', 'Selenium', 'Automatización'],
        color: '#E1F5EE',
        iconBg: '#0F6E56',
        icon: '🤖',
        github: 'https://github.com/fb1000fjdskfds8',
    },
    {
        name: 'Páginas web',
        subtitle: 'Proyectos académicos',
        desc: 'Sitios web con HTML, Bootstrap, JavaScript y .NET. Diseño responsivo y consumo de APIs REST.',
        tags: ['HTML', 'Bootstrap', 'JavaScript', '.NET'],
        color: '#EEEDFE',
        iconBg: '#534AB7',
        icon: '🌐',
        github: 'https://github.com/fb1000fjdskfds8',
    },
]

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <p className="section-label">portafolio</p>
                <h2 className="section-title">Proyectos destacados</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {projects.map((p, i) => (
                        <div key={i} style={{
                            background: 'var(--white)', border: '0.5px solid var(--gray-border)',
                            borderRadius: 'var(--radius)', padding: '24px 28px',
                            display: 'grid', gridTemplateColumns: 'auto 1fr',
                            gap: 20, alignItems: 'start',
                            transition: 'border-color 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--blue-border)'}
                            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--gray-border)'}>
                            {/* Icon */}
                            <div style={{
                                width: 44, height: 44, borderRadius: 10,
                                background: p.color,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 20, flexShrink: 0,
                                overflow: 'hidden',
                            }}>
                                {p.isImage
                                    ? <img src={p.icon} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    : p.icon
                                }
                            </div>

                            {/* Content */}
                            <div>
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between',
                                    alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 4
                                }}>
                                    <div>
                                        <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--black)' }}>{p.name}</p>
                                        <p style={{ fontSize: 12, color: 'var(--blue-mid)', fontWeight: 500 }}>{p.subtitle}</p>
                                    </div>
                                    <a href={p.github} target="_blank" rel="noreferrer"
                                        style={{
                                            fontSize: 12, color: 'var(--gray-muted)',
                                            border: '0.5px solid var(--gray-border)',
                                            padding: '5px 12px', borderRadius: 'var(--radius-sm)',
                                            display: 'flex', alignItems: 'center', gap: 5,
                                            transition: 'color 0.2s, border-color 0.2s',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.color = 'var(--blue-mid)'
                                            e.currentTarget.style.borderColor = 'var(--blue-border)'
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.color = 'var(--gray-muted)'
                                            e.currentTarget.style.borderColor = 'var(--gray-border)'
                                        }}>
                                        ⌂ GitHub
                                    </a>
                                </div>

                                <p style={{
                                    fontSize: 13, color: 'var(--gray-text)',
                                    lineHeight: 1.65, margin: '10px 0 14px'
                                }}>
                                    {p.desc}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                    {p.tags.map(t => (
                                        <span key={t} style={{
                                            fontSize: 11, padding: '3px 10px',
                                            borderRadius: 20, border: '0.5px solid var(--gray-border)',
                                            color: 'var(--black)', background: 'var(--white)',
                                        }}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}