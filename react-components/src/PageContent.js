import React, { useState } from "react";
import Column from "./component/Column";
import Main from "./component/Main";
import CardsItem from "./component/CardsItem";
import Organisations from "./component/Organisations";
import ProfileInfo from "./component/ProfileInfo";
import Login from "./component/Login";
import Newscard from "./component/Newscard";
import AllButtons from "./component/AllButtons";
import {SignUp, CryptoLogIn, SignIn, SignOut } from "./component/Auth";
import "./style.css"








const pageContent = {
    "about": (
        <>
            <Column
            content={
                <Main
                title="ABOUT US"
                content="Established since 2021, we have hosted forest carbon token and governance token sales for thousands of organisations. The aim of Tree organisation is to provide a platform for everyday consumers to help in reducing carbon waste as well."
                theimage="images/forestThree.jpg"
                ></Main>
            }
            >
                
            </Column>
      </>
    ),



    "home": (
        <>
            <Column
                content={
                    <span className="home-wrapper">
                    <section className="home-container">
                        <div className="home-contents">
                            <h1 className="home-title">TREE</h1>
                            <p className="home-desc">
                                A platform created to reduce carbon emission via decentralized
                                autonomous forest preservation. Buy your token today and help save
                                the Earth!
                            </p>
                            <ul className="newscard-container">
                                <Newscard
                                event="DeepOwl Woods tokens now available!"
                                duration="24th April 2022-31st May 2022"
                                className="newscard-items"
                                ></Newscard>
                                <Newscard
                                event="Governance voting starting soon!"
                                duration="26th April 2022-28th April 2022"
                                className="newscard-items"
                                ></Newscard>
                            </ul>
                        </div>
                    </section>
                    </span>
            }/>
        </>
    ),


    
    "governance": (
        <>
        <Column
            content={
                <Main
                    title="GOVERNANCE"
                    content="The Tree protocol is public owned and supervised by Tree governance token holders regularly"
                    theimage="images/forestOne.jpg"
                />
            }
        />
        <Column
            content={
                <ul className="cards__items">
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
                </ul>
            }
        />
        </>
    ),


    
    "transaction": (
        <section>
            <Column
                content={
                    <Main
                        title="TRANSACTION"
                        content="Worried about the environment but do not know how to contribute as an indivual? Buy a token today and you can also become a hero to save Nature!"
                        theimage="images/forestThree.jpg"
                    ></Main>
                }
            />
            <Column
                content={
                    <div>
                        <p class="transaction-statement">Check out these cool forest tokens!</p>
                        <Organisations></Organisations>
                    </div>
                }
            />
                    
         </section>
    ),


    
    "profile": (
        <Column content = {
            <div className="profile-wrapper">
                <ProfileInfo
                    image="images/sample-profile-picture.png"
                    name="Emma Watson"
                    description="Emma Watson, in full Emma Charlotte Duerre Watson, (born April 15, 1990, Paris, France), British actress and activist who was perhaps best known for playing the young wizard Hermione Granger in the Harry Potter films. She also garnered attention as a spokesperson for women's equality."
                ></ProfileInfo>
            </div>
        } />
    ),
}


export default pageContent;


