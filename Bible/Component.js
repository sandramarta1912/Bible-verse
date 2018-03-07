class Verse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verse: []
        };
    }

    componentDidMount() {
        console.log("test        ")
        axios
            .get('http://localhost:3000/data')
            .then(res => {
                console.log("response " + res)
                const verse = res.data;
                this.setState({ verse: verse });
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
    ReactDOM.render(React.createElement(Verse ), document.getElementById("content"));
}
