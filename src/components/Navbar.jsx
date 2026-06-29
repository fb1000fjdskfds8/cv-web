import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const links = [
        { label: 'Sobre mí', href: '#skills' },
        { label: 'Experiencia', href: '#experience' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Contacto', href: '#contact' },
    ]

    return (
        <header style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
            background: scrolled ? 'rgba(248,247,244,0.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '0.5px solid var(--gray-border)' : 'none',
            transition: 'all 0.3s ease',
        }}>
            <div className="container" style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', height: 60,
            }}>

                <a href="#" style={{ fontWeight: 600, fontSize: 16, color: 'var(--black)' }}>
                    A<span style={{ color: 'var(--blue-mid)' }}>.</span>dev
                </a>

                {/* Desktop links */}
                <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}
                    className="nav-desktop">
                    {links.map(l => (
                        <a key={l.href} href={l.href} style={{
                            fontSize: 13, color: 'var(--gray-text)',
                            transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => e.target.style.color = 'var(--black)'}
                            onMouseLeave={e => e.target.style.color = 'var(--gray-text)'}>
                            {l.label}
                        </a>
                    ))}
                    <a href="/CV_Andres_Bedoya.pdf" download target="_blank" rel="noreferrer"
                        style={{
                            fontSize: 12, padding: '7px 16px',
                            border: '0.5px solid var(--gray-border)',
                            borderRadius: 'var(--radius-sm)',
                            color: 'var(--black)', background: 'transparent',
                            display: 'flex', alignItems: 'center', gap: 6,
                            transition: 'background 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--gray-bg)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        ↓ Descargar CV
                    </a>
                </nav>

                {/* Mobile hamburger */}
                <button onClick={() => setMenuOpen(!menuOpen)}
                    className="nav-mobile"
                    style={{
                        background: 'none', border: 'none',
                        cursor: 'pointer', fontSize: 20, color: 'var(--black)',
                    }}>
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div style={{
                    background: 'var(--white)',
                    borderTop: '0.5px solid var(--gray-border)',
                    padding: '16px 24px',
                    display: 'flex', flexDirection: 'column', gap: 16,
                }}>
                    {links.map(l => (
                        <a key={l.href} href={l.href}
                            onClick={() => setMenuOpen(false)}
                            style={{ fontSize: 14, color: 'var(--gray-text)' }}>
                            {l.label}
                        </a>
                    ))}
                    <a href="/CV_Andres_Bedoya.pdf" download target="_blank" rel="noreferrer"
                        style={{ fontSize: 13, color: 'var(--blue-mid)', fontWeight: 500 }}>
                        ↓ Descargar CV
                    </a>
                </div>
            )}
        </header>
    )
}