import React from "react";
import { useEffect } from "react";
import IntroSec from "./intro";
import About from "./about";
import Services from "./services";
import Agentiket from "./agen-tiket";
import Team from "./team";
import Kontakk from "./contact";
import Footer from "./footer";
import Button from "./button";

const App = () => {
  useEffect(() => {
    const themeSwitch = document.getElementById("theme-switch");
    const body = document.body;
    const sunIcon = themeSwitch.querySelectorAll("svg")[0]; // Ikon matahari
    const moonIcon = themeSwitch.querySelectorAll("svg")[1]; // Ikon bulan

    // Cek apakah mode dark/light sudah ada di localStorage
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      sunIcon.style.display = "none"; // Sembunyikan ikon matahari
      moonIcon.style.display = "block"; // Tampilkan ikon bulan
    } else {
      body.classList.add("light-mode");
      sunIcon.style.display = "block"; // Tampilkan ikon matahari
      moonIcon.style.display = "none"; // Sembunyikan ikon bulan
    }

    // Fungsi untuk toggle mode
    const toggleTheme = () => {
      if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
        localStorage.setItem("theme", "dark"); // Simpan preferensi mode di localStorage
      } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
        localStorage.setItem("theme", "light"); // Simpan preferensi mode di localStorage
      }
    };

    themeSwitch.addEventListener("click", toggleTheme);

    return () => {
      themeSwitch.removeEventListener("click", toggleTheme);
    };
  }, []);
  return (
    <div id="body" className="dark-mode">
      <section id="topbar" className="d-none d-lg-block">
        <div className="container clearfix">
          <div className="contact-info float-left">
            <i className="fa fa-envelope-o"></i>{" "}
            <a href="/cdn-cgi/l/email-protection#2b4844455f4a485f6b4e534a465b474e05484446">
              <span
                className="__cf_email__"
                data-cfemail="9cdefdf2f8fdeefdc3d1f9f0f3f2fbe9fdf2f9dce5fdf4f3f3b2fff3f1"
              >
                Miangas_Airport@gmail.com
              </span>
            </a>
            <i className="fa fa-phone"></i> 522 007
          </div>
          <div className="social-links float-right">
            <a href="#" className="twitter">
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/MelonguaneAirport/?locale=id_ID"
              className="facebook"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/melonguane_airport/"
              className="instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
      <header id="header">
        <div className="container">
          <div id="logo" className="pull-left">
            <h1>
              <a href="#body" className="scrollto">
                {" "}
                <img src="img/favicon.ico" alt="Logo" className="logo" />{" "}
                Miangas Airport
              </a>
            </h1>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <a href="#body">Beranda</a>
              </li>
              <li>
                <a href="#about">Tentang</a>
              </li>
              <li>
                <a href="#services">Rute Penerbangan</a>
              </li>
              <li>
                <a href="#section-new">Jadwal Penerbangan</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#contact">Kontak</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <IntroSec />
      <About />
      <Services />
      <Agentiket />
      <Team />
      <Kontakk />
      <Footer />
      {/* <Button /> */}
      <button id="theme-switch">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
        </svg>
      </button>

      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
};

export default App;
