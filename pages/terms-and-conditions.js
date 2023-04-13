import React from "react";
import PageBanner from "../components/common/PageBanner";
import PageSEO from "../components/common/PageSEO";
import TermsAndConditionsTexts from "../components/common/TermsAndConditionsTexts";
import Layout from "../hoc/Layout";

const TermsAndConditions = () => {
  return (
    <>
      <PageSEO title="Terms And Conditions" />
      <Layout>
        <PageBanner
          heading="Terms And Conditions"
          page="Terms And Conditions"
        />
        <TermsAndConditionsTexts />
      </Layout>
    </>
  );
};

export default TermsAndConditions;
