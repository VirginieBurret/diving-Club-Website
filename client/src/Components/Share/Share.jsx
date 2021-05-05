import './share.scss';
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons';
function Share() {
    return (
        <div className="share">
          <div className="shareWrapper">
              <div className="sharetop">
              <img className="shareProfileImg" src="/assets/person/cat.jpg" alt="" />
              <input type="text" placeholder="Poster un message" className="shareInput"/>
              </div>

              <hr className="shareHr"/>
              <div className="shareBottom">
                  <div className="shareOptions">
                      

                        <div className="shareOptionItem">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                          <span className="shareOptionText">Photo ou Vidéo</span>
                          </div>

                        <div className="shareOptionItem">
                            <Label htmlColor="blue" className="shareIcon"/>
                          <span className="shareOptionText">Tag</span>
                          </div>

                        <div className="shareOptionItem">
                            <Room htmlColor="green" className="shareIcon"/>
                          <span className="shareOptionText">Lieu</span>
                          </div>

                        <div className="shareOptionItem"> 
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                          <span className="shareOptionText">Humeur</span>
                      </div>
                          
                  </div>
                   <button className="shareButton">Publier</button>
              </div>
          </div>
        </div>
    )
}

export default Share;
