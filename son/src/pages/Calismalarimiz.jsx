import React from 'react'
import { useState } from "react";
function Calismalarimiz() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };
  return (
    <>
      <div
        className="container-fluid p-5  text-white text-center"
        style={{ backgroundColor: "#669999" }}
      >
        <h1>Biz Meram İçin Çalışıyoruz</h1>
        <p>
          Mevlana'nın "Cömertlik ve yardım etmede akarsu gibi ol." öğüdünü
          yerine getirmeye çabalıyoruz.
        </p>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <h3>Yol yapım ve genişletme çalışmalarımız için tıklayın:</h3>
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
              style={{ width: 1300, height: 400 }}
            >
              <div className="carousel-inner">
                <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img
                    src="https://www.karamanhabercisi.com/d/news/36560.jpg"
                    alt="..."
                    style={{ width: 1300, height: 400 }}
                  />
                </div>
                <div className={`carousel-item ${index === 1 ? "active" : ""}`}>
                  <img
                    src="https://www.konyaolay.com/images/haberler/2023/08/meram-da-altyapi-ve-asfalt-calismalari-hiz-kesmiyor-8598.jpg"
                    className="d-block w-100"
                    alt="..."
                    style={{ width: 1300, height: 400 }}
                  />
                </div>
                <div className={`carousel-item ${index === 2 ? "active" : ""}`}>
                  <img
                    src="https://basakgazetesi.com/resimler/2021-6/9/459771712759068.jpg"
                    className="d-block w-100"
                    alt="..."
                    style={{ width: 1300, height: 400 }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                onClick={handlePrev}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                onClick={handleNext}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <h6>
            Meram Belediyesi Hizmet, yatırım, proje ve yeniliklerle dolu bir
            yılı daha geride bıraktı
          </h6>
          <p>
            Belediye başkanı Mustafa Kavuş, samimiyet ve gayretle hizmet
            üretmeye devam edeceklerini söyledi. 2022 yılı Meram için hizmette
            zirveyi yaşadığı bir yıl oldu. Bu dönemde, imar çalışmalarından
            kentsel dönüşüme, sosyal ve kültürel etkinliklerden yeni tesis
            hamlelerine, altyapı ve asfalt yatırımlarından yeniliklere kadar pek
            çok yatırıma sahne olan Meram, adeta bir şantiye görüntüsüne
            büründü.
          </p>
          <div className="col-sm-12">
            <h3>Yatırım, proje ve yenilik çalışmalarımız için tıklayın:</h3>
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
              style={{ width: 1300, height: 400 }}
            >
              <div className="carousel-inner">
                <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img
                    src="https://cdn.bbnhaber.com.tr/other/2024/01/15/7.jpg"
                    alt="..."
                    style={{ width: 1300, height: 400 }}
                  />
                </div>
                <div className={`carousel-item ${index === 1 ? "active" : ""}`}>
                  <img
                    src="https://www.konhaber.com/sahifeler/upload/2023/01/01/1672560607.jpg"
                    className="d-block w-100"
                    alt="..."
                    style={{ width: 1300, height: 400 }}
                  />
                </div>
                <div className={`carousel-item ${index === 2 ? "active" : ""}`}>
                  <img
                    src="https://www.konyakent.com/images/haberler/2023/01/meram-hizmet-yatirim-ve-projelerle-dolu-bir-yili-daha-geride-birakti-7372.jpg"
                    className="d-block w-100"
                    alt="..."
                    style={{ width: 1300, height: 400 }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                onClick={handlePrev}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                onClick={handleNext}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <h6>Meram Belediyesi asfalt çalışmalarını sürdürüyor</h6>
            <p>
              Konya’nın merkez Meram İlçe Belediyesi, ilçe genelinde yürüttüğü
              asfaltlama ve altyapı çalışmalarına, sezonun sonuna yaklaşılırken
              ara vermeden devam ediyor.Meram Belediyesi Fen İşleri Müdürlüğü
              ekipleri, bu çerçevede Çayırbağı Caddesinde başlattığı asfalt
              yenileme çalışmalarını tamamladı. Caddenin yaklaşık bir
              kilometrelik kısmını yenileyen ekipler, 3 bin 794 metrekare parke,
              bin 942 metre bordür ve 885 metre oluk döşeyerek mahalleyi rahat,
              konforlu ve modern ulaşıma kavuşturdu.
            </p>
          </div>
          <div className="col-sm-12">
            <h3>Eğitim alanındaki çalışmalarımız için tıklayın:</h3>
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
              style={{ width: 1300, height: 400 }}
            >
              <div className="carousel-inner">
                <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img
                    src="https://ayseihsan.meb.k12.tr/meb_iys_dosyalar/42/26/745937/resimler/2023_06/k_20112813_WhatsApp-Image-2023-06-09-at-19.05.26.jpg"
                    alt="..."
                    style={{ width: 1300, height: 400 }}
                  />
                </div>
                <div className={`carousel-item ${index === 1 ? "active" : ""}`}>
                  <img
                    src="https://www.yenikonya.com.tr/uploads/2023/11/09/1699527313.JPG"
                    className="d-block w-100"
                    alt="..."
                    style={{ width: 1300, height: 400 }}
                  />
                </div>
                <div className={`carousel-item ${index === 2 ? "active" : ""}`}>
                  <img
                    src="https://www.meram.bel.tr/upload/medya/6_165.jpg"
                    className="d-block w-100"
                    alt="..."
                    style={{ width: 1300, height: 400 }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                onClick={handlePrev}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                onClick={handleNext}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <h6>Meram Belediyesi yeni eğitim yılı için yine seferber</h6>
            <p>
              Meram Belediyesine bağlı ekipler, 2023-2024 Eğitim Öğretim yılına
              hazırlık amacıyla ilçe genelinde bulunan okulları ve bahçelerini
              temizliyor, gereksinim duyan okullarda da tamirat, tadilat ve boya
              işlemlerini gerçekleştiriyor. Okulların temizlik işlemleri ile ve
              acil çözülmesi gereken eksikleri için hummalı bir çalışma
              yürütülüyor.
            </p>
          </div>
        </div>
        <img
          src="https://www.meram.bel.tr/assets/img/footerlogo.svg"
          style={{ width: 500, height: 200, align: "center" }}
        />
      </div>
    </>
  );
}

export default Calismalarimiz