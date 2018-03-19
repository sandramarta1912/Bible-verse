class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            verse: [],
            newVerse : ''
        };
        this.addItem = this.addItem.bind(this);
        this.onButtonPressed = this.onButtonPressed.bind(this)
    }

    onButtonPressed() {
        console.log("button pressed");
        this.forceUpdate();
        console.log("Hey")

    }
    addItem(verse) {
        console.log("add a verse: " + verse);
        
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

