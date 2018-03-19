class VerseList extends React.Component {
    render() {
       let displayVerse = function(verse) {
           React.createElement(
               "li",
               null,
               verse
           );
       };
        return (
            React.createElement(
                'ul',
                null,
                this.props.verse.map(displayVerse)
            )
        );
    }
}

if(typeof window !== 'undefined') {
    console.log('starting the rendering of Verse component');
    ReactDOM.render(React.createElement( Base ), document.getElementById("content"));

}
