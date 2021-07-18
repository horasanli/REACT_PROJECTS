import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component
{
    render() {
        return(
        <>
            {this.props.profiles.map(profile => <ListItem key= {profile.name} profileInfo={profile}/>)}
        </>);
    }
}