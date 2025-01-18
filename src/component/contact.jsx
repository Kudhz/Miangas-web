import React from "react";
import { useEffect } from "react";

const Kontakk = () => {
  return (
    <section id="contact" className="wow fadeIn">
      <div className="container">
        <div className="section-header">
          <h2>Hubungi Kami</h2>
          <p>Berikut Alamat dan Kontak dari Bandar Udara Miangas</p>
        </div>

        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <i className="ion-ios-location-outline"></i>
              <h3>Alamat</h3>
              <address>
                Komp.Bandar Udara Miangas , Provinsi Sulawesi Utara , Kabupaten
                Kepulauan Talaud , Kecamatan Miangas
              </address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+155895548855">522007</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p>
                <a href="/cdn-cgi/l/email-protection#cfa6a1a9a08faab7aea2bfa3aae1aca0a2">
                  <span
                    className="__cf_email__"
                    data-cfemail="e8aa89868c899a89b7a58d8487868f9d89868da89189808787c68b8785"
                  >
                    Miangas_Airport@gmail.com
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0205594932563!2d126.58110547559185!3d5.563970133568258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f109082b54c41d%3A0x4f1410dfb56c9320!2sMiangas%20Airport!5e0!3m2!1sen!2sid!4v1736923379681!5m2!1sen!2sid"
          width="100%"
          height="380"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Kontakk;
