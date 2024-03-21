import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Success from '../components/Success';


const fadeInAnimation = keyframes`
  from {
    opacity: 0;

  }
  to {
    opacity: 1;

  }
`;


const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #555;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  color: #777;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 10px;
  color: #555;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;

const AboutPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const skills: string[] = [
    'Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3',
    'Libraries/Frameworks: React, Redux, Material-UI, Antd-UI',
    'Tools/Platforms: Git, Vite, npm',
    'Other Skills: Responsive design'
  ];

  // Render skills list
  const renderSkillsList = () => {
    return skills.map((skill, index) => <SkillItem key={index}>{skill}</SkillItem>);
  };

  // Function to handle button click
  const toggleSubmit = () => {
    setIsSubmitted(true)
    console.log('Button clicked!');

    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000) 
  };

  return (
    <>
      
    <AboutContainer>
      <Title>About Me</Title>
      <Paragraph>
        Hello! I'm Jasur, a passionate frontend web developer specializing in React. With a strong background in Javascript and Typescript, I bring creativity and technical expertise to every project I work on.
      </Paragraph>
      <Subtitle>What I Do</Subtitle>
      <Paragraph>
        As a frontend developer, I love turning ideas into reality through clean and efficient code. I specialize in creating responsive and user-friendly web applications that not only look great but also provide an exceptional user experience. Whether it's designing pixel-perfect layouts, optimizing performance, or integrating APIs, I'm always up for a challenge.
      </Paragraph>
      <Subtitle>My Skills</Subtitle>
      <SkillsList>
        {renderSkillsList()}
      </SkillsList>
      <Subtitle>My Projects</Subtitle>
      <Paragraph>
        I've had the pleasure of working on a variety of projects, from small business websites to complex web applications. Some highlights include:
      </Paragraph>
      <Paragraph>
        - E-commerce Platform: Developed a React-based e-commerce platform with integrated payment gateways and user authentication.
      </Paragraph>
      <Paragraph>
        - Portfolio Website: Designed and built a personal portfolio website showcasing my skills and projects using React and styled-components.
      </Paragraph>
      <Paragraph>
        - Task Management App: Collaborated on a task management app using React, Redux, and Firebase for real-time data synchronization.
      </Paragraph>
      <Subtitle>Let's Connect</Subtitle>
      <Paragraph>
        I'm always looking for new opportunities to collaborate and contribute to exciting projects. Whether you're a fellow developer, a startup looking to enhance your online presence, or a company in need of frontend expertise, I'd love to hear from you!
      </Paragraph>
     <Button onClick={() =>  toggleSubmit()}>Get in Touch</Button>
     {isSubmitted && <Success />}
    </AboutContainer>
    </>
  );
};

export default AboutPage;
