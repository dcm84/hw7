import PropTypes from 'prop-types';
import DateTime from './DateTime.js';
import DateTimePretty from './DateTimePretty.js';

function Video(props) {
    let PrettyTime = DateTimePretty(DateTime);
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <PrettyTime date={props.date} />
        </div>
    )
};

Video.propTypes = {
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default Video;