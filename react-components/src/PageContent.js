import React, { useState } from "react";
import Column from "./component/Column";
import Main from "./component/Main";








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
            <Column content={<h1>Hello world!</h1>}></Column>
      </>
    ),
    "transaction": (
        <>
        </>
    ),
}


export default pageContent;


