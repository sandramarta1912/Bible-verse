class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verse: [],
            task : ''
        };
        this.addItem = this.addItem.bind(this);
        this.onButtonPressed = this.onButtonPressed.bind(this)

    }

    onButtonPressed() {
        console.log("button pressed");
        this.setState(this.state.verse);

    }

    addItem( verses) {
        console.log("add a verse: " + verses);

             //this.setState({ verse: this.state.verse.concat(verses)});
        // TODO pass that verse to the VerseList component thorough it's props

    }

    render() {
        console.log("this is render base");
        return (
            React.createElement (
                'div',
                { className:'jumbotron'},
                React.createElement(Verse, { add: this.addItem} ),
                React.createElement(VerseList, {verse: this.state.verse} ),
                React.createElement(Button, { button: this.onButtonPressed })
            )
        )
    }
}

