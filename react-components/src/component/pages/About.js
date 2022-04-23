import React from "react";
import Main from "../Main";
import Column from "../Column";
import Pages from "../Pages";
function About() {
  return (
    <>
      <Pages
        columns={
          <>
            <Column
              content={
                <Main
                  title="ABOUT US"
                  content="Established since 2021, we have hosted forest carbon token and governance token sales for thousands of organisations. The aim of Tree organisation is to provide a platform for everyday consumers to help in reducing carbon waste as well."
                  theimage="images/forestThree.jpg"
                ></Main>
              }
            ></Column>
            <Column content={<h1>Hello world!</h1>}></Column>
          </>
        }
      ></Pages>
    </>
  );
}

export default About;
