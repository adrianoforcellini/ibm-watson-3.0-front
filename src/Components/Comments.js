import smarkio from "../Utills/SmarkioDefinition";
import ReactAudioPlayer from "react-audio-player";
import audio from '../Audio-Smarkio/Smarkio.mp3';
import { connect } from 'react-redux';


function Comments({comments}) {
  return (
    <div>
      <p className="comments-title">Comentários</p>
      <div className="comment">
        <div className="text-area-comments">
          <p>{smarkio.definition}</p>
        </div>
          <ReactAudioPlayer src={audio} controls />
      </div>
      {comments && comments.map((comment, i) => (
        <div key={comment} className="comment">
          <div disabled={true} className="text-area-comments">
            {comment}
          </div>
          <ReactAudioPlayer
            src={`https://watson-back.herokuapp.com/${i + 1}.mp3`}
            controls
          />
        </div>      ))}
    </div>
  );
}

export default connect(state => ({comments: state.comments}))(Comments);
