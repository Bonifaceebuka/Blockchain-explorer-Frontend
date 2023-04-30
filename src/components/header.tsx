import React from 'react'
import TopMostNav from './topMostNav'

export default function Header() {
    return (
      <>
            <TopMostNav />
            <header id="masterHeader" className="header border-bottom d-print-none">
                <nav className="navbar navbar-expand-lg navbar-light py-3 py-lg-0">
                    <div className="container-xxl position-relative">
                        <a className="navbar-brand" href="https://etherscan.io/" target="_parent" aria-label="Etherscan">
                            <img data-img-theme="light" src="/assets/images/svg/logo-etherscan.svg"
                                alt="Etherscan Logo" width="150"/>
                                <img data-img-theme="darkmode"
                                    src="/assets/images/svg/logo-etherscan-light.svg"
                                    alt="Etherscan Logo" width="150"/>
                                </a>
                                <div className="d-flex align-items-center gap-4">
                                    <a className="link-dark d-block d-lg-none" href="https://etherscan.io/login">
                                        <i className="far fa-user-circle me-1"></i> Sign In
                                    </a>
                                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <div className="navbar-collapse justify-content-end collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav gap-1 gap-lg-0 pt-4 pt-lg-0">
                                        <li className="nav-item">
                                            <a href="https://etherscan.io/" id="LI_default" className="nav-link active" aria-current="page">
                                                Home
                                            </a>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a href="#" id="LI_blockchain" 
                                            className="nav-link dropdown-toggle" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">Blockchain <span className="caret"></span></a>
                                            <ul className="dropdown-menu dropdown-menu-border" style={{minWidth: "14rem"}}>
                                                <li>
                                                    <a href="https://etherscan.io/txs" id="LI12" className="dropdown-item">
                                                        Transactions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/txsPending" id="LI16" className="dropdown-item">
                                                        Pending Transactions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/txsInternal" id="LI14" className="dropdown-item">
                                                        Contract Internal Transactions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/txsBeaconDeposit" id="LI22" className="dropdown-item">
                                                        Beacon Deposits
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/txsBeaconWithdrawal" id="LI_BeaconWithdrawals"
                                                        className="dropdown-item">
                                                        Beacon Withdrawals
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/blocks" id="LI_blocks" className="dropdown-item">
                                                        View Blocks
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/blocks_forked" id="LI_blocks2" className="dropdown-item">
                                                        Forked Blocks (Reorgs)
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/uncles" id="LI8" className="dropdown-item">
                                                        Uncles
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/accounts" id="LI_accountall" className="dropdown-item">
                                                        Top Accounts
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/contractsVerified" id="LI_contract_verified"
                                                        className="dropdown-item">
                                                        Verified Contracts
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>


                                        <li className="nav-item dropdown">
                                            <a href="#" id="LI_tokens" className="nav-link dropdown-toggle" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">Tokens 
                                                <span className="caret"></span>
                                                </a>
                                            <ul className="dropdown-menu dropdown-menu-border" 
                                            style={{minWidth: "14rem"}}>
                                                <li>
                                                    <a href="https://etherscan.io/tokens" id="LI21" className="dropdown-item">
                                                        Top Tokens <span className="small text-muted">(ERC-20)</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/tokentxns" id="LI1" className="dropdown-item">
                                                        Token Transfers <span className="small text-muted">(ERC-20)</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>


                                        <li className="nav-item dropdown">
                                            <a href="#" id="LI_Nfts" className="nav-link dropdown-toggle" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">NFTs <span className="caret"></span></a>
                                            <ul className="dropdown-menu dropdown-menu-border" 
                                            style={{minWidth: "14rem"}}>
                                                <li>
                                                    <a href="https://etherscan.io/nft-top-contracts" id="LI63" className="dropdown-item">
                                                        Top NFTs
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/nft-trades" id="LI64" className="dropdown-item">
                                                        Latest Trades
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/nft-transfers" id="LI65" className="dropdown-item">
                                                        Latest Transfers
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/nft-latest-mints" id="LI66" className="dropdown-item">
                                                        Latest Mints
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>




                                        <li className="nav-item dropdown">
                                            <a href="#" id="LI_resources" className="nav-link dropdown-toggle" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">Resources <span className="caret"></span></a>
                                            <ul className="dropdown-menu dropdown-menu-border" style={{minWidth: "14rem"}}>
                                                <li>
                                                    <a href="https://etherscan.io/charts" id="LI_charts2" className="dropdown-item">
                                                        Charts And Stats
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/topstat" id="LI_topstat" className="dropdown-item">
                                                        Top Statistics
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/directory" id="LI62" className="dropdown-item">
                                                        Directory
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://info.etherscan.com/etherscan-newsletters/" id="LI60"
                                                        className="dropdown-item">
                                                        Newsletter
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://info.etherscan.com/" id="LI61" className="dropdown-item">
                                                        Knowledge Base
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>


                                        <li className="nav-item dropdown">
                                            <a href="#" id="li_developers" className="nav-link dropdown-toggle" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">Developers <span className="caret"></span></a>
                                            <ul className="dropdown-menu dropdown-menu-border" style={{minWidth: "14rem"}}>
                                                <li>
                                                    <a href="https://etherscan.io/apis" id="LI5" className="dropdown-item">
                                                        API Plans
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://docs.etherscan.io/" id="LI6" className="dropdown-item" target="_blank">
                                                        API Documentation
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/verifyContract" id="LI17" className="dropdown-item">
                                                        Verify Contract
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/searchcontract" id="LI53" className="dropdown-item">
                                                        Smart Contract Search
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/contractdiffchecker" id="LI54" className="dropdown-item">
                                                        Contract Diff Checker
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/vyper" id="LI27" className="dropdown-item">
                                                        Vyper Online Compiler
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/opcode-tool" id="LI24" className="dropdown-item">
                                                        Bytecode to Opcode
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://etherscan.io/pushTx" id="LI10" className="dropdown-item">
                                                        Broadcast Transaction
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>


                                        <li className="nav-item dropdown position-initial">
                                            <a href="#" id="LI_services2" 
                                            className="nav-link dropdown-toggle" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">More <span className="caret"></span></a>
                                            <div className="dropdown-menu dropdown-menu-border dropdown-menu-mega">
                                                <div className="row">
                                                    <div className="col-lg order-last order-lg-first">
                                                        <div className="d-flex flex-column bg-light h-100 rounded-3 p-5">
                                                            <div>
                                                                <h6>Tools &amp; Services</h6>
                                                                <p>Discover more of Etherscan's tools and services in one place.</p>
                                                            </div>
                                                            <div className="mt-auto">
                                                                <p className="text-muted mb-2">Sponsored</p>
                                                                <a target="_blank" href="https://chat.blockscan.com/">
                                                                    <img data-img-theme="light"
                                                                        src="Ethereum%20(ETH)%20Blockchain%20Explorer_files/blockscan-logo-dark.svg"
                                                                        alt="" width="100"/>
                                                                        <img data-img-theme="dark"
                                                                            src="Ethereum%20(ETH)%20Blockchain%20Explorer_files/blockscan-logo-light.svg"
                                                                            alt="" width="100"/>
                                                                        </a>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm py-5">
                                                            <h6 className="px-3 mb-3">Tools</h6>
                                                            <ul className="list-unstyled">
                                                                <li>
                                                                    <a href="https://etherscan.io/unitconverter" id="LI50"
                                                                        className="dropdown-item">
                                                                        <i
                                                                            className="far fa-arrows-rotate dropdown-item-icon fa-fw me-1"></i>Unit
                                                                        Converter
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm py-5">
                                                            <h6 className="px-3 mb-3">Explore</h6>
                                                            <ul className="list-unstyled">
                                                                <li>
                                                                    <a href="https://etherscan.io/gastracker" id="LI19"
                                                                        className="dropdown-item">
                                                                        <i className="far fa-gas-pump dropdown-item-icon fa-fw me-1"></i>Gas
                                                                        Tracker
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://etherscan.io/dex" id="LI4" className="dropdown-item">
                                                                        <i
                                                                            className="far fa-arrow-right-arrow-left dropdown-item-icon fa-fw me-1"></i>DEX
                                                                        Tracker
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://etherscan.io/nodetracker" id="LI46"
                                                                        className="dropdown-item">
                                                                        <i className="far fa-server dropdown-item-icon fa-fw me-1"></i>Node
                                                                        Tracker
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://etherscan.io/labelcloud" id="LI41"
                                                                        className="dropdown-item">
                                                                        <i className="far fa-signs-post dropdown-item-icon fa-fw me-1"></i>Label
                                                                        Cloud
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://etherscan.io/name-lookup" id="LI26"
                                                                        className="dropdown-item">
                                                                        <i
                                                                            className="far fa-magnifying-glass-chart dropdown-item-icon fa-fw me-1"></i>Domain
                                                                        Name Lookup
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm py-5">
                                                            <h6 className="px-3 mb-3">Services</h6>
                                                            <ul className="list-unstyled">
                                                                <li>
                                                                    <a href="https://etherscan.io/tokenapprovalchecker" id="LI49"
                                                                        className="dropdown-item">
                                                                        <i
                                                                            className="far fa-shield-keyhole dropdown-item-icon fa-fw me-1"></i>Token
                                                                        Approvals <span className="badge border bg-light text-muted">Beta</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://etherscan.io/verifiedSignatures" id="LI29"
                                                                        className="dropdown-item">
                                                                        <i
                                                                            className="far fa-signature-lock dropdown-item-icon fa-fw me-1"></i>Verified
                                                                        Signature
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="https://chat.blockscan.com/"
                                                                        target="_blank">
                                                                        <i
                                                                            className="far fa-messages dropdown-item-icon fa-fw me-1"></i>Blockscan
                                                                        Chat <i
                                                                            className="far fa-arrow-up-right-from-square text-muted ms-1"></i>
                                                                        <span className="badge border bg-light text-muted">Beta</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                        </li>

                                        <li className="nav-item dropdown d-block d-lg-none">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">Explorers</a>
                                            <ul className="dropdown-menu dropdown-menu-border" style={{minWidth: "14rem"}}>
                                                <li>
                                                    <a href="https://etherscan.io/" id="LI_Mainnet_1"
                                                        className="dropdown-item active active active">
                                                        Ethereum Mainnet
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://cn.etherscan.com/?lang=zh-CN" id="LI_Mainnet_CN_1"
                                                        className="dropdown-item">
                                                        Ethereum Mainnet <span className="badge border bg-light text-dark ms-1">CN</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://beaconscan.com/" id="LI77" className="dropdown-item">
                                                        Beaconscan <span className="badge border bg-light text-dark ms-1">ETH2</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li>
                                                    <a href="https://goerli.etherscan.io/" id="LI78" className="dropdown-item">
                                                        Goerli Testnet
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://sepolia.etherscan.io/" id="LI79" className="dropdown-item">
                                                        Sepolia Testnet
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown d-block d-lg-none">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">Appearance &amp; Settings</a>
                                            <ul className="dropdown-menu dropdown-menu-border" style={{minWidth: "14rem"}}>
                                                <li>
                                                    <button type="button" className="dropdown-item theme-btn" data-bs-theme-value="light"
                                                        // onclick="setThemeMode('light');"
                                                        >
                                                        <i className="far fa-sun-bright fa-fw dropdown-item-icon theme-icon me-1"
                                                            data-href="#fa-sun-bright"></i> Light
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" className="dropdown-item theme-btn" data-bs-theme-value="dim"
                                                        // onclick="setThemeMode('dim');"
                                                        >
                                                        <i className="far fa-moon-stars fa-fw dropdown-item-icon theme-icon me-1"
                                                            data-href="#fa-moon-stars"></i> Dim
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" className="dropdown-item theme-btn" data-bs-theme-value="dark"
                                                        // onclick="setThemeMode('dark');"
                                                        >
                                                        <i className="far fa-moon-stars fa-fw dropdown-item-icon theme-icon me-1"
                                                            data-href="#fa-moon"></i> Dark
                                                    </button>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="https://etherscan.io/settings">
                                                        <i className="far fa-gear fa-fw dropdown-item-icon me-1"></i> Site Settings <i
                                                            className="far fa-arrow-right ms-1"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item align-self-center d-none d-lg-block">
                                            <span className="text-secondary">|</span>
                                        </li>
                                        <li className="nav-item d-none d-lg-block">
                                            <a className="nav-link" href="https://etherscan.io/login">
                                                <i className="far fa-user-circle me-1"></i> Sign In
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                </>
                )
}
