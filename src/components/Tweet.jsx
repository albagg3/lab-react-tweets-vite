import ProfileImage from "./ProfileImage";
import User from "./User.jsx"
import Timestamp from "./Timestamp.jsx"
import Message from "./Message.jsx";
import Actions from "./Actions.jsx";


function Tweet(props) {
  // console.log(props)
  return (
    <div className="tweet">
    <ProfileImage image={props.tweetinfo.user.image}/>
      <div className="body">
        <div className="top">
          <User name={props.tweetinfo.user.name} handle={props.tweetinfo.user.handle} />
          <Timestamp timestamp={props.tweetinfo.timestamp}/>
        </div>
        <Message message={props.tweetinfo.message}/>
        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
