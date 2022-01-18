import React from 'react';
import Popular from "./Popular.js"
import New from "./New.js"

function WithPopularAndNew(Component) {
    return class extends React.Component {
        render() {
            if (this.props.views <= 100)
                return (
                    <New>
                        <Component {...this.props} />
                    </New>
                )

            if (this.props.views > 1000)
                return (
                    <Popular>
                        <Component {...this.props} />
                    </Popular>
                )

            return <Component {...this.props} />
        }
    }
}

export default WithPopularAndNew;