import React from 'react';

export default class ListItem extends React.Component {

    render () {
        return (
            <div className="github-profile">
                <img src={this.props.profileInfo.avatar_url} />
                <div className="info">
                    <div className="name">{this.props.profileInfo.name}</div>
                    <div className="company">{this.props.profileInfo.company}</div>
                </div>
          </div>
        );
    }
}