import React from 'react';
import { useAtom } from 'jotai';
import {
  Container,
  Wrapper,
  ContainerBlog,
  Card
} from './styled';
import { selectedBlogAtom } from '../../atoms/blog';
import ImageBlogMale from '../../assets/images/image-blog-male.png';
import EllipseIcon from '../../assets/icons/Ellipse.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';


const DetailBlog = () => {
  const [selectedBlog, ] = useAtom(selectedBlogAtom);
  // const { title, description, content, image } = selectedBlog;
  // image={image}
  return (
    <Container>
      <Wrapper>
        <ContainerBlog>
          <Card image={ImageBlogMale}>
            <div className="title">
              {/* {title} */}
              Should I work remotely or will it put a strain on my long-term career?
            </div>
            <div className="description">
              {/* {description} */}
              As part of our ongoing effort to enhance the traveler journey, we’re proud to partner with Portland International Airport (PDX) on the launch of a pilot program designed to shorten rider wait times at pickup.
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
                  <div className="authorName">ALICE COOPER</div>
                  <div className="published">Published on May 20, 2019</div>
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
                {/* {content} */}
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </div>
          </Card>
        </ContainerBlog>
      </Wrapper>
    </Container>
  )
};

export default DetailBlog;
