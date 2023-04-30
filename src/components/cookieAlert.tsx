import { useEffect, useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import styles from "@/styles/Home.module.css";
import Caret from './icons/caret';
export default function CookieAlert() {
  const [ethPrice, setEthPrice] = useState("");

  useEffect(() => {
    const getEthPrice = async () => {
      // const response = await axios.get("http://localhost:5001/getethprice", {});
      // setEthPrice(response.data.usdPrice);
    };
    getEthPrice();
  });

  return (
    <div className="fixed-bottom text-center" id="divcookie" style={{display: "none"}}>
        <div className="alert alert-light fade show border shadow-sm d-inline-flex flex-wrap flex-sm-nowrap align-items-sm-center text-start gap-3 mx-3"
            role="alert">
            <p className="text-dark mb-0">
                <i className="far fa-cookie-bite text-muted"></i> This website <a
                    href="https://etherscan.io/terms#cookiestatement" target="_blank">uses cookies to improve your
                    experience</a>. By continuing to use this website, you agree to its <a
                    href="https://etherscan.io/terms" target="_blank">Terms</a> and <a
                    href="https://etherscan.io/privacyPolicy" target="_blank">Privacy Policy</a>.
            </p>
            <button id="btnCookie" type="button" className="btn btn-primary text-nowrap px-4" data-bs-dismiss="alert"
                aria-label="Close">Got it!</button>
        </div>
    </div>
  );
}
