class Verse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verse: []
        };
    }

    retrieveVerse() {
        console.log('test');
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
    shouldComponentUpdate(){
        console.log('should');
        this.props.add();
        return true;
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
        return( React.createElement("div", {className: 'text-center'}, items));
    }
}

Verse.propTypes = {
    add: React.PropTypes.func
};
