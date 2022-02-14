import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import { CardTicketButton } from '../../components/styles/Buttons/Tickets.styled';

import {
  FrontContainer,
  Bandname,
  BackContainer,
  Cities,
  Date,
  BackInfoContainer,
} from '../styles/DefaultCard.styled';

const FlipCard = ({ item }) => {
  // const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <Flippy
      flipOnHover={true} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      style={{ width: '300px', height: '300px', padding: '20px' }} /// these are optional style, it is not necessary
    >
      <FrontSide>
        <FrontContainer img={item.img} className="CardFront">
          <Bandname>{item.name}</Bandname>
        </FrontContainer>
      </FrontSide>
      <BackSide>
        <BackContainer img={item.img} className="CardBack">
          <BackInfoContainer>
            <Cities>{item.city}</Cities>
            <Date>{item.date}</Date>
          </BackInfoContainer>
          <CardTicketButton>Tickets</CardTicketButton>
        </BackContainer>
      </BackSide>
    </Flippy>
  );

  // return (

  // <DefaultCardContainer>
  //   <Card img={item.img}>
  //     <Front>{item.name}</Front>
  //     <Back>
  //       <TicketButton>Tickets</TicketButton>
  //     </Back>
  //   </Card>

  // {
  /* <Image src={item.img} />
      <Title>{item.name}</Title>
      <TicketButton>Tickets</TicketButton> */
  // }
  // </DefaultCardContainer>
  // );
};

export default FlipCard;

// import { findLastIndex } from 'lodash';
// import React from 'react';
// import ReactCardFlip from 'react-card-flip';

// import { CardTicketButton } from '../../components/styles/Buttons/Tickets.styled';

// import {
//   FrontContainer,
//   Bandname,
//   BackContainer,
//   Cities,
//   Date,
//   BackInfoContainer,
// } from '../styles/DefaultCard.styled';

// const FlipCard = ({ item }) => {
//   const [isFlipped, setIsFlipped] = React.useState(false);
//   return (
//     <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//       <FrontContainer
//         img={item.img}
//         onMouseEnter={() => setIsFlipped((prev) => !prev)}
//         className="CardFront"
//       >
//         <Bandname>{item.name}</Bandname>
//       </FrontContainer>
//       <BackContainer
//         img={item.img}
//         onMouseLeave={() => setIsFlipped((prev) => !prev)}
//         className="CardBack"
//       >
//         <BackInfoContainer>
//           <Cities>{item.city}</Cities>
//           <Date>{item.date}</Date>
//         </BackInfoContainer>
//         <CardTicketButton>Tickets</CardTicketButton>
//       </BackContainer>
//     </ReactCardFlip>
//   );

//   // return (

//   // <DefaultCardContainer>
//   //   <Card img={item.img}>
//   //     <Front>{item.name}</Front>
//   //     <Back>
//   //       <TicketButton>Tickets</TicketButton>
//   //     </Back>
//   //   </Card>

//   // {
//   /* <Image src={item.img} />
//       <Title>{item.name}</Title>
//       <TicketButton>Tickets</TicketButton> */
//   // }
//   // </DefaultCardContainer>
//   // );
// };

// export default FlipCard;
