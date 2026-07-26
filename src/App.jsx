import { useState, useEffect } from 'react'

const WA = '6285339226558'
const WA_BASE = `https://wa.me/${WA}`

const services = [
  ['Pembersihan Karang Gigi', 'Plak dan karang gigi dibersihkan dengan ultrasonic. 30-45 menit.'],
  ['Tambal Gigi', 'Resin komposit, warna sesuai gigi asli. Selesai dalam 1 kunjungan.'],
  ['Cabut Gigi', 'Bius lokal. Proses 10-20 menit.', ],
  ['Behel & Ortodonti', 'Metal, keramik, atau aligner. 12-24 bulan tergantung kasus.'],
  ['Veneer Gigi', 'Porselen tipis untuk gigi retak/noda. Tahan 10-15 tahun.'],
  ['Implan Gigi', 'Titanium. Proses 3-6 bulan termasuk penyembuhan.'],
  ['Bleaching', 'Hidrogen peroksida. 1 sesi 60 menit.'],
  ['Perawatan Anak', 'Tambal anak, fissure sealant, topikal fluor.'],
]

const faqs = [
  ['Konsultasi gratis?', 'Iya. Dokter periksa, jelaskan opsi, estimasi biaya. Tidak ada kewajiban.'],
  ['Sakit?', 'Anestesi lokal untuk prosedur yang perlu dibius. Yang terasa tekanan, bukan sakit.'],
  ['Lama pasang behel?', 'Pemasangan 1-2 jam. Kontrol tiap 3-4 minggu. Total 12-24 bulan.'],
  ['Terima BPJS?', 'Iya untuk prosedur tertentu. Tanya lewat WhatsApp.'],
  ['Cara booking?', 'WhatsApp 0853-3922-6558. Nama, keluhan, tanggal. Kami konfirmasi dalam 1x24 jam.'],
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqIdx, setFaqIdx] = useState(null)

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const h = (e, id) => { e.preventDefault(); scrollTo(id) }

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#" className="logo">Seurii Dental</a>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? '✕' : '☰'}
          </button>
          <nav>
            <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
              {['Tentang', 'Layanan', 'Lokasi', 'FAQ'].map(s => (
                <li key={s}><a href={`#${s.toLowerCase()}`} onClick={(e) => h(e, s.toLowerCase())}>{s}</a></li>
              ))}
              <li><a href={WA_BASE} target="_blank" rel="noopener" className="nav-wa">WhatsApp</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container">
          <h1>Klinik Gigi di Bintaro,<br /><span>Sejak 2014</span></h1>
          <p>Seurii Dental — perawatan gigi umum dan spesialis. Dokter berpengalaman, harga transparan, konsultasi gratis.</p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href={WA_BASE} target="_blank" rel="noopener" className="btn-primary">Booking via WhatsApp</a>
            <a href="#layanan" onClick={(e) => h(e, 'layanan')} className="btn-outline">Lihat layanan</a>
          </div>
        </div>
      </section>

      <section className="section" id="tentang">
        <div className="container">
          <div className="about-text">
            <h2 className="section-title">Tentang</h2>
            <p>Seurii Dental buka sejak 2014 di Bintaro. Lokasi di Ruko Bintaro Jaya X9, dekat BSD, Serpong, dan Jakarta Selatan.</p>
            <ul className="feature-list">
              <li>Terdaftar di Kementerian Kesehatan RI</li>
              <li>X-Ray panoramic dan CBCT</li>
              <li>Sterilisasi alat standar RS</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--slate-50)' }} id="layanan">
        <div className="container">
          <h2 className="section-title">Layanan</h2>
          <div className="services-list" style={{ marginTop: '1.5rem' }}>
            {services.map(([name, desc]) => (
              <div className="service-item" key={name}>
                <span className="service-name">{name}</span>
                <span className="service-desc">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="lokasi">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Kontak</h2>
          <div className="contact-grid">
            <div>
              <div className="info-row">
                <div className="info-label">Alamat</div>
                <div className="info-value">Ruko Bintaro Jaya X9 Blok A No. 5, Bintaro, Tangerang Selatan 15224</div>
              </div>
              <div className="info-row">
                <div className="info-label">Telepon / WA</div>
                <div className="info-value"><a href={WA_BASE} target="_blank" rel="noopener">0853-3922-6558</a></div>
              </div>
              <div className="info-row">
                <div className="info-label">Email</div>
                <div className="info-value"><a href="mailto:info@seurii-dental.com">info@seurii-dental.com</a></div>
              </div>
              <div className="info-row">
                <div className="info-label">Jam</div>
                <table className="hours-table">
                  <tbody>
                    <tr><td>Senin - Jumat</td><td>08.00 - 20.00</td></tr>
                    <tr><td>Sabtu</td><td>08.00 - 18.00</td></tr>
                    <tr><td>Minggu & Libur</td><td>Libur</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="booking-card">
              <h3>Booking Janji Temu</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', marginBottom: '1rem' }}>
                Isi form atau hubungi langsung via WhatsApp.
              </p>
              <div className="form-grid">
                <div className="form-group">
                  <label>Nama</label>
                  <input type="text" placeholder="Nama lengkap" />
                </div>
                <div className="form-group">
                  <label>WhatsApp</label>
                  <input type="tel" placeholder="08xxx" />
                </div>
                <div className="form-group">
                  <label>Layanan</label>
                  <select>
                    <option>Pilih...</option>
                    {services.map(([n]) => <option key={n}>{n}</option>)}
                    <option>Konsultasi</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tanggal</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Catatan</label>
                  <textarea placeholder="Keluhan atau info lain" />
                </div>
                <a href={WA_BASE} target="_blank" rel="noopener" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                  Kirim via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--slate-50)' }} id="faq">
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 className="section-title">FAQ</h2>
          <div style={{ marginTop: '1.5rem' }}>
            {faqs.map(([q, a], i) => (
              <div className={`faq-item${faqIdx === i ? ' open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => setFaqIdx(faqIdx === i ? null : i)}>
                  {q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Hubungi Seurii Dental</h2>
          <p>Konsultasi gratis. Booking via WhatsApp atau telepon.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={WA_BASE} target="_blank" rel="noopener" className="btn-primary">Chat WhatsApp</a>
            <a href="tel:085339226558" style={{ color: 'var(--slate-300)', fontSize: '0.9375rem', padding: '0.75rem 0', borderBottom: '1px solid var(--slate-600)' }}>
              0853-3922-6558
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>&copy; 2026 Seurii Dental, Bintaro</span>
          <span>
            <a href={WA_BASE} target="_blank" rel="noopener" style={{ marginRight: '1rem' }}>WhatsApp</a>
            <a href="tel:085339226558">Telepon</a>
          </span>
        </div>
      </footer>

      <a href={WA_BASE} target="_blank" rel="noopener" className="wa-float" aria-label="WhatsApp">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  )
}
