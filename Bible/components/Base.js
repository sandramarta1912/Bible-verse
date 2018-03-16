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
    addItem(verse) {
        console.log("add list");
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
