import React, { Component } from 'react';
import './Carousel.scss';
import SuperHeroes from './pictures/superheroes.jpg';
import KingKong from './pictures/kingkong.jpg';
import HarryPotter from './pictures/harrypotter.jpg';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';


//////////////////////////////////  PICTURES ///////////////////////////////////


const items = [
    {
        id: 1,
        altText: 'SuperHeroes Marvel & Dc Comics',
        caption: 'Slide 1',
        src: SuperHeroes
    },
    {
        id: 2,
        altText: 'Harry Potter',
        caption: 'Slide 2',
        src: HarryPotter
    },
    {
        id: 3,
        altText: 'King Kong',
        caption: 'Slide 3',
        src: KingKong
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