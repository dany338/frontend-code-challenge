import React from 'react';
import {
  Container,
  Wrapper,
  SearchBox,
} from './styled';
import StartYellowIcon from '../../assets/icons/star-yellow.svg';
import StartGreyIcon from '../../assets/icons/star-grey.svg';
import Ellipse from '../../assets/icons/Ellipse.svg';
import cutString from '../../utils/cutString';

const CardBlog = ({ image, colorPrice, favorite, title, description }) => (
  <Container image={image} colorPrice={colorPrice}>
    <div className="image">
      <div className="header">
        <div>
          <span>$49/mo</span>
        </div>
        <img
          src={favorite ? StartYellowIcon : StartGreyIcon}
          alt='Star...'
        />
      </div>
    </div>
    <div className="textos">
      <h2 className="titulo">{cutString(title, 47)}</h2>
		  <p className="description">{cutString(description, 61)}</p>
    </div>
    <div className="line" />
    <div className="footer">
      <div>
        <img
          src={Ellipse}
          alt='User...'
        />
        <span>ALIVE COOPER</span>
      </div>
      <div>
        <span>MAY 02</span>
      </div>
    </div>
  </Container>
)

export default CardBlog;
