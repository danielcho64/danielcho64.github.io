import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header, AchievementCard } from "../../components";
import certificationsData from "../../data/Certifications.json";
import styles from "./Certifications.module.css";

const Certifications = () => {
  return (
    <React.Fragment>
      <Header title="Certifications" />
      <Container fluid className={styles.container}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {certificationsData.map((obj, index) => (
            <AchievementCard
              key={index}
              title={obj.title}
              organization={obj.organization}
              description={obj.description}
            />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Certifications;
