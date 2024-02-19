import React from 'react'

function Hakkimizda() 
{
  return (
    <div>
      <div>
        <p>
          <h1>Meram Belediyesi Hizmet Binası İletişim</h1>
          <h5>Adres :</h5> Yenişehir Mah. Azerbaycan Cad. No: 5 42010 Meram /
          KONYA
          <hr />
          <h5> Telefon :</h5>
          0332 320 10 00
          <hr />
          <h5>E-posta :</h5>
          bizimmeram@meram.bel.tr
          <hr />
          <h5>Kep Adresi :</h5>
          merambelediyesi@hs01.kep.tr
          <hr />
          <h5>E Tebligat :</h5>
          35846-96487-38597
          <hr />
          <h5>IBAN</h5>
          TR33 0001 2009 5240 0007 0000 02
        </p>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <img
            src="https://www.meram.bel.tr/assets/img/footerlogo.svg"
            style={{ width: 500, height: 200, align: "center" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hakkimizda