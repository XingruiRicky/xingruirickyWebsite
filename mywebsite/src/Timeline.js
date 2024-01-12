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
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<div className="text-container">
							<div className="timeline-date">September 2018 - January 2023</div>
							<br></br>
							<div className="timeline-event">Computer Science @ University of Calgary</div>
							<div className="timeline-location">Calgary, AB, CA</div>
						</div>
					</TimelineContent>
				</TimelineItem>
				{/* ... 其他 TimelineItem ... */}
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent className="text-container">
						<div className="timeline-date">March 2023 - October 2023</div>
						<br></br>
						<div className="timeline-event">Data Engineer @ AI Financial</div>
						<div className="timeline-location">Toronto, ON, CA</div>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot />
					</TimelineSeparator>
					<TimelineContent className="text-container">
						<div>To be continued...</div>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</React.Fragment>
	);
}