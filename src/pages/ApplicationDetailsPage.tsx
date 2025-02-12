import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useFeatureFlag } from '@openshift/dynamic-plugin-sdk';
import ApplicationDetails from '../components/ApplicationDetails/ApplicationDetails';
import ApplicationDetailsView from '../components/ApplicationDetailsView/ApplicationDetailsView';
import NamespacedPage from '../components/NamespacedPage/NamespacedPage';
import { HACBS_FLAG } from '../hacbs/hacbsFeatureFlag';

const ApplicationDetailsPage = () => {
  const { appName } = useParams();
  const [hacbs] = useFeatureFlag(HACBS_FLAG);

  return (
    <NamespacedPage>
      <Helmet>
        <title>Application Details Page</title>
      </Helmet>
      {hacbs ? (
        <ApplicationDetails applicationName={appName} />
      ) : (
        <ApplicationDetailsView applicationName={appName} />
      )}
    </NamespacedPage>
  );
};

export default ApplicationDetailsPage;
