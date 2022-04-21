// SPDX-License-Identifier: MIT
pragma solidity =0.8.0;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Governance {
    IERC20 public CRB;
    IERC20 public TGV;
    constructor(IERC20 _CRB, IERC20 _TGV) {
        CRB = _CRB;
        TGV = _TGV;
    }
}








/*
    Need voting on singular issues.
    Need voting on representatives (maybe)
*/