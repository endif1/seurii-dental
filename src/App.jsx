import { useState, useEffect } from 'react'

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
  { q: 'Apakah konsultasi di Seurii Dental berbayar?', a: 'Tidak. Konsultasi pertama gratis. Dokter periksa kondisi gigi, jelaskan opsi perawatan, dan kasih estimasi biaya. Tidak ada kewajiban.' },
  { q: 'Apakah perawatan gigi sakit?', a: 'Untuk prosedur yang perlu dibius, dokter kasih anestesi lokal. Yang terasa biasanya cuma tekanan, bukan sakit.' },
  { q: 'Berapa lama pasang behel?', a: 'Pemasangan sekitar 1-2 jam. Kontrol rutin tiap 3-4 minggu. Total perawatan 12-24 bulan tergantung kondisi gigi.' },
  { q: 'Apakah Seurii Dental terima BPJS?', a: 'Iya, untuk prosedur tertentu. Tanya lewat WhatsApp untuk detailnya.' },
  { q: 'Gimana cara booking?', a: 'Lewat WhatsApp 0853-3922-6558. Sebutkan nama, keluhan, dan hari yang diinginkan. Kami konfirmasi jadwal dalam 1x24 jam.' },
  { q: 'Ada parkir?', a: 'Ada. Parkir motor dan mobil luas dan gratis.' },
]

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
            <p>Perawatan gigi umum dan spesialis. Dokter gigi berpengalaman, alat steril, harga transparan. Konsultasi pertama gratis.</p>
            <div className="hero-actions">
              <a href={WA_BASE} target="_blank" rel="noopener" className="btn-primary">Booking via WhatsApp</a>
              <a href="#layanan" onClick={(e) => { e.preventDefault(); scrollTo('layanan') }} className="btn-outline">Lihat Layanan</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-img-placeholder">
              Foto Klinik
            </div>
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
            <div className="about-image">Foto Klinik</div>
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
                  <strong>Telepon</strong>
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
                <p>Google Maps</p>
                <p style={{ fontSize: '0.8125rem' }}>Ruko Bintaro Jaya X9 Blok A No. 5</p>
              </div>
            </div>
            <div className="booking-form">
              <h3>Booking Janji Temu</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', marginBottom: '1.5rem' }}>Isi form di bawah. Kami konfirmasi dalam 1x24 jam lewat WhatsApp.</p>
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
                  <textarea placeholder="Keluhan, riwayat perawatan sebelumnya, atau info lain" />
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
                <li><a href={WA_BASE} target="_blank" rel="noopener">WhatsApp</a></li>
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
        W
      </a>
    </>
  )
}
