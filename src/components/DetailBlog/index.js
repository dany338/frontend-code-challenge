import React from 'react';
import {
  Container,
  Wrapper,
  ContainerBlog,
  Card
} from './styled';
import EllipseIcon from '../../assets/icons/Ellipse.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import useDetailBlog  from '../../hooks/useDetailBlog';

const DetailBlog = () => {
  const [ selectedBlog ] = useDetailBlog();
  if(!selectedBlog) return null;
  const { title = '', description = '', content = '', image = '', published = '', author = '' } = selectedBlog;
  return (
    <Container>
      <Wrapper>
        <ContainerBlog>
          <Card image={image}>
            <div className="title">
              {title}
            </div>
            <div className="description">
              {description}
            </div>
            <div className="author">
              <div className="info">
                <div className="avatar">
                  <img
                    src={EllipseIcon}
                    alt='User...'
                  />
                </div>
                <div className="name">
                  <div className="authorName">{author}</div>
                  <div className="published">Published on {published}</div>
                </div>
              </div>
              <div className="share">
                <div className="shareIcons">
                  <div className="shareText">
                    <span>SHARE:</span>
                  </div>
                  <img
                    src={InstagramIcon}
                    alt='Instagram...'
                  />
                  <img
                    src={FacebookIcon}
                    alt='Facebook...'
                  />
                  <img
                    src={TwitterIcon}
                    alt='Twitter...'
                  />
                </div>
              </div>
            </div>
            <div className="image" />
            <div className="content">
              <p>
                {content}
              </p>
            </div>
          </Card>
        </ContainerBlog>
      </Wrapper>
    </Container>
  )
};

export default DetailBlog;
