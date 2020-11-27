import React, { useEffect, Fragment } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Navigation from '../../components/Navigation';
import Hero from '../../components/Hero';
import VoteBox from '../../components/VoteBox';
import InfoBox from '../../components/InfoBox';
import VoteGrid from '../../components/VoteGrid';
import VoteCard from '../../components/VoteCard';
import Alert from '../../components/Alert';

import HERO_IMAGE from '../../assets/hero-pope-bg.jpg';
import VOTEBOX_INFO from '../../data/votebox.json';

const Home = () => {
  // Get store values
  const votebox = useStoreState((state) => state.votebox);
  const figures = useStoreState((state) => state.figures);
  const alert = useStoreState((state) => state.alert);

  // Get store actions
  const handleAlert = useStoreActions((actions) => actions.handleAlert);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleAlert({ show: false, msg: alert.msg });
    }, 4000);
    return () => clearTimeout(timer);
  }, [alert, handleAlert]);

  return (
    <>
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <Hero image={HERO_IMAGE} daysLeft={22}>
        <VoteBox figureName={VOTEBOX_INFO.figureName} link={VOTEBOX_INFO.link}>
          {VOTEBOX_INFO.description}
        </VoteBox>
      </Hero>
      <InfoBox />
      <VoteGrid title="Votes">
        {figures.map((figure) => (
          <Fragment key={figure.id}>
            <VoteCard figure={figure} />
          </Fragment>
        ))}
      </VoteGrid>
      <Alert show={alert.show}>{alert.msg}</Alert>
    </>
  );
};

export default Home;
