import React, { useState } from 'react'
import { Bean, Beans } from "@web3uikit/icons";
import { Illustration } from "@web3uikit/core";

// import axios from "axios";

// type Props = {}

export default function BlockTnxs() {

    return (
        <>
            <section className="container-xxl">
                <div className="d-flex flex-wrap justify-content-between align-items-center border-bottom gap-3 py-5">
                    <div className="d-flex flex-column gap-1">
                        <h1 className="h5 mb-0">
                            Transactions
                        </h1>
                        <span id="ContentPlaceHolder1_divForXXX"
                            className="d-flex flex-wrap align-items-center text-break gap-1">
                            For Block <a href="https://etherscan.io/block/17159364">17159364</a>
                        </span>
                    </div>
                </div>
            </section>

            <section className="container-xxl">
                <div className="text-muted py-3">
                    <span id="ContentPlaceHolder1_lblAdResult2">
                        <ins data-revive-zoneid="2"
                            data-revive-id="6452186c83cd256052c3c100f524ed97" data-revive-seq="0" id="revive-0-0"
                            data-revive-loaded="1" style={{ textDecoration: "none" }}><b>Sponsored:</b> &nbsp;
                            <img
                                src="Ethereum%20Transactions%20Information%20Etherscan_files/neosify_20.webp" />
                            <b>Neosify</b>: Daily Crypto Gains.<a
                                href="https://kta.etherscan.com/www/d/cl.php?ebannerid=3961&amp;zoneid=2&amp;sig=48965d4ac7412ebd1bee3da5edea1c319c19ae76dcb4b4274fca1b9053db4ee8&amp;oadest=https%3A%2F%2Fneosify.com%2F%3Futm_source%3Detherscan_text8"
                                target="_blank" rel="nofollow" title="Links to an External Advertiser site">
                                <b>Stake to 10x
                                    ROI on Any Crypto. $200 Registration Bonus</b>
                            </a>
                            <div id="beacon_fcd0cd66ff"
                                style={{ position: "absolute", left: "0px", top: "0px", visibility: "hidden" }}>
                                <img
                                    src="Ethereum%20Transactions%20Information%20Etherscan_files/lg.gif"
                                    alt=""
                                    style={{ width: "0px", height: "0px" }}
                                    width="0" height="0" />
                            </div>
                        </ins>
                    </span>&nbsp;
                </div>
            </section>
            <section className="container-xxl pt-5 pb-12">
                <span id="ContentPlaceHolder1_lblAdResult"></span>
                <div id="ContentPlaceHolder1_divTransactions" className="card">
                    <div id="ContentPlaceHolder1_divDataInfo" className="card-body">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                            <div>
                                <span className="text-dark content-center gap-1">
                                    A total of 127 transactions found</span>
                                <div className="d-block text-muted small">
                                </div>
                            </div>
                            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                                <nav aria-label="table navigation">
                                    <ul className="pagination pagination-sm mb-0">
                                        <li className="page-item disabled"><span className="page-link">First</span></li>
                                        <li className="page-item disabled"><span className="page-link px-3"><i
                                            className="fa fa-chevron-left small"></i></span><span
                                                className="sr-only">Previous</span></li>
                                        <li className="page-item disabled"><span className="page-link text-nowrap">Page 1 of
                                            3</span></li>
                                        <li className="page-item" data-bs-toggle="tooltip"><a className="page-link px-3"
                                            href="https://etherscan.io/txs?block=17159364&amp;p=2"
                                            aria-label="Next">
                                            <span
                                            //  aria-hidden="True"
                                            >
                                                <i
                                                    className="fa fa-chevron-right small"></i></span><span
                                                        className="sr-only">Next</span></a></li>
                                        <li className="page-item"><a className="page-link"
                                            href="https://etherscan.io/txs?block=17159364&amp;p=3">
                                            <span
                                            // aria-hidden="True"
                                            >Last</span><span className="sr-only">Last</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover table-align-middle mb-0">
                            <thead id="ContentPlaceHolder1_theadAllTransactionTable" className="align-middle text-nowrap">
                                <tr>
                                    <th scope="col" className="text-center"
                                    // width="10"
                                    >
                                        <i className="far fa-question-circle text-muted" data-bs-toggle="popover"
                                            data-bs-trigger="hover"
                                            data-bs-content="See preview of the transaction details."></i>
                                    </th>
                                    <th scope="col">Txn Hash</th>
                                    <th scope="col">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="text-nowrap">Method <i className="far fa-question-circle text-muted"
                                                data-bs-toggle="popover" data-bs-trigger="hover"
                                                data-bs-content="Function executed based on decoded input data. For unidentified functions, method ID is displayed instead."></i>
                                            </span>
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="text-nowrap">Block</span>
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="d-flex align-items-center gap-2">
                                            <a
                                                // href="javascript:;" onclick="switchAgeToDateTimeNew(this)"
                                                className="age-datetime-with-tooltip"
                                                // data-bs-toggle="tooltip"
                                                data-bs-trigger="hover">Age</a>
                                        </div>
                                    </th>
                                    <th scope="col"
                                    // width="100"
                                    >
                                        <div className="d-flex align-items-center gap-2">
                                            <span>From</span>
                                        </div>
                                    </th>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">
                                        <div className="d-flex align-items-center gap-2">
                                            <span>To</span>
                                        </div>
                                    </th>
                                    <th scope="col">
                                        Value
                                    </th>
                                    <th scope="col">
                                        <a
                                            // href="javascript:;" onclick="switchTxFeeGasPriceNew(this)"
                                            className="switch-txn-fee-gas-price" data-bs-toggle="tooltip"
                                            data-bs-trigger="hover">Txn Fee</a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="align-middle text-nowrap">
                                <tr>
                                    <td><button type="button"
                                        className="js-tnx-preview btn btn-sm btn-white fs-70x content-center mx-auto myFnExpandBox"
                                        style={{ width: "1.75rem", height: "1.75rem" }}
                                        //  data-bs-content-id="js-tnx-preview"
                                        data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right"
                                        data-bs-trigger="manual" data-bs-html="true" data-initialized="false"
                                        data-bs-content="&lt;i class='fas fa-circle-notch fa-spin text-primary fa-2x'&gt;&lt;/i&gt;"
                                        data-bs-custom-className="popover-preview">
                                        <i className="far fa-eye"></i>
                                    </button></td>
                                    <td>
                                        <div className="d-flex d-flex align-items-center gap-1">
                                            <span className="hash-tag text-truncate">
                                                <a href="/tnx-by-hash"
                                                    className="myFnExpandBox_searchVal">0x12e24e0cfe362ad945660af62e75d592ccaefbc63228350a169626ef92c75fc5</a>
                                            </span>
                                        </div>
                                    </td>
                                    <td><span style={{ maxWidth: "95px" }}
                                        className="d-block badge bg-light border border-dark dark:border-white border-opacity-10 text-dark fw-normal text-truncate w-100 py-1.5"
                                        data-bs-toggle="tooltip" data-bs-boundary="viewport"
                                        data-bs-html="true">Execute</span></td>
                                    <td><a href="https://etherscan.io/block/17159364">17159364</a></td>
                                    <td className="showDate " style={{ display: "none !important" }}><span
                                        // rel="tooltip"
                                        data-bs-toggle="tooltip" data-bs-title="2 hrs 36 mins ago">2023-04-30
                                        14:09:47</span></td>
                                    <td className="showAge "><span
                                        // rel="tooltip" data-bs-toggle="tooltip"
                                        data-bs-title="2023-04-30 14:09:47">2 hrs 36 mins ago</span>
                                    </td>
                                    <td className="showLocalDate" style={{ display: "none !important" }}><span
                                        // rel="tooltip"
                                        data-bs-toggle="tooltip" data-bs-title="2 hrs 36 mins ago">1682863787</span>
                                    </td>
                                    <td>
                                        <div className="d-flex d-flex align-items-center gap-1">
                                            <a href="https://etherscan.io/address/0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                                                className="" data-bs-toggle="tooltip" data-bs-trigger="hover"
                                                data-bs-html="true"
                                                data-bs-title="0xa91822d0bd8d6b4ebd252857a690c10efc69b073">
                                                0xa91822...FC69b073
                                            </a><a className="js-clipboard link-secondary " href="javascript:;"
                                                data-clipboard-text="0xa91822D0bd8D6B4ebd252857A690C10eFC69b073"
                                                data-bs-toggle="tooltip"
                                                data-hs-clipboard-options="{ &quot;type&quot;: &quot;tooltip&quot;, &quot;successText&quot;: &quot;Copied!&quot;, &quot;classChangeTarget&quot;: &quot;#linkIcon_f_1&quot;, &quot;defaultClass&quot;: &quot;fa-copy&quot;, &quot;successClass&quot;: &quot;fa-check&quot; }"
                                                aria-label="Copy Address"><i id="linkIcon_f_1"
                                                    className="far fa-copy fa-fw"></i> </a>
                                        </div>
                                    </td>
                                    <td className="text-center"><span
                                        className="bg-success bg-opacity-10 border border-success border-opacity-25 text-success fs-70x content-center rounded-pill mx-auto"
                                        style={{ width: "1.5rem", height: "1.5rem" }}>
                                        <i className="far fa-arrow-right-long"></i>
                                    </span></td>
                                    <td>
                                        <div className="d-flex d-flex align-items-center gap-1">
                                            <i className="far fa-memo text-secondary" data-bs-toggle="tooltip"
                                                data-bs-title="Contract"></i>
                                            <a href="https://etherscan.io/address/0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b"
                                                className="hash-tag text-truncate" data-bs-toggle="tooltip"
                                                data-bs-trigger="hover" data-bs-html="true"
                                                data-bs-title="Public Tag: Uniswap: Universal Router&lt;br/&gt;(0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b)">
                                                Uniswap: Universal Router
                                            </a><a className="js-clipboard link-secondary " href="javascript:;"
                                                data-clipboard-text="0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B"
                                                data-bs-toggle="tooltip"
                                                data-hs-clipboard-options="{ &quot;type&quot;: &quot;tooltip&quot;, &quot;successText&quot;: &quot;Copied!&quot;, &quot;classChangeTarget&quot;: &quot;#linkIcon_t_1&quot;, &quot;defaultClass&quot;: &quot;fa-copy&quot;, &quot;successClass&quot;: &quot;fa-check&quot; }"
                                                aria-label="Copy Address"><i id="linkIcon_t_1"
                                                    className="far fa-copy fa-fw"></i> </a>
                                        </div>
                                    </td>
                                    <td><span data-bs-toggle="tooltip" data-bs-title="0.01 ETH">0.01 ETH</span></td>
                                    <td className="small text-muted showTxnFee ">0<b>.</b>00754357</td>
                                    <td style={{ display: "none !important" }}
                                        className="small text-muted showGasPrice ">
                                        53<b>.</b>06997698</td>
                                </tr>
                                <tr>
                                    <td><button type="button"
                                        className="js-tnx-preview btn btn-sm btn-white fs-70x content-center mx-auto myFnExpandBox"
                                        style={{ width: "1.75rem", height: "1.75rem" }}
                                        data-bs-content-id="js-tnx-preview"
                                        data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right"
                                        data-bs-trigger="manual" data-bs-html="true" data-initialized="false"
                                        data-bs-content="&lt;i class='fas fa-circle-notch fa-spin text-primary fa-2x'&gt;&lt;/i&gt;"
                                        data-bs-custom-className="popover-preview">
                                        <i className="far fa-eye"></i>
                                    </button></td>
                                    <td>
                                        <div className="d-flex d-flex align-items-center gap-1">
                                            <span className="hash-tag text-truncate">
                                                <a href="/tnx-by-hash"
                                                    className="myFnExpandBox_searchVal">0x64f0ae9ff12b592c3dc067b955df1780757d481c6c097ea92099d67e6b54907a</a>
                                            </span>
                                        </div>
                                    </td>
                                    <td><span style={{ maxWidth: "95px" }}
                                        className="d-block badge bg-light border border-dark dark:border-white border-opacity-10 text-dark fw-normal text-truncate w-100 py-1.5"
                                        data-bs-toggle="tooltip" data-bs-boundary="viewport"
                                        data-bs-html="true">Transfer</span></td>
                                    <td><a href="https://etherscan.io/block/17159364">17159364</a></td>
                                    <td className="showDate " style={{ display: "none !important" }}><span
                                        // rel="tooltip"
                                        data-bs-toggle="tooltip" data-bs-title="2 hrs 36 mins ago">2023-04-30
                                        14:09:47</span></td>
                                    <td className="showAge "><span
                                        // rel="tooltip" data-bs-toggle="tooltip"
                                        data-bs-title="2023-04-30 14:09:47">2 hrs 36 mins ago</span></td>
                                    <td className="showLocalDate" style={{ display: "none !important" }}><span
                                        // rel="tooltip"
                                        data-bs-toggle="tooltip" data-bs-title="2 hrs 36 mins ago">1682863787</span>
                                    </td>
                                    <td>
                                        <div className="d-flex d-flex align-items-center gap-1">
                                            <a href="https://etherscan.io/address/0x3fae52ae2e845469a69b815f1c11c523c8523de6"
                                                className="" data-bs-toggle="tooltip" data-bs-trigger="hover"
                                                data-bs-html="true"
                                                data-bs-title="0x3fae52ae2e845469a69b815f1c11c523c8523de6">
                                                0x3fAe52...C8523dE6
                                            </a><a className="js-clipboard link-secondary " href="javascript:;"
                                                data-clipboard-text="0x3fAe52ae2e845469a69B815F1c11c523C8523dE6"
                                                data-bs-toggle="tooltip"
                                                data-hs-clipboard-options="{ &quot;type&quot;: &quot;tooltip&quot;, &quot;successText&quot;: &quot;Copied!&quot;, &quot;classChangeTarget&quot;: &quot;#linkIcon_f_2&quot;, &quot;defaultClass&quot;: &quot;fa-copy&quot;, &quot;successClass&quot;: &quot;fa-check&quot; }"
                                                aria-label="Copy Address"><i id="linkIcon_f_2"
                                                    className="far fa-copy fa-fw"></i> </a>
                                        </div>
                                    </td>
                                    <td className="text-center"><span
                                        className="bg-success bg-opacity-10 border border-success 
                                        border-opacity-25 text-success fs-70x content-center rounded-pill mx-auto"
                                        style={{ width: "1.5rem", height: "1.5rem" }}>
                                        <i className="far fa-arrow-right-long"></i>
                                    </span></td>
                                    <td>
                                        <div className="d-flex d-flex align-items-center gap-1">
                                            <i className="far fa-memo text-secondary" data-bs-toggle="tooltip"
                                                data-bs-title="Contract"></i>
                                            <a href="https://etherscan.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7"
                                                className="hash-tag text-truncate" data-bs-toggle="tooltip"
                                                data-bs-trigger="hover" data-bs-html="true"
                                                data-bs-title="Public Tag: Tether: USDT Stablecoin&lt;br/&gt;(0xdac17f958d2ee523a2206206994597c13d831ec7)">
                                                Tether: USDT Stablecoin
                                            </a><a className="js-clipboard link-secondary " href="javascript:;"
                                                data-clipboard-text="0xdAC17F958D2ee523a2206206994597C13D831ec7"
                                                data-bs-toggle="tooltip"
                                                data-hs-clipboard-options="{ &quot;type&quot;: &quot;tooltip&quot;, &quot;successText&quot;: &quot;Copied!&quot;, &quot;classChangeTarget&quot;: &quot;#linkIcon_t_2&quot;, &quot;defaultClass&quot;: &quot;fa-copy&quot;, &quot;successClass&quot;: &quot;fa-check&quot; }"
                                                aria-label="Copy Address"><i id="linkIcon_t_2"
                                                    className="far fa-copy fa-fw"></i> </a>
                                        </div>
                                    </td>
                                    <td><span data-bs-toggle="tooltip" data-bs-title="0 ETH">0 ETH</span></td>
                                    <td className="small text-muted showTxnFee ">0<b>.</b>00219519</td>
                                    <td style={{ display: "none !important" }} className="small text-muted showGasPrice ">
                                        53<b>.</b>14086176</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <form method="post" action="./txs?block=17159364" id="ctl00">
                        <div className="aspNetHidden">
                            <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
                            <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
                            <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
                            <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE"
                                value="EgLeSr6b6bFkWiYjMr0OTgSi6x7vMcR1NBSS21iB4BgjhVIb8VJ6UNi9rptvnS+kIrVp9sqg02cqoJX+qoDDPhBCFAubUiTrMX9KDgs+PU0=" />
                        </div>
                        <div className="aspNetHidden">
                            <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="FCB51872" />
                            <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION"
                                value="UUBw5dSUFguBQWLRGWSghYJfbUk7vJqN4MmvZZoTdqiSPI02QDLxaX/Pc9cy4ENlhrTLODERN+J3UIujseUFgBLV9+0UQc9i/A3mGatRfFQZtHM5qSuQj1EEsjtmKPqwksGe1k1eyxgLAMBDBRWFvJ865d5kakWbD9rMzodwcilKVoN3ope3k50ou9/zlcY2jDWKwbaD30sWVAYSF4IrTg==" />
                        </div>
                        <div id="ContentPlaceHolder1_divBottomPagination"
                            className="card-footer d-flex flex-wrap justify-content-between align-items-center gap-3">
                            <div id="ContentPlaceHolder1_pageRecords"
                                className="d-flex align-items-center gap-2 text-nowrap text-muted">
                                Show:
                                <select name="ctl00$ContentPlaceHolder1$ddlRecordsPerPage"
                                    // onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$ddlRecordsPerPage\',\'\')', 0)"
                                    id="ContentPlaceHolder1_ddlRecordsPerPage" className="form-select form-select-sm w-auto">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    {/* <option selected="selected" value="50">50</option> */}
                                    <option value="100">100</option>
                                </select>
                                Records
                            </div>
                            <nav aria-label="table navigation">
                                <ul className="pagination pagination-sm mb-0">
                                    <li className="page-item disabled"><span className="page-link">First</span></li>
                                    <li className="page-item disabled"><span className="page-link px-3"><i
                                        className="fa fa-chevron-left small"></i></span><span
                                            className="sr-only">Previous</span></li>
                                    <li className="page-item disabled"><span className="page-link text-nowrap">Page 1 of 3</span>
                                    </li>
                                    <li className="page-item" data-bs-toggle="tooltip"><a className="page-link px-3"
                                        href="https://etherscan.io/txs?block=17159364&amp;p=2" aria-label="Next">
                                        <span
                                        // aria-hidden="True"
                                        ><i className="fa fa-chevron-right small"></i></span><span
                                            className="sr-only">Next</span></a></li>
                                    <li className="page-item"><a className="page-link"
                                        href="https://etherscan.io/txs?block=17159364&amp;p=3">
                                        <span
                                        // aria-hidden="True"
                                        >Last</span><span className="sr-only">Last</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </form>
                </div>
                <div className="mt-4">
                    <p id="ContentPlaceHolder1_divFootNote" className="d-flex align-items-baseline fs-sm text-muted gap-1 mb-3">
                        <i className="far fa-lightbulb-on"></i>
                        <span>
                            A transaction is a cryptographically signed instruction that changes the
                            blockchain state. Block explorers track the details of all transactions
                            in the network. Learn more about transactions in our <a target="_blank"
                                href="https://info.etherscan.com/understanding-an-ethereum-transaction/">Knowledge Base</a>.
                        </span>
                    </p>
                </div>
            </section>

        </>
    )
}