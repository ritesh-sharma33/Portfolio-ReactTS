import React from "react";
import { Card } from "react-bootstrap";
import "./about.css";

type EducationCardProps = {
  title: string;
  school: string;
  grade: Number;
  passYear: Number;
};

const EducationCard = ({ title, school, grade, passYear }: EducationCardProps) => {
  return (
    <Card className="educationCard">
      <Card.Body>
        <Card.Title style={{ color: "white" }}>
          {title}
        </Card.Title>
        <Card.Subtitle style={{ color: "white" }}>
          School: {school}
        </Card.Subtitle>
        <Card.Text style={{ color: "white" }}>
          Pass Year: {passYear}
          Grade: {passYear}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EducationCard;