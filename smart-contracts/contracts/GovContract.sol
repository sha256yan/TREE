// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";


//use safe transfer libraries.
//use safemath


/*
    TO DO:
        - Find existing smart contracts that do something similar.
        - Use SafeMath
        - Use SafeTransfer
        - Gov tokens must be locked to create an issue.
        - Later refactor to store issue strings off-chain.
*/


contract Governance {
    IERC20 public CRB;
    IERC20 public TGV;

    //will function as the issueId
    int64 public numIssues;
    //Will be true while protocol is in development. Centralised until this value turns false.
    bool public custodianMode;

    event IssueCreated(int64 indexed _issueId, address indexed _author, int deadline);
    event IssueClosed (int64 indexed _issueId, address indexed _author, int16 _yae, int16 _nae);
    event VoteRecieved(address indexed _voter, int64 indexed _issueId, bool _voteIsYae);


    struct Issue {
        int16 yae;
        int16 nae;
        string issueTitle;
        string issueText;
        address author;
    }
    mapping(int64 => Issue) public issues;


    constructor(IERC20 _CRB, IERC20 _TGV) {
        CRB = _CRB;
        TGV = _TGV;
        numIssues = 0;
    }



    function createIssue(string calldata _issueTitle, string calldata _issueText, int _deadline) external returns(int16 issueId) {
        //author must deposit a bond in gov tokens.

    }




    function submitVote(int16 _issueId, bool _voteIsYae) external {
        //gov token holders can vote on an issue.

    }



    function redeemBond(int64 _issueId) external {
        //author must be able to retrieve gov token bond after issue is closed.
        Issue storage issue = issues[_issueId];
        require(msg.sender == issue.author, "NOT AUTHOR");
    }


}


