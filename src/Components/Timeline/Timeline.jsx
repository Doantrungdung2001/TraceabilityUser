
import React from "react";
import { Chrono } from "react-chrono";
import './timeline.css'
const items = [
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    media: {
      name: "dunkirk beach",
      source: {
        url: "https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0&h=180",
      },
      type: "IMAGE",
    },
  },
  {
    title: "7 December 1941",
    cardTitle: "Pearl Harbor",
    media: {
      source: {
        url: "https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0&h=180",
        type: "mp4",
      },
      type: "VIDEO",
      name: "Pearl Harbor",
    },
  },
  {
    title: "7 December 1941",
    cardTitle: "Pearl Harbor",
    media: {
      source: {
        url: "https://www.youtube.com/embed/f6cz9gtMTeI",
        type: "mp4",
      },
      type: "VIDEO",
      name: "Pearl Harbor",
    },
  },
];

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="title">
        <h1>Timeline</h1>
      </div>
      <Chrono 
        items={items} 
        classNames={{
          card: 'my-card',
          cardMedia: 'my-card-media',
          cardSubTitle: 'my-card-subtitle',
          cardText: 'my-card-text',
          cardTitle: 'my-card-title',
          controls: 'my-controls',
          title: 'my-title',
        }}
        // theme={{
        //   primary: 'red',
        //   // secondary: 'blue',
        //   cardBgColor: 'green',
        //   titleColor: 'black',
        //   titleColorActive: 'red',
        // }}
        mode="VERTICAL_ALTERNATING" 
        enableOutline
      />
    </div>
  );
};

export default Timeline;
