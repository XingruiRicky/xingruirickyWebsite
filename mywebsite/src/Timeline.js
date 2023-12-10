import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import "./Timeline.css"

export default function OppositeContentTimeline() {
  return (
    <React.Fragment>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            September 2015 - September 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector className='connector' />
          </TimelineSeparator>
          <TimelineContent>Robert Thirsk High School<div>Calgary,AB,CA</div></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            September 2018 - January 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector className='connector'/>
          </TimelineSeparator>
          <TimelineContent>University of Calgary<div>Calgary,AB,CA</div></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            January 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector className='connector'/>
          </TimelineSeparator>
          <TimelineContent>Graduate from University of Calgary<div>Calgary,AB,CA</div></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            March 2023 - October 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector className='connector'/>
          </TimelineSeparator>
          <TimelineContent>Data Engineer @AI Financial<div>Toronto,ON,CA</div></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector className='connector'/>
          </TimelineSeparator>
          <TimelineContent>To be continued...</TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}