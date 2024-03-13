import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Down_Sampling from "../../Assets/Projects/iimg.jpeg";
// import emotion from "../../Assets/Projects/emotion.png";
import Register_Login from "../../Assets/Projects/RL.jpeg";
import chatbot from "../../Assets/Projects/bot.jpeg";
// import suicide from "../../Assets/Projects/suicide.png";
import Register_And_Login from "../../Assets/Projects/Reg.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Down_Sampling}
              isBlog={false}
              title="Down_Sampling"
              description="Java with Spring Boot, downsampling an image involves reducing its resolution or size while maintaining visual quality. Libraries like OpenCV or Java Advanced Imaging (JAI) can be used for this purpose. By resizing the image dimensions or applying compression techniques, you can efficiently downsample images in your Spring Boot application."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="ChatBot"
              description="
              Introducing a sophisticated chatbot powered by OpenAI's key, designed to offer intelligent and engaging conversations. This chatbot showcases the capabilities of OpenAI's advanced language models, demonstrating how accessible AI technology can enhance user interactions and provide valuable assistance.."
              ghLink="https://github.com/rohitkanaujiya45/OpenAI_Chatbot"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Register_And_Login}
              isBlog={false}
              title="Register_And_Login_API"
              description="Using Spring Boot and MySQL, you can create a login and register page. Spring Security handles user authentication and authorization, while MySQL stores user information. The login page allows users to enter credentials, and the register page enables new users to create an account stored in the MySQL database."
              ghLink="https://github.com/rohitkanaujiya45/Register_And_Login"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Register_Login}
              isBlog={false}
              title="Register_Login_frontend"
              description="React.js with VS Code, you can create a login and register page. React's component-based architecture and state management simplify handling user input and form validation. By integrating GIFs, you can enhance the user experience and provide visual instructions during the login and registration process."
              ghLink="https://github.com/rohitkanaujiya45/Register_Login"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
