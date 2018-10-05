import React, { Component } from 'react';
import './Carousel.scss';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';


//////////////////////////////////  PICTURES ///////////////////////////////////


const items = [
    {
        id: 1,
        altText: 'Marvel',
        caption: 'Slide 1',
        src: 'https://themightyblog.fr/wp-content/uploads/2017/11/marvel-comics-legacy.jpg'
    },
    {
        id: 2,
        altText: 'DC Comics',
        caption: 'Slide 2',
        src: 'https://gfx.antyradio.pl/var/antyradio/storage/images/film/duperele/10-dowodow-na-to-ze-dc-jest-lepsze-od-marvela-20367/1379549-1-pol-PL/10-dowodow-na-to-ze-DC-jest-lepsze-od-Marvela_article.jpg'
    },
    {
        id: 3,
        altText: 'Vilains',
        caption: 'Slide 3',
        src: 'https://lamortestunehistoire.files.wordpress.com/2018/04/cropped-evilgroup1.jpg'
    }
];

//////////////////////////////////////// CLASS /////////////////////////////////

class Slider extends Component {

    constructor(props) {

        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    className="custom-tag"
                    tag="div"
                    key={item.id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                >
                    <img 
                        src={item.src} 
                        alt={item.altText} 
                        className="imgslide"
                    />

                </CarouselItem>
            );
        });

        return (
            <div>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators 
                        items={items} 
                        activeIndex={activeIndex}     
                        onClickHandler={this.goToIndex} 
                    />
                    {slides}
                    <CarouselControl 
                        direction="prev" 
                        directionText="Previous" 
                        onClickHandler={this.previous}
                    />
                    <CarouselControl 
                        direction="next" 
                        directionText="Next" 
                        onClickHandler={this.next}
                    />
                </Carousel>
            </div>
        );
    }
}

export default Slider;