import React, {Component} from 'react'
import './Article.scss';

class Article extends Component {
  constructor(props){
    super(props)
    this.state ={
    }
  }
  render(){
    return(
      <React.Fragment>
        <div className="Intro">
          <h2> THE HERO OF THE MONTH </h2>
          <h3> Storm </h3>
          <p>This month I will focus on Storm, a super hero from Marvel's universe.</p>
        </div>
          <div className="Storm">
            <img  src="https://imgix.ranker.com/user_node_img/129/2573576/original/storm-photo-u57?w=650&q=50&fm=jpg&fit=crop&crop=faces" alt="Storm" />
            <div className="Article">
                <h3> Who is Storm ?</h3>
                <p> Storm belongs to <strong>the X-Men</strong>, and she often takes the role of the leader, especially when Cyclops vanishes. <br/> Born Ororo Munroe to a tribal princess of Kenya and an American photojournalist father, Storm is raised in Harlem and Cairo. She was made an orphan after her parents were killed in the midst of an Arab–Israeli conflict. An incident at this time also traumatized Munroe, leaving her with claustrophobia that she would struggle with for life.</p>
                <h3> What powers does she have ?</h3>
                <p>Under the tutelage of a master thief an adolescent Munroe became a skilled <strong>pickpocket</strong>. Her huge power is a psionic ability to <strong>manipulate weather</strong> patterns over vast areas. She also can <strong>control atmospheric pressure, modify the temperature, and fly</strong> during the storm !</p>
            </div>

        </div>
      </React.Fragment>
    )
  }
}

export default Article;
