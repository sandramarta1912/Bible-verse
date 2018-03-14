class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        this.onButtonPressed = this.onButtonPressed.bind(this)
    }

    onButtonPressed() {
        console.log("button pressed")
        this.setState({date: new Date()})
    }

    render() {
        return (
            React.createElement (
                'div',
                null,
                React.createElement(Verse, {date: this.state.date}),
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
                { onClick: this.props.button},
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
            date: props.date,
            verse: []
        };
    }

    componentDidMount() {
        console.log('making an asynchronous call to the backend')
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

    componentWillReceiveProps(newProps) {
        console.log('received new props: ' + JSON.stringify(newProps))
        this.setState({date: newProps.date});
        console.log("updated Verse's internal state with the new pros")
    }

    render() {
        console.log('starting the rendering of Verse component')
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
        return( React.createElement("div", null, items));
    }
}

if(typeof window !== 'undefined') {

    ReactDOM.render(React.createElement( Base ), document.getElementById("content"));
}