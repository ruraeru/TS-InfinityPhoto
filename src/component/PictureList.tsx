import React from 'react';
import styled from 'styled-components';

export interface PictureListProps {
  images : {
    urls: {
      small: any
    }
  };
}

const ImageItem = styled.img`
   margin: 1rem 1rem 1rem 0;
   line-height: 0;

  @media screen and (max-width: 832px) {
    column-count: 1;
    column-gap: 20px;
  }
  @media screen and (min-width: 833px) and (max-width: 1232px) {
    column-count: 2;
    column-gap: 20px;
  }
  @media screen and (min-width: 1233px) and (max-width: 1670px) {
    column-count: 3;
    column-gap: 20px;
  }

  @media screen and (min-width: 1671px) and (max-width: 1680px) {
    column-count: 4;
    column-gap: 20px;
  }
`;

const PictureList: React.FC<PictureListProps> = ({ images }) => {
  return (
    <>
      <ImageItem src={images.urls.small} />
    </>
  )
}

export default PictureList;