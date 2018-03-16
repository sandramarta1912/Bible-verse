class VerseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verse: []
        };
    }
    render() {
        console.log("test4");
        return (
            React.createElement(
                'li',
                null,
                this.state.verse
            )
        );
    }
}

if(typeof window !== 'undefined') {
    console.log('starting the rendering of Verse component');
    ReactDOM.render(React.createElement( Base ), document.getElementById("content"));

}
