import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import 'moment/locale/ru'       //внезапно пиходится подключать вручную язык
moment.locale('ru')

function DateTimePretty(Component) {
    return class extends React.Component {
        render() {
            let date = moment(this.props.date);
            return <Component {...this.props} date={date.startOf('minute').fromNow()} />;
        }
    }
}

Video.propTypes = {
    date: PropTypes.string.isRequired
}

export default DateTimePretty;