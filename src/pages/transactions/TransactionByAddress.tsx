import React, { useState } from 'react'

export default function TransactionByAddress() {
  return (
    <>
      <section className="container-xxl">
        <div className="d-flex flex-wrap justify-content-between align-items-center border-bottom gap-3 py-5">
          <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-wrap text-break align-items-center gap-2">
              <div className="d-flex flex-wrap align-items-center gap-2">
                <div className="d-flex align-items-center gap-2 mt-n0.5">
                  <img
                    id="icon"
                    className="rounded-circle"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADrElEQVR4Xu3dwY3UQBCF4ZlEQBzgADEgEQJ3AiEVEoAUuCIRA1wREMiCSADbf1u9LX97dpW7X/39uqbH67n/fv/24ebvsgrcAXDZ2v+bOACuXX8AXLz+AACAJvDSDOgBLl1+TeDFyw8AADgHuDYDeoBr19/HwIvXHwAAcA5waQb0AJcuv4+BFy//AAC+vvmeRHz95WWKf/LsW4qvwb9+vEopZuuXt4DZEwBAW0AASOv3duMAtoCE0GwH5QCpfBzgNptgPYAeIK7hFq4H0AMkgmY7qB4glU8PoAdwEOQksJiILcBRcOHnVo/S9QBJfj2AHkAPoAcoJqIH0AMUfub3AGn0f4NnH+XW8df4epJY75+bwDoAALQHSqr+AKgKxngOMPmRrli/HA4AAGSISgJbQFFvQCwH4AADMDqeggMc125IJAfgAENAOpqEAxxVblAcB+AAg1A6loYDHNNtWBQH4ADDYDqSiAMcUW1gDAfgAANx2p+KA+zXbGgEB+AAQ4Ham4wD7FVs8PUcgAMMRmpfOg6wT6/hV3MADjAcqj0JOcAetU64lgNwgBOw2p6SA2zX6pQrOQAHOAWsrUk5wFalTrqOA3CAk9DalpYDbNPptKs4AAc4Da4tiTnAFpVOvIYDcIAT8fp/ag7wf41OvWK6A9w/PH8oM6wTqG/IePczDb9M/V/sx6f3lKO+5Kn+e/0dAKl+AOAAHCAtIVtAe9u3LUAPkBagHiDJpwmc/ps5PgW0X03jABzAOUBhwDnA5Hfl2gJsAWUB51gOwAESRI6C449O2QJsAWkF1mBbgC0gMWQLsAUkgJb/LqBOIKn3CILrt6lVv+kngXUCj6CGaQgA8ExgAqguIA6Q5O/BHIADJIo4QJJvfjAH4ACJQg6Q5JsfzAE4QKKQAyT55gdzAA6QKOQASb75wRyAAyQKOUCSb34wB+AAiUIOkOSbH3x5B6glqCug3r8WsN6/zn/6t4GzBaj3B0B8JrAWoK6Aen8AAKAylOLrArAFJPlv+b+j4+1vAJj8MdIWYAuoizjFcwAOkADSAyT59ADLN0Gx/svPnwNEAjSBmsCIUAvXBGoCE0G2gCSfJnD5JijWf/n5c4BIwPJN4KfPL9IL92e/oyfWb/nw+oqaOwDWZgAAa9cvjx4AWcK1EwBg7frl0QMgS7h2AgCsXb88egBkCddOAIC165dHD4As4doJALB2/fLoAZAlXDsBANauXx49ALKEaycAwNr1y6MHQJZw7QQVgD9L9ZZ+9SobnAAAAABJRU5ErkJggg=="
                    alt=""
                    width="24"
                  />
                  <h1 className="h5 mb-0">Address</h1>
                </div>
              </div>
              <div>
                <span className="me-3 fs-base" style={{ lineHeight: '2' }}>
                  <span id="mainaddress">
                    0xa91822D0bd8D6B4ebd252857A690C10eFC69b073
                  </span>
                </span>
                <div
                  id="ContentPlaceHolder1_copyButtonPanel"
                  className="d-inline-flex align-items-center gap-4"
                >
                  <a
                    className="js-clipboard link-secondary"
                    href="#"
                    data-clipboard-text="0xa91822D0bd8D6B4ebd252857A690C10eFC69b073"
                    data-bs-toggle="tooltip"
                    data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_main_address", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                    id="copyaddressbutton"
                    aria-label="Copy Address"
                  >
                    <i
                      id="linkIcon_main_address"
                      className="far fa-copy fa-fw"
                    ></i>{' '}
                  </a>

                  <span id="ContentPlaceHolder1_qrcodeimg">
                    <a
                      id="target"
                      className="link-secondary"
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      aria-label="Click to view QR Code"
                    >
                      <i className="fa fa-qrcode"></i>
                    </a>
                  </span>

                  <a
                    className="link-secondary position-relative"
                    href="https://chat.blockscan.com/index?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-placement="top"
                    aria-label="Message this address on Blockscan Chat"
                  >
                    <i className="far fa-message-lines"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex gap-2">
            <div className="dropdown">
              <button
                className="btn btn-sm btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton4"
                data-bs-toggle="dropdown"
                data-bs-offset="0, 8"
                aria-expanded="false"
              >
                Buy
              </button>
              <div
                className="dropdown-menu p-4"
                aria-labelledby="dropdownMenuButton2"
                style={{ minWidth: '18rem' }}
              >
                <div className="text-end text-muted fs-80x mt-n2 mb-1">
                  Sponsored
                </div>
                <span className="text-muted">
                  <a
                    className="text-dark"
                    href="#"
                    target="_blank"
                    rel="nofollow"
                    title="Links to an External Advertiser site"
                  >
                    <div className="d-inline-flex align-items-center gap-2 mb-2">
                      <img
                        src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/bydfi_20.webp"
                        alt="ads"
                        width="24"
                      />
                      <span className="fs-6 fw-medium">BYDFI</span>
                    </div>
                    <div className="text-primary fw-medium d-inline-block mb-2">
                      Welcome Gifts Worth $2888!!
                      <span className="badge bg-primary bg-opacity-10 border border-primary border-opacity-25 text-primary fw-medium rounded-pill">
                        Sign up now!
                      </span>
                    </div>
                    <p className="mb-0">
                      Forbes' top 10 Best Crypto Exchanges of 2023 .Providing
                      Spot Trading 650+coins (like Doge&amp;ShiB ) and up to
                      150X leverage in Futures Trading.
                    </p>
                  </a>
                </span>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-sm btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton3"
                data-bs-toggle="dropdown"
                data-bs-offset="0, 8"
                aria-expanded="false"
              >
                Exchange
              </button>
              <div
                className="dropdown-menu p-4"
                aria-labelledby="dropdownMenuButton2"
                style={{ minWidth: '18rem' }}
              >
                <div className="text-end text-muted fs-80x mt-n2 mb-1">
                  Sponsored
                </div>
                <span className="text-muted">
                  <a
                    className="text-dark"
                    href="#"
                    target="_blank"
                    rel="nofollow"
                    title="Links to an External Advertiser site"
                  >
                    <div className="d-inline-flex align-items-center gap-2 mb-2">
                      <img
                        src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/cexio_20.svg"
                        alt="ads"
                        width="24"
                      />
                      <span className="fs-6 fw-medium">Cex.io</span>
                    </div>
                    <div className="text-primary fw-medium d-inline-block mb-2">
                      Exchange and buy a wide array of cryptocurrencies, in
                      minutes{' '}
                      <span className="badge bg-primary bg-opacity-10 border border-primary border-opacity-25 text-primary fw-medium rounded-pill">
                        Ready to start!
                      </span>
                    </div>
                    <p className="mb-0">
                      Use advanced trading tools, packed in a straightforward
                      interface, on CEX.IO’s Exchange Plus
                    </p>
                  </a>
                </span>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-sm btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                data-bs-offset="0, 8"
                aria-expanded="false"
              >
                Earn
              </button>
              <div
                className="dropdown-menu p-4"
                aria-labelledby="dropdownMenuButton2"
                style={{ minWidth: '18rem' }}
              >
                <div className="text-end text-muted fs-80x mt-n2 mb-1">
                  Sponsored
                </div>
                <span className="text-muted">
                  <a
                    className="text-dark"
                    href="#"
                    target="_blank"
                    rel="nofollow"
                    title="Links to an External Advertiser site"
                  >
                    <div className="d-inline-flex align-items-center gap-2 mb-2">
                      <img
                        src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/faucetpay_20.webp"
                        alt="ads"
                        width="24"
                      />
                      <span className="fs-6 fw-medium">FaucetPay.io</span>
                    </div>
                    <div className="text-primary fw-medium d-inline-block mb-2">
                      Join us and earn US$1000 every day!{' '}
                      <span className="badge bg-primary bg-opacity-10 border border-primary border-opacity-25 text-primary fw-medium rounded-pill">
                        Earn Now
                      </span>
                    </div>
                    <p className="mb-0">
                      Explore over 750 websites to earn cryptocurrencies and get
                      paid directly to your FaucetPay wallet.
                    </p>
                  </a>
                </span>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-sm btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                data-bs-offset="0, 8"
                aria-expanded="false"
              >
                Gaming
              </button>
              <div
                className="dropdown-menu p-4"
                aria-labelledby="dropdownMenuButton2"
                style={{ minWidth: '18rem' }}
              >
                <div className="text-end text-muted fs-80x mt-n2 mb-1">
                  Sponsored
                </div>
                <span className="text-muted">
                  <a
                    className="text-dark"
                    href="https://goto.etherscan.com/rd/ZXGUBTUZCCNM4R1ZVSHWWCE6X"
                    target="_blank"
                    rel="nofollow"
                    title="Links to an External Advertiser site"
                  >
                    <div className="d-inline-flex align-items-center gap-2 mb-2">
                      <img
                        src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/1xbit_20.webp"
                        alt="ads"
                        width="24"
                      />
                      <span className="fs-6 fw-medium">1xBit</span>
                    </div>
                    <div className="text-primary fw-medium d-inline-block mb-2">
                      Crypto Sportsbook &amp; Online Casino{' '}
                      <span className="badge bg-primary bg-opacity-10 border border-primary border-opacity-25 text-primary fw-medium rounded-pill">
                        Join Now!
                      </span>
                    </div>
                    <p className="mb-0">
                      Get your 7 BTC welcome package to enjoy the world of
                      gambling, which is FULLY ANONYMOUS, providing you with the
                      best games and high odds.
                    </p>
                  </a>
                </span>
                <hr className="hr-space" />
                <span className="text-muted">
                  <a
                    className="text-dark"
                    href="https://goto.etherscan.com/rd/92IWHS9GGHR9CI313QH6HP5X6"
                    target="_blank"
                    rel="nofollow"
                    title="Links to an External Advertiser site"
                  >
                    <div className="d-inline-flex align-items-center gap-2 mb-2">
                      <img
                        src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/cryptoslots.webp"
                        alt="ads"
                        width="24"
                      />
                      <span className="fs-6 fw-medium">CryptoSlots</span>
                    </div>
                    <div className="text-primary fw-medium d-inline-block mb-2">
                      Play &amp; Get 25 Free Spins at CryptoSlots{' '}
                      <span className="badge bg-primary bg-opacity-10 border border-primary border-opacity-25 text-primary fw-medium rounded-pill">
                        Play Now
                      </span>
                    </div>
                    <p className="mb-0">
                      Anonymous play on awesome games - sign up now for 25 free
                      jackpot spins - worth $100s!
                    </p>
                  </a>
                </span>
                <hr className="hr-space" />
                <span className="text-muted">
                  <a
                    className="text-dark"
                    href="https://goto.etherscan.com/rd/75FQGDVKZU5DEVEJTHXA3DXBI"
                    target="_blank"
                    rel="nofollow"
                    title="Links to an External Advertiser site"
                  >
                    <div className="d-inline-flex align-items-center gap-2 mb-2">
                      <img
                        src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/betcoin.webp"
                        alt="ads"
                        width="24"
                      />
                      <span className="fs-6 fw-medium">Betcoin.ag</span>
                    </div>
                    <div className="text-primary fw-medium d-inline-block mb-2">
                      #1 Ethereum Crypto Casino &amp; Sportsbook{' '}
                      <span className="badge bg-primary bg-opacity-10 border border-primary border-opacity-25 text-primary fw-medium rounded-pill">
                        Claim Bonus
                      </span>
                    </div>
                    <p className="mb-0">
                      Get up to 30 ETH Bonus and 10 free spins.
                      <br />
                      1,000+ Casino Games &amp; 40,000 Sports!
                    </p>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="overlayMain" className="bg-white bg-opacity-40"></div>

      <section className="container-xxl">
        <div className="py-4">
          <div className="d-flex text-muted">
            <span id="ContentPlaceHolder1_lblAdResult">
              <ins
                data-revive-zoneid="6"
                data-revive-id="6452186c83cd256052c3c100f524ed97"
                data-revive-seq="0"
                id="revive-0-0"
                data-revive-loaded="1"
                style={{ textDecoration: 'none' }}
              >
                <b>Sponsored:</b> &nbsp;
                <img src="/assets/images/ads/1inch_20.webp" />
                - No gas fees and MEV protection on <b>1inch</b> - #1 DEX
                aggregator.{' '}
                <a
                  href="https://kta.etherscan.com/www/d/cl.php?ebannerid=3765&amp;zoneid=6&amp;sig=4023c78bb0ebb838ff4bea680aea828cefc99976d3533a477adaf0f0f7450d98&amp;oadest=https%3A%2F%2Fjn3rg.app.link%2FciALAJJ1djb"
                  target="_blank"
                  rel="nofollow"
                  title="Links to an External Advertiser site"
                >
                  <b>Swap now!</b>
                </a>
                <div
                  id="beacon_6fa4340455"
                  style={{
                    position: 'absolute',
                    left: '0px',
                    top: '0px',
                    visibility: 'hidden',
                  }}
                >
                  <img
                    src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/lg.gif"
                    alt=""
                    style={{ width: '0px', height: '0px' }}
                    width="0"
                    height="0"
                  />
                </div>
              </ins>
            </span>
            &nbsp;
          </div>
        </div>
      </section>

      <section
        id="ContentPlaceHolder1_divSummary"
        className="container-xxl pb-12"
      >
        <div
          className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-2"
          style={{ marginTop: '-17px' }}
        >
          <div className="d-flex flex-wrap align-items-center gap-1">
            <div
              id="ContentPlaceHolder1_divLabels"
              className="d-flex gap-1"
            ></div>
          </div>
          <div
            id="ContentPlaceHolder1_moreoptionsdiv"
            className="d-flex align-items-center gap-1"
          >
            <a
              className="btn btn-sm btn-white"
              href="https://etherscan.io/myaddress?cmd=addnew&amp;a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073#add"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-placement="top"
              aria-label="Add Address to Watch List"
            >
              <i className="far fa-star fa-fw"></i>
            </a>
            <div className="dropdown">
              <button
                className="btn btn-sm btn-white dropdown-toggle"
                type="button"
                id="dropdownMore1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-display="static"
              >
                More
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMore1"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="https://etherscan.io/tokenapprovalchecker?search=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                  >
                    <i className="far fa-memo-circle-check fa-fw dropdown-item-icon me-1"></i>{' '}
                    Token Approvals{' '}
                    <span className="badge border bg-light text-muted">
                      Beta
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    rel="nofollow noopener"
                    className="dropdown-item"
                    href="https://etherscan.github.io/ethvalidate/address?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                    target="_blank"
                  >
                    <i className="far fa-check-double fa-fw dropdown-item-icon me-1"></i>
                    Validate Account Balance{' '}
                  </a>
                </li>
                <a
                  className="dropdown-item"
                  href="https://etherscan.io/balancecheck-tool?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                >
                  <i className="far fa-history fa-fw dropdown-item-icon me-1"></i>{' '}
                  Check Previous Balance
                </a>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://etherscan.io/contactus?id=5&amp;a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                  >
                    <i className="far fa-user-tag fa-fw dropdown-item-icon me-1"></i>{' '}
                    Update Name Tag
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://etherscan.io/contactus?id=5&amp;a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                  >
                    <i className="far fa-tags fa-fw dropdown-item-icon me-1"></i>{' '}
                    Submit Label
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://etherscan.io/contactus?id=6"
                  >
                    <i className="far fa-flag fa-fw dropdown-item-icon me-1"></i>{' '}
                    Report/Flag Address
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-5">
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                  <h3 className="h6 mb-0">Overview</h3>
                </div>
                <div>
                  <h4 className="text-cap mb-1">ETH Balance</h4>
                  <div>
                    <div>
                      <i className="fab fa-ethereum me-1 text-muted"></i>0
                      <b>.</b>022956150876252969 ETH
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-cap mb-1">Eth Value</h4>
                  $44.05{' '}
                  <span
                    className="small"
                    style={{ position: 'relative', top: '-1px' }}
                  >
                    (@ $1,918.91/ETH)
                  </span>
                </div>
                <div id="ContentPlaceHolder1_divTokenHolding">
                  <h4 className="text-cap mb-1">Token Holdings</h4>
                  <div
                    id="ContentPlaceHolder1_tokenbalance"
                    className="d-flex gap-2 ms-auto overflow-hidden"
                  >
                    <div className="dropdown flex-grow-1 position-static">
                      <button
                        className="js-dropdowns-input-focus btn btn-white text-start w-100 dropdown-toggle py-2 px-3"
                        type="button"
                        id="dropdownMenuBalance"
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        $0.00
                        <span
                          className="small text-muted"
                          data-bs-toggle="tooltip"
                        >
                          (9 Tokens)
                        </span>
                      </button>
                      <div
                        id="availableBalance"
                        className="dropdown-menu overflow-hidden w-100 p-0 ms-md-4 mt-n3"
                        aria-labelledby="dropdownMenuBalance"
                      >
                        <div className="p-3">
                          <input
                            type="text"
                            className="js-input-focus form-control bg-light bg-focus-white search"
                            placeholder="Search for Token Name"
                            id="token-balance-search"
                          />
                        </div>
                        <div
                          className="overflow-y-auto scrollbar-custom px-3 pb-3"
                          style={{ maxHeight: '19rem' }}
                        >
                          <div
                            className="list-not-found text-center py-12"
                            style={{ display: 'none' }}
                          >
                            <span
                              className="bg-warning bg-opacity-10 border border-warning border-opacity-25 text-yellow-600 
                                                            fs-70x content-center rounded-pill mx-md-auto mb-2"
                              style={{ width: '3.5rem', height: '3.5rem' }}
                            >
                              <i className="far fa-file-slash fs-4"></i>
                            </span>
                            <p className="text-muted mb-0">
                              Could not find any matches!
                            </p>
                          </div>

                          <ul className="list nav nav-pills nav-pills-flush nav-list flex-column w-100">
                            <li className="nav-item list-custom-divider-ERC20">
                              <div className="d-flex justify-content-between align-items-baseline bg-light rounded py-1.5 px-2">
                                <span className="fw-medium">
                                  ERC-20 Tokens (5)
                                </span>
                                <button
                                  className="btn btn-sm py-0 text-muted"
                                  id="btn_ERC20_sort"
                                  data-bs-toggle="tooltip"
                                  aria-label="Click to sort"
                                >
                                  <i className="fad fa-sort-down"></i>
                                </button>
                              </div>
                            </li>
                            <li className="nav-item list-custom-ERC20">
                              <a
                                className="nav-link d-flex justify-content-between align-items-center gap-2 px-2"
                                href="https://etherscan.io/token/0xfaf49fb90e30ba8f86c7a336ab0f6339f4f1a1e3?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                              >
                                <div>
                                  <div className="d-flex align-items-center gap-1">
                                    <img
                                      src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/empty-token.webp"
                                      className="rounded-circle"
                                      alt="BALAJI"
                                      width="14"
                                      height="14"
                                    />
                                    <div className="d-flex gap-1">
                                      <span className="list-name hash-tag text-truncate">
                                        Balaji (BALAJI)
                                      </span>
                                    </div>
                                  </div>
                                  <span className="text-muted">
                                    16,369,174,424.0299 BALAJI
                                  </span>
                                </div>
                                <div className="text-end">
                                  <div className="list-usd-value">&nbsp;</div>
                                </div>
                              </a>
                              <hr className="mt-2 mb-1" />
                            </li>
                            <li className="nav-item list-custom-ERC20">
                              <a
                                className="nav-link d-flex justify-content-between align-items-center gap-2 px-2"
                                href="https://etherscan.io/token/0x5cad3984babbfbf0576e978f81d8e56c8b2a9d10?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                              >
                                <div>
                                  <div className="d-flex align-items-center gap-1">
                                    <img
                                      src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/empty-token.webp"
                                      className="rounded-circle"
                                      alt="GREENDOT"
                                      width="14"
                                      height="14"
                                    />
                                    <div className="d-flex gap-1">
                                      <span className="list-name hash-tag text-truncate">
                                        Green Dot (
                                        <span
                                          className="text-truncate"
                                          data-bs-toggle="tooltip"
                                        >
                                          GREEND...
                                        </span>
                                        )
                                      </span>
                                    </div>
                                  </div>
                                  <span className="text-muted">
                                    3,005,999.30939654 GREENDOT
                                  </span>
                                </div>
                                <div className="text-end">
                                  <div className="list-usd-value">&nbsp;</div>
                                </div>
                              </a>
                              <hr className="mt-2 mb-1" />
                            </li>
                            <li className="nav-item list-custom-ERC20">
                              <a
                                className="nav-link d-flex justify-content-between align-items-center gap-2 px-2"
                                href="https://etherscan.io/token/0xab306326bc72c2335bd08f42cbec383691ef8446?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                              >
                                <div>
                                  <div className="d-flex align-items-center gap-1">
                                    <img
                                      src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/empty-token.webp"
                                      className="rounded-circle"
                                      alt="PPIZZA"
                                      width="14"
                                      height="14"
                                    />
                                    <div className="d-flex gap-1">
                                      <span className="list-name hash-tag text-truncate">
                                        P Pizza (PPIZZA)
                                      </span>
                                    </div>
                                  </div>
                                  <span className="text-muted">
                                    10,010,054.2749719 PPIZZA
                                  </span>
                                </div>
                                <div className="text-end">
                                  <div className="list-usd-value">&nbsp;</div>
                                </div>
                              </a>
                              <hr className="mt-2 mb-1" />
                            </li>
                            <li className="nav-item list-custom-ERC20">
                              <a
                                className="nav-link d-flex justify-content-between align-items-center gap-2 px-2"
                                href="https://etherscan.io/token/0x55BA9bbEF3807B92FC466FBB8054dB1dc4106666?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                              >
                                <div>
                                  <div className="d-flex align-items-center gap-1">
                                    <img
                                      src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/empty-token.webp"
                                      className="rounded-circle"
                                      alt="IRS"
                                      width="14"
                                      height="14"
                                    />
                                    <div className="d-flex gap-1">
                                      <span className="list-name hash-tag text-truncate">
                                        Pepe IRS (IRS)
                                      </span>
                                    </div>
                                  </div>
                                  <span className="text-muted">
                                    56,724.42533816 IRS
                                  </span>
                                </div>
                                <div className="text-end">
                                  <div className="list-usd-value">&nbsp;</div>
                                </div>
                              </a>
                              <hr className="mt-2 mb-1" />
                            </li>
                            <li className="nav-item list-custom-ERC20">
                              <a
                                className="nav-link d-flex justify-content-between align-items-center gap-2 px-2"
                                href="https://etherscan.io/token/0xE1d224a66427A4E839e5Eeb13cEe4E027F37507B?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                              >
                                <div>
                                  <div className="d-flex align-items-center gap-1">
                                    <img
                                      src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/empty-token.webp"
                                      className="rounded-circle"
                                      alt="HABIBI"
                                      width="14"
                                      height="14"
                                    />
                                    <div className="d-flex gap-1">
                                      <span className="list-name hash-tag text-truncate">
                                        Sheikh Frog (HABIBI)
                                      </span>
                                    </div>
                                  </div>
                                  <span className="text-muted">
                                    9,054.4494692 HABIBI
                                  </span>
                                </div>
                                <div className="text-end">
                                  <div className="list-usd-value">&nbsp;</div>
                                </div>
                              </a>
                              <hr className="mt-2 mb-1" />
                            </li>
                            <li className="nav-item">
                              <div className="d-flex justify-content-between align-items-baseline bg-light rounded py-1.5 px-2">
                                <span className="fw-medium">
                                  NFT Tokens (4)
                                </span>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link d-flex justify-content-between align-items-center gap-2 px-2"
                                href="https://etherscan.io/token/0x8c0a75e3a0bf2f0b530575dfccacf0b85715736f?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                              >
                                <div>
                                  <div className="d-flex align-items-center gap-1">
                                    <img
                                      src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/nft-placeholder.svg"
                                      className="rounded-circle"
                                      alt="PEEPEE"
                                      width="14"
                                      height="14"
                                    />
                                    <div className="list-name hash-tag text-truncate">
                                      Pepe&amp;#39;s pee-pee
                                    </div>
                                  </div>
                                  <span className="hash-tag text-truncate text-muted">
                                    PEEPEE
                                  </span>
                                </div>
                                <div className="text-end d-flex gap-1">
                                  <span className="badge bg-white border text-dark fw-normal rounded-pill px-2 py-1.5">
                                    ERC-721
                                  </span>
                                </div>
                              </a>
                              <hr className="mt-2 mb-1" />
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link d-flex justify-content-between align-items-center gap-2 px-2"
                                href="https://etherscan.io/token/0xb5f75c61052cd174c43b4187ca9333a5300d765f?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                              >
                                <div>
                                  <div className="d-flex align-items-center gap-1">
                                    <img
                                      src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/nft-placeholder.svg"
                                      className="rounded-circle"
                                      alt="Pepe"
                                      width="14"
                                      height="14"
                                    />
                                    <div className="list-name hash-tag text-truncate">
                                      PepeVerse
                                    </div>
                                  </div>
                                  <span className="hash-tag text-truncate text-muted">
                                    Pepe
                                  </span>
                                </div>
                                <div className="text-end d-flex gap-1">
                                  <span className="badge bg-white border text-dark fw-normal rounded-pill px-2 py-1.5">
                                    x5
                                  </span>
                                  <span className="badge bg-white border text-dark fw-normal rounded-pill px-2 py-1.5">
                                    ERC-721
                                  </span>
                                </div>
                              </a>
                              <hr className="mt-2 mb-1" />
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link d-flex justify-content-between align-items-center gap-2 px-2"
                                href="https://etherscan.io/token/0xe05590833120f8a671d43aa3e9870fed9361b4ca?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                              >
                                <div>
                                  <div className="d-flex align-items-center gap-1">
                                    <img
                                      src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/nft-placeholder.svg"
                                      className="rounded-circle"
                                      alt="PSYCHO"
                                      width="14"
                                      height="14"
                                    />
                                    <div className="list-name hash-tag text-truncate">
                                      PsychoNauts
                                    </div>
                                  </div>
                                  <span className="hash-tag text-truncate text-muted">
                                    PSYCHO
                                  </span>
                                </div>
                                <div className="text-end d-flex gap-1">
                                  <span className="badge bg-white border text-dark fw-normal rounded-pill px-2 py-1.5">
                                    ERC-721
                                  </span>
                                </div>
                              </a>
                              <hr className="mt-2 mb-1" />
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link d-flex justify-content-between align-items-center gap-2 px-2"
                                href="https://etherscan.io/token/0x932261f9fc8da46c4a22e31b45c4de60623848bf?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                              >
                                <div>
                                  <div className="d-flex align-items-center gap-1">
                                    <img
                                      src="Address%200xa91822d0bd8d6b4ebd252857a690c10efc69b073%20Etherscan_files/0ec9b12bb04675340548768d0a3aeada.png"
                                      className="rounded-circle"
                                      alt="DNA"
                                      width="14"
                                      height="14"
                                    />
                                    <div className="list-name hash-tag text-truncate">
                                      Zerion DNA 1.0
                                    </div>
                                  </div>
                                  <span className="hash-tag text-truncate text-muted">
                                    DNA
                                  </span>
                                </div>
                                <div className="text-end d-flex gap-1">
                                  <span className="badge bg-white border text-dark fw-normal rounded-pill px-2 py-1.5">
                                    ERC-721
                                  </span>
                                </div>
                              </a>
                              <hr className="mt-2 mb-1" />
                            </li>
                          </ul>
                        </div>

                        <a
                          className="d-block bg-light border-top fw-medium text-cap text-center p-3 py-3.5"
                          href="https://etherscan.io/tokenholdings?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                        >
                          <i className="fa fa-wallet me-1"></i> View All
                          Holdings
                        </a>
                      </div>
                    </div>

                    <a
                      className="btn btn-secondary py-2 px-3"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      href="https://etherscan.io/tokenholdings?a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                      aria-label="View in Token Holdings"
                    >
                      <i className="fa fa-wallet"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-5">
                <h3 className="h6 mb-0">More Info</h3>
                <div>
                  <h4 className="text-cap mb-1">Private Name Tags</h4>
                  <div className="d-flex align-items-center gap-2">
                    <span id="Public_Private_Tag">
                      <a
                        className="btn btn-sm btn-white rounded-pill border-dashed border-dark dark:border-white border-opacity-15 text-nowrap px-4 mb-n2"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        href="https://etherscan.io/login?msg=NeedLogin&amp;ref=address&amp;ret=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
                      >
                        <i className="fa fa-plus"></i> Add
                      </a>
                    </span>
                    <span id="Public_Private_Tag_edit_button"></span>
                  </div>
                </div>
                <div>
                  <h4 className="text-cap mb-1 mt-1">Last Txn Sent</h4>
                  <div className="d-flex align-items-center gap-1">
                    <a
                      className="hash-tag text-truncate"
                      style={{ maxWidth: '8rem' }}
                      href="/tnx-by-hash"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                    >
                      0x12e24e0cfe362ad945660af62e75d592ccaefbc63228350a169626ef92c75fc5
                    </a>
                    <span className="text-muted">from 3 hrs 53 mins ago</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-cap mb-1">First Txn Sent</h4>
                  <div className="d-flex align-items-center gap-1">
                    <a
                      className="hash-tag text-truncate"
                      style={{ maxWidth: '8rem' }}
                      href="/tnx-by-hash"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                    >
                      0xdcbcfabdbdca987d507354dda730d9760a54d031f4c0c15c8f51d977c32aba1a
                    </a>
                    <span className="text-muted">from 242 days 6 hrs ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-5">
                <h3 className="h6 mb-0">Multi Chain</h3>
                <div id="ContentPlaceHolder1_divMultichainAddress">
                  <h4 className="text-cap mb-1">Multichain Addresses</h4>

                  <a
                    className="d-flex align-items-center gap-2"
                    href="/tnx-by-address"
                    target="_blank"
                  >
                    <span
                      className="text-truncate"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                    >
                      1 address found via Blockscan
                    </span>
                    <i className="far fa-arrow-up-right-from-square text-secondary"></i>
                  </a>
                </div>
                <div className="scrollbar-custom overflow-x-auto pt-2 mt-n2">
                  <div className="d-flex">
                    <div className="text-center d-inline-block">
                      <div
                        className="coinzilla"
                        data-zone="C-16163e241b1806d1955"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul
          className="nav nav-pills text-nowrap snap-x-mandatory overflow-x-auto flex-nowrap scrollbar-custom pt-4 pb-3 gap-2 nav_tabs1"
          id="nav_tabs"
          role="tablist"
        >
          <li
            id="ContentPlaceHolder1_li_transactions"
            className="nav-item snap-align-start"
            role="presentation"
          >
            <a
              className="nav-link active"
              href="#"
              id="tab-1"
              data-bs-toggle="pill"
              data-bs-target="#transactions"
              type="button"
              role="tab"
              aria-controls="transactions"
            // aria-selected="true" onclick="javascript:updatehash('');"
            >
              Transactions
            </a>
          </li>
          <li
            id="ContentPlaceHolder1_li_internaltxs"
            className="nav-item snap-align-start"
            role="presentation"
          >
            <a
              className="nav-link"
              href="#"
              id="tab-2"
              data-bs-toggle="pill"
              data-bs-target="#internaltx"
              type="button"
              role="tab"
              aria-controls="internaltx"
            // aria-selected="false" onclick="javascript:updatehash('internaltx');"
            // tabindex="-1"
            >
              Internal Transactions
            </a>
          </li>
          <li
            id="ContentPlaceHolder1_li_tokentransfers"
            className="nav-item snap-align-start"
            role="presentation"
          >
            <a
              className="nav-link"
              href="#"
              id="tab-3"
              data-bs-toggle="pill"
              data-bs-target="#tokentxns"
              type="button"
              role="tab"
              aria-controls="tokentxns"
              aria-selected="false"
            // onclick="javascript:updatehash('tokentxns');showLoader(window.token_transfer_loaded);"
            // tabindex="-1"
            >
              Token Transfers (ERC-20)
            </a>
          </li>
          <li
            id="ContentPlaceHolder1_li_nft_transfers"
            className="nav-item snap-align-start"
            role="presentation"
          >
            <a
              className="nav-link"
              href="#"
              id="tab-15"
              data-bs-toggle="pill"
              data-bs-target="#nfttransfers"
              type="button"
              role="tab"
              aria-controls="nfttransfers"
              aria-selected="false"
            // onclick="javascript:updatehash('nfttransfers');showLoader(window.token_nft_transfer_loaded);"
            // tabindex="-1"
            >
              NFT Transfers
            </a>
          </li>
          <li
            id="ContentPlaceHolder1_li_analytics"
            className="nav-item snap-align-start"
            role="presentation"
          >
            <a
              className="nav-link"
              href="#"
              id="tab-12"
              data-bs-toggle="pill"
              data-bs-target="#analytics"
              type="button"
              role="tab"
              aria-controls="analytics"
              aria-selected="false"
            // onclick="javascript:updatehash('analytics');showLoader(window.analytics_loaded);"
            // tabindex="-1"
            >
              Analytics
            </a>
          </li>
          <li
            id="ContentPlaceHolder1_li_disqus"
            className="nav-item snap-align-start"
            role="presentation"
          >
            <a
              className="nav-link"
              href="#"
              id="tab-14"
              data-bs-toggle="pill"
              data-bs-target="#comments"
              type="button"
              role="tab"
              aria-controls="comments"
              aria-selected="false"
            // onclick="javascript:updatehash('comments');" tabindex="-1"
            >
              <span
                className="disqus-comment-count"
                data-disqus-identifier="Etherscan_0xa91822d0bd8d6b4ebd252857a690c10efc69b073_Comments"
              >
                Comments
              </span>
            </a>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <input
            type="hidden"
            id="hdnErc20"
            value="Age"
          // onchange="setGlobalValue(this)"
          />
          <div
            className="tab-pane fade show active"
            id="transactions"
            role="tabpanel"
            aria-labelledby="tab-1"
          // tabindex="0"
          >
            <div className="card">
              <div id="ContentPlaceHolder1_divTxDataInfo" className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <p className="mb-0">
                    <i
                      className="far fa-sort-amount-down"
                      // data-bs-toggle="tooltip"
                      aria-label="Oldest First"
                    ></i>
                    &nbsp;Latest 25 from a total of{' '}
                    <a
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                    >
                      27
                    </a>{' '}
                    transactions
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    <div className="dropdown">
                      <button
                        className="btn btn-sm btn-white dropdown-toggle d-block"
                        type="button"
                        id="dropdownTxnMore"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-filter text-muted me-1"></i>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-sm-end"
                        aria-labelledby="dropdownTxnMore"
                        style={{ minWidth: '10rem' }}
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-circle fa-fw dropdown-item-icon me-1"></i>{' '}
                            View Completed Txns
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-circle fa-fw dropdown-item-icon me-1"></i>{' '}
                            View Pending Txns
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-exclamation-circle fa-fw dropdown-item-icon me-1"></i>
                            View Failed Txns
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-long-arrow-alt-right fa-fw dropdown-item-icon me-1"></i>
                            View Outgoing Txns
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-long-arrow-alt-left fa-fw dropdown-item-icon me-1"></i>
                            View Incoming Txns
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-newspaper fa-fw dropdown-item-icon me-1"></i>{' '}
                            View Contract Creation
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead
                    id="ContentPlaceHolder1_theadTxnTable"
                    className="text-nowrap"
                  >
                    <tr>
                      <th
                        scope="col"
                        className="text-center"
                      // width="10"
                      >
                        <i
                          className="far fa-question-circle text-muted"
                          data-bs-toggle="popover"
                          data-bs-placement="top"
                          data-bs-trigger="hover"
                          data-bs-content="See preview of the transaction details."
                        ></i>
                      </th>
                      <th scope="col">Transaction Hash</th>
                      <th scope="col">
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-nowrap">
                            Method{' '}
                            <i
                              className="far fa-question-circle text-muted"
                              data-bs-toggle="popover"
                              data-bs-placement="top"
                              data-bs-trigger="hover"
                              data-bs-content="Function executed based on decoded input data. For unidentified functions, method ID is displayed instead."
                            ></i>
                          </span>
                          <div
                            id="ContentPlaceHolder1_divMethodFilter"
                            className="dropdown"
                          >
                            <button
                              className="js-dropdowns-input-focus btn btn-sm btn-secondary fs-80x py-0.5 px-1"
                              type="button"
                              id="dropdownMethod"
                              data-bs-toggle="dropdown"
                            // aria-expanded="false" onclick="onFilterClick(this)"
                            >
                              <i className="fa fa-filter fa-fw"></i>
                            </button>
                            <div className="dropdown-menu fw-normal p-4">
                              <div className="mb-2">
                                <label
                                  className="form-label"
                                  htmlFor="inputMethodName"
                                >
                                  Search by{' '}
                                  <strong className="fw-medium">
                                    Method ID only
                                  </strong>
                                </label>
                                <div className="position-relative">
                                  <span
                                    className="d-flex align-items-center position-absolute top-0 bottom-0"
                                    title="Search"
                                    style={{ left: '0.5rem' }}
                                  >
                                    <i className="far fa-search text-muted"></i>
                                  </span>
                                  <input
                                    name="ctl00$ContentPlaceHolder1$inputMethodName"
                                    type="search"
                                    id="ContentPlaceHolder1_inputMethodName"
                                    // autocomplete="off"
                                    className="js-input-focus form-control form-control-sm"
                                    placeholder="e.g. 0xa9059cbb"
                                    style={{
                                      paddingLeft: '1.75rem',
                                      minWidth: '15rem',
                                    }}
                                  />
                                </div>
                              </div>
                              <i
                                id="inputMethodSpinner"
                                className="fas fa-circle-notch fa-spin fa-lg"
                              ></i>
                              <div
                                className="overflow-auto scrollbar-custom"
                                style={{ maxHeight: '15rem' }}
                              >
                                <ul
                                  className="nav nav-pills nav-pills-flush nav-list flex-column w-100 gap-1"
                                  id="searchFunctionResult"
                                ></ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th scope="col" className="d-none d-sm-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-nowrap">Block</span>
                          <div
                            id="ContentPlaceHolder1_divBlockFilter"
                            className="dropdown"
                          >
                            <button
                              className="js-dropdowns-input-focus btn btn-sm btn-secondary fs-80x py-0.5 px-1"
                              type="button"
                              id="dropdownBlock"
                              data-bs-toggle="dropdown"
                            // aria-expanded="false" onclick="onFilterClick(this)"
                            >
                              <i className="fa fa-filter fa-fw"></i>
                            </button>
                            <div
                              className="dropdown-menu fw-normal overflow-hidden p-0"
                              style={{ minWidth: '15rem' }}
                            >
                              <div className="p-3">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="fromblock"
                                  >
                                    From
                                  </label>
                                  <input
                                    type="number"
                                    id="fromblock"
                                    name="fromblock"
                                    className="js-input-focus form-control form-control-sm"
                                    placeholder="Block Number"
                                  // required=""
                                  />
                                </div>
                                <div>
                                  <label
                                    className="form-label"
                                    htmlFor="toblock"
                                  >
                                    To
                                  </label>
                                  <input
                                    type="number"
                                    id="toblock"
                                    name="toblock"
                                    className="form-control form-control-sm"
                                    placeholder="Block Number"
                                  // required=""
                                  />
                                </div>
                              </div>
                              <div className="d-flex gap-2 bg-light p-3">
                                <button
                                  type="submit"
                                  className="btn btn-sm btn-primary w-100"
                                  // onclick="constructFilterUrl(this)"
                                  id="btnBlockFilter"
                                >
                                  Filter
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-ghost-white w-100"
                                  // onclick="clearFilter(this, event)"
                                  id="btnBlockFilterClear"
                                >
                                  Clear
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="d-flex align-items-center gap-2">
                          <a
                            href="#"
                            // onclick="switchAgeToDateTimeInAddPage(this)"
                            id="lnkTxAgeDateTime"
                            data-bs-toggle="tooltip"
                          >
                            Age
                          </a>
                        </div>
                      </th>
                      <th
                        scope="col"
                      // width="100"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <span>From</span>
                          <div
                            id="ContentPlaceHolder1_divFromFilter"
                            className="dropdown"
                          >
                            <button
                              className="js-dropdowns-input-focus btn btn-sm btn-secondary fs-80x py-0.5 px-1"
                              type="button"
                              id="dropdownFrom"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            // onclick="onFilterClick(this)"
                            >
                              <i className="fa fa-filter fa-fw"></i>
                            </button>
                            <div
                              className="dropdown-menu fw-normal overflow-hidden p-0"
                              style={{ minWidth: '15rem' }}
                            >
                              <div className="p-3">
                                <input
                                  type="text"
                                  className="form-control form-control-xs mb-2"
                                  placeholder="Search by address e.g. 0x.."
                                  id="fromaddress"
                                  name="fromaddress"
                                />
                              </div>
                              <div className="d-flex gap-2 bg-light p-3">
                                <button
                                  type="submit"
                                  className="btn btn-sm btn-primary w-100"
                                  // onclick="constructFilterUrl(this)"
                                  id="btnFromFilter"
                                >
                                  Filter
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-ghost-white w-100"
                                  // onclick="clearFilter(this, event)"
                                  id="btnFromFilterClear"
                                >
                                  Clear
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th
                        scope="col"
                      // width="20"
                      ></th>
                      <th scope="col">
                        <div className="d-flex align-items-center gap-2">
                          <span>To</span>
                          <div
                            id="ContentPlaceHolder1_divToFilter"
                            className="dropdown"
                          >
                            <button
                              className="js-dropdowns-input-focus btn btn-sm btn-secondary fs-80x py-0.5 px-1"
                              type="button"
                              id="dropdownTo"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            // onclick="onFilterClick(this)"
                            >
                              <i className="fa fa-filter fa-fw"></i>
                            </button>
                            <div
                              className="dropdown-menu fw-normal overflow-hidden p-0"
                              style={{ minWidth: '15rem' }}
                            >
                              <div className="p-3">
                                <input
                                  type="text"
                                  className="form-control form-control-xs mb-2"
                                  placeholder="Search by address e.g. 0x.."
                                  id="toaddress"
                                  name="toaddress"
                                />
                              </div>
                              <div className="d-flex gap-2 bg-light p-3">
                                <button
                                  type="submit"
                                  className="btn btn-sm btn-primary w-100"
                                  // onclick="constructFilterUrl(this)"
                                  id="btnToFilter"
                                >
                                  Filter
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-ghost-white w-100"
                                  // onclick="clearFilter(this, event)"
                                  id="btnToFilterClear"
                                >
                                  Clear
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th scope="col">Value</th>
                      <th scope="col">
                        <div className="me-2">
                          <a
                            href="#"
                            // onclick="switchTxFeeGasPrice()"
                            className="switch-txn-fee-gas-price"
                            data-bs-toggle="tooltip"
                          >
                            Txn Fee
                          </a>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="align-middle text-nowrap">
                    <tr>
                      <td>
                        <button
                          type="button"
                          className="js-tnx-preview btn btn-sm btn-white fs-70x content-center mx-auto myFnExpandBox"
                          style={{ width: '1.75rem', height: '1.75rem' }}
                          // data-bs-content-id="js-tnx-preview" data-bs-container="body"
                          data-bs-toggle="popover"
                          data-bs-placement="right"
                          data-bs-trigger="manual"
                          data-bs-html="true"
                          data-initialized="false"
                          data-bs-content="&lt;i class='fas fa-circle-notch fa-spin text-primary fa-2x'&gt;&lt;/i&gt;"
                          data-bs-custom-className="popover-preview"
                        >
                          <i className="far fa-eye"></i>
                        </button>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <a
                            className="hash-tag text-truncate myFnExpandBox_searchVal"
                            href="/tnx-by-hash"
                          >
                            0x12e24e0cfe362ad945660af62e75d592ccaefbc63228350a169626ef92c75fc5
                          </a>
                        </div>
                      </td>
                      <td>
                        <span
                          style={{ maxWidth: '95px' }}
                          className="d-block badge bg-light border border-dark dark:border-white 
                                                    border-opacity-10 text-dark fw-normal text-truncate w-100 py-1.5"
                          data-bs-toggle="tooltip"
                          data-bs-boundary="viewport"
                          data-bs-html="true"
                        >
                          Execute
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <a href="/block-details">
                          17159364
                        </a>
                      </td>
                      <td
                        className="showDate "
                        style={{ display: 'none !important' }}
                      >
                        <span
                          // rel="tooltip"
                          data-bs-toggle="tooltip"
                          data-bs-title="3 hrs 53 mins ago"
                        >
                          2023-04-30 14:09:47
                        </span>
                      </td>
                      <td className="showAge ">
                        <span
                          // rel="tooltip"
                          // data-bs-toggle="tooltip"
                          data-bs-title="2023-04-30 14:09:47"
                        >
                          3 hrs 53 mins ago
                        </span>
                      </td>
                      <td
                        className="showLocalDate"
                        style={{ display: 'none !important' }}
                      >
                        <span
                          // rel="tooltip"
                          // data-bs-toggle="tooltip"
                          data-bs-title="3 hrs 53 mins ago"
                        >
                          1682863787
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <span
                            className="hash-tag text-truncate "
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                          >
                            0xa91822...FC69b073
                          </span>
                          <a
                            className="js-clipboard link-secondary "
                            href="#"
                            data-clipboard-text="0xa91822D0bd8D6B4ebd252857A690C10eFC69b073"
                            data-bs-toggle="tooltip"
                            data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_f_tx_1", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                            aria-label="Copy Address"
                          >
                            <i
                              id="linkIcon_f_tx_1"
                              className="far fa-copy fa-fw"
                            ></i>{' '}
                          </a>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-warning bg-opacity-15 border border-warning border-opacity-25 text-yellow-600 fs-70x text-uppercase w-100 py-1.5">
                          OUT
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <a
                            className="hash-tag text-truncate "
                            href="/tnx-by-address"
                          >
                            <i
                              className="far fa-file-alt text-secondary"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              aria-label="Contract"
                            ></i>{' '}
                            <span
                              data-bs-boundary="viewport"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-placement="top"
                            >
                              Uniswap: Universal Router
                            </span>
                          </a>
                          <a
                            className="js-clipboard link-secondary "
                            href="#"
                            data-clipboard-text="0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B"
                            data-bs-toggle="tooltip"
                            data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_t_tx_1", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                            aria-label="Copy Address"
                          >
                            <i
                              id="linkIcon_t_tx_1"
                              className="far fa-copy fa-fw"
                            ></i>{' '}
                          </a>
                        </div>
                      </td>
                      <td className="text-nowrap">
                        0<b>.</b>01 ETH
                      </td>
                      <td className="small text-muted showTxnFee ">
                        0<b>.</b>00754357
                      </td>
                      <td
                        style={{ display: 'none !important' }}
                        className="small text-muted showGasPrice "
                      >
                        53<b>.</b>06997698
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          className="js-tnx-preview btn btn-sm btn-white fs-70x content-center mx-auto myFnExpandBox"
                          style={{ width: '1.75rem', height: '1.75rem' }}
                          data-bs-content-id="js-tnx-preview"
                          data-bs-container="body"
                          data-bs-toggle="popover"
                          data-bs-placement="right"
                          data-bs-trigger="manual"
                          data-bs-html="true"
                          data-initialized="false"
                          data-bs-content="&lt;i class='fas fa-circle-notch fa-spin text-primary fa-2x'&gt;&lt;/i&gt;"
                          data-bs-custom-className="popover-preview"
                        >
                          <i className="far fa-eye"></i>
                        </button>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <a
                            className="hash-tag text-truncate myFnExpandBox_searchVal"
                            href="/tnx-by-hash"
                          >
                            0xf5a561773bed7eeef80d432e66d2bde157fff455d00c7944d3fb222ad3ae367e
                          </a>
                        </div>
                      </td>
                      <td>
                        <span
                          style={{ maxWidth: '95px' }}
                          className="d-block badge bg-light border border-dark dark:border-white border-opacity-10 text-dark fw-normal text-truncate w-100 py-1.5"
                          data-bs-toggle="tooltip"
                          data-bs-boundary="viewport"
                          data-bs-html="true"
                        >
                          Mint Public
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <a href="/block-details">
                          17159335
                        </a>
                      </td>
                      <td
                        className="showDate "
                        style={{ display: 'none !important' }}
                      >
                        <span
                          // rel="tooltip"
                          data-bs-toggle="tooltip"
                          data-bs-title="3 hrs 59 mins ago"
                        >
                          2023-04-30 14:03:59
                        </span>
                      </td>
                      <td className="showAge ">
                        <span
                          // rel="tooltip" data-bs-toggle="tooltip"
                          data-bs-title="2023-04-30 14:03:59"
                        >
                          3 hrs 59 mins ago
                        </span>
                      </td>
                      <td
                        className="showLocalDate"
                        style={{ display: 'none !important' }}
                      >
                        <span
                          // rel="tooltip"
                          data-bs-toggle="tooltip"
                          data-bs-title="3 hrs 59 mins ago"
                        >
                          1682863439
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <span
                            className="hash-tag text-truncate "
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                          >
                            0xa91822...FC69b073
                          </span>
                          <a
                            className="js-clipboard link-secondary "
                            href="#"
                            data-clipboard-text="0xa91822D0bd8D6B4ebd252857A690C10eFC69b073"
                            data-bs-toggle="tooltip"
                            data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_f_tx_2", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                            aria-label="Copy Address"
                          >
                            <i
                              id="linkIcon_f_tx_2"
                              className="far fa-copy fa-fw"
                            ></i>{' '}
                          </a>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-warning bg-opacity-15 border border-warning border-opacity-25 text-yellow-600 fs-70x text-uppercase w-100 py-1.5">
                          OUT
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <a
                            className="hash-tag text-truncate "
                            href="/tnx-by-address"
                          >
                            <i
                              className="far fa-file-alt text-secondary"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              aria-label="Contract"
                            ></i>{' '}
                            <span
                              data-bs-boundary="viewport"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-placement="top"
                            >
                              SeaDrop
                            </span>
                          </a>
                          <a
                            className="js-clipboard link-secondary "
                            href="#"
                            data-clipboard-text="0x00005EA00Ac477B1030CE78506496e8C2dE24bf5"
                            data-bs-toggle="tooltip"
                            data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_t_tx_2", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                            aria-label="Copy Address"
                          >
                            <i
                              id="linkIcon_t_tx_2"
                              className="far fa-copy fa-fw"
                            ></i>{' '}
                          </a>
                        </div>
                      </td>
                      <td className="text-nowrap">
                        0<b>.</b>01 ETH
                      </td>
                      <td className="small text-muted showTxnFee ">
                        0<b>.</b>00748901
                      </td>
                      <td
                        style={{ display: 'none !important' }}
                        className="small text-muted showGasPrice "
                      >
                        58<b>.</b>06835359
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                className="card-footer bg-light fw-medium text-cap link-muted text-center"
                href="#"
              >
                View all transactions{' '}
                <i className="far fa-long-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="internaltx"
            role="tabpanel"
          // aria-labelledby="tab-2" tabindex="0"
          >
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <p className="mb-0">
                    <i className="far fa-sort-amount-down"></i> Latest 1
                    internal transaction
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <div className="d-flex align-items-center gap-2 py-1">
                      <span className="text-cap">
                        <i
                          className="far fa-question-circle text-muted"
                          data-bs-toggle="popover"
                          data-bs-placement="top"
                          data-bs-trigger="hover"
                          data-bs-content="Toggle between Simplified and Advanced view. The 'Advanced' view also shows zero value ETH transfers, while the 'Simple' view only shows ETH transfers with value. Name tag integration is not available in advanced view"
                        ></i>
                        Advanced mode:
                      </span>
                      <div className="form-check form-switch mb-0">
                        <input
                          type="checkbox"
                          role="switch"
                          className="form-check-input"
                          id="customSwitch1"
                        // onclick="toggleMode();"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="ContentPlaceHolder1_divinternaltxtable"
                className="table-responsive"
              >
                <table className="table table-hover mb-0">
                  <thead className="text-nowrap">
                    <tr>
                      <th scope="col">Parent Txn Hash</th>
                      <th scope="col">Block</th>
                      <th scope="col">
                        <span>
                          <a
                            href="#"
                            // onclick="switchAgeToDateTimeInAddPage(this)"
                            id="lnkIntAgeDateTime"
                            data-bs-toggle="tooltip"
                          >
                            Age
                          </a>
                        </span>
                      </th>
                      <th scope="col">From</th>
                      <th
                        scope="col"
                      // width="30"
                      ></th>
                      <th scope="col">To</th>
                      <th scope="col">Value</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle text-nowrap">
                    <tr>
                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <a
                            className="hash-tag text-truncate myFnExpandBox_searchVal"
                            href="/tnx-by-hash"
                          >
                            0xa234c26bf73eb193122d3aeabda396bb1f0532029cb765d2fc5c38598b3f9daf
                          </a>
                        </div>
                      </td>
                      <td>
                        <a
                          className="hash-tag text-truncate"
                          href="/block-details"
                        >
                          17123292
                        </a>
                      </td>
                      <td
                        className="showDate "
                        style={{ display: 'none !important' }}
                      >
                        <span
                          // rel="tooltip"
                          data-bs-toggle="tooltip"
                          data-bs-title="5 days 5 hrs ago"
                        >
                          2023-04-25 12:32:35
                        </span>
                      </td>
                      <td className="showAge ">
                        <span
                          // rel="tooltip" data-bs-toggle="tooltip"
                          data-bs-title="2023-04-25 12:32:35"
                        >
                          5 days 5 hrs ago
                        </span>
                      </td>
                      <td
                        className="showLocalDate"
                        style={{ display: 'none !important' }}
                      >
                        <span
                          // rel="tooltip"
                          data-bs-toggle="tooltip"
                          data-bs-title="5 days 5 hrs ago"
                        >
                          1682425955
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <i
                            className="far fa-file-alt text-secondary"
                            data-bs-boundary="viewport"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-label="Contract"
                          ></i>{' '}
                          <a
                            className="hash-tag text-truncate"
                            href="/tnx-by-address"
                            data-bs-boundary="viewport"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                          >
                            Uniswap V2: Router 2
                          </a>
                          <a
                            className="js-clipboard link-secondary "
                            href="#"
                            data-clipboard-text="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
                            data-bs-toggle="tooltip"
                            data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_f_itx_1", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                            aria-label="Copy Address"
                          >
                            <i
                              id="linkIcon_f_itx_1"
                              className="fa fa-copy fa-fw"
                            ></i>{' '}
                          </a>
                        </div>
                      </td>
                      <td>
                        <span
                          className="bg-success bg-opacity-10 border border-success border-opacity-25 text-success fs-70x content-center rounded-pill mx-auto"
                          style={{ width: '1.5rem', height: '1.5rem' }}
                        >
                          <i className="far fa-arrow-right-long"></i>
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <span
                            data-bs-boundary="viewport"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                          >
                            0xa91822...FC69b073
                          </span>
                          <a
                            className="js-clipboard link-secondary "
                            href="#"
                            data-clipboard-text="0xa91822D0bd8D6B4ebd252857A690C10eFC69b073"
                            data-bs-toggle="tooltip"
                            data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_t_itx_1", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                            aria-label="Copy Address"
                          >
                            <i
                              id="linkIcon_t_itx_1"
                              className="fa fa-copy fa-fw"
                            ></i>{' '}
                          </a>
                        </div>
                      </td>
                      <td>
                        0<b>.</b>00994046 ETH
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="tokentxns"
            role="tabpanel"
            aria-labelledby="tab-3"
          // tabindex="0"
          >
            <div style={{ visibility: 'hidden', lineHeight: '0' }}>
              <iframe
                id="tokenpageiframe"
                src=""
                scrolling="no"
                style={{ width: '100px', height: '600px', minWidth: '100%' }}
              // frameborder="0"
              ></iframe>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nfttransfers"
            role="tabpanel"
            aria-labelledby="tab-15"
          // tabindex="0"
          >
            <div style={{ visibility: 'hidden', lineHeight: '0' }}>
              <iframe
                id="nfttransfers_pageiframe"
                src=""
                scrolling="no"
                style={{ width: '100px', height: '600px', minWidth: '100%' }}
              // frameborder="0"
              ></iframe>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="loansAddress"
            role="tabpanel"
            aria-labelledby="tab-6"
          // tabindex="0"
          >
            <div className="card p-5 mb-3">
              <div
                id="loadingloansAddressframe"
                style={{
                  position: 'absolute',
                  left: '50%',
                  marginLeft: '-31px',
                }}
              >
                <div id="overlay_loansAddress" className="text-center py-10 ">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="small text-muted mt-1">Loading</div>
                </div>
              </div>
              <div
                className="table-responsive"
                style={{
                  overflow: 'auto',
                  // overflowScrolling:"touch",
                  visibility: 'hidden',
                  lineHeight: '0',
                }}
              >
                <iframe
                  id="loansAddressiframe"
                  src=""
                  scrolling="yes"
                  style={{ width: '100px', height: '600px', minWidth: '100%' }}
                // frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contracts"
          // role="tabpanel"
          // aria-labelledby="tab-7"
          //  tabindex="0"
          >
            <div className="card p-5 mb-3">
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center bg-white py-1 mb-3 gap-3">
                <ul
                  className="nav nav-pills gap-2 nav-subtabs"
                  id="nav_subtabs"
                  role="tablist"
                ></ul>
                <div id="divClientMultiSearch">
                  <div
                    id="ContentPlaceHolder1_divMultiSearch"
                    className="d-flex justify-content-center"
                  >
                    <div className="me-2 mt-1">
                      <i
                        className="far fa-question-circle text-muted mt-1 me-1"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        aria-label="Press Enter / Down arrow key to find next and Up arrow key for previous."
                      ></i>
                    </div>
                    <div className="input-group input-group-sm">
                      <input
                        type="text"
                        className="form-control"
                        // autocomplete="off"
                        id="txtSearchContract"
                        name="txtSearchContract"
                        // placeholder="Search Source Code" aria-label="Search Source Code"
                        aria-describedby="button-header-search"
                        // maxlength="68"
                        style={{ width: '200px' }}
                      />
                      <input type="hidden" id="hdnSearchCount" value="" />
                      <button
                        className="btn btn-white"
                        id="btnCustomNext"
                        style={{ cursor: 'pointer' }}
                      // onclick="searchContractNext();"
                      >
                        <i className="fas fa-chevron-down"></i>
                      </button>
                      <button
                        className="btn btn-white"
                        id="btnCustomPrevious"
                        style={{ cursor: 'pointer' }}
                      // onclick="searchContractPrevious();"
                      >
                        <i className="fas fa-chevron-up"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade active show" id="code">
                <div id="ContentPlaceHolder1_contractCodeDiv">
                  <div className="row py-1">
                    <div className="col-md-12">
                      <h3 className="h6 text-dark fw-bold pt-3 pb-2 mb-4">
                        <span
                          id="ContentPlaceHolder1_spanCompilerWarning"
                          className="d-none d-sm-block"
                          style={{
                            position: 'absolute',
                            right: '8px',
                            marginTop: '-22px',
                          }}
                        >
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#myModalCompilerWarning"
                            rel="tooltip"
                            href="#"
                            aria-label="Solidity Compiler Bugs, click for more info"
                          >
                            <i
                              className="far fa-exclamation-triangle text-warning me-2"
                              style={{ fontSize: '22px' }}
                            ></i>
                          </a>
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="row mx-gutters-lg-1 mb-5">
                    <div className="col-md-6">
                      <div className="row align-items-center">
                        <div className="col-5 col-lg-4 mb-1 mb-md-0">
                          Contract Name:
                        </div>
                        <div className="col-7 col-lg-8">
                          <span className="h6 fw-bold mb-0">0 ETH</span>
                        </div>
                      </div>
                      <hr className="hr-space" />
                      <div className="row">
                        <div className="col-5 col-lg-4 mb-1 mb-md-0">
                          Compiler Version
                        </div>
                        <div className="col-7 col-lg-8">
                          <span className="h6 fw-bold mb-0">0</span>
                        </div>
                      </div>
                      <hr className="d-block d-md-none" />
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-5 col-lg-4 mb-1 mb-md-0">
                          Optimization Enabled:
                        </div>
                        <div className="col-7 col-lg-8">
                          <span className="h6 fw-bold mb-0">0 ETH</span>
                        </div>
                      </div>
                      <hr className="hr-space" />
                      <div className="row">
                        <div className="col-5 col-lg-4 mb-1 mb-md-0">
                          Other Settings:
                        </div>
                        <div className="col-7 col-lg-8">
                          <span className="h6 fw-bold mb-0">-NA-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="mb-3"></span>
                <button
                  id="ContentPlaceHolder1_btnconvert222"
                  className="btn btn-sm btn-secondary mb-2"
                  type="button"
                // onclick="javascript:convertstr(document.getElementById('mainaddress').innerHTML);"
                >
                  Switch to Opcodes View
                </button>
                <button
                  id="ContentPlaceHolder1_btnFindSimiliarContracts"
                  className="btn btn-sm btn-secondary mb-2"
                  type="button"
                  // onclick="javascript:location.href = '/find-similar-contracts?a=' + document.getElementById('mainaddress').innerHTML + '&amp;lvl=5';"
                  data-bs-toggle="tooltip"
                  data-bs-toggle-second="tooltip"
                >
                  Similar Contracts
                </button>
                <div id="dividcode"></div>
              </div>
              <div
                className="tab-pane fade"
                id="readContract"
                style={{ display: 'none' }}
              >
                <div
                  id="loadingReadContractframe"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    marginLeft: '-31px',
                  }}
                >
                  <div id="overlayReadContract" className="text-center py-10 ">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="small text-muted mt-1">Loading</div>
                  </div>
                </div>
                <div
                  className="table-responsive"
                  style={{ visibility: 'hidden', lineHeight: '0' }}
                >
                  <iframe
                    id="readcontractiframe"
                    src=""
                    scrolling="no"
                    style={{ height: '600px', padding: '0px 0.5px' }}
                    width="100%"
                  // frameborder="0"
                  ></iframe>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="writeContract"
                style={{ display: 'none' }}
              >
                <div
                  id="loadingWriteContractframe"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    marginLeft: '-31px',
                  }}
                >
                  <div id="overlayWriteContract" className="text-center py-10 ">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="small text-muted mt-1">Loading</div>
                  </div>
                </div>
                <div
                  className="table-responsive"
                  style={{ visibility: 'hidden', lineHeight: '0' }}
                >
                  <iframe
                    id="writecontractiframe"
                    src=""
                    scrolling="no"
                    style={{
                      height: '600px',
                      minHeight: '600px',
                      padding: '0px 0.5px',
                    }}
                    width="100%"
                  // frameborder="0"
                  ></iframe>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="readProxyContract"
                style={{ display: 'none' }}
              >
                <div>
                  <span id="ContentPlaceHolder1_readProxyMessage"></span>
                </div>
                <br />
                <div
                  id="loadingReadProxyContractframe"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    marginLeft: '-31px',
                  }}
                >
                  <div
                    id="overlayReadProxyContract"
                    className="text-center py-10 "
                  >
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="small text-muted mt-1">Loading</div>
                  </div>
                </div>
                <div
                  className="table-responsive"
                  style={{ visibility: 'hidden', lineHeight: '0' }}
                >
                  <iframe
                    id="readproxycontractiframe"
                    src=""
                    scrolling="no"
                    style={{ height: '600px' }}
                    width="100%"
                  // frameborder="0"
                  ></iframe>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="writeProxyContract"
                style={{ display: 'none' }}
              >
                <div>
                  <span id="ContentPlaceHolder1_writeProxyMessage"></span>
                </div>
                <br />
                <div
                  id="loadingWriteProxyContractframe"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    marginLeft: '-31px',
                  }}
                >
                  <div
                    id="overlayWriteProxyContract"
                    className="text-center py-10 "
                  >
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="small text-muted mt-1">Loading</div>
                  </div>
                </div>
                <div
                  className="table-responsive"
                  style={{ visibility: 'hidden', lineHeight: '0' }}
                >
                  <iframe
                    id="writeproxycontractiframe"
                    src=""
                    scrolling="yes"
                    style={{ height: '600px', minHeight: '600px' }}
                    width="100%"
                  // frameborder="0"
                  ></iframe>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="readCustomContract"
                style={{ display: 'none' }}
              >
                <div>
                  <span id="ContentPlaceHolder1_readCustomMessage"></span>
                </div>
                <div
                  id="loadingReadCustomContractframe"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    marginLeft: '-31px',
                  }}
                >
                  <div
                    id="overlayReadCustomContract"
                    className="text-center py-10 "
                  >
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="small text-muted mt-1">Loading</div>
                  </div>
                </div>
                <div
                  className="table-responsive"
                  style={{ visibility: 'hidden', lineHeight: '0' }}
                >
                  <iframe
                    id="readcustomcontractiframe"
                    src=""
                    scrolling="yes"
                    style={{ height: '600px' }}
                    width="100%"
                  // frameborder="0"
                  ></iframe>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="writeCustomContract"
                style={{ display: 'none' }}
              >
                <div>
                  <span id="ContentPlaceHolder1_writeCustomMessage"></span>
                </div>
                <div
                  id="loadingWriteCustomContractframe"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    marginLeft: '-31px',
                  }}
                >
                  <div
                    id="overlayWriteCustomContract"
                    className="text-center py-10 "
                  >
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="small text-muted mt-1">Loading</div>
                  </div>
                </div>
                <div
                  className="table-responsive"
                  style={{ visibility: 'hidden', lineHeight: '0' }}
                >
                  <iframe
                    id="writecustomcontractiframe"
                    src=""
                    scrolling="yes"
                    style={{ height: '600px', minHeight: '600px' }}
                    width="100%"
                  // frameborder="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="events"
            role="tabpanel"
            aria-labelledby="tab-8"
          // tabindex="0"
          >
            <div className="card p-5 mb-3">
              <div
                className="table-responsive"
                style={{ visibility: 'hidden', lineHeight: '0' }}
              >
                <iframe
                  id="eventsIframe"
                  src=""
                  style={{ height: '600px' }}
                  width="100%"
                // frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="mine"
            role="tabpanel"
            aria-labelledby="tab-9"
          // tabindex="0"
          >
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <p className="mb-0"></p>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="text-nowrap">
                    <tr>
                      <th scope="col">Block</th>
                      <th scope="col">
                        <a
                          href="#"
                          // onclick="switchAgeToDateTimeInAddPage(this)"
                          id="lnkMinBlkAgeDateTime"
                          data-bs-toggle="tooltip"
                        >
                          Age
                        </a>
                      </th>
                      <th scope="col">Transaction</th>
                      <th scope="col">Difficulty</th>
                      <th scope="col">Gas Used</th>
                      <th scope="col">Reward</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle text-nowrap"></tbody>
                </table>
              </div>

              <a
                id="ContentPlaceHolder1_linkShowAllBlocksMined"
                className="card-footer bg-light fw-medium text-cap link-muted text-center"
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
              >
                View All Blocks Produced
                <i className="far fa-long-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="uncle"
            role="tabpanel"
            aria-labelledby="tab-10"
          // tabindex="0"
          >
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <p className="mb-0"></p>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="text-nowrap">
                    <tr>
                      <th scope="col">Block</th>
                      <th scope="col">
                        <a
                          href="#"
                          // onclick="switchAgeToDateTimeInAddPage(this)"
                          id="lnkMinUncAgeDateTime"
                          data-bs-toggle="tooltip"
                        >
                          Age
                        </a>
                      </th>
                      <th scope="col">Uncle Number</th>
                      <th scope="col">Difficulty</th>
                      <th scope="col">Gas Used</th>
                      <th scope="col">Reward</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle text-nowrap"></tbody>
                </table>
              </div>

              <a
                id="ContentPlaceHolder1_linkShowAllUnclesMined"
                className="card-footer bg-light fw-medium text-cap link-muted text-center"
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
              >
                View All Uncles<i className="far fa-long-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="loans"
            role="tabpanel"
            aria-labelledby="tab-11"
          // tabindex="0"
          >
            <div className="card p-5 mb-3">
              <div
                id="loadingloansframe"
                style={{
                  position: 'absolute',
                  left: '50%',
                  marginLeft: '-31px',
                }}
              >
                <div id="overlay_loans" className="text-center py-10 ">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="small text-muted mt-1">Loading</div>
                </div>
              </div>
              <div
                className="table-responsive"
                style={{
                  overflow: 'auto',
                  // -webkit-overflow-scrolling: "touch",
                  visibility: 'hidden',
                  lineHeight: '0',
                }}
              >
                <iframe
                  id="loans_pageiframe"
                  src=""
                  scrolling="yes"
                  width="100%"
                // frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="analytics"
            role="tabpanel"
            aria-labelledby="tab-12"
          // tabindex="0"
          >
            <div className="card p-5 mb-3">
              <div
                id="loadinganalyticframe"
                style={{
                  position: 'absolute',
                  left: '50%',
                  marginLeft: '-31px',
                }}
              >
                <div id="overlay" className="text-center py-10 ">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="small text-muted mt-1">Loading</div>
                </div>
              </div>
              <div
                className="table-responsive"
                style={{
                  overflow: 'auto',
                  //  -webkit-overflow-scrolling: "touch",
                  visibility: 'hidden',
                  lineHeight: '0',
                }}
              >
                <iframe
                  id="analytics_pageiframe"
                  src=""
                  scrolling="no"
                  width="100%"
                // frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="notes"
            role="tabpanel"
            aria-labelledby="tab-13"
          // tabindex="0"
          >
            <div className="card p-5 mb-3">
              <div
                className="table-responsive mb-2"
                style={{
                  overflow: 'auto',
                  // -webkit-overflow-scrolling: "touch"
                }}
              ></div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="comments"
            role="tabpanel"
            aria-labelledby="tab-14"
          // tabindex="0"
          >
            <div className="card p-5 mb-3">
              Make sure to use the "Vote Down" button for any spammy posts, and
              the "Vote Up" for interesting conversations.
              <br />
              <div id="disqus_thread"></div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="withdrawals"
            role="tabpanel"
            aria-labelledby="tab-16"
          // tabindex="0"
          >
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <p className="mb-0"></p>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="text-nowrap">
                    <tr>
                      <th scope="col">Validator Index</th>
                      <th scope="col">Block</th>
                      <th scope="col">
                        <a
                          href="#"
                          // onclick="switchAgeToDateTimeInAddPage(this)"
                          id="lnkWithBlkAgeDateTime"
                          data-bs-toggle="tooltip"
                        >
                          Age
                        </a>
                      </th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle text-nowrap"></tbody>
                </table>
              </div>
              <a
                id="ContentPlaceHolder1_linkShowAllWithdrawals"
                className="card-footer bg-light fw-medium text-cap link-muted text-center"
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
              >
                View All Withdrawals
              </a>
            </div>
          </div>
          {/* <div className="tab-pane fade" id="deposits" role="tabpanel" aria-labelledby="tab-17" tabIndex="0"> */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                <p className="mb-0"></p>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="text-nowrap">
                  <tr>
                    <th scope="col">Txn Hash</th>
                    <th scope="col">Block</th>
                    <th scope="col">
                      <a
                        href="#"
                        // onclick="switchAgeToDateTimeInAddPage(this)"
                        id="lnkDepositBlkAgeDateTime"
                        data-bs-toggle="tooltip"
                      >
                        Age
                      </a>
                    </th>
                    <th scope="col">Value</th>
                    <th scope="col">Eth2 PubKey</th>
                    <th scope="col">Valid</th>
                  </tr>
                </thead>
                <tbody className="align-middle text-nowrap"></tbody>
              </table>
            </div>

            <a
              id="ContentPlaceHolder1_linkShowAllDeposits"
              className="card-footer bg-light fw-medium text-cap link-muted text-center"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
            >
              View All Deposits
            </a>
          </div>
          {/* </div> */}
        </div>

        <div id="divTxnCsv" className="fs-80x text-muted text-end mt-3">
          [&nbsp;Download:{' '}
          <a
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            href="https://etherscan.io/exportData?type=address&amp;a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
            target="_blank"
            className="fw-medium"
          >
            CSV Export
          </a>{' '}
          <i className="fa fa-download fa-fw"></i>&nbsp;]
        </div>
        <div
          id="divIntTxnCsv"
          className="d-none fs-80x text-muted text-end mt-3"
        >
          [&nbsp;Download:{' '}
          <a
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            href="https://etherscan.io/exportData?type=internaltxns&amp;a=0xa91822d0bd8d6b4ebd252857a690c10efc69b073"
            target="_blank"
            className="fw-medium"
          >
            CSV Export
          </a>{' '}
          <i className="fa fa-download fa-fw"></i>&nbsp;]
        </div>
        <div
          id="divBlocksCsv"
          className="d-none fs-80x text-muted text-end mt-3"
        ></div>

        <div className="mt-4">
          <p className="d-flex align-items-baseline fs-sm text-muted gap-1 mb-3">
            <i className="far fa-lightbulb-on"></i>
            <span>
              A wallet address is a publicly available address that allows its
              owner to receive funds from another party. To access the funds in
              an address, you must have its private key. Learn more about
              addresses in our{' '}
              <a
                target="_blank"
                href="https://info.etherscan.com/what-is-an-ethereum-address/"
              >
                Knowledge Base
              </a>
              .
            </span>
          </p>
        </div>
      </section>
    </>
  )
}
