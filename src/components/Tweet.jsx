import ProfileImage from "./ProfileImage";
import User from "./User.jsx"

function Tweet(props) {
  // console.log(props)
  return (
    <div className="tweet">
    <ProfileImage image={props.tweetinfo.user.image}/>
      <div className="body">
        <div className="top">
          <span className="user">
          <User name={props.tweetinfo.user.name} handle={props.tweetinfo.user.handle} />
            {/* <span className="name">{props.tweetinfo.user.name}</span>
            <span className="handle">@{props.tweetinfo.user.handle}</span> */}
          </span>

          <span className="timestamp">{props.tweetinfo.timestamp}</span>
        </div>

        <p className="message">
          {props.tweetinfo.message}🚀
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
