import React from 'react';

//* IMPORT DATA______________________________
import { impressum } from '../../data';

import {
  ImpressumContainer,
  TeamMembers,
  Technologies,
} from '../../components/styles/Impressum.styled';

const Impressum = () => {
  return (
    <ImpressumContainer>
      {impressum.map((item) => (
        <div>
          <TeamMembers>
            <h1>{item.name}</h1>
            <img src={item.img} alt="" />
            <h2>{item.responsibility}</h2>
            <h3>Techcnologies:</h3>
            <Technologies>
              {item.technology.map((tech) => (
                <img src={tech.img} alt="" />
              ))}
            </Technologies>
            <h3>Kontakt:</h3>
            <h4>Tel: {item.telephone}</h4>
            <h4>Email: {item.email}</h4>
            <h4 style={{ marginTop: '10px' }}>Github:</h4>
            <a style={{ textDecoration: 'underline' }} href={item.github}>
              {item.github}
            </a>

            <h4 style={{ marginTop: '10px' }}>Website:</h4>
            <a style={{ textDecoration: 'underline' }} href={item.github}>
              {item.website}
            </a>
          </TeamMembers>
        </div>
      ))}
    </ImpressumContainer>
  );
};

export default Impressum;
