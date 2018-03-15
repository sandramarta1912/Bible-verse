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

class Verse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verse: []
        };
    }

    retrieveVerse() {
        console.log('test')
        axios
            .get('http://localhost:3000/data')
            .then((res) => {
                console.log("response " + res);
                const verses = res.data;
                console.log(verses);
                this.setState({ verse: verses });
            })
            .catch(function (error) {
                console.log("error " +  error);
                return( React.createElement("div", null, []));
            });
    }


    componentDidMount() {
        console.log('making an asynchronous call to the backend');
        this.retrieveVerse();
    }

    componentWillReceiveProps(newProps) {
        console.log('test1');
        this.retrieveVerse();
        console.log('received new props: ' + JSON.stringify(newProps));
    }

    render() {
        console.log('this is render verse');
        let items = this.state.verse.map(function (item, index) {
            if (item.titles && item.title){
                return (
                    React.createElement(
                        "div",
                        {key: index},
                        React.createElement("p", null,
                            " " + item.bookname ,
                            " " + item.chapter,
                            " " + item.text,
                            " " + item.verse,
                            " " + item.title,
                            " " + item.titles
                        )
                    )
                )
            } else {
                return (
                    React.createElement(
                        "div",
                        {key: index},
                        React.createElement("p", null,
                            " " + item.bookname ,
                            " " + item.chapter,
                            " " + item.verse,
                            " " + item.text,
                        )
                    )
                );
            }
        });
        return( React.createElement("div", {className: 'text-center', componentWillReceiveProps: this.addItem }, items));
    }
}
Verse.propTypes = {
   add: React.PropTypes.func
};
class VerseList extends React.Component {
    render() {
        console.log("test4")
        return (
            React.createElement(
                'li',
                null,
                this.state
            )
        );
    }
}

if(typeof window !== 'undefined') {
    console.log('starting the rendering of Verse component');
    ReactDOM.render(React.createElement( Base ), document.getElementById("content"));

}
