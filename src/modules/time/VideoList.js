import PropTypes from 'prop-types';
import Video from './Video.js';

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} key={item.url} />);
}

VideoList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
    )
}

export default VideoList;