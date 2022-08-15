// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface Istaking {
     function depositEther(uint _amountOfDays) external payable;

     function withDraw (uint _amount) external;
}