import React, {Component} from 'react';
 
class SongDetails extends Component {
    render() {
        const displaySong = this.props.songs.find((song) => {return this.props.params.id == song.id})
        return (
            <div>
                <button onClick={() => {this.props.playNew(displaySong.id)}}>
                        {(this.props.playState && displaySong.id == this.props.playingSongId) ? <i className="fa fa-pause" aria-hidden="true"></i> : <i className="fa fa-play" aria-hidden="true"></i> }
                </button><h1>{displaySong.title}</h1>
                <h3>{displaySong.description}</h3>
            </div>
        )
    }
}

export default SongDetails;