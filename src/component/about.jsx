import React from "react";
import { useEffect } from "react";

function About() {
  return (
    <section id="about" className="wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 about-img">
            <img
              src="https://akcdn.detik.net.id/community/media/visual/2019/10/03/a21470fa-3f87-417a-ace8-51ed2951ce79.jpeg?w=700&q=90"
              alt=""
            ></img>
          </div>
          <div className="col-lg-6 content">
            <div className="section-header">
              <h2>Detail Miangas Airport</h2>
            </div>
            <ul>
              <li>
                <i className="ion-android-checkmark-circle"></i>Kode ICAO : WAMS
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Kode IATA : IAX
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Nama Bandar
                Udara : Miangas
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Kantor Otoritas
                : OTBAN WILAYAH VIII MANADO
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Status Operasi :
                Umum
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Penggunaan :
                Domestik
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Hierarki : P
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Klasifikasi : 3C
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Kelas : Satpel
                BU
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Pengelola : UPT
                Ditjen Hubud
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Provinsi :
                Sulawesi Utara
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Kabupaten / Kota
                : Kabupaten Kepulauan Talaud
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Kecamatan :
                Miangas
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Kelurahan :
                Miangas
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Alamat Bandar
                Udara : Komp.Bandar Udara Miangas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
