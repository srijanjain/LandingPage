import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Feature from 'sections/feature';
import BusinessProfit from 'sections/business-profit';
import Knowledge from 'sections/knowledge';
import ClientFeedback from 'sections/client-feedback';
import WorkFlow from 'sections/workflow';
import Support from 'sections/support';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Respct.club is a creator token platform where you become a shareholder in the journey of your favorite creator."
          title="Respct Club"
        />
        <Banner />
        {/* <Feature />
        <BusinessProfit />
        <Knowledge />
        <ClientFeedback />
        <WorkFlow />
        <Support /> */}
      </Layout>
    </ThemeProvider>
  );
}
