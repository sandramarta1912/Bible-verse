let React = require('react');

class BibleVerse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {verse : props.verse};
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

module.exports.bibleVerse = BibleVerse;