class Button extends React.Component {
    render() {
        return (
            React.createElement(
                'button',
                { className:'btn btn-primary pull-right' , onClick: this.props.button},
                'Another Verse'
            )
        );
    }
}

Button.propTypes = {
    button: React.PropTypes.func
};
