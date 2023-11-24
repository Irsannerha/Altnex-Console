import Navbars from "../components/Navbars";
import React from "react";
import "../style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PemesananDeluxe() {
  //   const [tanggal, setTanggal] = useState("");
  //   const [waktu, setWaktu] = useState("");

  //   const handleSubmit = async () => {
  //     try {
  //       // Lakukan permintaan POST ke server dengan menggunakan Axios
  //       const response = await axios.post("URL_API_ANDA", {
  //         tanggal: tanggal,
  //         waktu: waktu,
  //         // tambahkan data lainnya sesuai kebutuhan
  //       });

  //       console.log("Data berhasil disimpan:", response.data);
  //     } catch (error) {
  //
  //       console.error("Terjadi kesalahan:", error);
  //     }
  //   };

  return (
    <div className="mybg">
      <Navbars />
      <div className="introPemesanan text-black d-flex justify-content-center align-item-center">
        <h1>CHOOSE YOUR GAMING PLAN</h1>
      </div>

      <div className="text-black d-flex justify-content-center align-item-center">
        <h7>
          Pick from two new gaming options to get the games and benefits you
          need
        </h7>
      </div>

      <div className="ContainerBox d-flex justify-content-center align-item-center">
        <div className="BoxPemesanan">
          <div className="buttonPaket">
            <button className="buttonDeluxe" onClick="">
              DELUXE
              <div className="subTextDeluxe">Play, connect, explore</div>
            </button>

            <button className="buttonExtra" onClick="">
              EXTRA
              <div className="subTextExtra">Experience all the benefits</div>
            </button>
          </div>

          <div className="d-flex justify-content-center align-item-center">
            <div className="inputDataPemesanan">
              <h4>PlayStation Plus Deluxe</h4>
              <p style={{ fontSize: "12px" }}>
                PlayStation Plus Deluxe Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.{" "}
              </p>
              <p>Input Date and Time</p>
              <div style={{ display: "flex", marginTop: "-10px" }}>
                <div style={{ marginRight: "20px" }}>
                  <label>Date:</label>
                  <input
                    type="date"
                    //    value={tanggal}
                    //    onChange={(e) => setTanggal(e.target.value)}
                  />
                </div>
                <div>
                  <label>Time:</label>
                  <input
                    type="time"
                    //    value={waktu}
                    //    onChange={(e) => setWaktu(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="metodePembayaran ">
              <div 
              style={{ 
              backgroundColor: "#252524", 
              color:"#FCC000",
              width: "140px    ",
              height: "30px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: "bold",
              marginTop: "10px",
              marginLeft: "10px",  
              display: "flex",
              ali

              }}>
                <p>PACKAGE DELUXE</p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PemesananDeluxe;
<div className="">
            <div className="">
              <Button
                className={`hargaButton ${
                  selectedPrice === 10000 && "selected"
                }`}
                onClick={() => handlePriceSelection(10000)}
              >
                10000
              </Button>
              <Button
                className={`hargaButton ${
                  selectedPrice === 25000 && "selected"
                }`}
                onClick={() => handlePriceSelection(25000)}
              >
                25000
              </Button>
              <Button
                className={`hargaButton ${
                  selectedPrice === 30000 && "selected"
                }`}
                onClick={() => handlePriceSelection(30000)}
              >
                30000
              </Button>
            </div>
          </div>