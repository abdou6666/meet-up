import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from 'react-router-dom';
function NewMeetups() {
    const history = useHistory();
    function AddMeetupHandler(meetupData) {
        fetch('https://meet-up-f4131-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                header: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }
    return (
        <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
        
    );
}
export default NewMeetups;