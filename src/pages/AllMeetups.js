import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { useState,useEffect } from 'react';

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://meet-up-f4131-default-rtdb.firebaseio.com/meetups.json').then((reponse) => {
      return reponse.json();
    }
    ).then(data => {
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);
  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }
    return <section>
        <h1>All meet ups</h1>
        <MeetupList meetup={loadedMeetups}/>
    </section>;
}
export default AllMeetups;