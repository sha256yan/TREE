import React from "react";
import CardsItem from "../CardsItem";
import Main from "../Main";

function Transaction() {
  return (
    <>
      <Main
        title="GOVERNANCE"
        content="The Tree protocol is public owned and supervised by Tree governance token holders regularly"
        theimage="images/forestOne.jpg"
      ></Main>
      <CardsItem
        src="images/governanceforum.png"
        text="Governance forum"
        statement="A forum for governance related discussion. Share proposals, provide feedback, and shape the future of the protocol with the Tree community."
      ></CardsItem>
      <CardsItem
        src="images/voting.avif"
        text="Governance portal"
        statement="The official governance voting portal. Review live government porposals and cast your vote on-chain."
      ></CardsItem>
    </>
  );
}

export default Transaction;
