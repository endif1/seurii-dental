import { useState, useEffect } from 'react'

const WA_NUMBER = '6285339226558'
const WA_BASE = `https://wa.me/${WA_NUMBER}`

const services = [
  { icon: '🦷', name: 'Pembersihan Karang Gigi', desc: 'Bersihkan plak dan karang gigi dengan alat ultrasonic modern. Hasil maksimal tanpa rasa sakit.' },
  { icon: '🛠️', name: 'Tambal Gigi', desc: 'Perbaiki gigi berlubang dengan bahan komposit berkualitas tinggi. Warna sesuai gigi asli.' },
  { icon: '🦷', name: 'Cabut Gigi', desc: 'Cabut gigi bermasalah dengan teknik minimal invasive. Proses cepat dan minim trauma.' },
  { icon: '📐', name: 'Behel & Ortodonti', desc: 'Ratakan gigi dengan behel metal, keramik, atau aligner transparan. Konsultasi gratis.' },
  { icon: '✨', name: 'Veneer Gigi', desc: 'Senjukan senyum dengan veneer porselen tipis. Hasil natural, tahan lama hingga 15 tahun.' },
  { icon: '🧬', name: 'Implan Gigi', desc: 'Ganti gigi hilang dengan implan titanium. Solusi permanen untuk senyum sempurna.' },
  { icon: '⚪', name: 'Bleaching Gigi', desc: 'Putihkan gigi 4-8 tingkat lebih cerah dalam 1 sesi. Gel profesional, aman untuk email.' },
  { icon: '👶', name: 'Perawatan Gigi Anak', desc: 'Perawatan gigi anak dengan pendekatan ramah anak. Fissure sealant, topikal fluor, tambal anak.' },
]

const benefits = [
  { icon: '👨‍⚕️', title: 'Dokter Gigi Berpengalaman', desc: 'Tim dokter gigi spesialis dengan pengalaman 10+ tahun di bidangnya.' },
  { icon: '🏥', title: 'Alat Steril & Modern', desc: 'Sterilisasi alat sesuai standar rumah sakit. Setiap pasien pakai alat baru yang tersegel.' },
  { icon: '💰', title: 'Harga Terjangkau', desc: 'Konsultasi gratis. Biaya perawatan transparan tanpa biaya tersembunyi.' },
  { icon: '⏱️', title: 'Tanpa Antri Panjang', desc: 'Booking online, datang tepat waktu, langsung ditangani. Tidak perlu nunggu berjam-jam.' },
  { icon: '🤝', title: 'Pelayanan Ramah', desc: 'Kami memahami rasa cemas pasien. Pendekatan sabar dan penuh pengertian.' },
  { icon: '📍', title: 'Lokasi Strategis', desc: 'Di pusat kota Bintaro, akses mudah dari BSD, Serpong, dan Jakarta Selatan.' },
]

const testimonials = [
  { name: 'Sarah Wijaya', text: 'Pertama kali ke dokter gigi setelah bertahun-tahun takut. Dokter Seurii sabar banget, prosesnya gak sakit sama sekali. Sekarang udah rutin 3 bulan sekali!', rating: 5 },
  { name: 'Bambang Prasetyo', text: 'Pasang behel di sini, hasilnya rapi cepet. 1 tahun udah lepas. Harganya juga masuk akal dibanding tempat lain.', rating: 5 },
  { name: 'Dewi Lestari', text: 'Bleaching gigi di Seurii — hasilnya beda banget! 2 tingkat lebih putih dalam 1 jam. Tempatnya bersih, dokternya ramah.', rating: 5 },
  { name: 'Rudi Hartono', text: 'Implan gigi geraham. Prosesnya lancar, gak terasa sakit. Udah 6 bulan, fungsi ngunyah normal lagi. Recommended!', rating: 5 },
]

const faqs = [
  { q: 'Apakah konsultasi di Klinik Gigi Seurii berbayar?', a: 'Tidak. Konsultasi awal GRATIS untuk semua pasien baru. Dokter akan memeriksa kondisi gigi Anda, menjelaskan opsi perawatan, dan memberikan estimasi biaya tanpa kewajiban.' },
  { q: 'Apakah perawatan gigi sakit?', a: 'Kami menggunakan anestesi lokal (bius) untuk prosedur yang berpotensi menimbulkan ketidaknyamanan. Sebagian besar pasien melaporkan hanya merasakan sedikit tekanan, bukan rasa sakit.' },
  { q: 'Berapa lama waktu pemasangan behel?', a: 'Pemasangan behel umumnya selesai dalam 1-2 jam. Lama perawatan bervariasi 12-24 bulan tergantung kondisi gigi. Kontrol rutin setiap 3-4 minggu.' },
  { q: 'Apakah Klinik Gigi Seurii menerima BPJS?', a: 'Saat ini kami menerima pasien umum dan BPJS untuk prosedur tertentu. Silakan hubungi kami untuk informasi lebih lanjut.' },
  { q: 'Bagaimana cara booking janji temu?', a: 'Anda bisa booking melalui WhatsApp di nomor 0853-3922-6558, atau melalui formulir online di website ini. Kami akan konfirmasi jadwal dalam 1x24 jam.' },
  { q: 'Apakah ada parkir untuk pasien?', a: 'Tersedia area parkir yang luas dan aman untuk motor maupun mobil pasien. Gratis.' },
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

  const sections = ['Layanan', 'Tentang', 'Testimoni', 'Lokasi', 'FAQ']

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
                <li key={s}><a href={`#${s.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(s.toLowerCase()) }}>{s}</a></li>
              ))}
              <li><a href={WA_BASE} target="_blank" rel="noopener" className="wa-btn">💬 WhatsApp</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>Senyuman Sehat,<br /><span>Kepercayaan Kembali</span></h1>
            <p>Klinik Gigi Seurii — perawatan gigi profesional di Bintaro. Ditangani dokter gigi berpengalaman dengan alat modern dan harga terjangkau. Konsultasi gratis!</p>
            <div className="hero-actions">
              <a href={WA_BASE} target="_blank" rel="noopener" className="btn-primary">💬 Booking Via WA</a>
              <a href="#layanan" onClick={(e) => { e.preventDefault(); scrollTo('layanan') }} className="btn-outline">Lihat Layanan</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-img-placeholder">
              🦷
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingTop: 0, marginTop: '-2rem' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Pasien Puas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">12+</div>
              <div className="stat-label">Tahun Pengalaman</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Rating Google ★</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Pasien Kembali</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-alt" id="layanan">
        <div className="container">
          <h2 className="section-title">Layanan Kami</h2>
          <p className="section-subtitle">Dari perawatan dasar hingga prosedur kosmetik — semua ditangani dengan standar tertinggi.</p>
          <div className="services-grid">
            {services.map(s => (
              <div className="service-card" key={s.name}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="tentang">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">🏥</div>
            <div className="about-content">
              <h2>Tentang Klinik Gigi Seurii</h2>
              <p>Klinik Gigi Seurii berdiri sejak 2014 dan telah melayani ribuan pasien di area Bintaro, BSD, dan Jakarta Selatan. Kami berkomitmen memberikan perawatan gigi berkualitas dengan harga yang terjangkau.</p>
              <p>Didukung tim dokter gigi umum dan spesialis, kami menangani berbagai kasus mulai dari pembersihan karang gigi rutin hingga prosedur kompleks seperti implan dan bedah mulut.</p>
              <ul className="feature-list">
                <li>Terdaftar resmi di Kementerian Kesehatan RI</li>
                <li>Alat diagnostik digital (X-Ray panoramic, CBCT)</li>
                <li>Teknik anestesi modern — minim rasa sakit</li>
                <li>Bahan berkualitas impor dengan garansi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mengapa Kami */}
      <section className="section section-alt" id="mengapa">
        <div className="container">
          <h2 className="section-title">Mengapa Memilih Kami?</h2>
          <p className="section-subtitle">Kami berbeda karena kami peduli. Bukan cuma gigi yang sehat, tapi pengalaman yang nyaman.</p>
          <div className="benefits-grid">
            {benefits.map(b => (
              <div className="benefit-card" key={b.title}>
                <div className="benefit-icon">{b.icon}</div>
                <div className="benefit-text">
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" id="testimoni">
        <div className="container">
          <h2 className="section-title">Apa Kata Pasien?</h2>
          <p className="section-subtitle">Kepercayaan pasien adalah kebanggaan kami. Ini beberapa cerita dari mereka.</p>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div className="testimonial-card" key={t.name}>
                <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">{t.name}</div>
                <div className="testimonial-role">Pasien Klinik Gigi Seurii</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Galeri</h2>
          <p className="section-subtitle">Beberapa hasil perawatan pasien kami.</p>
          <div className="gallery-grid">
            {[1,2,3,4,5,6].map(i => (
              <div className="gallery-item" key={i}>
                {i % 2 === 0 ? 'Sebelum → Sesudah' : 'Foto Klinik'}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Booking */}
      <section className="section" id="lokasi">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Kunjungi Klinik Kami</h3>
              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <div className="contact-detail-text">
                  <strong>Alamat</strong>
                  <span>Ruko Bintaro Jaya X9 Blok A No. 5, Bintaro, Tangerang Selatan 15224</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📞</div>
                <div className="contact-detail-text">
                  <strong>Telepon</strong>
                  <span>0853-3922-6558</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">✉️</div>
                <div className="contact-detail-text">
                  <strong>Email</strong>
                  <span>info@seurii-dental.com</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">🕐</div>
                <div className="contact-detail-text">
                  <strong>Jam Operasional</strong>
                  <span>Senin - Sabtu: 08.00 - 20.00</span>
                </div>
              </div>
              <div className="contact-hours">
                <h4>🕐 Jam Operasional Detail</h4>
                <div className="hours-row"><span className="hours-day">Senin - Jumat</span><span className="hours-time">08.00 - 20.00</span></div>
                <div className="hours-row"><span className="hours-day">Sabtu</span><span className="hours-time">08.00 - 18.00</span></div>
                <div className="hours-row"><span className="hours-day">Minggu & Libur Nasional</span><span className="hours-time">Libur</span></div>
              </div>
            </div>
            <div className="booking-form">
              <h3>📅 Booking Janji Temu</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', marginBottom: '1.5rem' }}>Isi form di bawah, kami akan konfirmasi dalam 1x24 jam.</p>
              <div className="form-grid">
                <div className="form-group">
                  <label>Nama Lengkap</label>
                  <input type="text" placeholder="Masukkan nama" />
                </div>
                <div className="form-group">
                  <label>No. WhatsApp</label>
                  <input type="tel" placeholder="08xxxx" />
                </div>
                <div className="form-group">
                  <label>Pilih Layanan</label>
                  <select>
                    <option value="">Pilih layanan...</option>
                    {services.map(s => <option key={s.name}>{s.name}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Tanggal</label>
                  <input type="date" />
                </div>
                <div className="form-group full-width">
                  <label>Pesan Tambahan</label>
                  <textarea placeholder="Misal: pernah tambal gigi sebelumnya, atau kondisi khusus..." />
                </div>
                <div className="form-group full-width">
                  <a href={WA_BASE} target="_blank" rel="noopener" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                    💬 Kirim via WhatsApp
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
          <p className="section-subtitle">Jawaban untuk pertanyaan yang sering diajukan pasien.</p>
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
          <h2>Siap Untuk Senyum Baru?</h2>
          <p>Jangan tunda perawatan gigi Anda. Hubungi kami sekarang dan dapatkan konsultasi gratis!</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href={WA_BASE} target="_blank" rel="noopener" className="btn-primary">💬 Chat WhatsApp</a>
            <a href="tel:085339226558" className="btn-outline">📞 Telepon Sekarang</a>
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
              <p>Klinik Gigi terpercaya di Bintaro. Perawatan gigi profesional dengan hati.</p>
            </div>
            <div className="footer-col">
              <h4>Layanan</h4>
              <ul>
                {services.slice(0, 4).map(s => <li key={s.name}><a href="#layanan">{s.name}</a></li>)}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Jam Kerja</h4>
              <ul>
                <li style={{ fontSize: '0.875rem' }}>Sen-Jum: 08.00-20.00</li>
                <li style={{ fontSize: '0.875rem' }}>Sabtu: 08.00-18.00</li>
                <li style={{ fontSize: '0.875rem' }}>Minggu: Libur</li>
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
            <span>© 2026 Klinik Gigi Seurii Bintaro. All rights reserved.</span>
            <span>Made with ❤️</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <a href={WA_BASE} target="_blank" rel="noopener" className="wa-float" aria-label="WhatsApp">
        💬
      </a>
    </>
  )
}
