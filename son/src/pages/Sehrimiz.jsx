import React from "react";
import "./pages.css";
import { useState } from "react";

function Sehrimiz() {
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
        <h1>Bu güzellikler hepimizin</h1>
        <p>
          Mevlana "Ya olduğun gibi görün ya göründüğün gibi ol." diyor. Biz
          olduğumuz gibiyiz işte bazı güzelliklerimiz:
        </p>
      </div>
      <br />
      <div className="ornek">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ width: 1300, height: 400 }}
        >
          <div className="carousel-inner">
            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src="https://cdn.saraymedya.com/news/25057.jpg"
                alt="..."
                style={{ width: 1300, height: 400 }}
              />
            </div>
            <div className={`carousel-item ${index === 1 ? "active" : ""}`}>
              <img
                src="https://gezicini.com/wp-content/uploads/2020/10/meramderesi.jpg"
                className="d-block w-100"
                alt="..."
                style={{ width: 1300, height: 400 }}
              />
            </div>
            <div className={`carousel-item ${index === 2 ? "active" : ""}`}>
              <img
                src="https://konyaekoturizm.com/admin/dimg/rotak/620378583033b.jpg"
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
        <h5>Meram Dere Köprüsü : Konya’da Saklı Cennet</h5>
        <p>
          Meram Dere Köprüsü, eşsiz bir güzelliktir. İçerisinde tarihi köprüler
          türbeler bulunduran, çokça seyahatnamede adı geçmiş dünya çapında
          önemli bir mesire alanıdır. Çevresini saran ulu ağaçların arasında
          akan deresi ile gizli bir cennettir. Uçsuz bucaksız akan dere etrafına
          kurulmuş mesire alanı ile huzur ve rahatlık verir insana
        </p>
        <p>
          İçerisinde bulunan yemyeşil ortamı ile temiz bir havası bulunuyor.
          Şehrin gürültüsünden yorgunluğundan kaçıp gelmelik bir mesire alanı.
          Sadece doğayı içinde barındırmakla kalmayıp Selçuklular döneminden
          kalma tarihi mekanlar barındırıyor. Bu tarihi alana örnek olarak Meram
          hamamı bulunuyor. Yine derenin hemen üzerine yapılmış olan taş köprü
          ise çok ayrı bir güzellik
        </p>
        <hr />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="ornek2">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ width: 1300, height: 400 }}
        >
          <div className="carousel-inner">
            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src="https://www.yenimeram.com.tr/wp-content/uploads/2023/07/25/meram-belediyesi-tarafindan-destinasyonu-tamamlanan-kizlar-kayasi-nin-acilisi-yapildi-1120.jpg"
                alt="..."
                style={{ width: 1300, height: 400 }}
              />
            </div>
            <div className={`carousel-item ${index === 1 ? "active" : ""}`}>
              <img
                src="https://konyaninnabzi.web.tr/upload/kizlar-kayasi-efsanesi-5-8nxdwj.jpg"
                className="d-block w-100"
                alt="..."
                style={{ width: 1300, height: 400 }}
              />
            </div>
            <div className={`carousel-item ${index === 2 ? "active" : ""}`}>
              <img
                src="https://www.yenikonya.com.tr/uploads/2023/07/21/1689943163.jpg"
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
        <h5>Meram'ın Peri Bacaları: Kızlar Kayası</h5>
        <p>
          Meram’ın doğal güzelliklerinden biri olan Kızlar Kayası, Meram
          Belediyesi tarafından turizme kazandırılıyor. Kızlar Kayası
          düzenlemesinin Meram Son Durak Çamlıbel mevkisinden başlayan tarih ve
          turizm rotasının en önemli çalışmalarından biri olduğunu söyleyen
          Meram Belediye Başkanı Mustafa Kavuş, çalışmalar tamamlandığında bu
          doğal güzelliğin Meram’ın cazibe merkezlerinden biri haline geleceğini
          belirtti.
        </p>
        <hr />
      </div>
      
      <br/>
      <br />
      <div className="ornek3">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ width: 1300, height: 400 }}
        >
          <div className="carousel-inner">
            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src="https://www.kulturportali.gov.tr/repoKulturPortali/large/25022013/2c8c955e-c1f8-4cff-b4b5-fd3bbd551a30.jpg?format=jpg&quality=50"
                alt="..."
                style={{ width: 1300, height: 400 }}
              />
            </div>
            <div className={`carousel-item ${index === 1 ? "active" : ""}`}>
              <img
                src="https://i.tmgrup.com.tr/fikriyat//album/2018/06/04/tarihin-meydan-okuyan-yapi-sahip-ata-kulliyesi-1528105689534.jpg"
                className="d-block w-100"
                alt="..."
                style={{ width: 1300, height: 400 }}
              />
            </div>
            <div className={`carousel-item ${index === 2 ? "active" : ""}`}>
              <img
                src="https://cdn.gokonya.com/other/sahip-ata-camii-secilen-1.jpg"
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
        <h5>Sahip Ata Vakıf Müzesi</h5>
        <p>
          Anadolu Selçuklu Devleti vezirlerinden Sâhib Atâ Fahreddin Ali
          tarafından 1277 yılında yaptırılan külliyenin mimarı Keluk b.
          Abdullah’tır. Külliye yerleşim planı olarak, kuzeyde câmi, câminin
          mihrap duvarına bitişik inşâ edilmiş içinde Fahreddin Ali, eşi ve
          çocuklarının kabirleri bulunan türbe, türbenin güney duvarı
          bitişiğinde hânkâh, hemen yol aşırı karşısında çifte hamam yer
          almaktadır. Câmi, kuzeyden bir portal girişine sahiptir. Portalın sağ
          ve solunda altlı üstlü ikişer hücre bulunmakta, alttakiler sebil
          vazifesi görmektedir. Giriş kapısını çevreleyen pervazın üzerinde
          Besmele ve Fâtiha suresi yazılıdır. Külliyenin hânkâh (dergâh) kısmı
          Vakıflar Bölge Müdürlüğü tarafından Sâhib Atâ Vakıf Müzesi olarak
          düzenlenmiş ve ziyarete açılmıştır.
        </p>
        <hr />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <img
        src="https://www.meram.bel.tr/assets/img/footerlogo.svg"
        style={{ width: 500, height: 200, align: "center" }}
      />
    </>
  );
}

export default Sehrimiz;
