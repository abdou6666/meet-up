import Card from '../UI/Card';
import classes from './NewMeetupForm.module.css';
import { useRef } from 'react';
function NewMeetupForm(props) {
        const titleRef = useRef();
        const imageRef = useRef();
        const descriptionRef= useRef();
        const adresseRef= useRef();
    function submitHandler(event) {
         event.preventDefault();
      
       
        const enteredTitle = titleRef.current.value;
        const enteredImage = imageRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredAdresse = adresseRef.current.value;
        const meetupDate = {
            title: enteredTitle,
            image: enteredImage,
            description: enteredDescription,
            adresse:enteredAdresse
        }
        props.onAddMeetup(meetupDate);   
        
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meeup Title</label>
                    <input type="text" required id="title" ref={titleRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meeup Image</label>
                    <input type="url" required id="image" ref={imageRef}></input>
                </div>
                
                <div className={classes.control}>
                    <label htmlFor="adresse">Meeup Adresse</label>
                    <input type="text" required id="adresse" ref={adresseRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meeup description</label>
                    <textarea id="description" required rows="5" ref={descriptionRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}
export default NewMeetupForm;