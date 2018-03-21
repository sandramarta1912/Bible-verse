class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVerse: "Loading..."
        };

        this.addItem = this.addItem.bind(this);
        this.onButtonPressed = this.onButtonPressed.bind(this)
    }

    onButtonPressed() {
        this.setState({currentVerse: "Loading..."});
    }

    addItem( v) {
        this.setState({ currentVerse: v});
    }

    render() {
        console.log("this is render base");
        return (
            React.createElement (
                'div',
                { className:'jumbotron'},
                React.createElement(Verse, { current: this.state.currentVerse, add: this.addItem} ),
                React.createElement(VerseList, {verse: this.state.currentVerse}),
                React.createElement(Button, { button: this.onButtonPressed })
            )
        )
    }
}

