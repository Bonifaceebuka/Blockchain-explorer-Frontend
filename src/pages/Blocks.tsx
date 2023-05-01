import React, { useState } from 'react'
import { Bean, Beans } from "@web3uikit/icons";
import { Illustration } from "@web3uikit/core";

// import axios from "axios";

// type Props = {}

export default function Blocks() {

    return (
        <>
            <section className="container-xxl">
                <div className="d-flex flex-wrap justify-content-between align-items-center border-bottom gap-3 py-5">
                    <div className="d-flex flex-column gap-1">
                        <h1 className="h5 mb-0">
                            Blocks
                        </h1>
                    </div>
                </div>
            </section>

            <div className="container-xxl">
            <div className="text-muted py-3">
                <span id="ContentPlaceHolder1_lblAdResult"><ins data-revive-zoneid="2"
                        data-revive-id="6452186c83cd256052c3c100f524ed97" data-revive-seq="0" id="revive-0-0"
                        data-revive-loaded="1" style={{textDecoration: "none"}}><b>Sponsored:</b> &nbsp;
                        <img
                            src="/assets/images/ads/1xbit_20.webp"/> - <b>1xBit</b> - Discover best
                        Casino games at 1xBit - Register with ETHERX code. 
                        <a
                            href="https://kta.etherscan.com/www/d/cl.php?ebannerid=3971&amp;zoneid=2&amp;sig=4d833e7a872c94e0b8cb5850a8e84cc6e4e271bb9a01919fc4e3ac46690f3b68&amp;oadest=https%3A%2F%2Frefpa9063395.top%2FL%3Ftag%3Db_2276801m_3425c_BUTapr23%26site%3D2276801%26ad%3D3425%26r%3Dregistration"
                            target="_blank" rel="nofollow" 
                            title="Links to an External Advertiser site"><b>Play
                                now!</b></a>
                        <div id="beacon_cce837be5e"
                            style={{position: "absolute", left: "0px", top: "0px", visibility: "hidden"}}>
                                <img
                                src="/assets/images/ads/lg.gif" 
                                alt="" 
                                style={{width: "0px", height: "0px"}}
                                width="0" height="0"/></div>
                    </ins>
                </span>&nbsp;
            </div>
        </div>

        <section className="container-xxl pt-5 pb-12">

            <div id="ContentPlaceHolder1_divStats" className="row g-4 mb-4">

                <div className="col-sm-6 col-lg-3"><a className="card group link-dark h-100"
                        href="https://etherscan.io/chart/networkutilization">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <h6 className="text-cap mb-0">Network Utilization (24H)</h6><i
                                    className="fa fa-arrow-up text-secondary group-hover"></i>
                            </div>
                            <div><span className="fs-5">50.8%</span></div>
                        </div>
                    </a></div>


                <div className="col-sm-6 col-lg-3">
                    <a className="card group link-dark h-100" href="/block-tnx-list">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <h6 className="text-cap mb-0">Last Safe Block</h6>
                                <i className="fa fa-arrow-up text-secondary group-hover"></i>
                            </div>
                            <div>
                                <span className="fs-5">17158755</span>
                            </div>
                        </div>
                    </a>
                </div>


                <div className="col-sm-6 col-lg-3">
                    <a className="card group link-dark h-100" 
                        href="https://etherscan.io/dashboards/block-producers">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <h6 className="text-cap mb-0">PRODUCED BY MEV BUILDERS (24H)</h6>
                                <i className="fa fa-arrow-up text-secondary group-hover"></i>
                            </div>
                            <div>
                                <span className="fs-5">
                                    56%
                                </span>
                            </div>
                        </div>
                    </a>
                </div>


                <div className="col-sm-6 col-lg-3"><a className="card group link-dark h-100" target="_blank"
                        href="https://etherscan.io/dashboards/eip1559-metrics">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <h6 className="text-cap mb-0">Burnt Fees 🔥</h6><i
                                    className="fa fa-arrow-up 
                                    ;text-secondary group-hover"></i>
                            </div>
                            <div><span className="fs-5">3,148,041.53 ETH</span></div>
                        </div>
                    </a></div>

            </div>
            <div className="card">

                <div className="card-body" id="divDataInfo">
                    <div className="d-flex flex-column flex-sm-row justify-content-between gap-3">
                        <div className="text-muted"><span className="text-dark">Total of 17,158,818 blocks</span><span
                                className="d-block small">(Showing blocks between #17158793 to #17158817)</span></div>
                        <div className="d-flex gap-2 flex-wrap">

                            <nav aria-label="Table navigation">
                                <ul className="pagination pagination-sm mb-0">
                                    <li className="page-item disabled"><span className="page-link">First</span></li>
                                    <li className="page-item disabled"><span className="page-link px-3"><i
                                                className="fa fa-chevron-left small"></i></span><span
                                            className="sr-only">Previous</span></li>
                                    <li className="page-item disabled"><span className="page-link text-nowrap">Page 1 of
                                            686353</span></li>
                                    <li className="page-item" data-bs-toggle="tooltip">
                                        <a className="page-link px-3"
                                            href="https://etherscan.io/blocks?p=2" aria-label="Next">
                                                <span 
                                                // aria-hidden="True"
                                                ><i className="fa fa-chevron-right small"></i>
                                                </span>
                                                <span
                                                    className="sr-only">Next</span>
                                                </a>
                                                </li>
                                    <li className="page-item"><a className="page-link"
                                            href="https://etherscan.io/blocks?p=686353"><span
                                                // aria-hidden="True"
                                                >Last</span>
                                                <span className="sr-only">Last</span></a></li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>


                <div className="table-responsive">
                    <table className="table table-hover table-align-middle mb-0">
                        <thead className="text-nowrap">
                            <tr>
                                <th scope="col">
                                    Block
                                </th>
                                <th scope="col">
                                    <a href="javascript:;" 
                                    // onclick="switchAgeToDateTimeV2(this)" 
                                    id="lnkAgeDateTimeV2"
                                        className="hc_lnkAgeDateTime" data-bs-toggle="tooltip">Age</a>
                                </th>
                                <th scope="col">
                                    Txn
                                </th>
                                <th scope="col">
                                    Fee Recipient
                                </th>
                                <th scope="col" 
                                    // width={100}
                                    >
                                    Gas Used
                                </th>
                                <th scope="col">
                                    Gas Limit
                                </th>
                                <th scope="col">
                                    Base Fee
                                </th>
                                <th scope="col">Reward</th>
                                <th scope="col"
                                    title="Percentage of FeesBurnt/TxFees Earned (excluding base block reward)">
                                    Burnt Fees (ETH)
                                </th>
                            </tr>
                        </thead>
                        <tbody className="align-middle text-nowrap">
                            <tr>
                                <td><a href="/block-tnx-list">17158817</a></td>
                                <td className="showDate " style={{display:"none !important"}}><span 
                                // rel="tooltip"
                                        data-bs-toggle="tooltip" data-bs-title="4 secs ago">2023-04-30 12:19:11</span>
                                </td>
                                <td className="showAge "><span 
                                // rel="tooltip" 
                                data-bs-toggle="tooltip"
                                        data-bs-title="2023-04-30 12:19:11">4 secs ago</span></td>
                                <td className="showLocalDate" style={{ display: "none !important"}}>
                                    <span 
                                // rel="tooltip"
                                        data-bs-toggle="tooltip" data-bs-title="4 secs ago">1682857151</span></td>
                                <td><a href="/block-tnx-list">123</a></td>
                                <td>
                                    <div className="d-flex align-items-center gap-1"><img
                                            src="Ethereum%20Blocks%20Etherscan_files/ENS.svg" className=""
                                            data-bs-toggle="tooltip" data-bs-title="ENS Name" alt="ENS Name"
                                            width="12"/><a
                                            href="#"
                                            className="d-inline-flex align-items-center" target="_self"><span 
                                            // rel="tooltip"
                                                className="text-break hash-tag text-truncate" data-bs-toggle="tooltip"
                                                data-bs-boundary="viewport" data-bs-trigger="hover" data-bs-html="true"
                                                data-bs-title="titanbuilder.eth&lt;br/&gt;(0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97)">titanbuilder.eth</span></a><a
                                            className="js-clipboard link-secondary " href="javascript:;"
                                            data-clipboard-text="0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97"
                                            data-bs-toggle="tooltip"
                                            data-hs-clipboard-options="{ &quot;type&quot;: &quot;tooltip&quot;, &quot;successText&quot;: &quot;Copied!&quot;, &quot;classChangeTarget&quot;: &quot;#linkIcon_1&quot;, &quot;defaultClass&quot;: &quot;fa-copy&quot;, &quot;successClass&quot;: &quot;fa-check&quot; }"
                                            aria-label="Copy Address"><i id="linkIcon_1" className="fa fa-copy fa-fw"></i>
                                        </a></div>
                                </td>
                                <td>
                                    <div>13,893,068 <span className="small text-muted">(<span data-bs-toggle="tooltip"
                                                data-bs-placement="top">46.31%</span> | <span data-bs-toggle="tooltip"
                                                data-bs-placement="top">-7%</span>)</span></div>
                                    <div className="progress mt-1" style={{height: "2px"}}>
                                        {/* <div className="progress-bar bg-primary" 
                                        // role="progressbar" 
                                        style={{width: "46.31%"}}
                                            aria-valuenow="46.31" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    </div>
                                </td>
                                <td>30,000,000</td>
                                <td>35<b>.</b>16 Gwei</td>
                                <td>0<b>.</b>05434 ETH</td>
                                <td>0.488522 <span className="small text-muted">(-33.53%)</span>
                                    <div className="progress mt-1 d-none" style={{height:"2px"}}>
                                        {/* <div className="progress-bar bg-warning" 
                                        // role="progressbar" 
                                        style={{width: "-33.53%;"}}
                                            aria-valuenow="-33.53" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="/block-tnx-list">17158816</a></td>
                                <td className="showDate " style={{display: "none !important"}}>
                                    <span 
                                // rel="tooltip"
                                        data-bs-toggle="tooltip" data-bs-title="16 secs ago">2023-04-30 12:18:59</span>
                                </td>
                                <td className="showAge "><span 
                                // rel="tooltip" 
                                data-bs-toggle="tooltip"
                                        data-bs-title="2023-04-30 12:18:59">16 secs ago</span></td>
                                <td className="showLocalDate" 
                                style={{display:"none !important"}}><span 
                                // rel="tooltip"
                                        data-bs-toggle="tooltip" data-bs-title="16 secs ago">1682857139</span></td>
                                <td><a href="/block-tnx-list">135</a></td>
                                <td>
                                    <span className="d-flex align-items-center gap-1"><a
                                            href="#"
                                            className="hash-tag text-truncate" data-bs-boundary="viewport"
                                            data-bs-toggle="tooltip" data-bs-trigger="hover">rsync-builder</a><a
                                            className="js-clipboard link-secondary " href="javascript:;"
                                            data-clipboard-text="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326"
                                            data-bs-toggle="tooltip"
                                            data-hs-clipboard-options="{ &quot;type&quot;: &quot;tooltip&quot;, &quot;successText&quot;: &quot;Copied!&quot;, &quot;classChangeTarget&quot;: &quot;#linkIcon_2&quot;, &quot;defaultClass&quot;: &quot;fa-copy&quot;, &quot;successClass&quot;: &quot;fa-check&quot; }"
                                            aria-label="Copy Address"><i id="linkIcon_2" className="fa fa-copy fa-fw"></i>
                                        </a></span>
                                        </td>
                                <td>
                                    <div>14,836,314 <span className="small text-muted">(<span data-bs-toggle="tooltip"
                                                data-bs-placement="top">49.45%</span> | <span data-bs-toggle="tooltip"
                                                data-bs-placement="top">-1%</span>)</span></div>
                                    <div className="progress mt-1" style={{height: "2px"}}>
                                        {/* <div className="progress-bar bg-primary" 
                                        // role="progressbar" 
                                        style={{width: "49.45%"}}
                                            aria-valuenow="49.45" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    </div>
                                </td>
                                <td>30,000,000</td>
                                <td>35<b>.</b>21 Gwei</td>
                                <td>0<b>.</b>23281 ETH</td>
                                <td>0.522402 <span className="small text-muted">(-41.97%)</span>
                                    <div className="progress mt-1 d-none" style={{height:"2px"}}>
                                        {/* <div className="progress-bar bg-warning" 
                                        // role="progressbar" 
                                        style={{width:"-41.97%"}}
                                            aria-valuenow="-41.97" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="fs-80x text-muted text-end mt-3">
            </div>
            <div id="ContentPlaceHolder1_divFootNote" className="mt-4">
                <p className="d-flex align-items-baseline fs-sm text-muted gap-1 mb-3"><i
                        className="far fa-lightbulb-on"></i><span>Blocks
                        are batches of transactions linked together via cryptographic hashes.
                        Any tampering of a block invalidates subsequent blocks as their hashes
                        would be changed. Learn more about this page in our <a target="_blank"
                            href="https://info.etherscan.com/exploring-block-page/">Knowledge Base</a>.</span></p>
            </div>

        </section>
        </>
    )
}