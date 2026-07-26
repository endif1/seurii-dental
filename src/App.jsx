import { useState, useEffect } from 'react'

const WA = '6285339226558'
const WA_BASE = `https://wa.me/${WA}`
const TEL = '085339226558'

const services = [
  ['Pemeriksaan Gigi Umum', 'Pembersihan karang gigi, tambal, cabut, dan perawatan gigi rutin lainnya. Ditangani dokter gigi berpengalaman.', 'general'],
  ['Perawatan Gigi Anak', 'Tambal anak, fissure sealant, topikal fluor, dan pencabutan gigi susu dengan pendekatan ramah anak.', 'child'],
  ['Behel & Ortodonti', 'Perawatan meratakan gigi dengan behel metal, keramik, atau aligner transparan.', 'general'],
  ['Implan & Veneer', 'Penggantian gigi hilang dengan implan titanium. Veneer porselen untuk senyum lebih percaya diri.', 'general'],
  ['Bleaching Gigi', 'Pemutihan gigi 4-8 tingkat lebih cerah dalam 1 sesi. Aman untuk email gigi.', 'kb'],
  ['Konsultasi & Rujukan', 'Konsultasi gratis untuk semua keluhan gigi. Rujukan ke spesialis jika diperlukan.', 'antenatal'],
]

const values = [
  ['🧑‍⚕️', 'Dokter & Bidan Berpengalaman', 'Praktik sejak 2014 dengan ribuan pasien dari Bintaro, BSD, dan Jakarta Selatan.'],
  ['🏥', 'Steril & Modern', 'Sterilisasi alat standar rumah sakit. X-Ray panoramic dan CBCT digital.'],
  ['💰', 'Harga Transparan', 'Konsultasi gratis. Biaya dijelaskan di awal tanpa biaya tersembunyi. BPJS berlaku.'],
]

const steps = [
  ['1', 'Hubungi Kami', 'Chat atau telepon untuk konsultasi awal. Gratis.'],
  ['2', 'Booking Jadwal', 'Tentukan hari dan jam yang sesuai.'],
  ['3', 'Datang & Periksa', 'Datang tepat waktu, langsung ditangani.'],
]

const faqs = [
  ['Konsultasi gratis?', 'Iya. Dokter periksa kondisi gigi, jelaskan opsi perawatan, dan kasih estimasi biaya. Tidak ada kewajiban.'],
  ['Apakah perawatan sakit?', 'Untuk prosedur yang perlu dibius, dokter kasih anestesi lokal. Yang terasa biasanya cuma tekanan, bukan sakit.'],
  ['Berapa lama pasang behel?', 'Pemasangan 1-2 jam. Kontrol rutin tiap 3-4 minggu. Total perawatan 12-24 bulan.'],
  ['Terima BPJS?', 'Iya untuk prosedur tertentu. Tanya lewat WhatsApp untuk detailnya.'],
  ['Bagaimana cara booking?', 'WhatsApp 0853-3922-6558. Sebutkan nama, keluhan, dan hari yang diinginkan. Kami konfirmasi dalam 1x24 jam.'],
  ['Ada parkir?', 'Ada. Parkir motor dan mobil luas dan gratis.'],
]

export default function App() {
  const [menu, setMenu] = useState(false)
  const [faqIdx, setFaqIdx] = useState(null)

  const go = (id) => {
    setMenu(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <a href="#" className="logo"><span>Seurii</span> Dental</a>
          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">
            {menu ? '✕' : '☰'}
          </button>
          <div className={`nav${menu ? ' open' : ''}`}>
            {['Layanan', 'Tentang', 'Lokasi', 'FAQ'].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} onClick={(e) => { e.preventDefault(); go(s.toLowerCase()) }}>{s}</a>
            ))}
            <a href={WA_BASE} target="_blank" rel="noopener" className="nav-wa">Konsultasi WhatsApp</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-grid">
            <div>
              <h1>Klinik Gigi di Bintaro<br />sejak <span>2014</span></h1>
              <p>Seurii Dental — perawatan gigi lengkap untuk seluruh keluarga. Dokter gigi berpengalaman, alat steril, harga jelas. Konsultasi gratis.</p>
              <div className="hero-actions">
                <a href={WA_BASE} target="_blank" rel="noopener" className="btn-primary">Konsultasi via WhatsApp</a>
                <a href="#layanan" className="btn-ghost" onClick={(e) => { e.preventDefault(); go('layanan') }}>Lihat Layanan →</a>
              </div>
            </div>
            <div className="hero-img">
              <div className="hero-img-inner-2"></div>
              <div className="hero-img-inner"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="layanan">
        <div className="container">
          <div className="section-label">Layanan</div>
          <h2 className="section-title">Perawatan gigi lengkap untuk Anda dan keluarga</h2>
          <p className="section-sub">Dari pembersihan rutin hingga prosedur spesialis — semua dalam satu klinik yang nyaman.</p>
          <div className="services-grid">
            {services.map(([name, desc, imgClass]) => (
              <div className="service-card" key={name}>
                <div className={`card-img ${imgClass}`}></div>
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--warm-50)' }}>
        <div className="container">
          <div className="section-label">Mengapa Seurii</div>
          <h2 className="section-title">Klinik gigi yang nyaman dan terpercaya</h2>
          <div className="values-grid">
            {values.map(([icon, title, desc]) => (
              <div className="value-item" key={title}>
                <div className="value-icon">{icon}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="tentang">
        <div className="container">
          <div className="section-label">Cara Booking</div>
          <h2 className="section-title">Mudah dari awal sampai akhir</h2>
          <div className="steps-grid">
            {steps.map(([num, title, desc]) => (
              <div className="step" key={num}>
                <div className="step-num">{num}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location + Booking */}
      <section className="section" style={{ background: 'var(--warm-50)' }} id="lokasi">
        <div className="container">
          <div className="section-label">Kontak</div>
          <h2 className="section-title">Hubungi Seurii Dental</h2>
          <div className="contact-grid" style={{ marginTop: '2rem' }}>
            <div>
              <div className="info-label">Alamat</div>
              <div className="info-value">Ruko Bintaro Jaya X9 Blok A No. 5<br /><span class="small">Bintaro, Tangerang Selatan 15224</span></div>

              <div className="info-label">Telepon / WhatsApp</div>
              <div className="info-value"><a href={WA_BASE} target="_blank" rel="noopener">{TEL}</a></div>

              <div className="info-label">Email</div>
              <div className="info-value"><a href="mailto:info@seurii-dental.com">info@seurii-dental.com</a></div>

              <div className="info-label">Jam Buka</div>
              <table className="hours-table">
                <tbody>
                  <tr><td>Senin - Jumat</td><td>08.00 - 20.00</td></tr>
                  <tr><td>Sabtu</td><td>08.00 - 18.00</td></tr>
                  <tr><td>Minggu & Libur</td><td>Libur</td></tr>
                </tbody>
              </table>
            </div>
            <div className="booking-card">
              <h3>Pesan jadwal kunjungan</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', marginBottom: '1.25rem' }}>Isi form di bawah, kami konfirmasi lewat WhatsApp dalam 1x24 jam.</p>
              <div className="form-group">
                <label>Nama lengkap</label>
                <input type="text" placeholder="Nama Anda" />
              </div>
              <div className="form-group">
                <label>Nomor WhatsApp</label>
                <input type="tel" placeholder="08xx xxxx xxxx" />
              </div>
              <div className="form-group">
                <label>Layanan</label>
                <select>
                  <option>Pilih layanan...</option>
                  {services.map(([n]) => <option key={n}>{n}</option>)}
                  <option>Konsultasi</option>
                </select>
              </div>
              <div className="form-group">
                <label>Tanggal (opsional)</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Catatan</label>
                <textarea placeholder="Keluhan atau pertanyaan" />
              </div>
              <a href={WA_BASE} target="_blank" rel="noopener" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.875rem' }}>
                Kirim & Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Pertanyaan umum</h2>
          <div className="faq-list" style={{ maxWidth: '640px' }}>
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

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Jaga kesehatan gigi keluarga bersama Seurii Dental</h2>
          <p>Konsultasi gratis. Booking via WhatsApp atau telepon langsung.</p>
          <div className="hero-actions">
            <a href={WA_BASE} target="_blank" rel="noopener" className="btn-primary">Konsultasi WhatsApp</a>
            <a href="tel:085339226558" className="btn-ghost">{TEL}</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand"><span style={{color:'var(--rose-500)'}}>Seurii</span> Dental</div>
              <p>Klinik gigi di Bintaro, Tangerang Selatan. Perawatan gigi untuk seluruh keluarga sejak 2014.</p>
            </div>
            <div>
              <h5>Layanan</h5>
              <ul>
                {services.slice(0,4).map(([n]) => <li key={n}><a href="#layanan">{n}</a></li>)}
              </ul>
            </div>
            <div>
              <h5>Jam</h5>
              <ul>
                <li style={{ color: 'var(--slate-400)', fontSize: '0.8125rem' }}>Sen-Jum: 08.00-20.00</li>
                <li style={{ color: 'var(--slate-400)', fontSize: '0.8125rem' }}>Sabtu: 08.00-18.00</li>
                <li style={{ color: 'var(--slate-400)', fontSize: '0.8125rem' }}>Minggu: Libur</li>
              </ul>
            </div>
            <div>
              <h5>Kontak</h5>
              <ul>
                <li><a href={WA_BASE} target="_blank" rel="noopener">WhatsApp</a></li>
                <li><a href={`tel:${TEL}`}>{TEL}</a></li>
                <li><a href="mailto:info@seurii-dental.com">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 Seurii Dental, Bintaro</span>
          </div>
        </div>
      </footer>

      {/* WA Float */}
      <a href={WA_BASE} target="_blank" rel="noopener" className="wa-float" aria-label="WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  )
}
