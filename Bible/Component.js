class Base extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonPressed = this.onButtonPressed.bind(this);
    }
    onButtonPressed() {
        this.setState.data = this.props.data

    }

    render() {
        return (
            React.createElement (
                'div',
                null,
                React.createElement(Button, { button: this.onButtonPressed }),
                React.createElement(Verse, this.props.data),
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
    render() {
        axios
            .get('http://localhost:3000/data')
            .then((res) => {
                console.log("response " + res);
                const verses = res.data;
                console.log(verses);

            })
            .catch(function (error) {
                console.log("error " +  error);
            });

        let items = //TODO .map
                    (function (item)
         {
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
