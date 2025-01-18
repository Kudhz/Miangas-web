import React from 'react';
import { useEffect } from 'react';

const IntroSec = () => {
    return(
            <section id="intro">
                <div className="intro-content">
                    <h2>Selamat Datang di Portal Bandar Udara<span><br/><b>MIANGAS</b></span></h2>
                    <div>
                        <a href="#about" className="btn-get-started scrollto">Tentang Kami</a>
                        <a href="#section-new" className="btn-get-started scrollto">Jadwal Penerbangan</a>
                        <a href="#contact" className="btn-get-started scrollto">Hubungi Kami</a>
                    </div>
                </div>
                <div id="intro-carousel" className="owl-carousel" >
                    <div className="item" style={{ backgroundImage: "url('/img/intro-carousel/2.png')" }}></div>
                    <div className="item" style={{ backgroundImage: "url('/img/intro-carousel/1.png')" }}></div>
                </div>
            </section>
        
    );
}

export default IntroSec;
