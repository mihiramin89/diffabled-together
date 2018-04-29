import React from 'react';
import Flexbox from 'flexbox-react';

import { Card } from 'react-toolbox/lib/card';

export default class Home extends React.Component {
  render() {
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
              <span>Event 1</span>
            </Card>
            <Card
              className="event-item main-event2"
            >
              <span>Event 2</span>
            </Card>
          </Flexbox>
          <Card
            className="event-item main-event3"
          >
            <span>Event 3</span>
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
            alignItems="flex-start"
            justifyContent="center"
            width="100%"
          >
            <div>
              <p>
                {
                  'Diffable Together is a new campus organizationthat wants to bridge the gap between ' +
                  'students with disabilities and the neurotypical population'
                }
              </p>
              <p>
                {
                  'We may be differently-abled, but together we are strong'
                }
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
            alignItems="flex-start"
            justifyContent="flex-start"
            width="100%"
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
            <span>Wright State</span>
          </Card>
          <Card className="chapter2" >
            <span>Ohio State</span>
          </Card>
        </Flexbox>
      </Flexbox>
    );
  }
}
