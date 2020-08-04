import React, { useEffect } from 'react';
import Header from './header/Header';
import Special from './special/Special';
import Affordability from './affordability/Affordability';
import AgeGroups from './ageGroups/AgeGroups';
import Carousel from './carousel/Carousel';
import RegistrationInformation from './registrationInformation/RegistrationInformation';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { toggle } from "../../../../actions/landingPageActions/landingPageActions";

function LandingPage(props) {
useEffect(() => {
  props.toggle();
}, [props])
  return (
    <div>
      <Header />
      <Special />
      <Affordability />
      <AgeGroups />
      <Carousel />
      <RegistrationInformation />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    reset: state.landingPageReducer.reset,
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { toggle }
  )(LandingPage)
)