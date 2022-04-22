// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";


//use safe transfer libraries.
//use safemath

//Safe Math Interface

library SafeMath {

    function safeAdd(uint a, uint b) public pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }

    function safeSub(uint a, uint b) public pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }

    function safeMul(uint a, uint b) public pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }

    function safeDiv(uint a, uint b) public pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}

/*
    TO DO:
        - Gov tokens must be locked to create an issue.
        - Later refactor to store issue strings off-chain.
*/



/*
    Parent contracts:
        -Governor
            - The core contract that contains all the logic and primitives. It is abstract and requires choosing one of each of the modules below, or custom ones.



        -GovernorSettings
            - Manages some of the settings (voting delay, voting period duration, and proposal threshold)
              in a way that can be updated through a governance proposal, without requiering an upgrade.



        -GovernorCountingSimple
            - Simple voting mechanism with 3 voting options: Against, For and Abstain.



        -GovernorVotes
            - Extracts voting weight from an ERC20Votes token.



        -GovernorVotesQuorumFraction
            - Combines with GovernorVotes to set the quorum as a fraction of the total token supply.



        -GovernorTimelockControl
            - Connects with an instance of TimelockController. Allows multiple proposers and executors, in addition to the Governor itself.



        Quorum:
            - Portion of total voting power of a governing community needed to pass a consensus.
*/






/*
    Terminology:

        - Operation

            - A transaction (or multiple transactions) that are the subject of a timelock. Scheduled by a proposer
              and executed by an executor. Timelock sets a minimum delay between proposition and execution.
            - If an operation has multiple transactions, (batch mode), they are executed automatically.
            - Identified by the hash of their content.

        - Operation Status:

            -Unset:    An operation that is not part of the timelock mechanism.
            -Pending:  An operation that has been scheduled, before the timer expires.
            -Ready:    An operation that has been scheduled, after the timer expires.
            -Done:     An operation that has been executed.
        
        - Role:

            - Admin:     An address in charge of other roles.
            - Proposer:  An address in charge of scheduling and cancelling operations.
            - Executor:  An address in charge of executing operations after timelock expiry.


            
*/



contract MyGovernor is Governor, GovernorSettings, GovernorCountingSimple, GovernorVotes, GovernorVotesQuorumFraction, GovernorTimelockControl {

    using SafeMath for uint;

    //_token is the gov token.

    /*
        GovernorVotesQuorumFraction:
            -takes an int arguement which determines minimum percentage of total 
             gov token supply needed to pass a consensus. (The Quorum)
        votingDelay:
            - How long after proposal creation should voting powers be fixed
        votingPeriod:
            - How long a proposal remains open to votes. (Number of blocks away from creation)
    */


    constructor(IVotes _token, TimelockController _timelock)
        Governor("MyGovernor")
        GovernorSettings(1 /* 1 block */, 45818 /* 1 week */, 0)
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(4)
        GovernorTimelockControl(_timelock)
    {}

    // The following functions are overrides required by Solidity.





    function votingDelay()
        public
        view
        override(IGovernor, GovernorSettings)
        returns (uint256)
    {
        return super.votingDelay();
    }





    function votingPeriod()
        public
        view
        override(IGovernor, GovernorSettings)
        returns (uint256)
    {
        return super.votingPeriod();
    }





    function quorum(uint256 blockNumber)
        public
        view
        override(IGovernor, GovernorVotesQuorumFraction)
        returns (uint256)
    {
        return super.quorum(blockNumber);
    }





    function getVotes(address account, uint256 blockNumber)
        public
        view
        override(IGovernor, GovernorVotes)
        returns (uint256)
    {
        return super.getVotes(account, blockNumber);
    }





    function state(uint256 proposalId)
        public
        view
        override(Governor, GovernorTimelockControl)
        returns (ProposalState)
    {
        return super.state(proposalId);
    }





    function propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description)
        public
        override(Governor, IGovernor)
        returns (uint256)
    {
        return super.propose(targets, values, calldatas, description);
    }





    function proposalThreshold()
        public
        view
        override(Governor, GovernorSettings)
        returns (uint256)
    {
        return super.proposalThreshold();
    }





    function _execute(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
        internal
        override(Governor, GovernorTimelockControl)
    {
        super._execute(proposalId, targets, values, calldatas, descriptionHash);
    }





    function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
        internal
        override(Governor, GovernorTimelockControl)
        returns (uint256)
    {
        return super._cancel(targets, values, calldatas, descriptionHash);
    }





    function _executor()
        internal
        view
        override(Governor, GovernorTimelockControl)
        returns (address)
    {
        return super._executor();
    }





    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(Governor, GovernorTimelockControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
