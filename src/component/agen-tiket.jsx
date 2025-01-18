import React from "react";
import { useEffect } from "react";

const Agentiket = () => {
  return (
    <section id="section-new" className="wow fadeIn">
      <div className="container">
        {/* <!-- Header Teks --> */}
        <div className="section-header">
          <h2>Jadwal Penerbangan</h2>
          <br />
          <p>Berikut Jadwal Penerbangan Pesawat Perintis SamAir</p>
        </div>
        {/* <!-- Gambar di bawah teks --> */}
        <div className="image-container">
          {/* <!-- Gambar 1 --> */}
          <div className="portfolio-item wow fadeIn">
            <a href="img/portfolio/1.jpg" className="portfolio-popup">
              <img src="img/portfolio/1.jpg" alt="Logo Jadwal Baru 1"></img>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeIn"></h2>
                </div>
              </div>
            </a>
          </div>
          {/* <!-- Gambar 2 --> */}
          <div className="portfolio-item wow fadeIn">
            <a href="img/portfolio/2.jpg" className="portfolio-popup">
              <img src="img/portfolio/2.jpg" alt="Logo Jadwal Baru 2"></img>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeIn"></h2>
                </div>
              </div>
            </a>
          </div>
          {/* <!-- Gambar 3 --> */}
          <div className="portfolio-item wow fadeIn">
            <a href="img/portfolio/3.jpg" className="portfolio-popup">
              <img src="img/portfolio/3.jpg" alt="Logo Jadwal Baru 3"></img>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeIn"></h2>
                </div>
              </div>
            </a>
          </div>
          {/* <!-- Gambar 4 --> */}
          <div className="portfolio-item wow fadeIn">
            <a href="img/portfolio/4.jpg" className="portfolio-popup">
              <img src="img/portfolio/4.jpg" alt="Logo Jadwal Baru 4"></img>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeIn"></h2>
                </div>
              </div>
            </a>
          </div>
          <div className="portfolio-item wow fadeIn">
            <a href="img/portfolio/5.jpg" className="portfolio-popup">
              <img src="img/portfolio/5.jpg" alt="Logo Jadwal Baru 4"></img>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeIn"></h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Kontak />
    </section>
  );
};

const Kontak = () => {
  return (
    <section id="section-new" className="wow fadeIn">
      <div className="container">
        <div className="section-header">
          <h2>Kontak Agen SamAir</h2>
          <br />
          <p>
            Berikut Detail Kontak & Jam Operasional Untuk Agen Pesawat Perintis
            Sam AIR
          </p>
        </div>
        <div className="image-container">
          <div className="portfolio-item wow fadeIn">
            <a href="img/portfolio/tiketagen.jpg" className="portfolio-popup">
              <img
                src="img/portfolio/tiketagen.jpg"
                alt="Logo Jadwal Baru 1"
              ></img>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeIn"></h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agentiket;
