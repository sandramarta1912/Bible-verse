class Base extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.onButtonPressed = this.onButtonPressed.bind(this)
    }

    onButtonPressed() {
        console.log("button pressed");
        this.forceUpdate();

    }
    addItem() {
        console.log("add list");
        this.VerseList(this.state.verse)

    }

    render() {
        console.log("this is render base");
        return (
            React.createElement (
                'div',
                { className:'jumbotron'},
                React.createElement(Verse, { add: this.addItem} ),
                React.createElement(VerseList),
                React.createElement(Button, { button: this.onButtonPressed })
            )
        )
    }
}

