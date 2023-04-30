import { useEffect, useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import styles from "@/styles/Home.module.css";
import Caret from './icons/caret';
export default function Footer() {
  const [ethPrice, setEthPrice] = useState("");

  useEffect(() => {
    const getEthPrice = async () => {
      // const response = await axios.get("http://localhost:5001/getethprice", {});
      // setEthPrice(response.data.usdPrice);
    };
    getEthPrice();
  });

  return (
    <footer id="masterFooter" className="bg-light mt-auto d-print-none">
        <div className="container-xxl">
            <div className="d-flex justify-content-between align-items-baseline py-6">

                <div className="d-flex gap-2">
                    <a className="btn btn-sm btn-secondary content-center rounded-circle" style={{width: "2rem", height: "2rem"}}
                        href="https://twitter.com/etherscan" rel="nofollow noopener" target="_blank"
                        data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm btn-secondary content-center rounded-circle" style={{width: "2rem", height: "2rem"}}
                        href="https://medium.com/etherscan-blog" rel="nofollow noopener" target="_blank"
                        data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Medium">
                        <i className="fab fa-medium"></i>
                    </a>
                    <a className="btn btn-sm btn-secondary content-center rounded-circle" style={{width: "2rem", height: "2rem"}}
                        href="https://www.facebook.com/etherscan/" rel="nofollow noopener" target="_blank"
                        data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Facebook">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a className="btn btn-sm btn-secondary content-center rounded-circle" style={{width: "2rem", height: "2rem"}}
                        href="https://www.reddit.com/r/etherscan/" rel="nofollow noopener" target="_blank"
                        data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Reddit">
                        <i className="fab fa-reddit-alien"></i>
                    </a>
                </div>

                <a className="link-dark" href="#">
                    <i className="fa fa-arrow-up me-1"></i>Back to Top
                </a>
            </div>
            <hr className="my-0"/>

            <div className="row justify-content-md-between py-8 py-lg-10">
                <div className="col-lg-4 pe-xl-16 mb-4 mb-lg-0">
                    <div className="d-flex align-items-center mb-3">
                        <img className="me-2" data-img-theme="light"
                            src="/assets/images/svg/ethereum-original.svg"
                            alt="Ethereum Logo" width="20"/>
                        <img className="me-2" data-img-theme="darkmode"
                            src="/assets/images/svg/ethereum-original-light.svg"
                            alt="Ethereum Logo" width="20"/>
                        <span className="fs-5">Powered by Ethereum</span>
                    </div>
                    <p className="fs-sm">Etherscan is a Block Explorer and Analytics Platform for Ethereum, a decentralized
                        smart contracts platform.</p>
                    <div className="d-none d-lg-block mt-n4 mb-n6">
                        <img className="opacity-50" data-img-theme="light"
                            src="/assets/images/maps/map.png" alt="Background Map Image"
                            width="280"/>
                        <img className="opacity-50" data-img-theme="darkmode"
                            src="/assets/images/maps/map-light.png"
                            alt="Background Map Image" width="280"/>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg mb-10 mb-md-0">
                    <h4 className="h6 mb-3">Company</h4>

                    <ul className="list-unstyled list-sm-space fs-sm mb-0">
                        <li><a className="link-dark" href="https://etherscan.io/aboutus">About Us</a></li>
                        <li><a className="link-dark" href="https://etherscan.io/brandassets">Brand Assets</a></li>
                        <li><a className="link-dark" href="https://etherscan.io/contactus">Contact Us</a></li>
                        <li>
                            <a className="link-dark" href="https://etherscan.io/careers">
                                <span className="me-1">Careers</span> <span
                                    className="bg-primary text-white small fw-medium text-nowrap rounded-pill p-1 px-2">We're
                                    Hiring!</span>
                            </a>
                        </li>
                        <li><a className="link-dark" href="https://etherscan.io/terms">Terms of Service</a></li>
                        <li><a className="link-dark" href="https://etherscan.io/bugbounty">Bug Bounty</a></li>
                    </ul>

                </div>
                <div className="col-6 col-md-4 col-lg mb-10 mb-md-0">
                    <h4 className="h6 mb-3">Community</h4>

                    <ul className="list-unstyled list-sm-space fs-sm mb-0">
                        <li><a className="link-dark" href="https://docs.etherscan.io/" target="_blank">API Documentation</a>
                        </li><a className="link-dark" href="https://docs.etherscan.io/" target="_blank">
                        </a>
                        <li><a className="link-dark" href="https://docs.etherscan.io/" target="_blank"></a><a
                                className="link-dark" href="https://info.etherscan.com/">Knowledge Base</a></li>
                        <li><a className="link-dark" href="https://etherscan.freshstatus.io/" rel="nofollow noopener"
                                target="_blank">Network Status</a></li>
                        <li><a className="link-dark"
                                href="https://info.etherscan.com/etherscan-newsletters/">Newsletters</a></li>
                        <li><a className="link-dark" href="https://etherscan.io/comments">Disqus Comments</a></li>
                    </ul>

                </div>
                <div className="col-6 col-md-4 col-lg">
                    <h4 className="h6 mb-3">Products &amp; Services</h4>

                    <ul className="list-unstyled list-sm-space fs-sm mb-0">
                        <li><a className="link-dark" href="https://etherscan.io/contactusadvertise">Advertise</a></li>
                        <li><a className="link-dark" href="https://etherscan.io/eaas">Explorer-as-a-Service (EaaS)</a></li>
                        <li><a className="link-dark" href="https://etherscan.io/apis">API Plans</a></li>
                        <li><a className="link-dark" href="https://etherscan.io/prioritysupport">Priority Support</a></li>
                        <li><a className="link-dark" href="https://blockscan.com/" target="_blank">Blockscan <i
                                    className="fa fa-arrow-up text-muted ms-1"></i></a></li>
                        <li><a className="link-dark" href="https://chat.blockscan.com/start" target="_blank">Blockscan Chat
                                <i className="fa fa-arrow-up text-muted ms-1"></i></a></li>
                    </ul>

                </div>
            </div>


            <div className="border-top py-4">
                <div className="row justify-content-between align-items-center fs-sm">
                    <div className="col-md mb-2 mb-md-0">
                        <p className="mb-0">Etherscan © 2023 (B1)</p>
                    </div>
                    <div className="col-md text-md-end">
                        <p className="mb-0">
                            Donations: <a className="me-1"
                                href="https://etherscan.io/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f"><span
                                    id="spanDonateAddress" 
                                    >0x71c765...d8976f</span></a> <i
                                className="fas fa-heart text-danger"></i>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </footer>
  );
}
