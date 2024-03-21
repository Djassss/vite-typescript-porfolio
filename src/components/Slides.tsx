import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import pic1 from '../pics/1.jpg'
import pic2 from '../pics/2.jpg'
import pic3 from '../pics/3.jpg'


type Pics = {
  id: number;
  img: string;
}


const myPics: Pics[] = [
  {
    id: 1,
    img: pic1
  },
  {
    id: 2,
    img: pic2
  },
  {
    id: 3,
    img: pic3
  },
] 



const Slides = () => {
  return (
    <>
        <Carousel 
          showArrows={false}
          showThumbs={true}
          showStatus={false}
          showIndicators={false}
          autoPlay={false}
          infiniteLoop
          className="carousel"
        >
          {myPics.map(({id, img}) => (
            <div key={id}>
              <img src={img}  />
            </div>
          ))}
        </Carousel>
    </>
  )
}

export default Slides
