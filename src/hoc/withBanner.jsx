
import React from 'react';
import BannerWithTitle from '../components/BannerWithTitle';

const withBanner = (WrappedComponent, image, title) => {
  return (props) => (
    <>
      <BannerWithTitle image={image} title={title} />
      <WrappedComponent {...props} />
    </>
  );
};

export default withBanner;
