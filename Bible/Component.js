class Base extends React.Component {
    // TODO fă o funcție aici care va face render la Verse. Pasează funcția aia în Button.
    
    render() {
        return (
            React.createElement (
                'div',
                null,
                React.createElement(Button, null) // TODO aici pasezi funcția de mai sus către copil, ca al doilea argument, în loc de null
            )
        )
    }
}

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            showReply: false
        }
    }
    onClick(){
        // TODO apelează funcția venită din părinte aici.
    }
    render() {
        return (
                'button',
                { onClick: this.onClick() 
            )
        );
    }
}

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
