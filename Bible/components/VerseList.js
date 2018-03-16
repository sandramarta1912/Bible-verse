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
