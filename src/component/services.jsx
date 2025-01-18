import React from "react";
import { useEffect } from "react";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h2>Rute Penerbangan</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3> Keberangkatan</h3>
            <div className="box wow fadeIn">
              <div className="icon">
                <i className="fa fa-map"></i>
              </div>
              <h4 className="title">MIANGAS - NAHA</h4>
              <p className="description">
                Rute dari Bandar Udara Miangas ke Bandar Udara Naha ( Tahuna )
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <h3>
              <br />
            </h3>
            <div className="box wow fadeIn">
              <div className="icon">
                <i className="fa fa-map"></i>
              </div>
              <h4 className="title">MIANGAS - MELONGUANE </h4>
              <p className="description">
                Rute Dari Bandar Udara Miangas ke Bandar Udara Melonguane
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <h3>Kedatangan</h3>
            <div className="box wow fadeIn" data-wow-delay="0.2s">
              <div className="icon">
                <i className="fa fa-map"></i>
              </div>
              <h4 className="title">NAHA - MIANGAS</h4>
              <p className="description">
                Rute Dari Bandar Udara Naha ( Tahuna ) ke Bandar Udara Miangas
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <h3>
              <br />
            </h3>
            <div className="box wow fadeIn" data-wow-delay="0.2s">
              <div className="icon">
                <i className="fa fa-map"></i>
              </div>
              <h4 className="title">MELONGUANE - MIANGAS</h4>
              <p className="description">
                Rute Dari Bandar Udara Melonguane ke Bandar Udara Miangas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
