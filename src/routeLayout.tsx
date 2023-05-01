import React from 'react'
import Home from './pages/Home';
import Blocks from './pages/Blocks';
import BlockDetails from './pages/BlockDetails';
import BlockTnxs from './pages/BlockTnxs';
import TransactionByHash from './pages/transactions/TransactionByHash'
import TransactionByAddress from './pages/transactions/TransactionByAddress'
import { RouteObject } from "react-router-dom";
const routesLayout: RouteObject[] = [
  { path: "/", element: <Home/> },
  { path: "/blocks", element: <Blocks/> },
  { path: "/block-details", element: <BlockDetails/> },
  { path: "/block-tnx-list", element: <BlockTnxs/> },
  { path: "/tnx-by-hash", element: <TransactionByHash/> },  
  { path: "/tnx-by-address", element: <TransactionByAddress/> },
]

export default routesLayout;