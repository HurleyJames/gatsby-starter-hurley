import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: 'Hey <b>&nbsp;</b> 👋 <b>&nbsp;</b> I\'m <b>Hurley Huang</b>! This is my Homepage.',
  paraTwo: '💼 <a href="https://portfolio.withh.life">Portfolio</a> / 👨🏻‍💻 <a href="https://blog.withh.life/">Blog</a> / 🏖 <a href="https://soul.withh.life/">Soul</a> / 📝 <a href="https://notes.withh.life/">Notes</a> / 📦 <a href="https://interview.withh.life/">Interview</a>',
  paraThree: 'A member of 🇬🇧 <a href="https://www.leeds.ac.uk/">University of Leeds</a> Alumni, <i><a href="https://courses.leeds.ac.uk/i537/advanced-computer-science-artificial-intelligence-msc">MSc in Advanced Computer Science (Artificial Intelligence)</a></i>.',
  paraFour: 'Love the <b>mobile development</b>, the <b>blockchain</b> and the <b>distributed systems</b>, hope to be a full-stack coder.',
};
const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)} ${stripTags(pageText.paraThree)} ${stripTags(pageText.paraFour)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Hurley', 'Huang', 'China', 'Software Engineer', 'Java', 'Android', 'Leeds', 'NCHU']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraThree)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraFour)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="JiangXi, China"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="movie.png"
            alt="movie and music image"
            textH4="Love Movie and Music"
            textH3="Movie + Music = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="postgraduate.png"
            alt="postgraduate image"
            textH4="Alumni of UoL, MSc in"
            textH3="Advanced Computer Science"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coder.png"
            alt="coder image"
            textH4="Love Coding"
            textH3="Coder for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="freedom.png"
            alt="freedom image"
            textH4="Pride and Democracy"
            textH3="Always believe in freedom"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="undergraduate.png"
            alt="undergraduate image"
            textH4="Graduated at NCHU, BSc in"
            textH3="Software Engineering"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
