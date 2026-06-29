import fotoCv from '../assets/Foto_CV.jpg'
export default function Hero() {
    return (
        <section style={{
            paddingTop: 120, paddingBottom: 80,
            borderBottom: '0.5px solid var(--gray-border)',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: 48,
                    alignItems: 'center',
                }}>

                    {/* Left */}
                    <div>
                        <p style={{
                            fontSize: 11, fontWeight: 600,
                            letterSpacing: '0.1em', textTransform: 'uppercase',
                            color: 'var(--blue-mid)', marginBottom: 12,
                        }}>

                        </p>

                        <h1 style={{
                            fontSize: 36, fontWeight: 600,
                            lineHeight: 1.15, color: 'var(--black)',
                            marginBottom: 8,
                        }}>
                            Andrés Felipe<br />
                            <span style={{ color: 'var(--blue-mid)' }}>Bedoya Murillo</span>
                        </h1>

                        <p style={{
                            fontSize: 15, color: 'var(--gray-text)',
                            marginBottom: 20, lineHeight: 1.6,
                        }}>
                            Desarrollador de software · QA · Automatización
                        </p>

                        <p style={{
                            fontSize: 14, color: 'var(--gray-text)',
                            maxWidth: 480, lineHeight: 1.7, marginBottom: 28,
                        }}>
                            Desarrollador de software con experiencia en QA automatizado,
                            desarrollo web full-stack y aplicaciones móviles. Apasionado por
                            construir productos completos, desde el backend hasta la UI.
                        </p>

                        {/* Tags */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 32 }}>
                            {['Java', 'Flutter', '.NET', 'QA automatizado', 'HTML · CSS · JS', 'SQL Server'].map(t => (
                                <span key={t} className="tag blue">{t}</span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                            <a href="#contact" style={{
                                fontSize: 13, padding: '10px 22px',
                                background: 'var(--blue-mid)', color: 'var(--white)',
                                borderRadius: 'var(--radius-sm)', fontWeight: 500,
                                transition: 'background 0.2s',
                            }}
                                onMouseEnter={e => e.currentTarget.style.background = 'var(--blue-dark)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'var(--blue-mid)'}>
                                Contactarme
                            </a>
                            <a href="#projects" style={{
                                fontSize: 13, padding: '10px 22px',
                                background: 'transparent', color: 'var(--black)',
                                border: '0.5px solid var(--gray-border)',
                                borderRadius: 'var(--radius-sm)',
                                transition: 'background 0.2s',
                            }}
                                onMouseEnter={e => e.currentTarget.style.background = 'var(--gray-bg)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                                Ver proyectos
                            </a>
                        </div>
                    </div>

                    {/* Right — avatar */}
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: 110, height: 110, borderRadius: '50%',
                            border: '2px solid var(--blue-border)',
                            overflow: 'hidden',
                            margin: '0 auto 12px',
                        }}>
                            <img
                                src={fotoCv}
                                alt="Andrés Felipe"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                        <p style={{
                            fontSize: 12, color: 'var(--gray-muted)',
                            display: 'flex', alignItems: 'center',
                            justifyContent: 'center', gap: 4, marginTop: 4,
                        }}>
                            📍 Medellín, Colombia
                        </p>

                        {/* Social */}
                        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 14 }}>
                            {[
                                { icon: '⌂', label: 'GitHub', url: 'https://github.com/fb1000fjdskfds8' },
                                { icon: '✉', label: 'Email', url: 'mailto:bedoyafelipe111@gmail.com' },
                                { icon: '☏', label: 'WhatsApp', url: 'https://wa.me/573052476895' },
                            ].map(s => (
                                <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                                    title={s.label}
                                    style={{
                                        width: 34, height: 34, borderRadius: 'var(--radius-sm)',
                                        border: '0.5px solid var(--gray-border)',
                                        background: 'var(--white)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: 15, color: 'var(--gray-text)',
                                        transition: 'border-color 0.2s, color 0.2s',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = 'var(--blue-border)'
                                        e.currentTarget.style.color = 'var(--blue-mid)'
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'var(--gray-border)'
                                        e.currentTarget.style.color = 'var(--gray-text)'
                                    }}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}