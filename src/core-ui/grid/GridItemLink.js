import React from 'react';

export class GridItemLink extends React.Component {
    render() {
        const {
            children,
            text,
            icon,
            link,
        } = this.props;

        return (
            <Link to={link}>
                <img src={icon} />
                <span>{text}</span>
            </Link>
        );
    }
}