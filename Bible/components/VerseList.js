class VerseList extends React.Component {
    // TODO Add state to this component (in order to keep verses)
    
    // TODO Add handler to receive new props (a new verse) and then push it into the state
    
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
