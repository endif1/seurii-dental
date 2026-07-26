import { useState, useEffect } from 'react'
import './gallery-fix.css'

const WA_NUMBER = '6285339226558'
const WA_BASE = `https://wa.me/${WA_NUMBER}`

const services = [
  { name: 'Pembersihan Karang Gigi', desc: 'Plak dan karang gigi dibersihkan dengan alat ultrasonic. Selesai dalam 30-45 menit.' },
  { name: 'Tambal Gigi', desc: 'Gigi berlubang ditambal dengan resin komposit. Warna disesuaikan dengan gigi asli.' },
  { name: 'Cabut Gigi', desc: 'Cabut gigi bermasalah dengan bius lokal. Proses biasanya 10-20 menit.' },
  { name: 'Behel & Ortodonti', desc: 'Behel metal, keramik, atau aligner. Lama perawatan 12-24 bulan tergantung kasus.' },
  { name: 'Veneer Gigi', desc: 'Veneer porselen untuk menutupi gigi retak, bernoda, atau tidak rapi. Tahan 10-15 tahun.' },
  { name: 'Implan Gigi', desc: 'Penggantian gigi hilang dengan implan titanium. Proses 3-6 bulan termasuk penyembuhan.' },
  { name: 'Bleaching Gigi', desc: 'Pemutihan gigi dengan gel berbasis hidrogen peroksida. 1 sesi sekitar 60 menit.' },
  { name: 'Perawatan Gigi Anak', desc: 'Tambal anak, topikal fluor, fissure sealant, dan pencabutan gigi susu.' },
]

const faqs = [
  { q: 'Apakah konsultasi gratis?', a: 'Iya. Konsultasi pertama gratis. Dokter periksa, jelaskan opsi, kasih estimasi biaya. Tidak ada kewajiban.' },
  { q: 'Apakah perawatan gigi sakit?', a: 'Prosedur yang perlu dibius dikasih anestesi lokal. Biasanya cuma terasa tekanan, bukan sakit.' },
  { q: 'Berapa lama pasang behel?', a: 'Pemasangan 1-2 jam. Kontrol tiap 3-4 minggu. Total 12-24 bulan.' },
  { q: 'Terima BPJS?', a: 'Iya untuk prosedur tertentu. Tanya lewat WhatsApp untuk detailnya.' },
  { q: 'Cara booking?', a: 'WhatsApp 0853-3922-6558. Sebut nama, keluhan, tanggal. Kami konfirmasi dalam 1x24 jam.' },
  { q: 'Ada parkir?', a: 'Ada. Parkir motor dan mobil gratis.' },
]

function HeroSVG() {
  return (
    <svg className="hero-svg" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle decoration */}
      <circle cx="200" cy="150" r="140" fill="var(--blue-100)" opacity="0.5"/>
      <circle cx="200" cy="150" r="100" fill="var(--blue-50)" opacity="0.6"/>
      {/* Tooth icon - main */}
      <g transform="translate(160, 80)">
        <path d="M40 0C20 0 0 15 0 40v30c0 15 8 25 15 30 7 5 12 12 12 20v20c0 8 6 14 13 14h14c7 0 13-6 13-14v-20c0-8 5-15 12-20 7-5 15-15 15-30V40c0-25-20-40-40-40z" 
              fill="white" stroke="var(--blue-400)" strokeWidth="2.5"/>
        <path d="M25 35c0-8 7-15 15-15s15 7 15 15" stroke="var(--blue-200)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M25 50c0-8 7-15 15-15s15 7 15 15" stroke="var(--blue-200)" strokeWidth="2" strokeLinecap="round"/>
      </g>
      {/* Minor decorative icons */}
      <g transform="translate(120, 60)" opacity="0.3">
        <circle cx="0" cy="0" r="4" fill="var(--blue-400)"/>
      </g>
      <g transform="translate(280, 55)" opacity="0.3">
        <circle cx="0" cy="0" r="3" fill="var(--blue-400)"/>
      </g>
      <g transform="translate(100, 230)" opacity="0.25">
        <circle cx="0" cy="0" r="5" fill="var(--blue-400)"/>
      </g>
      <g transform="translate(290, 240)" opacity="0.25">
        <circle cx="0" cy="0" r="4" fill="var(--blue-400)"/>
      </g>
      {/* Cross/plus signs */}
      <g transform="translate(95, 130)" opacity="0.2">
        <path d="M-4 0h8M0-4v8" stroke="var(--blue-500)" strokeWidth="2"/>
      </g>
      <g transform="translate(305, 170)" opacity="0.2">
        <path d="M-3 0h6M0-3v6" stroke="var(--blue-500)" strokeWidth="2"/>
      </g>
    </svg>
  )
}

function ClinicSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="about-img-wrap">
      {/* Building */}
      <rect x="100" y="80" width="200" height="180" rx="8" fill="white" stroke="var(--blue-200)" strokeWidth="2"/>
      {/* Roof */}
      <path d="M80 100L200 50L320 100" stroke="var(--blue-300)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Door */}
      <rect x="175" y="180" width="50" height="80" rx="4" fill="var(--blue-50)" stroke="var(--blue-200)" strokeWidth="1.5"/>
      <circle cx="215" cy="220" r="3" fill="var(--blue-300)"/>
      {/* Windows */}
      <rect x="120" y="115" width="35" height="35" rx="3" fill="var(--blue-50)" stroke="var(--blue-200)" strokeWidth="1.5"/>
      <line x1="137.5" y1="115" x2="137.5" y2="150" stroke="var(--blue-200)" strokeWidth="1"/>
      <line x1="120" y1="132.5" x2="155" y2="132.5" stroke="var(--blue-200)" strokeWidth="1"/>
      <rect x="245" y="115" width="35" height="35" rx="3" fill="var(--blue-50)" stroke="var(--blue-200)" strokeWidth="1.5"/>
      <line x1="262.5" y1="115" x2="262.5" y2="150" stroke="var(--blue-200)" strokeWidth="1"/>
      <line x1="245" y1="132.5" x2="280" y2="132.5" stroke="var(--blue-200)" strokeWidth="1"/>
      {/* Cross sign */}
      <g transform="translate(200, 85)">
        <rect x="-14" y="-4" width="28" height="8" rx="2" fill="var(--blue-400)"/>
        <rect x="-4" y="-14" width="8" height="28" rx="2" fill="var(--blue-400)"/>
      </g>
      {/* Ground line */}
      <line x1="80" y1="260" x2="320" y2="260" stroke="var(--blue-100)" strokeWidth="2"/>
    </svg>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sections = [
    { name: 'Layanan', id: 'layanan' },
    { name: 'Tentang', id: 'tentang' },
    { name: 'Lokasi', id: 'lokasi' },
    { name: 'FAQ', id: 'faq' },
  ]

  const scrollTo = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Header */}
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="logo">
            <span className="logo-icon">S</span>
            Seurii Dental
          </a>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? '✕' : '☰'}
          </button>
          <nav>
            <ul className={`nav-links${mobileOpen ? ' open' : ''}`}>
              {sections.map(s => (
                <li key={s.id}><a href={`#${s.id}`} onClick={(e) => { e.preventDefault(); scrollTo(s.id) }}>{s.name}</a></li>
              ))}
              <li><a href={WA_BASE} target="_blank" rel="noopener" className="wa-btn">WhatsApp</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>Klinik Gigi Seurii<br /><span>Bintaro</span></h1>
            <p>Perawatan gigi umum dan spesialis. Dokter gigi berpengalaman, alat steril, harga transparan. Konsultasi gratis.</p>
            <div className="hero-actions">
              <a href={WA_BASE} target="_blank" rel="noopener" className="btn-primary">Booking via WhatsApp</a>
              <a href="#layanan" onClick={(e) => { e.preventDefault(); scrollTo('layanan') }} className="btn-outline">Lihat Layanan</a>
            </div>
          </div>
          <div className="hero-image">
            <HeroSVG />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="layanan">
        <div className="container">
          <h2 className="section-title">Layanan</h2>
          <div className="services-grid">
            {services.map(s => (
              <div className="service-card" key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section-alt" id="tentang">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              <ClinicSVG />
            </div>
            <div className="about-content">
              <h2>Tentang</h2>
              <p>Seurii Dental buka sejak 2014 di Bintaro. Pasien dari Bintaro, BSD, Serpong, dan Jakarta Selatan.</p>
              <ul className="feature-list">
                <li>Terdaftar di Kementerian Kesehatan RI</li>
                <li>X-Ray panoramic dan CBCT</li>
                <li>Sterilisasi alat standar rumah sakit</li>
                <li>Bahan impor dengan garansi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Booking */}
      <section className="section" id="lokasi">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Kontak & Alamat</h3>
              <div className="contact-detail">
                <div className="contact-detail-icon">A</div>
                <div className="contact-detail-text">
                  <strong>Alamat</strong>
                  <span>Ruko Bintaro Jaya X9 Blok A No. 5, Bintaro, Tangerang Selatan 15224</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">T</div>
                <div className="contact-detail-text">
                  <strong>Telepon / WhatsApp</strong>
                  <span>0853-3922-6558</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">E</div>
                <div className="contact-detail-text">
                  <strong>Email</strong>
                  <span>info@seurii-dental.com</span>
                </div>
              </div>
              <div className="contact-hours">
                <h4>Jam Operasional</h4>
                <div className="hours-row"><span className="hours-day">Senin - Jumat</span><span className="hours-time">08.00 - 20.00</span></div>
                <div className="hours-row"><span className="hours-day">Sabtu</span><span className="hours-time">08.00 - 18.00</span></div>
                <div className="hours-row"><span className="hours-day">Minggu & Libur</span><span className="hours-time">Libur</span></div>
              </div>
              <div className="map-placeholder" style={{ marginTop: '1.5rem' }}>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--slate-600)' }}>Google Maps</p>
                <p style={{ fontSize: '0.875rem' }}>Ruko Bintaro Jaya X9 Blok A No. 5</p>
              </div>
            </div>
            <div className="booking-form">
              <h3>Booking Janji Temu</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', marginBottom: '1.5rem' }}>Isi form. Kami konfirmasi via WhatsApp dalam 1x24 jam.</p>
              <div className="form-grid">
                <div className="form-group">
                  <label>Nama</label>
                  <input type="text" placeholder="Nama lengkap" />
                </div>
                <div className="form-group">
                  <label>No. WhatsApp</label>
                  <input type="tel" placeholder="08xxx" />
                </div>
                <div className="form-group">
                  <label>Layanan</label>
                  <select>
                    <option value="">Pilih...</option>
                    {services.map(s => <option key={s.name}>{s.name}</option>)}
                    <option>Konsultasi</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tanggal</label>
                  <input type="date" />
                </div>
                <div className="form-group full-width">
                  <label>Catatan</label>
                  <textarea placeholder="Keluhan atau info lain" />
                </div>
                <div className="form-group full-width">
                  <a href={WA_BASE} target="_blank" rel="noopener" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                    Kirim via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <h2 className="section-title">Pertanyaan Umum</h2>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={i}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Hubungi Seurii Dental</h2>
          <p>Konsultasi gratis. Booking lewat WhatsApp atau telepon.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href={WA_BASE} target="_blank" rel="noopener" className="btn-primary">Chat WhatsApp</a>
            <a href="tel:085339226558" className="btn-outline">0853-3922-6558</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">S</span>
                Seurii Dental
              </div>
              <p style={{ color: 'var(--slate-400)', fontSize: '0.875rem' }}>
                Klinik gigi di Bintaro, Tangerang Selatan.
              </p>
            </div>
            <div className="footer-col">
              <h4>Layanan</h4>
              <ul>
                {services.slice(0, 4).map(s => <li key={s.name}><a href="#layanan">{s.name}</a></li>)}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Jam</h4>
              <ul>
                <li style={{ fontSize: '0.875rem', color: 'var(--slate-400)' }}>Sen-Jum: 08.00-20.00</li>
                <li style={{ fontSize: '0.875rem', color: 'var(--slate-400)' }}>Sabtu: 08.00-18.00</li>
                <li style={{ fontSize: '0.875rem', color: 'var(--slate-400)' }}>Minggu: Libur</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Kontak</h4>
              <ul>
                <li><a href={WA_BASE} rel="noopener">WhatsApp</a></li>
                <li><a href="tel:085339226558">0853-3922-6558</a></li>
                <li><a href="mailto:info@seurii-dental.com">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 Seurii Dental, Bintaro</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <a href={WA_BASE} target="_blank" rel="noopener" className="wa-float" aria-label="WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  )
}
