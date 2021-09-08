import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetailsPage = () => {
    return (
        <Fragment>
            <MeetupDetail
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
                title="First Meetup"
                address="Some Street 5, Some City"
                description="This is a first meetup"
            />
        </Fragment>
    );
};

export const getStaticPaths = async () => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ],
    };
};

export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId;

    return {
        props: {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
            id: meetupId,
            title: 'First Meetup',
            address: 'Some Street 5, Some City',
            description: 'This is a first meetup',
        },
    };
};

export default MeetupDetailsPage;
