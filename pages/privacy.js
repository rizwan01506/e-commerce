import React from "react";
import PageBanner from "../components/common/PageBanner";
import PageSEO from "../components/common/PageSEO";
import PrivacyPolicyTexts from "../components/common/PrivacyPolicyTexts";
import Layout from "../hoc/Layout";

const PrivacyPolicy = () => {
  return (
    <>
      <PageSEO title="Privacy Policy" />
      <Layout>
        <PageBanner heading="Privacy Policy" page="Privacy Policy" />
        <PrivacyPolicyTexts />
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
