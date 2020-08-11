import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";

const Wrapper = styled.div`
  height: 100%;
`;

function Materials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg">
      <Wrapper>
        <section className="mainMaterials">
          <section className="subMain">
            <h1>Alternative Learning System Tests For Students</h1>
            <p>FUNCTIONAL LITERACY TEST (FLT) ELEMENTARY LEVEL</p>
            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fcdn.fbsbx.com%2Fv%2Ft59.2708-21%2F61337618_1049468431909389_6555711482158383104_n.pdf%2FEL3-FLT-Test-Booklet-1.pdf%3F_nc_cat%3D100%26_nc_sid%3D0cab14%26_nc_ohc%3DW82kv2pxc8oAX9ipdwW%26_nc_ht%3Dcdn.fbsbx.com%26oh%3D3ccd7cdf5cafdd25ec5128f1ab824324%26oe%3D5F318AD1%26dl%3D1%26fbclid%3DIwAR0ovDhqjk3TOcoKHuUUS7aKqXlM03hgulF0O3mRhtpROo0nNRmuX2jsWNU&h=AT0anbzo2vWFA6U-8A5vZqG1e4RxnkIc57j7sQcBFZTaaZSnN2jhGlBsaLbiZT9ZHbPFJg-chlq5keg-0iZAQayC_lSLoxgq0px6kO_BYU8T6-sboXWzUqgy4-1feqEdJFXrTTBb"
              className="btn btn-white btn-animate"
            >
              GET THE TEST
            </a>
            <div className="spacerDiv"></div>
            <p>FUNCTIONAL LITERACY TEST (FLT) JUNIOR HIGH SCHOOL LEVEL</p>
            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fcdn.fbsbx.com%2Fv%2Ft59.2708-21%2F64213119_431698981008652_6966992868908990464_n.pdf%2FJHS3-FLT-Test-Booklet-1.pdf%3F_nc_cat%3D101%26_nc_sid%3D0cab14%26_nc_ohc%3DKY785POnLdAAX-8REEh%26_nc_ht%3Dcdn.fbsbx.com%26oh%3D89e488515b19b1be04ef93cd7ec1e30f%26oe%3D5F316B00%26dl%3D1%26fbclid%3DIwAR1MOm0RV5YWL3brqZbHMRuXw8nxpf4qrd8SGc0XiYoYmNEvwqeve1NOr30&h=AT1QIen7-lxQe5p1HX6CluqiGK8Yuo5WOjG6A-DgYObbAl9_VFHJmQjaXijaJwUssKlWKz-iaFxxu2hThEHAM0mfUr46xoCHGSQN1ji9LQSdCSWCt7DLXWdh1yZcYCaRWoXsjL53"
              className="btn btn-white btn-animate"
            >
              GET THE TEST
            </a>
          </section>
        </section>
      </Wrapper>
    </div>
  );
}

export default Materials;
