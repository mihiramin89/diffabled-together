import React from 'react';
import Flexbox from 'flexbox-react';

import { Card } from 'react-toolbox/lib/card';

export default class Home extends React.Component {
  render() {
    const paragraph1 = `
      My name is Sarah Philips and I am a college student with special needs.
      I was one of the lucky ones. You see, I was born with Turner's syndrome and
      suffered a prenatal stroke. With the support of countless great teachers, physicians,
      therapists, and caregivers I was able to attend elementary, high school, and college
      as a "mainstream" student. Through the years, though, it was blatantly obvious to me
      that there was a huge gap between the disabled community and the neurotypical population
      ("normies"). There is little to no interaction between the two worlds. For instance, the
      students who have disabilities at Wright State (my university) are housed together in the
      same dorm; the students at Fairfield (my alma mater) are all close by in a handful of classrooms.
      There are few opportunities for overlap, and little social interaction between the two groups.
      For someone like me, with disabilities but also full cognitive capacity, it's hard to fully fit
      in to either category. I live in the gap on a daily basis! I wanted to tackle this overwhelming
      issue head on through Diffabled Together, and shed a little light in the lives of those who may
      not always see any hope for the future. After all, anything is possible!
    `;

    const paragraph2 = `
      “Diffabled Together” is a college campus organization of differently abled students,
      with the purpose of proudly breaking down the barriers between the two worlds.
      We host casual gatherings and fun events throughout the school year, and even go on
      outings to other campus events together! Our mission is to create and sustain an atmosphere that
      allows individuals of all abilities and walks of life to feel accepted for who they are. For many
      in the disabled community, this is a rarity and inclusion can be hard to come by.
      So, come out, relax, and have some fun!
    `;

    return (
      <Flexbox
        className="home-content"
        flexDirection="column"
        justifyContent="center"
        width="100%"
      >
        <Flexbox
          alignItems="center"
          className="description"
          element="section"
          flexDirection="column"
          width="100%"
        >
          <p>
            {
              'Diffable Together is a new campus organizationthat wants to bridge the gap between ' +
              'students with disabilities and the neurotypical population'
            }
          </p>
          <a
            className="external-link"
            href="https://www.instagram.com/explore/tags/DifferentlyAbledTogetherStrong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            #DifferentlyAbledTogetherStrong
          </a>
        </Flexbox>
        <Flexbox
          id="events"
          className="events"
          element="section"
          flexDirection="column"
          width="100%"
        >
          <Flexbox
            alignItems="flex-start"
            justifyContent="center"
          >
            <Card
              className="event-item main-event1"
            >
              <span>Learn More</span>
            </Card>
            <Card
              className="event-item main-event2"
            >
              <span>Join Us!</span>
            </Card>
          </Flexbox>
          <Card
            className="event-item main-event3"
          >
            <span>Grab some swag!</span>
          </Card>
        </Flexbox>
        <Flexbox
          id="story"
          className="our-story"
          element="section"
          flexDirection="column"
          width="100%"
        >
          <h5>Our Story</h5>
          <Flexbox
            className="story-description"
            alignItems="center"
            justifyContent="center"
            width="80%"
          >
            <div>
              <p>
                {paragraph1}
              </p>
              <p>
                {paragraph2}
              </p>
            </div>
          </Flexbox>
        </Flexbox>
        <Flexbox
          id="chapters"
          className="existing-chapters"
          element="section"
          width="100%"
        >
          <Flexbox
            flexDirection="column"
            className="-description"
            alignItems="center"
            justifyContent="center"
          >
            <h5>Join an existing chapter</h5>
            <div>
              {
                'Diffable Together is a new campus organizationthat wants to bridge the gap between ' +
                'students with disabilities and the neurotypical population'
              }
            </div>
          </Flexbox>
          <Card className="chapter1" >
            <span>Join Us!</span>
          </Card>
          <Card className="chapter2" >
            <span>Join Us!</span>
          </Card>
        </Flexbox>
      </Flexbox>
    );
  }
}
