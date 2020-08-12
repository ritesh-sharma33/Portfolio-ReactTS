import React from "react";
import {Row} from "react-bootstrap";

class Technology {
  name: string;
  websiteUrl: string;
  imageUrl: string;
  techType: string;

  constructor(
    name: string,
    websiteUrl: string,
    imageUrl: string,
    techType: string
  ) {
    this.name = name;
    this.websiteUrl = websiteUrl;
    this.imageUrl = imageUrl;
    this.techType = techType;
  }
}

const technologies = [
  new Technology(
    "JavaScript",
    "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
    "https://user-images.githubusercontent.com/45563022/88325157-57098a00-cd42-11ea-9703-847daf178a02.jpg",
    "programming"
  ),
  new Technology(
    "Java",
    "https://www.java.com/en/",
    "https://user-images.githubusercontent.com/45563022/88325432-bb2c4e00-cd42-11ea-97fa-a55a208ddf0e.png",
    "programming"
  ),
  new Technology(
    "Dart",
    "https://dart.dev/",
    "https://user-images.githubusercontent.com/45563022/88325324-96d07180-cd42-11ea-8e5a-c047a3bb54a1.png",
    "programming"
  ),
  new Technology(
    "Python",
    "https://www.python.org/",
    "https://user-images.githubusercontent.com/45563022/88325506-d6975900-cd42-11ea-887e-9e4e2db231be.png",
    "programming"
  ),
  new Technology(
    "C",
    "https://www.cprogramming.com/",
    "https://user-images.githubusercontent.com/45563022/89928633-bc57e900-dc25-11ea-9acf-a935b4946616.png",
    "programming"
  ),
  new Technology(
    "C++",
    "http://www.cplusplus.com/",
    "https://user-images.githubusercontent.com/45563022/89928643-be21ac80-dc25-11ea-9078-013d4a4ed972.png",
    "programming"
  ),

  new Technology(
    "React",
    "https://reactjs.org/",
    "https://user-images.githubusercontent.com/45563022/88325279-84563800-cd42-11ea-9c6c-fabe55e8f6f3.png",
    "framework"
  ),
  new Technology(
    "Angular",
    "https://angular.io/",
    "https://user-images.githubusercontent.com/45563022/88325230-70aad180-cd42-11ea-8afd-d38a674ddd22.png",
    "framework"
  ),
  new Technology(
    "ExtJS",
    "https://www.sencha.com/products/extjs/",
    "https://user-images.githubusercontent.com/45563022/89928987-3b4d2180-dc26-11ea-8bd9-7d5f897f2dea.png",
    "framework"
  ),
  new Technology(
    "NodeJS",
    "https://nodejs.org/en/",
    "https://user-images.githubusercontent.com/45563022/89929652-1efdb480-dc27-11ea-9306-0d25e6c073ef.png",
    "framework"
  ),
  new Technology(
    "Spring",
    "https://spring.io/",
    "https://user-images.githubusercontent.com/45563022/88325472-c97a6a00-cd42-11ea-89c8-6c078086fa77.png",
    "framework"
  ),

  new Technology(
    "Flutter",
    "https://flutter.dev",
    "https://user-images.githubusercontent.com/45563022/88324636-9b485a80-cd41-11ea-93d5-4479ce82cdee.png",
    "mobile"
  )
];

type TechCardProps = {
  key: string;
  technology: Technology;
};

const technologyCardStyle = {
  height: 100,
  marginTop: 10,
  marginRight: 10,
  marginLeft: 10,
  justifyContent: "center"
};

const TechnologyCard = ({ key, technology }: TechCardProps) => {
  return (
    <div className="techCard" style={technologyCardStyle}>
      <a href={technology.websiteUrl}>
        <img
          src={technology.imageUrl}
          height={70}
          width={70}
          alt={technology.name}
        />
        <br />
        <span style={{ fontFamily: "Varela Round", color: "white", textAlign: "center" }}>
          {technology.name}
        </span>
      </a>
    </div>
  );
};

const techHeadingStyle = {
  fontSize: 30,
  fontFamily: "Varela Round",
  fontWeight: "bold"
};

type TechnologiesPros = {
  techType: string;
  heading: string;
};

const Technologies = ({ techType, heading }: TechnologiesPros) => {
  return (
    <div className="technologies" style={{ marginTop: 100, justifyContent: "center" }}>
      <span style={techHeadingStyle}>{heading}</span>
      <Row style={{ justifyContent: "space-between" }}>
        {technologies.map(technology => {
          if (technology.techType === techType)
            return (
              <TechnologyCard key={technology.name} technology={technology} />
            );
        })}
      </Row>
    </div>
  );
};

export default Technologies;
