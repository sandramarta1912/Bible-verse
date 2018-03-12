class Base extends React.Component {
    onButtonPressed() {
    alert("Hello")
    }
    render() {
        return (
            React.createElement (
                'div',
                null,
                React.createElement(Verse),
                React.createElement(Button, { button: this.onButtonPressed })
            )
        )
    }
}

class Button extends React.Component {
    render() {
        return (
            React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.button},
                    'Verse'
                )
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

    componentDidMount() {
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
            });
    }

    render() {
        let items = this.state.verse.map(function (item) {
            if (item.titles && item.title){
                return (
                    React.createElement("div", null,
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
                    React.createElement("div", null,
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
