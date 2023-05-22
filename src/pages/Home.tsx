import React, { useState } from 'react'
import { Bean, Beans } from "@web3uikit/icons";
import { Illustration } from "@web3uikit/core";

// import axios from "axios";

// type Props = {}

export default function Home() {

    return (
        <>
            <input type="hidden" name="hdnAgeText" id="hdnAgeText" value="Age" />
            <input type="hidden" name="hdnDateTimeText" id="hdnDateTimeText" value="Date Time (UTC)" />
            <input type="hidden" name="hdnAgeTitle" id="hdnAgeTitle" value="Click to show Age Format" />
            <input type="hidden" name="hdnDateTimeTitle" id="hdnDateTimeTitle" value="Click to show Datetime Format" />
            <input type="hidden" name="hdnTxnText" id="hdnTxnText" value="Txn Fee" />
            <input type="hidden" name="hdnGasPriceText" id="hdnGasPriceText" value="Gas Price" />
            <input type="hidden" name="hdnTxnFeeTitle" id="hdnTxnFeeTitle" value="(Gas Price * Gas Used by Txns) in Ether" />
            <input type="hidden" name="hdnGasPriceTitle" id="hdnGasPriceTitle" value="Gas Price in Gwei" />


            <section className="bg-dark pt-14 pb-20" style={{ backgroundImage: "url(/images/svg/waves-light.svg)" }}>
                <div className="container-xxl">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-9 col-lg-7 mb-5">
                            <h1 className="fs-lg text-white fw-medium mb-3">
                                The Ethereum Blockchain Explore
                            </h1>
                            <form className="mb-3" action="#" method="GET">
                                <div className="search-panel-container bg-white border rounded d-flex gap-2 p-1.5">

                                    <div className="d-none d-sm-block">
                                        <select name="f" className="form-select fs-base border-0 filterby"
                                            aria-label="Default select example">
                                            {/* <option selected="selected" value="0">All Filters</option> */}
                                            <option value="5">Goerli</option>
                                            <option value="2">Sepolia</option>
                                            <option value="1">Mainnet</option>
                                        </select>
                                    </div>


                                    <div className="flex-grow-1 position-relative auto-search-max-height">
                                        <label htmlFor="search-panel" className="visually-hidden">Search</label>
                                        <input id="search-panel" type="text" className="form-control fs-base border-0 pe-8"
                                            // autocomplete="off" 
                                            // spellcheck="false"
                                            placeholder="Search by Txn Hash / Block"
                                            aria-describedby="button-header-search" name="q"
                                            // onkeyup="handleSearchText(this);" 
                                            maxLength={68} />
                                        <div className="auto-results-wrapper">
                                            <div className="p-2"><a
                                                href="#"
                                                rel="nofollow" 
                                                target="_blank" 
                                                data-bs-toggle="tooltip"
                                                data-bs-trigger="hover"
                                                className="search-panel-ads d-flex align-items-center p-2 rounded">
                                                <div className="me-2"><img className="rounded-1"
                                                    src="Ethereum%20(ETH)%20Blockchain%20Explorer_files/coinsgame_20.webp"
                                                    alt="Ads" width="22" /></div>
                                                <div className="text-truncate">
                                                    <h6 className="d-flex align-items-center fs-sm text-dark mb-0">
                                                        <div className="text-truncate me-2">Coins Game: Lucky Spin up to 100
                                                            ETH</div><span
                                                                className="d-none d-sm-inline-block small bg-white text-muted rounded-1 border px-2 py-1 ms-1">Sponsored</span><span
                                                                    className="d-inline-block d-sm-none small bg-white text-muted rounded-1 border px-2 py-1 ms-1">Ad</span>
                                                    </h6>
                                                </div>
                                            </a></div>
                                            <div className="search-panel-header"></div>
                                            <div className="search-panel-header"></div>
                                            <ul id="auto-search-panel-results" tabIndex={0} role="listbox"></ul>
                                            <div
                                                className="search-footer px-4 py-2 border-top d-flex justify-content-between d-none">
                                                <div className="d-flex align-items-center">
                                                    <svg className="me-2" width="44" height="20" viewBox="0 0 44 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M5.64062 9.5625L9.57812 5.4375C9.69531 5.32031 9.83594 5.27344 10 5.27344C10.1406 5.27344 10.2812 5.32031 10.3984 5.4375L14.3359 9.5625C14.5469 9.79688 14.5469 10.1484 14.3125 10.3594C14.1016 10.5703 13.7266 10.5703 13.5156 10.3359L10.5625 7.21875V15.1875C10.5625 15.5156 10.3047 15.75 10 15.75C9.71875 15.75 9.4375 15.5156 9.4375 15.1875V7.21875L6.46094 10.3359C6.25 10.5703 5.875 10.5703 5.66406 10.3594C5.42969 10.1484 5.42969 9.77344 5.64062 9.5625Z"
                                                            fill="#ADB5BD"></path>
                                                        <rect x="0.5" y="0.5" width="19" height="19" rx="3.5"
                                                            className="stroke-gray-200 dark:stroke-gray-600"></rect>
                                                        <path
                                                            d="M38.3359 11.4609L34.3984 15.5859C34.2812 15.7031 34.1406 15.75 34 15.75C33.8359 15.75 33.6953 15.7031 33.5781 15.5859L29.6406 11.4609C29.4297 11.2266 29.4297 10.875 29.6641 10.6641C29.875 10.4531 30.25 10.4531 30.4609 10.6875L33.4375 13.8047V5.83594C33.4375 5.50781 33.6719 5.27344 33.9766 5.27344C34.2578 5.27344 34.5625 5.50781 34.5625 5.83594V13.8047L37.5156 10.6875C37.7266 10.4531 38.1016 10.4531 38.3125 10.6641C38.5469 10.875 38.5469 11.2266 38.3359 11.4609Z"
                                                            fill="#ADB5BD"></path>
                                                        <rect x="24.5" y="0.5" width="19" height="19" rx="3.5"
                                                            className="stroke-gray-200 dark:stroke-gray-600"></rect>
                                                    </svg>
                                                    <div className="text-muted small me-3">Navigate</div>
                                                    <svg className="me-2" width="28" height="20" viewBox="0 0 28 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M9.99037 12.9312V14H5.83852V12.9312H9.99037ZM6.21986 6.17969V14H4.87172V6.17969H6.21986ZM9.44789 9.44531V10.498H5.83852V9.44531H9.44789ZM9.96352 6.17969V7.25391H5.83852V6.17969H9.96352ZM15.0957 11.9858C15.0957 11.8247 15.0706 11.6815 15.0205 11.5562C14.974 11.4308 14.8898 11.3162 14.7681 11.2124C14.6463 11.1086 14.4744 11.0083 14.2524 10.9116C14.034 10.8114 13.7547 10.7093 13.4146 10.6055C13.0422 10.4909 12.6984 10.3638 12.3833 10.2241C12.0718 10.0809 11.7996 9.91618 11.5669 9.72998C11.3341 9.5402 11.1533 9.32357 11.0244 9.08008C10.8955 8.83301 10.8311 8.54834 10.8311 8.22607C10.8311 7.90739 10.8973 7.61735 11.0298 7.35596C11.1659 7.09456 11.3574 6.86898 11.6045 6.6792C11.8551 6.48584 12.1506 6.33724 12.4907 6.2334C12.8309 6.12598 13.2069 6.07227 13.6187 6.07227C14.1987 6.07227 14.6982 6.17969 15.1172 6.39453C15.5397 6.60938 15.8638 6.89762 16.0894 7.25928C16.3185 7.62093 16.4331 8.02018 16.4331 8.45703H15.0957C15.0957 8.19922 15.0402 7.97184 14.9292 7.7749C14.8218 7.57438 14.6571 7.41683 14.4351 7.30225C14.2166 7.18766 13.9391 7.13037 13.6025 7.13037C13.2839 7.13037 13.0189 7.17871 12.8076 7.27539C12.5964 7.37207 12.4388 7.50277 12.335 7.66748C12.2311 7.83219 12.1792 8.01839 12.1792 8.22607C12.1792 8.37288 12.2132 8.50716 12.2812 8.62891C12.3493 8.74707 12.4531 8.85807 12.5928 8.96191C12.7324 9.06217 12.9079 9.15706 13.1191 9.24658C13.3304 9.3361 13.5793 9.42204 13.8657 9.50439C14.299 9.6333 14.6768 9.77653 14.999 9.93408C15.3213 10.0881 15.5898 10.2635 15.8047 10.4604C16.0195 10.6574 16.1807 10.8812 16.2881 11.1318C16.3955 11.3789 16.4492 11.66 16.4492 11.9751C16.4492 12.3045 16.383 12.6017 16.2505 12.8667C16.118 13.1281 15.9282 13.3519 15.6812 13.5381C15.4377 13.7207 15.144 13.8621 14.8003 13.9624C14.4601 14.0591 14.0806 14.1074 13.6616 14.1074C13.2856 14.1074 12.915 14.0573 12.5498 13.957C12.1882 13.8568 11.8587 13.7046 11.5615 13.5005C11.2643 13.2928 11.028 13.035 10.8525 12.7271C10.6771 12.4155 10.5894 12.0521 10.5894 11.6367H11.9375C11.9375 11.891 11.9805 12.1076 12.0664 12.2866C12.1559 12.4657 12.2795 12.6125 12.437 12.7271C12.5946 12.8381 12.7772 12.9204 12.9849 12.9741C13.1961 13.0278 13.4217 13.0547 13.6616 13.0547C13.9767 13.0547 14.2399 13.0099 14.4512 12.9204C14.666 12.8309 14.8271 12.7056 14.9346 12.5444C15.042 12.3833 15.0957 12.1971 15.0957 11.9858ZM22.1507 11.4541H23.4935C23.4505 11.9661 23.3073 12.4227 23.0638 12.8237C22.8203 13.2212 22.4784 13.5345 22.0379 13.7637C21.5975 13.9928 21.0622 14.1074 20.432 14.1074C19.9486 14.1074 19.5135 14.0215 19.1268 13.8496C18.7401 13.6742 18.4089 13.4271 18.1332 13.1084C17.8574 12.7861 17.6462 12.3976 17.4994 11.9429C17.3561 11.4881 17.2845 10.9797 17.2845 10.4175V9.76758C17.2845 9.2054 17.3579 8.69694 17.5047 8.24219C17.6551 7.78743 17.87 7.39893 18.1493 7.07666C18.4286 6.75081 18.7634 6.50195 19.1537 6.33008C19.5476 6.1582 19.9898 6.07227 20.4803 6.07227C21.1034 6.07227 21.6297 6.18685 22.0594 6.41602C22.4891 6.64518 22.8221 6.96208 23.0585 7.3667C23.2984 7.77132 23.4452 8.23503 23.4989 8.75781H22.1561C22.1203 8.42122 22.0415 8.13298 21.9198 7.89307C21.8016 7.65316 21.6262 7.47054 21.3934 7.34521C21.1607 7.21631 20.8563 7.15186 20.4803 7.15186C20.1724 7.15186 19.9038 7.20915 19.6747 7.32373C19.4455 7.43831 19.2539 7.60661 19.1 7.82861C18.946 8.05062 18.8296 8.32454 18.7508 8.65039C18.6756 8.97266 18.638 9.34147 18.638 9.75684V10.4175C18.638 10.8114 18.6721 11.1694 18.7401 11.4917C18.8117 11.8104 18.9191 12.0843 19.0624 12.3135C19.2092 12.5426 19.3954 12.7199 19.621 12.8452C19.8465 12.9705 20.1169 13.0332 20.432 13.0332C20.8151 13.0332 21.1249 12.9723 21.3612 12.8506C21.6011 12.7288 21.7819 12.5516 21.9037 12.3188C22.029 12.0825 22.1114 11.7943 22.1507 11.4541Z"
                                                            fill="#ADB5BD"></path>
                                                        <rect x="0.5" y="0.5" width="27" height="19" rx="3.5"
                                                            className="stroke-gray-200 dark:stroke-gray-600"></rect>
                                                    </svg>
                                                    <div className="text-muted small">Close</div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <svg className="me-2" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M7.16406 14.6484L4.16406 11.6484C4.04688 11.5547 4 11.4141 4 11.25C4 11.1094 4.04688 10.9688 4.16406 10.875L7.16406 7.875C7.375 7.64062 7.72656 7.64062 7.9375 7.875C8.17188 8.08594 8.17188 8.4375 7.9375 8.64844L5.89844 10.6875H14.875V5.8125C14.875 5.50781 15.1094 5.25 15.4375 5.25C15.7422 5.25 16 5.50781 16 5.8125V11.25C16 11.5781 15.7422 11.8125 15.4375 11.8125H5.89844L7.9375 13.875C8.17188 14.0859 8.17188 14.4375 7.9375 14.6484C7.72656 14.8828 7.375 14.8828 7.16406 14.6484Z"
                                                            fill="#ADB5BD"></path>
                                                        <rect x="0.5" y="0.5" width="19" height="19" rx="3.5"
                                                            className="stroke-gray-200 dark:stroke-gray-600"></rect>
                                                    </svg>
                                                    <div className="text-muted small">Enter</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#"

                                            className="clear-icon d-none align-items-center position-absolute top-0 bottom-0 my-auto d-flex align-items-center"
                                            style={{ right: "0.75rem", cursor: "pointer" }}>
                                            <i className="fa-regular fa-xmark fs-5 text-secondary"></i>
                                        </a>
                                        <input type="hidden" value="" id="hdnSearchText" />
                                        <input type="hidden" value="" id="hdnSearchLabel" />
                                        <input id="hdnIsTestNet" value="False" type="hidden" />
                                    </div>
                                    <div>
                                        <button className="btn fs-base btn-primary" type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>

                                </div>
                            </form>

                            <p className="text-white text-opacity-75 mb-0" style={{ minHeight: "22px" }}>

                                {/* <ins data-revive-zoneid="6" data-revive-id="6452186c83cd256052c3c100f524ed97"
                                data-revive-seq="0" id="revive-0-0" data-revive-loaded="1"
                                style={{textDecoration: "none"><b>Featured: Etherscan API - </b> 
                                Need higher call rates
                                ? <a href="https://kta.etherscan.com/www/d/cl.php?ebannerid=3151&amp;zoneid=6&amp;sig=54b860f643fc5304431a0c88ff6ce2b57fe5e2254748f5ecd4caca7f0b1dc541&amp;oadest=https%3A%2F%2Fetherscan.io%2Fapis%23"
                                    target="_blank" title="Links to an External Advertiser site"> <b>Sign-up for a
                                        dedicated plan today!</b></a>
                                <div id="beacon_deb510a018"
                                    style="position: absolute; left: 0px; top: 0px; visibility: hidden;"><img
                                        src="Ethereum%20(ETH)%20Blockchain%20Explorer_files/lg.gif" alt=""
                                        style="width: 0px; height: 0px;" width="0" height="0"></div>
                            </ins> */}
                                {/* <script async=""
                                src="Ethereum%20(ETH)%20Blockchain%20Explorer_files/asyncjses.php"></script> */}
                            </p>

                        </div>

                        <div className="col-auto mx-auto">
                            <div className="d-none d-lg-flex justify-content-center mt-n4">
                                <a className="position-relative d-inline-block d-sm-none" target="_blank"
                                    href="#">
                                    <span className="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
                                        style={{ right: ".75rem", top: "-.5rem" }}>Ad</span>
                                    <img className="img-fluid rounded"
                                        src="/assets/images/ads/ad_1.webp" alt="Ad"
                                        width="321" height="101" />
                                </a>
                                <a className="position-relative d-none d-sm-inline-block d-lg-none" target="_blank"
                                    href="#">
                                    <span className="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
                                        style={{ right: ".75rem", top: "-.5rem" }}>Ad</span>
                                    <img className="img-fluid rounded"
                                        src="Ethereum%20(ETH)%20Blockchain%20Explorer_files/bcgame_730x90n.webp" alt="Ad"
                                        width="730" height="90" />
                                </a>
                                <a className="position-relative d-none d-lg-inline-block" target="_blank"
                                    href="#">
                                    <span className="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
                                        style={{ right: ".75rem", top: "-.5rem" }}>Ad</span>
                                    <img className="img-fluid rounded"
                                        src="/assets/images/ads/ad_1.webp" alt="Ad"
                                        width="321" height="101" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="container-xxl pb-20">
                <div id="ContentPlaceHolder1_mainboxes" className="card py-5 px-4 mb-4 mt-n12">
                    <div className="row g-lg-10">
                        <div className="col-md-6 col-lg-4">

                            <div className="d-flex">
                                <div className="text-center me-3" style={{ width: "1.5rem" }}>
                                    <img className="img-fluid mx-auto" data-img-theme="light"
                                        src="/assets/images/svg/ethereum-original.svg"
                                        alt="Ethereum Logo" width="18" />
                                    <img className="img-fluid mx-auto" data-img-theme="darkmode"
                                        src="/assets/images/svg/ethereum-original-light.svg"
                                        alt="Ethereum Logo" width="18" />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="text-cap mb-px">Ether Price</div>
                                    <a className="link-dark fs-base" href="#" rel="tooltip"
                                        data-bs-toggle="tooltip" data-bs-placement="bottom">$1,815.58<span
                                            className="text-muted"> @ 0.06659 BTC</span><span className="text-danger small">
                                            (-1.10%)</span></a>
                                </div>
                            </div>

                            <hr className="my-5" />
                            <div className="d-flex">
                                <div className="me-3">
                                    <i className="fa fa-globe" style={{ fontSize: "1.5rem" }}></i>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="text-cap mb-px">Market Cap</div>
                                    <a className="link-dark fs-base" href="#">
                                        $218,608,434,083.00</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 border-md-start">
                            <hr className="d-block d-md-none my-5" />
                            <div className="d-flex">
                                <div className="me-3">
                                    <i className="fa fa-server" style={{ fontSize: "1.5rem" }}></i>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="text-cap mb-px">Transactions</div>
                                    <a href="#" className="link-dark fs-base" rel="tooltip"
                                        data-bs-toggle="tooltip" data-bs-placement="left" data-bs-html="true">1,946.35
                                        M</a><span className="text-muted small" style={{ fontSize: "14px" }}
                                            // rel="tooltip"
                                            data-bs-toggle="tooltip" data-bs-placement="bottom"> (9.9 TPS)</span>
                                </div>
                                <div className="text-end">
                                    <div className="text-cap mb-px">Med Gas Price</div>
                                    <a href="#" className="link-dark fs-base"
                                        data-bs-toggle="tooltip" data-bs-html="true">38 Gwei <span className="text-muted small"
                                            style={{ fontSize: "14px" }}>($1.45)</span></a>
                                </div>
                            </div>
                            <hr className="my-5" />
                            <div className="d-flex">
                                <div className="me-3">
                                    <i className="fas fa-chart-line" style={{ fontSize: "1.5rem" }}></i>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="text-cap mb-px">Last Finalized Block</div>
                                    {/* <span rel="tooltip" className="fs-base" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                    stake.'="">17121905</span> */}
                                </div>
                                <div className="text-end">
                                    <div className="text-cap mb-px">Last Safe Block</div>
                                    {/* <span rel="tooltip" className="fs-base" data-bs-toggle="tooltip"
                                    data-bs-placement="bottom">17121936</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-lg-start">
                            <hr className="d-block d-lg-none my-5" />
                            <div className="text-cap mb-px">Transaction History in 14 days</div>
                            <img src="/assets/images/charts/chart_light.png" alt="Chart" className="chart" />
                        </div>
                    </div>
                </div>


                <div className="d-flex d-lg-none justify-content-center mb-4">
                    <a className="position-relative d-inline-block d-sm-none" target="_blank"
                        href="#">
                        <span className="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
                            style={{ right: ".75rem", top: "-.5rem" }}>Ad</span>
                        <img className="img-fluid rounded"
                            src="/assets/images/ads/ad_1.webp" alt="Ad" width="321"
                            height="101" />
                    </a>
                    <a className="position-relative d-none d-sm-inline-block d-lg-none" target="_blank"
                        href="#">
                        <span className="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
                            style={{ right: ".75rem", top: "-.5rem" }}>Ad</span>
                        <img className="img-fluid rounded"
                            src="/assets/images/ads/ad_1.webp" alt="Ad" width="730"
                            height="90" />
                    </a>
                    <a className="position-relative d-none d-lg-inline-block" target="_blank"
                        href="#">
                        <span className="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
                            style={{ right: ".75rem", top: "-.5rem" }}>Ad</span>
                        <img className="img-fluid rounded"
                            src="/assets/images/ads/ad_1.webp" alt="Ad" width="321"
                            height="101" />
                    </a>
                </div>


                <div className="row gx-4">

                    <div className="col-lg-6 mb-4">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-header-title">Latest Blocks</h2>
                            </div>
                            <div className="card-body overflow-auto scrollbar-custom" style={{ maxHeight: "30.3rem" }}
                                id="mCSB_1_container">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                                                style={{ height: "3rem", width: "3rem" }}>
                                                <i className="fa fa-cube fs-lg"></i>
                                            </div>
                                            <div
                                                className="d-flex flex-row flex-sm-column align-items-center align-items-sm-start gap-1 gap-sm-0">
                                                <span className="d-inline-block d-sm-none">Block</span>
                                                <a className="text-truncate"
                                                    style={{ maxWidth: "6rem" }}
                                                    href="/blocks">17121971</a>
                                                <div className="small text-muted"> 12 secs ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-8 d-flex justify-content-sm-between align-items-end align-items-sm-center position-relative">
                                        <div className="pe-0 pe-sm-2">
                                            <div className="d-flex flex-wrap gap-1">Fee Recipient <a
                                                className="text-truncate d-block" style={{ maxWidth: "8rem" }}
                                                href="#"
                                                data-bs-toggle="tooltip">Lido: Execution Layer Rewards Vault</a></div><a
                                                    href="#" data-bs-toggle="tooltip">99
                                                txns </a> <span className="small text-muted me-2">in 12 secs</span><span
                                                    className="d-inline-block d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1 py-sm-1.5 px-1.5 px-sm-2"
                                                    data-bs-toggle="tooltip">0<b>.</b>04478 Eth</span>
                                        </div>
                                        <div className="d-none d-sm-block text-end ms-2 ms-sm-0"><span
                                            className="badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1.5 px-2"
                                            data-bs-toggle="tooltip">0<b>.</b>04478 Eth</span></div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                                                style={{ height: "3rem", width: "3rem" }}><i className="fa fa-cube fs-lg"></i></div>
                                            <div
                                                className="d-flex flex-row flex-sm-column align-items-center align-items-sm-start gap-1 gap-sm-0">
                                                <span className="d-inline-block d-sm-none">Block</span><a className="text-truncate"
                                                    style={{ maxWidth: "6rem" }}
                                                    href="/blocks">17121970</a>
                                                <div className="small text-muted"> 24 secs ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-8 d-flex justify-content-sm-between align-items-end align-items-sm-center position-relative">
                                        <div className="pe-0 pe-sm-2">
                                            <div className="d-flex flex-wrap gap-1">Fee Recipient <a
                                                className="text-truncate d-block" style={{ maxWidth: "8rem" }}
                                                href="#"
                                                data-bs-toggle="tooltip">builder0x69</a></div><a
                                                    href="#" data-bs-toggle="tooltip">158
                                                txns </a> <span className="small text-muted me-2">in 12 secs</span><span
                                                    className="d-inline-block d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1 py-sm-1.5 px-1.5 px-sm-2"
                                                    data-bs-toggle="tooltip">0<b>.</b>14977 Eth</span>
                                        </div>
                                        <div className="d-none d-sm-block text-end ms-2 ms-sm-0"><span
                                            className="badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1.5 px-2"
                                            data-bs-toggle="tooltip">0<b>.</b>14977 Eth</span></div>
                                    </div>
                                </div>
                            </div>
                            <a className="card-footer bg-light fw-medium text-cap link-muted text-center"
                                href="/blocks">
                                View all blocks <i className="far fa-long-arrow-right ms-1"></i>
                            </a>
                        </div>
                    </div>


                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-header-title">Latest Transactions</h2>
                            </div>
                            <div className="card-body overflow-auto scrollbar-custom" style={{ maxHeight: "30.3rem" }}
                                id="mCSB_2_container">
                                <div className="row">
                                    <div className="col-sm-4 col-lg-5">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                                                style={{ height: "3rem", width: "3rem" }}><i className="fa fa-toilet-paper fs-lg"></i></div>
                                            <div
                                                className="d-flex align-items-center align-items-sm-start flex-row flex-sm-column gap-1 gap-sm-0">
                                                <span className="d-inline-block d-sm-none">TX#</span><a
                                                    className="d-block text-truncate" style={{ maxWidth: "8rem" }}
                                                    href="#">0x90ed32f4a2783bea018bb7871ef1353848e1848469f98f108f046f2eaab963ae</a>
                                                <div className="small text-muted">12 secs ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-8 col-lg-7 d-flex justify-content-sm-between align-items-end align-items-sm-center">
                                        <div className="pe-0 pe-sm-2">
                                            <div className="d-flex flex-wrap gap-1">From <a
                                                href="#"
                                                data-bs-toggle="tooltip">0x67898d...045c8c90</a></div>
                                            <div className="d-flex align-items-center flex-wrap gap-1">To <a
                                                href="#"
                                                data-bs-toggle="tooltip">0xa49a0e...B229eFC8</a><span
                                                    className="d-inline d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark ms-1 py-1.5 px-2 fw-medium">0
                                                    Eth</span></div>
                                        </div>
                                        <div className="d-none d-sm-block text-end ms-2 ms-sm-0" data-bs-toggle="tooltip"><span
                                            className="badge border border-dark dark:border-white border-opacity-15 text-dark  py-1.5 px-2 fw-medium">0
                                            Eth</span></div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4 col-lg-5">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                                                style={{ height: "3rem", width: "3rem" }}><i className="fa fa-toilet-paper fs-lg"></i></div>
                                            <div
                                                className="d-flex align-items-center align-items-sm-start flex-row flex-sm-column gap-1 gap-sm-0">
                                                <span className="d-inline-block d-sm-none">TX#</span><a
                                                    className="d-block text-truncate" style={{ maxWidth: "8rem" }}
                                                    href="#">0x79c9ac956109b0d7e69b8361af590341d2998a8c06683eb5cf088275a113cbea</a>
                                                <div className="small text-muted">12 secs ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-8 col-lg-7 d-flex justify-content-sm-between align-items-end align-items-sm-center">
                                        <div className="pe-0 pe-sm-2">
                                            <div className="d-flex flex-wrap gap-1">From <a
                                                href="#"
                                                data-bs-toggle="tooltip">0x7798EF...7452ff35</a></div>
                                            <div className="d-flex align-items-center flex-wrap gap-1">To <a
                                                href="#"
                                                data-bs-toggle="tooltip">0xdAC17F...3D831ec7</a><span
                                                    className="d-inline d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark ms-1 py-1.5 px-2 fw-medium">0
                                                    Eth</span></div>
                                        </div>
                                        <div className="d-none d-sm-block text-end ms-2 ms-sm-0" data-bs-toggle="tooltip"><span
                                            className="badge border border-dark dark:border-white border-opacity-15 text-dark  py-1.5 px-2 fw-medium">0
                                            Eth</span></div>
                                    </div>
                                </div>
                            </div>
                            <a className="card-footer bg-light fw-medium text-cap link-muted text-center"
                                href="#">
                                View all transactions <i className="far fa-long-arrow-right ms-1"></i>
                            </a>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}