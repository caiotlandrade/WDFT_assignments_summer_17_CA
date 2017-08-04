import React, {Component} from 'react';
import {Link} from 'react-router';

class SongsList extends Component {
    render() {
        return (
            <div>
                <h1>Song List</h1>
                <ul>
                 {this.props.songs.map((song, i)=>{
                    return (
                        <li>
                            <Link to={"songs/" + song.id}>{song.title}</Link>
                            <button onClick={() => {this.props.playNew(song.id)}}>{(this.props.playState && song.id == this.props.playingSongId) ? <i className="fa fa-pause" aria-hidden="true"></i> : <i className="fa fa-play" aria-hidden="true"></i> }</button>
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default SongsList;