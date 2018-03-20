class VerseList extends React.Component {
    render() {
       // let displayVerse = function(task) {
       //     React.createElement(
       //         "li",
       //         null,
       //         task
       //     );
       // };
        return (
            React.createElement(
                'li',
                null,
                this.props.verse
            )
        );
    }
}

if(typeof window !== 'undefined') {
    console.log('starting the rendering of Verse component');
    ReactDOM.render(React.createElement( Base ), document.getElementById("content"));

}
