import React, { useState } from 'react'
import { Bean, Beans } from "@web3uikit/icons";
import { Illustration } from "@web3uikit/core";

// import axios from "axios";

// type Props = {}

export default function BlockDetails() {

    return (
        <>
            <section className="container-xxl">
                <div className="d-flex flex-wrap justify-content-between align-items-center border-bottom gap-3 py-5">
                    <div className="d-flex flex-column gap-1">
                        <div className="d-flex flex-wrap align-items-center gap-1">
                            <h1 className="h5 me-1 mb-0">
                                Block
                            </h1>
                            <div className="text-muted text-break">
                                #17159364
                            </div>
                        </div>
                        <div className="d-flex flex-wrap gap-1 text-break">
                            <a className="badge bg-white hover:bg-secondary border border-dark dark:border-white border-opacity-15 text-dark text-nowrap fw-medium transition-all rounded-pill py-1.5 px-2"
                                href="https://etherscan.io/blocks/label/mev-block" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-trigger="hover">
                                <div className="d-flex align-items-center gap-1"><i className="fa fa-hashtag"></i> <span
                                    className="hash-tag text-truncate">MEV Block</span> <i
                                        className="far fa-circle-info ms-0.5"></i></div>
                            </a><a
                                className="badge bg-white hover:bg-secondary border border-dark dark:border-white border-opacity-15 text-dark text-nowrap fw-medium transition-all rounded-pill py-1.5 px-2"
                                href="https://etherscan.io/blocks/label/eigenphi" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-trigger="hover">
                                <div className="d-flex align-items-center gap-1"><i className="fa fa-hashtag"></i> <span
                                    className="hash-tag text-truncate">EigenPhi</span> <i
                                        className="far fa-circle-info ms-0.5"></i></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-xxl pt-2 pb-12">
                <ul className="nav nav-pills text-nowrap snap-x-mandatory overflow-x-auto flex-nowrap py-3 gap-2 nav_tabs1"
                    id="myTab" role="tablist">
                    <li className="nav-item snap-align-start" role="presentation">
                        <a className="nav-link active" href="javascript:;" id="overview-tab" data-bs-toggle="pill"
                            data-bs-target="#overview" type="button" role="tab" aria-controls="overview"
                        // aria-selected="true" 
                        // onclick="javascript:updatehash('');"
                        >
                            Overview
                        </a>
                    </li>
                    <li id="ContentPlaceHolder1_li_consensusinfo" className="nav-item snap-align-start" role="presentation">
                        <a className="nav-link" href="javascript:;" id="consensusinfo-tab" data-bs-toggle="pill"
                            data-bs-target="#consensusinfo" type="button"
                            // role="tab" aria-controls="consensusinfo"
                            // aria-selected="false" 
                            // onclick="javascript:updatehash('consensusinfo');" 
                            tabIndex={-1}>
                            Consensus Info
                        </a>
                    </li>
                    <li id="ContentPlaceHolder1_li_disqus" className="nav-item snap-align-start" role="presentation">
                        <a className="nav-link" href="javascript:;" id="comment-tab" data-bs-toggle="pill"
                            data-bs-target="#comments" type="button"
                            // role="tab" aria-controls="comments"
                            // aria-selected="false" 
                            // onclick="javascript:loaddisqus();" 
                            tabIndex={-1}>
                            <span className="disqus-comment-count"
                                data-disqus-identifier=""
                            // etherscan_blockno_17159364_comments""=""
                            >
                                Comments
                            </span>
                        </a>
                    </li>
                </ul>


                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active"
                        id="overview" role="tabpanel"
                        aria-labelledby="overview-tab"
                        tabIndex={0}>
                        <div id="ContentPlaceHolder1_maintable">
                            <div className="card p-5 mb-3">

                                <div className="row gy-2 mb-4">
                                    <div className="col-auto col-md-3 text-dt">
                                        <i className="far fa-question-circle me-1" data-bs-container="body"
                                            data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                            data-original-title="" title=""
                                            data-bs-content="Also known as Block Number. The block height, which indicates the length of the blockchain, increases after the addition of the new block."></i>
                                        Block Height:
                                    </div>
                                    <div className="col col-md-9">
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                17159364
                                            </div>
                                            <div className="text-nowrap"><a className="btn btn-sm btn-secondary py-0.5"
                                                href="https://etherscan.io/block/17159363" data-bs-toggle="tooltip"
                                                data-bs-trigger="hover" data-bs-placement="top"
                                                aria-label="View previous block"><i
                                                    className="fa fa-chevron-left small"></i></a>
                                                <a className="btn btn-sm btn-secondary py-0.5"
                                                    href="https://etherscan.io/block/17159365" data-bs-toggle="tooltip"
                                                    data-bs-trigger="hover" data-bs-placement="top"
                                                    aria-label="View next block"><i
                                                        className="fa fa-chevron-right small"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row mb-4">
                                    <div className="col-auto col-md-3 text-dt mb-1 mb-md-0"><i
                                        className="far fa-question-circle me-1" data-bs-container="body"
                                        data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                        data-original-title="" title=""
                                        data-bs-content="The finality status of the block. "></i> Status:</div>
                                    <div className="col col-md-9"><span
                                        className="badge bg-success bg-opacity-10 border border-success border-opacity-25 text-green-600 fw-medium py-1.5 px-2"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover"><i
                                            className="fa fa-check-circle"></i> Finalized</span></div>
                                </div>


                                <div className="row mb-4">
                                    <div className="col-md-3 text-dt mb-2 mb-md-0">
                                        <i className="far fa-question-circle me-1" data-bs-container="body"
                                            data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                            data-original-title="" title=""
                                            data-bs-content="The date and time at which a block is produced."></i>
                                        Timestamp:
                                    </div>
                                    <div className="col-md-9">
                                        <i className="far fa-clock small"></i>
                                        2 hrs 2 mins ago (<span id="showUtcLocalDate"
                                            data-timestamp="1682863787">Apr-30-2023 02:09:47 PM +UTC</span>)
                                    </div>
                                </div>


                                <div id="ContentPlaceHolder1_divhSlotEpoch" className="row mb-4">
                                    <div className="col-md-3 text-dt mb-2 mb-md-0">
                                        <i className="far fa-question-circle me-1" data-bs-container="body"
                                            data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                            data-original-title="" title=""
                                            data-bs-content="Slot and epoch this block is proposed on."></i> Proposed On:
                                    </div>
                                    <div className="col-md-9">
                                        Block proposed on slot <a href="https://beaconscan.com/slot/6336647"
                                            target="_blank">6336647</a>, epoch <a href="https://beaconscan.com/epoch/198020"
                                                target="_blank">198020</a>
                                    </div>
                                </div>




                                <div id="ContentPlaceHolder1_div_tx_fieldname">
                                    <div className="row">
                                        <div className="col-md-3 text-dt mb-2 mb-md-0">
                                            <i className="far fa-question-circle me-1" data-bs-container="body"
                                                data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                                data-original-title="" title=""
                                                data-bs-content="The number of transactions in the block. Internal transaction is transactions as a result of contract execution that involves Ether value."></i>
                                            Transactions:
                                        </div>
                                        <div id="ContentPlaceHolder1_div_tx_fieldvalue" className="col-md-9">
                                            <a href="https://etherscan.io/txs?block=17159364" data-bs-toggle="tooltip"
                                                data-bs-trigger="hover">127 transactions</a> and <a
                                                    href="https://etherscan.io/txsInternal?block=17159364"
                                                    data-bs-toggle="tooltip" data-bs-trigger="hover">81 contract internal
                                                transactions</a> in this block
                                        </div>
                                    </div>
                                </div>


                                <div id="ContentPlaceHolder1_div_withdrawal_fieldname" className="mt-4">
                                    <div className="row">
                                        <div className="col-md-3 text-dt mb-2 mb-md-0">
                                            <i className="far fa-question-circle me-1" data-bs-container="body"
                                                data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                                data-original-title="" title=""
                                                data-bs-content="Number of beacon withdrawals in this block"></i>
                                            Withdrawals:
                                        </div>
                                        <div id="ContentPlaceHolder1_div_withdrawal_fieldvalue" className="col-md-9">
                                            <a href="https://etherscan.io/txsBeaconWithdrawal?block=17159364"
                                                data-bs-toggle="tooltip" data-bs-trigger="hover">16 withdrawals</a> in this
                                            block
                                        </div>
                                    </div>
                                </div>

                                <hr className="opacity-75 my-5" />

                                <div className="row mb-4">
                                    <div className="col-md-3 text-dt mb-2 mb-md-0">
                                        <i className="far fa-question-circle me-1" data-bs-container="body"
                                            data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                            data-original-title="" title=""
                                            data-bs-content="Address receiving fees from transactions in this block"></i>
                                        Fee Recipient:
                                    </div>
                                    <div className="col-md-9">
                                        <a
                                            href="https://etherscan.io/address/0xd83da1d73cfa6759fd1fbf185c9b0b7a19866759">0xD83da1d73cFA6759fD1fBF185c9b0b7A19866759</a>
                                        <a className="js-clipboard link-secondary " href="javascript:;"
                                            data-clipboard-text="0xD83da1d73cFA6759fD1fBF185c9b0b7A19866759"
                                            data-bs-toggle="tooltip"
                                            data-hs-clipboard-options="{ &quot;type&quot;: &quot;tooltip&quot;, &quot;successText&quot;: &quot;Copied!&quot;, &quot;classChangeTarget&quot;: &quot;#linkIcon_1&quot;, &quot;defaultClass&quot;: &quot;fa-copy&quot;, &quot;successClass&quot;: &quot;fa-check&quot; }"
                                            aria-label="Copy Address"><i id="linkIcon_1" className="far fa-copy fa-fw"></i>
                                        </a>in 12 secs
                                    </div>
                                </div>


                                <div className="row mb-4">
                                    <div className="col-md-3 text-dt mb-2 mb-md-0">
                                        <i className="far fa-question-circle me-1" data-bs-container="body"
                                            data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                            data-original-title="" title=""
                                            data-bs-content="For each block, the block producer is rewarded with a finite amount of Ether on top of the fees paid for all transactions in the block."></i>
                                        Block Reward:
                                    </div>
                                    <div className="col-md-9">
                                        0<b>.</b>022052125887457811 ETH (<span
                                            // rel="tooltip" data-bs-toggle="tooltip"
                                            data-bs-trigger="hover" data-bs-placement="bottom"
                                        >0</span> + <span
                                            // rel="tooltip" data-bs-toggle="tooltip" data-bs-trigger="hover"
                                            // data-bs-placement="bottom">0.993963253187934263</span><span 
                                            // rel="tooltip"
                                            data-bs-toggle="tooltip" data-bs-trigger="hover"
                                            data-bs-placement="bottom"> -
                                            0.971911127300476452</span>)
                                    </div>
                                </div>






                                <div className="row mb-4">
                                    <div className="col-md-3 text-dt mb-2 mb-md-0">
                                        <i className="far fa-question-circle me-1" data-bs-container="body"
                                            data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                            data-original-title="" title=""
                                            data-bs-content="Total difficulty of the chain until this block."></i> Total
                                        Difficulty:
                                    </div>
                                    <div className="col-md-9">
                                        58,750,003,716,598,352,816,469
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-3 text-dt mb-2 mb-md-0">
                                        <i className="far fa-question-circle me-1" data-bs-container="body"
                                            data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                            data-original-title="" title=""
                                            data-bs-content="The block size is actually determined by the block's gas limit."></i>
                                        Size:
                                    </div>
                                    <div className="col-md-9">
                                        187,852 bytes
                                    </div>
                                </div>

                                <hr className="opacity-75 my-5" />

                                <div className="row align-items-center mb-4">
                                    <div className="col-md-3 text-dt mb-2 mb-md-0">
                                        <i className="far fa-question-circle me-1" data-bs-container="body"
                                            data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                            data-original-title="" title=""
                                            data-bs-content="The total gas used in the block and its percentage of gas filled in the block."></i>
                                        Gas Used:
                                    </div>
                                    <div className="col-md-9 d-flex align-items-center">
                                        18,321,746 <span className="text-muted"> (61.07%)</span>
                                        <div className="d-flex align-items-center"><span id="gasTargetChart"
                                            data-highcharts-chart="0"
                                            style={{ overflow: "hidden" }}>
                                            {/* <div id="highcharts-dqdimuy-0"
                                                style="position: relative; overflow: hidden; width: 80px; height: 40px; text-align: left; line-height: normal; z-index: 0; user-select: none; touch-action: manipulation; outline: currentcolor none medium; left: 0.75px; top: 0px;"
                                                dir="ltr" className="highcharts-container "><svg version="1.1"
                                                    className="highcharts-root"
                                                    style="font-family: &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif; font-size: 12px;"
                                                    xmlns="http://www.w3.org/2000/svg" width="80" height="40"
                                                    viewBox="0 0 80 40" role="img" aria-label="">
                                                    <desc>Created with Highcharts 10.2.1</desc>
                                                    <defs>
                                                        <clipPath id="highcharts-dqdimuy-2-">
                                                            <rect x="0" y="0" width="80" height="40" fill="none"></rect>
                                                        </clipPath>
                                                        <clipPath id="highcharts-dqdimuy-3-">
                                                            <rect x="0" y="0" width="80" height="62.83185307179586"
                                                                fill="none"></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <rect fill="#ffffff" className="highcharts-background" x="0" y="0"
                                                        width="80" height="40" rx="0" ry="0"></rect>
                                                    <rect fill="none" className="highcharts-plot-background" x="0" y="0"
                                                        width="80" height="40"></rect>
                                                    <g className="highcharts-pane-group" data-z-index="0">
                                                        <path fill="#EEE"
                                                            d="M 20 27.999999999999996 A 20 20 0 0 1 59.999990000000835 27.98000000333334 L 51.9999940000005 27.988000002000007 A 12 12 0 0 0 28 28 Z"
                                                            className="highcharts-pane " stroke="#cccccc" stroke-width="1">
                                                        </path>
                                                    </g>
                                                    <g className="highcharts-grid highcharts-yaxis-grid highcharts-radial-axis-grid"
                                                        data-z-index="1">
                                                        <path fill="none" stroke-dasharray="none" data-z-index="1"
                                                            className="highcharts-grid-line"
                                                            d="M 28 27.999999999999996 L 20 27.999999999999996"
                                                            opacity="1"></path>
                                                        <path fill="none" stroke-dasharray="none" data-z-index="1"
                                                            className="highcharts-grid-line"
                                                            d="M 52 28.000000000000004 L 60 28.000000000000007"
                                                            opacity="1"></path>
                                                    </g>
                                                    <rect fill="none" className="highcharts-plot-border" data-z-index="1"
                                                        x="0" y="0" width="80" height="40"></rect>
                                                    <g className="highcharts-axis highcharts-yaxis highcharts-radial-axis"
                                                        data-z-index="2">
                                                        <path fill="none" className="highcharts-axis-line" data-z-index="7"
                                                            d="M 20 27.999999999999996 A 20 20 0 0 1 59.999990000000835 27.980000003333334 M 40 28 A 0 0 0 0 0 40 28">
                                                        </path>
                                                    </g>
                                                    <g className="highcharts-series-group" data-z-index="3">
                                                        <g className="highcharts-series highcharts-series-0 highcharts-solidgauge-series highcharts-tracker"
                                                            data-z-index="0.1" opacity="1"
                                                            transform="translate(0,0) scale(1 1)"
                                                            clip-path="url(#highcharts-dqdimuy-3-)">
                                                            <path fill="rgb(85,191,59)"
                                                                d="M 20 27.999999999999996 A 20 20 0 0 1 46.7559374052841 9.175619272446621 L 44.05356244317046 16.70537156346797 A 12 12 0 0 0 28 28 Z"
                                                                sweep-flag="0" stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                className="highcharts-point highcharts-color-0"></path>
                                                        </g>
                                                        <g className="highcharts-markers highcharts-series-0 highcharts-solidgauge-series"
                                                            data-z-index="0.1" opacity="1"
                                                            transform="translate(0,0) scale(1 1)" clip-path="none"></g>
                                                    </g>
                                                    <text x="40" text-anchor="middle" className="highcharts-title"
                                                        data-z-index="4"
                                                        style="color: rgb(51, 51, 51); font-size: 18px; fill: rgb(51, 51, 51);"
                                                        y="24"></text><text x="40" text-anchor="middle"
                                                        className="highcharts-subtitle" data-z-index="4"
                                                        style="color: rgb(102, 102, 102); fill: rgb(102, 102, 102);"
                                                        y="24"></text><text x="10" text-anchor="start"
                                                        className="highcharts-caption" data-z-index="4"
                                                        style="color: rgb(102, 102, 102); fill: rgb(102, 102, 102);"
                                                        y="37"></text>
                                                    <g className="highcharts-legend highcharts-no-tooltip" data-z-index="7"
                                                        visibility="hidden">
                                                        <rect fill="none" className="highcharts-legend-box" rx="0" ry="0"
                                                            x="0" y="0" width="8" height="8"></rect>
                                                        <g data-z-index="1">
                                                            <g></g>
                                                        </g>
                                                    </g>
                                                    <g className="highcharts-axis-labels highcharts-yaxis-labels highcharts-radial-axis-labels"
                                                        data-z-index="7"></g>
                                                </svg></div> */}
                                        </span><span id="gasTargetText" className="text-success">+22% Gas Target</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="row mb-4">
                                    <div className="col-md-3 text-dt mb-2 mb-md-0">
                                        <i className="far fa-question-circle me-1" data-bs-container="body"
                                            data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                            data-original-title="" title=""
                                            data-bs-content="Total gas limit provided by all transactions in the block."></i>
                                        Gas Limit:
                                    </div>
                                    <div className="col-md-9">
                                        30,000,000
                                    </div>
                                </div>


                                <div className="row mb-4">
                                    <div className="col-md-3 text-dt mb-2 mb-md-0"><i className="far fa-question-circle me-1"
                                        data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="hover"
                                        data-bs-placement="top" data-original-title="" title=""
                                        data-bs-content="Post-London Upgrade, this represents the minimum gasUsed multiplier required for a tx to be included in a block. "></i>
                                        Base Fee Per Gas:</div>
                                    <div className="col-md-9">0<b>.</b>000000053046861762 ETH <span
                                        className="text-muted">(53<b>.</b>046861762 Gwei)</span></div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-3 text-dt mb-2 mb-md-0"><i className="far fa-question-circle me-1"
                                        data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="hover"
                                        data-bs-placement="top" data-original-title="" title=""
                                        data-bs-content="Post-London Upgrade, this represents the part of the tx fee that is burnt:&nbsp;baseFeePerGas * gasUsed."></i>
                                        Burnt Fees:</div>
                                    <div className="col-md-9">🔥 0<b>.</b>971911127300476452 ETH</div>
                                </div>


                                <div id="ContentPlaceHolder1_divExtraData" className="row">
                                    <div className="col-md-3 text-dt mb-2 mb-md-0">
                                        <i className="far fa-question-circle me-1" data-bs-container="body"
                                            data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                            data-original-title="" title=""
                                            data-bs-content="Any data that can be included by the block producer in the block."></i>
                                        Extra Data:
                                    </div>
                                    <div className="col-md-9">
                                        ؃�geth�go1.20.3�linux (Hex:0xd883010b06846765746888676f312e32302e33856c696e7578)
                                    </div>
                                </div>



                            </div>

                            <div className="card p-5 mb-3">
                                <div className="collapse" id="collapseContent">

                                    <div className="row mb-4">
                                        <div className="col-md-3 text-dt mb-2 mb-md-0">
                                            <i className="far fa-question-circle me-1" data-bs-container="body"
                                                data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                                data-original-title="" title=""
                                                data-bs-content="The hash of the block header of the current block."></i>
                                            Hash:
                                        </div>
                                        <div className="col-md-9">
                                            0x54eda8b2ea7912f52b0e527995819c3199adca974746c60fc6502461b662211b
                                        </div>
                                    </div>


                                    <div className="row mb-4">
                                        <div className="col-md-3 text-dt mb-2 mb-md-0">
                                            <i className="far fa-question-circle me-1" data-bs-container="body"
                                                data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                                data-original-title="" title=""
                                                data-bs-content="The hash of the block from which this block was generated, also known as its parent block."></i>
                                            Parent Hash:
                                        </div>
                                        <div className="col-md-9">
                                            <a
                                                href="https://etherscan.io/block/0x8f6080a8d0562bd61eca40274331db50fafcd14596174ee5c2af1a257df84d99">0x8f6080a8d0562bd61eca40274331db50fafcd14596174ee5c2af1a257df84d99</a>
                                        </div>
                                    </div>




                                    <div className="row mb-4">
                                        <div className="col-md-3 text-dt mb-2 mb-md-0">
                                            <i className="far fa-question-circle me-1" data-bs-container="body"
                                                data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                                data-original-title="" title=""
                                                data-bs-content="The root of the state trie"></i> StateRoot:
                                        </div>
                                        <div className="col-md-9">
                                            0xc035c42de3728d506002343032b43ca5c6229cd60bd914f7105976ebd32fb6e9
                                        </div>
                                    </div>


                                    <div id="ContentPlaceHolder1_div_withdrawalRoot_fieldname" className="row mb-4">
                                        <div className="col-md-3 text-dt mb-2 mb-md-0">
                                            <i className="far fa-question-circle me-1" data-bs-container="body"
                                                data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                                data-original-title="" title=""
                                                data-bs-content="Block header withdrawal root hash"></i> WithdrawalsRoot:
                                        </div>
                                        <div className="col-md-9">
                                            0xe1a81a85b3385262eb7ffb9a76baad02d30a1ec186dfcb63a093d676349306d8
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-3 text-dt mb-2 mb-md-0">
                                            <i className="far fa-question-circle me-1" data-bs-container="body"
                                                data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top"
                                                data-original-title="" title=""
                                                data-bs-content="Block nonce is a value used during mining to demonstrate proof of work for a block."></i>
                                            Nonce:
                                        </div>
                                        <div className="col-md-9">
                                            0x0000000000000000
                                        </div>
                                    </div>

                                    <hr className="opacity-75 my-5" />
                                </div>

                                <div id="ContentPlaceHolder1_collapsedLink_span">
                                    <a className="link-collapse collapsed" id="collapsedLink" href="#collapseContent"
                                        data-bs-toggle="collapse" role="button" aria-expanded="false"
                                        aria-controls="collapseContent">
                                        <div className="row">
                                            <div className="col col-md-3 text-dt">More Details:</div>
                                            <div className="col-auto text-end text-md-start">
                                                <span className="link-collapse-default">
                                                    <i className="fa fa-plus"></i> Click to show more
                                                </span>
                                                <span className="link-collapse-active">
                                                    <i className="far fa-minus"></i> Click to show less
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="consensusinfo" role="tabpanel" aria-labelledby="consensusinfo-tab"
                        tabIndex={0}>
                        <div className="card p-5 mb-3">

                            <div className="row mb-4">
                                <div className="col-md-3 text-dt mb-2 mb-md-0">
                                    <i className="far fa-question-circle me-1" data-bs-container="body" data-bs-toggle="popover"
                                        data-bs-trigger="hover" data-bs-placement="top" data-original-title="" title=""
                                        data-bs-content="The slot for which this block is created."></i> Slot:
                                </div>
                                <div className="col-md-9">
                                    <a href="https://beaconscan.com/slot/6336647" target="_blank">6336647 <i
                                        className="far fa-arrow-up-right-from-square text-secondary small"></i></a>
                                </div>
                            </div>


                            <div className="row mb-4">
                                <div className="col-md-3 text-dt mb-2 mb-md-0">
                                    <i className="far fa-question-circle me-1" data-bs-container="body" data-bs-toggle="popover"
                                        data-bs-trigger="hover" data-bs-placement="top" data-original-title="" title=""
                                        data-bs-content="The epoch of the current slot."></i> Epoch:
                                </div>
                                <div className="col-md-9">
                                    <a href="https://beaconscan.com/epoch/198020" target="_blank">198020 <i
                                        className="far fa-arrow-up-right-from-square text-secondary small"></i></a>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-3 text-dt mb-2 mb-md-0">
                                    <i className="far fa-question-circle me-1" data-bs-container="body" data-bs-toggle="popover"
                                        data-bs-trigger="hover" data-bs-placement="top" data-original-title="" title=""
                                        data-bs-content="The Proposer of the current block."></i> Proposer Index:
                                </div>
                                <div className="col-md-9">
                                    <a href="https://beaconscan.com/validator/7615" target="_blank">7615 <i
                                        className="far fa-arrow-up-right-from-square text-secondary small"></i></a>
                                </div>
                            </div>

                            <hr className="opacity-75 my-5" />

                            <div className="row mb-4">
                                <div className="col-md-3 text-dt mb-2 mb-md-0">
                                    <i className="far fa-question-circle me-1" data-bs-container="body" data-bs-toggle="popover"
                                        data-bs-trigger="hover" data-bs-placement="top" data-original-title="" title=""
                                        data-bs-content="32 byte root hash of the current slot."></i> Slot Root Hash:
                                </div>
                                <div className="col-md-9">
                                    0xb9c315acb8c4de1cbce1e6202b3bab7df773f0d9299257a3c145fdeae3a9b4b3
                                </div>
                            </div>


                            <div className="row mb-4">
                                <div className="col-md-3 text-dt mb-2 mb-md-0">
                                    <i className="far fa-question-circle me-1" data-bs-container="body" data-bs-toggle="popover"
                                        data-bs-trigger="hover" data-bs-placement="top" data-original-title="" title=""
                                        data-bs-content="Number of successful deposits on the deposit contract so far."></i>
                                    Beacon Chain Deposit Count:
                                </div>
                                <div className="col-md-9">
                                    633852
                                </div>
                            </div>


                            <div className="row mb-4">
                                <div className="col-md-3 text-dt mb-2 mb-md-0">
                                    <i className="far fa-question-circle me-1" data-bs-container="body" data-bs-toggle="popover"
                                        data-bs-trigger="hover" data-bs-placement="top" data-original-title="" title=""
                                        data-bs-content="32 bytes for validators to decorate as they choose with no defined in-protocol use."></i>
                                    Slot Graffiti:
                                </div>
                                <div className="col-md-9">
                                    ⌐◨-◨ (Hex:0xe28c90e297a82de297a800000000000000000000000000000000000000000000)
                                </div>
                            </div>


                            <div className="row mb-4">
                                <div className="col-md-3 text-dt mb-2 mb-md-0">
                                    <i className="far fa-question-circle me-1" data-bs-container="body" data-bs-toggle="popover"
                                        data-bs-trigger="hover" data-bs-placement="top" data-original-title="" title=""
                                        data-bs-content="Source of randomness from the beacon chain RANDAO implementation."></i>
                                    Block Randomness:
                                </div>
                                <div className="col-md-9">
                                    0xd31322252051ca0c62082304ac983007652478c5bd9a838979d5ea1d4abbb66c
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-3 text-dt mb-2 mb-md-0">
                                    <i className="far fa-question-circle me-1" data-bs-container="body" data-bs-toggle="popover"
                                        data-bs-trigger="hover" data-bs-placement="top" data-original-title="" title=""
                                        data-bs-content="The signature of the current epoch by the block proposer. Constitutes the seed for randomness when mixed in with the other proposers’ reveals."></i>
                                    Randao Reveal:
                                </div>
                                <div className="col-md-9">
                                    0x8b6cdbcbd56918dcc01a5121a2a5315f141cb8aee8bc960d7b1243c8f0be828582bef7931bca39df9fe77ce978ca0c2e0f7229e5d0e2037af2f3196edc4a9482b94297d2f9dc0cbdbaaadb2e791cfd54dd38d0546912b33c6857a11ce7349e82
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="mevinfo" role="tabpanel" aria-labelledby="mevinfo-tab" tabIndex={0}>
                        <div className="card p-5 mb-3">

                            <div className="row mb-4">
                                <div className="col-md-3 text-dt mb-2 mb-md-0">
                                    :
                                </div>
                                <div className="col-md-9">
                                </div>
                            </div>


                            <div className="row mb-4">
                                <div className="col-md-3 text-dt mb-2 mb-md-0">
                                    :
                                </div>
                                <div className="col-md-9">
                                </div>
                            </div>


                            <div className="row mb-4">
                                <div className="col-md-3 text-dt mb-2 mb-md-0">
                                    :
                                </div>
                                <div className="col-md-9">
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="comments" role="tabpanel"
                        aria-labelledby="comment-tab" tabIndex={0}>
                        <div className="card p-5 mb-3">
                            Make sure to use the "Vote Down" button for any spammy posts, and the "Vote Up" for interesting
                            conversations.<br />
                            <div id="disqus_thread"></div>
                            <script type="text/javascript">
                                var disqus_shortname = 'Etherscan';
                                var disqus_identifier = 'Etherscan_BlockNo_17159364_Comments';
                                var disqus_title = 'Block No 17159364';
                                var disqus_url = 'https://etherscan.io/block/17159364#disqus';
                            </script>
                            <noscript>
                                Please enable JavaScript to view the <a href='https://disqus.com/?ref_noscript'
                                    rel='nofollow'>comments powered by Disqus</a>.
                            </noscript>
                        </div>
                    </div>
                </div>


                <div className="mt-4">
                    <p className="d-flex align-items-baseline fs-sm text-muted gap-1 mb-3">
                        <i className="far fa-lightbulb-on"></i>
                        <span>
                            Blocks are batches of transactions linked via cryptographic hashes. Any
                            tampering of a block would invalidate all following blocks as all
                            subsequent hashes would change. Learn more about this page in our <a target="_blank"
                                href="https://info.etherscan.com/exploring-block-details-page/">Knowledge Base</a>.
                        </span>
                    </p>
                </div>

            </section>
        </>
    )
}