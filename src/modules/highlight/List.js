import PropTypes from 'prop-types';
import Video from './Video.js';
import Article from './Article.js';
import WithPopularAndNew from './WithPopularAndNew.js';

function List(props) {
    let PopularAndNewVideo = WithPopularAndNew(Video);
    let PopularAndNewArticle = WithPopularAndNew(Article);

    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <PopularAndNewVideo {...item} key={item.url} />

                );

            case 'article':
                return (
                    <PopularAndNewArticle {...item} key={item.title} />
                );
        }
    });
};

List.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            url: PropTypes.string,
            title: PropTypes.string,
            views: PropTypes.number.isRequired
        })
    )
}

export default List;