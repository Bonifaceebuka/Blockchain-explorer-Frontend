import { useEffect, useState } from "react";
// import axios from "axios";
import moment from "moment";
// import styles from "@/styles/Home.module.css";
import {
  faCube,
  faGauge,
  faGlobe,
  faServer,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroSection() {
  const [showResult, setShowResult] = useState(true);
  const [blockResult, setBlockResult] = useState([]);
  const [transactionsResult, setTransactionsResult] = useState([]);
  const [ethPrice, setEthPrice] = useState("");
  const [totalTransactions, setTotalTransactions] = useState("");
  const [latestBlock, setLatestBlock] = useState("");

  useEffect(() => {
    const getEthPrice = async () => {
      // const response = await axios.get(`http://localhost:5001/getethprice`, {});
      // setEthPrice(response.data.usdPrice);
    };

    const getBlockInfo = async () => {
      // const response = await axios.get(
      //   `http://localhost:5001/getblockinfo`,
      //   {}
      // );
      console.log("rrr", response);
      const blockArray = [
        // response.data.previousBlockInfo[1],
        // response.data.previousBlockInfo[2],
        // response.data.previousBlockInfo[3],
        // response.data.previousBlockInfo[4],
        // response.data.previousBlockInfo[5],
      ];

      // const transactions = [response.data.previousBlockInfo[0].transactions];

      // console.log("transactions", transactions[0]);
      // setTotalTransactions(
      //   response.data.previousBlockInfo[1].totalTransactions
      // );
      // setLatestBlock(response.data.latestBlock);
      // // setBlockResult(blockArray);
      // setTransactionsResult(response.data.previousBlockInfo[0].transactions);
    };

    getEthPrice();
    getBlockInfo();
  }, []);

  return (
    <section className="heroSectionContainer">
      {showResult && (
        <section>
          <section className="latestResults_header">
            <section>
              <section className="latestResults_box">
                <section className="svgSection">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 417"
                    preserveAspectRatio="xMidYMid"
                    className="svgEth"
                  >
                    <script
                      xmlns=""
                      id="argent-x-extension"
                      data-extension-id="dlcobpjiigpikoobohmabehhmhfoodbb"
                    />
                    <path
                      fill="#fff"
                      d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
                    />
                    <path
                      fill="#fff"
                      d="M127.962 0L0 212.32l127.962 75.639V154.158z"
                    />
                    <path
                      fill="#fff"
                      d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"
                    />
                    <path fill="#fff" d="M127.962 416.905v-104.72L0 236.585z" />
                    <path
                      fill="#eee"
                      d="M127.961 287.958l127.96-75.637-127.96-58.162z"
                    />
                    <path fill="#bbb" d="M0 212.32l127.96 75.638v-133.8z" />
                    <script
                      xmlns=""
                      type="text/javascript"
                      src="chrome-extension://fnnegphlobjdpkhecapkijjdkgcjhkib/inject-script.js"
                      id="one-x-extension"
                      data-extension-id="fnnegphlobjdpkhecapkijjdkgcjhkib"
                    />
                  </svg>
                </section>
                <section className="hero_box">
                  <p>ETHER PRICE</p>
                  <p className="heroValues">
                    ${Number(ethPrice).toFixed(2)}
                  </p>
                </section>
              </section>
              <span className="divider"></span>
              <section className="latestResults_box">
                <section className="svgSection">
                  <FontAwesomeIcon icon={faGlobe} className="svgIcons" />
                </section>
                <section className="hero_box">
                  <p>MARKET CAP</p>
                  <p className="heroValues">$196,968,104,207.00</p>
                </section>
              </section>
            </section>
            <section>
              <section className="latestResults_box">
                <section className="svgSection">
                  <FontAwesomeIcon
                    icon={faServer}
                    className="svgIcons"
                  />
                </section>
                <section className="hero_box">
                  <p>TRANSACTIONS</p>
                  <p className="heroValues">{totalTransactions}</p>
                </section>
              </section>
              <span className="divider"></span>
              <section className="latestResults_box">
                <section className="svgSection">
                  <FontAwesomeIcon icon={faGauge} className="svgIcons" />
                </section>
                <section className="hero_box">
                  <p>LAST FINALIZED BLOCK</p>
                  <p className="heroValues">{latestBlock}</p>
                </section>
              </section>
            </section>
            <section>
              <section className="hero_averageValue">
                <p>Average Transaction Value</p>
                <img src="/assets/images/chart.png" alt="Chart" className="chart" />
              </section>
            </section>
          </section>
          {/* <section className="latestResults_body">
            <section>
              <section className="latestResults_body_title">
                Latest Blocks
              </section>
              <table className="latestResults_body_table">
                <tbody>
                  {blockResult.map((block) => {
                    return (
                      <tr
                        className="`${"atestResults_body_tr} ${
                          blockResult.indexOf(block) ==
                            blockResult.length - 1 && lastTd
                        }`}
                        key={block.blockNumber}
                      >
                        <td className="tdIcon">
                          <FontAwesomeIcon icon={faCube} />
                        </td>
                        <td className="tdBlock">
                          <section className="blueText">
                            {block.blockNumber}
                          </section>
                          <section>
                            {moment(block.time, "YYYYMMDD").fromNow()}
                          </section>
                        </td>
                        <td className="tdTxns">
                          <section>
                            Fee Recipient{" "}
                            <span className="blueText">
                              {block.miner.slice(0, 6)}...
                              {block.miner.slice(36)}
                            </span>
                          </section>
                          <section>
                            <span className="blueText">
                              {block.totalTransactions} txns
                            </span>
                          </section>
                        </td>
                        <td className="tdValue">{block.gasUsed} Eth</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
            <section>
              <section className="latestResults_body_title">
                Latest Transactions
              </section>
              <table className="latestResults_body_table">
                <tbody>
                  {transactionsResult.map((txn) => {
                    return (
                      <tr
                        className="`${"atestResults_body_tr} ${
                          transactionsResult.indexOf(txn) ==
                            transactionsResult.length - 1 && lastTd
                        }`}
                        key={txn.transactionHash}
                      >
                        <td className="tdContract">
                          <FontAwesomeIcon
                            icon={faFileContract}
                            className="tdContract"
                          />
                        </td>
                        <td className="tdBlock">
                          <section className="blueText">
                            {txn.transactionHash?.slice(0, 14)}...
                          </section>
                          <section>
                            {moment(txn.time, "YYYYMMDD").fromNow()}
                          </section>
                        </td>
                        <td className="tdFromTo">
                          <section>
                            From{" "}
                            <span className="blueText">
                              {txn.fromAddress?.slice(0, 6)}...
                              {txn.fromAddress?.slice(36)}
                            </span>
                          </section>
                          <section>
                            To{" "}
                            <span className="blueText">
                              {txn.toAddress?.slice(0, 6)}...
                              {txn.toAddress?.slice(36)}
                            </span>
                            <span className="blueText">
                              {txn.totalTransactions}
                            </span>
                          </section>
                        </td>
                        <td className="tdValue">
                          {(Number(txn.value) / 10 ** 18).toFixed(4)} Eth
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          </section> */}
        </section>
      )}
    </section>
  );
}
