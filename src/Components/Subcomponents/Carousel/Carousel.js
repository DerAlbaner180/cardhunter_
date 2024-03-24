import Carousel from 'react-bootstrap/Carousel';
import Image from "./fallout.jpg";
import "./Carousel.css"

function IndividualIntervalsExample() {
  return (
    <Carousel style={{maxHeight:"15em"}}>
      <Carousel.Item style={{maxHeight:"15em"}} interval={6500}>
        <img src={Image}  className='slides' alt='text'/> 
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5500} style={{maxHeight:"15em"}}>
        <img src={Image} className='slides' alt='text' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5500} style={{maxHeight:"15em"}}>
        <img src={Image}  className='slides' alt='text'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;