import React from 'react'

export default function TopMostNav() {
    return (
        <>
            <section id="masterTopBar" className="d-none d-lg-block sticky-top bg-white border-bottom py-1">
                <div className="container-xxl d-flex align-items-center justify-content-between">
                    <div id="ethPrice" className="d-flex align-items-sm-center gap-4 w-100 fs-sm">
                        <div className="text-muted"><span className="text-muted">ETH Price:</span> <a
                            href="#">$1,815.58</a><span data-bs-toggle="tooltip"
                                data-bs-placement="top"><span className="text-danger"> (-1.10%)</span></span></div>
                        <div className="text-muted "><i className="fa fa-gas-pump me-1"></i> Gas: <span id="spanGasTooltip"
                            data-bs-toggle="tooltip" data-bs-html="true"><a href="#"><span
                                className="gasPricePlaceHolder">38</span> Gwei</a></span></div>
                    </div>
                    <div className="d-flex justify-content-end align-items-center gap-2">
                        <div id="divThemeSetting" className="dropdown">
                            <button className="btn btn-lg btn-white text-primary content-center" type="button"
                                id="dropdownMenuTopbarSettings" data-bs-auto-close="outside" data-bs-toggle="dropdown"
                                aria-expanded="false" style={{width: "2.375rem", height: "2.375rem"}}>
                                <span className="theme-btn-main"><i className="fa fa-moon theme-icon-active"
                                    data-href="#fa-moon"></i></span>
                            </button>
                            {/* <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuTopbarSettings">
                                <li>
                                    <button type="button" className="dropdown-item theme-btn" data-bs-theme-value="light"
                                        // onclick="setThemeMode('light');"
                                        >
                                        <i className="fa fa-sun fa-fw dropdown-item-icon theme-icon me-1"
                                            data-href="#fa-sun-bright"></i> Light
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="dropdown-item theme-btn" data-bs-theme-value="dim"
                                        // onclick="setThemeMode('dim');"
                                        >
                                        <i className="fa fa-moon-stars fa-fw dropdown-item-icon theme-icon me-1"
                                            data-href="#fa-moon-stars"></i> Dim
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="dropdown-item theme-btn active" data-bs-theme-value="dark"
                                        // onclick="setThemeMode('dark');"
                                        >
                                        <i className="fa fa-moon fa-fw dropdown-item-icon theme-icon me-1"
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
                            </ul> */}
                        </div>
                        <div id="divTestNet" className="dropdown">
                            <button className="btn btn-lg btn-white content-center" type="button" id="dropdownTopbarNetworks"
                                data-bs-toggle="dropdown" aria-expanded="false" style={{width: "2.375rem", height: "2.375rem"}}>
                                <img data-img-theme="light"
                                    src="/assets/images/svg/ethereum-original.svg"
                                    alt="Ethereum Logo" width="10"/>
                                    <img data-img-theme="darkmode"
                                        src="/assets/images/svg/ethereum-original-light.svg"
                                        alt="Ethereum Logo" width="10"/>
                                    </button>
                                    {/* <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownTopbarNetworks">
                                        <li>
                                            <a href="https://etherscan.io/" id="LI_Mainnet" className="dropdown-item active active active">
                                                Ethereum Mainnet
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://cn.etherscan.com/?lang=zh-CN" id="LI_Mainnet_CN" className="dropdown-item">
                                                Ethereum Mainnet <span className="badge border bg-light text-dark ms-1">CN</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://beaconscan.com/" id="LI2" className="dropdown-item">
                                                Beaconscan <span className="badge border bg-light text-dark ms-1">ETH2</span>
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li>
                                            <a href="https://goerli.etherscan.io/" id="LI58" className="dropdown-item">
                                                Goerli Testnet
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://sepolia.etherscan.io/" id="LI9" className="dropdown-item">
                                                Sepolia Testnet
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>
                        </div>
                    </div>
            </section>
        </>
    )
}
