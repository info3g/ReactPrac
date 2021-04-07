import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel'
import images_a from '../images/a.jpg'
import images_b from '../images/b.jpg'
import images_c from '../images/c.jpg'
import images_d from '../images/d.jpg'
import images_e from '../images/e.jpg'
import images_f from '../images/f.jpg'

function Carousel() {
    var imageName = require('../images/a.jpg')
    return<InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={1}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    
    <div>
      <img
        alt=''
        src={images_a}
      />
    </div>
    <div>
      <img
        alt=''
        src={images_b}
      />
    </div>
    <div>
      <img
        alt=''
        src={images_c}
      />
    </div>
    <div>
      <img
        alt=''
        src={images_c}
      />
    </div>
    <div>
      <img
        alt=''
        src={images_d}
     />
    </div>
    <div>
      <img
        alt=''
        src={images_e}
      />
    </div>
    <div>
      <img
        alt=''
        src={images_f}
      />
    </div>
    {/* <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ff6347&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ebbfbf&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=def1f9&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=cdf2c6&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=9fa616&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=2c4caa&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=44e3e1&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ff6666&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=94e1e3&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=29083c&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ffff99&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=616161&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ed7ebe&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div> */}
  </InfiniteCarousel>
}
export default Carousel