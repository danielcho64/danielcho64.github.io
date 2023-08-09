import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header, ExperienceCard } from "../../components";
import educationData from "../../data/Education.json";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <React.Fragment>
      <Header title="Education" />
      <Container fluid className={styles.container}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {educationData.map((obj, index) => (
            <ExperienceCard
              key={index}
              title={obj.title}
              organization={obj.organization}
              liveUrl={obj.liveUrl}
              duration={obj.duration}
              description={obj.description}
              logo={obj.logo}
              variant="success"
            />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Education;
