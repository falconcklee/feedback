import FeedbackFields from "../components/feedback/FeedbackFields";
// import { Alert } from "react-bootstrap";
// import { useState } from "react";

function Feedback(){
    // const [isShowSuccessAlert, setShowSuccessAlert] = useState(false);
    // const [isShowFailAlert, setShowFailAlert] = useState(false);

    function addFeedbackHandler(feedbackData){
        fetch(
            'https://ct-feedback-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json',
            {
                method: 'POST',
                body: JSON.stringify(feedbackData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => response.json()
        ).then(data => {
            // console.log('here');
            // if(data['name'] != "")
            // {
            //     console.log('if');
            //     setShowSuccessAlert(true);
            // }
            // else
            // {
            //     console.log('else');
            //     setShowFailAlert(true);
            // }

        });
    }

    // if(isShowSuccessAlert){
    //     return (
    //         <div>
    //             { isShowSuccessAlert && 
    //                 <Alert variant="success"> 
    //                     Feedback was submitted.
    //                 </Alert>
    //             }
    //         </div>
    //     );
    // }

    // if(isShowFailAlert){
    //     return (
    //         <div>
    //             { isShowFailAlert && 
    //                 <Alert variant="danger">
    //                     Feedback was not submitted, please try again later.
    //                 </Alert>
    //             }
    //         </div>    
    //     );
            
    // }

    return (
        <FeedbackFields onAddFeedback={addFeedbackHandler} />
    );
}

export default Feedback;