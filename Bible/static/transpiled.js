class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verse: [],
            task: ''
        };
        this.addItem = this.addItem.bind(this);
        this.onButtonPressed = this.onButtonPressed.bind(this);
    }

    onButtonPressed() {
        console.log("button pressed");
        this.setState({ verse: "marta" });
    }

    addItem(verse) {
        console.log("add a verse: " + verse);

        // TODO pass that verse to the VerseList component thorough it's props
    }

    render() {
        console.log("this is render base");
        return React.createElement('div', { className: 'jumbotron' }, React.createElement(Verse, { add: this.addItem }), React.createElement(VerseList, { verse: this.state.verse }), React.createElement(Button, { button: this.onButtonPressed }));
    }
}
class Button extends React.Component {
    render() {
        console.log('button ');
        return React.createElement('button', { className: 'btn btn-primary pull-right', onClick: this.props.button }, 'Another Verse');
    }
}

Button.propTypes = {
    button: React.PropTypes.func
};
class Verse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verse: []
        };
    }

    retrieveVerse() {
        console.log('test');
        axios.get('http://localhost:3000/data').then(res => {
            console.log("response " + res);
            const verses = res.data;

            // TODO send current verse to the Base to be pushed into VerseList
            // Something like: add(verses)

            console.log(verses);
            this.setState({ verse: verses });
        }).catch(function (error) {
            console.log("error " + error);
            return React.createElement("div", null, []);
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
    shouldComponentUpdate() {
        console.log('should');
        this.props.add();
        return true;
    }

    render() {
        console.log('this is render verse');
        let items = this.state.verse.map(function (item, index) {
            if (item.titles && item.title) {
                return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.text, " " + item.verse, " " + item.title, " " + item.titles));
            } else {
                return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.verse, " " + item.text));
            }
        });
        return React.createElement("div", { className: 'text-center' }, items);
    }
}

Verse.propTypes = {
    add: React.PropTypes.func
};
class VerseList extends React.Component {
    // TODO Add state to this component (in order to keep verses)

    // TODO Add handler to receive new props (a new verse) and then push it into the state

    render() {
        // let displayVerse = function(task) {
        //     React.createElement(
        //         "li",
        //         null,
        //         task
        //     );
        // };
        return React.createElement('li', null, this.props.verse);
    }
}

if (typeof window !== 'undefined') {
    console.log('starting the rendering of Verse component');
    ReactDOM.render(React.createElement(Base), document.getElementById("content"));
}
(function () {
    function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
            }return n[o].exports;
        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
    }return e;
})()({ 1: [function (require, module, exports) {
        class Base extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    verse: [],
                    task: ''
                };
                this.addItem = this.addItem.bind(this);
                this.onButtonPressed = this.onButtonPressed.bind(this);
            }

            onButtonPressed() {
                console.log("button pressed");
                this.setState({ verse: "marta" });
            }

            addItem(verse) {
                console.log("add a verse: " + verse);

                // TODO pass that verse to the VerseList component thorough it's props
            }

            render() {
                console.log("this is render base");
                return React.createElement('div', { className: 'jumbotron' }, React.createElement(Verse, { add: this.addItem }), React.createElement(VerseList, { verse: this.state.verse }), React.createElement(Button, { button: this.onButtonPressed }));
            }
        }
        class Button extends React.Component {
            render() {
                console.log('button ');
                return React.createElement('button', { className: 'btn btn-primary pull-right', onClick: this.props.button }, 'Another Verse');
            }
        }

        Button.propTypes = {
            button: React.PropTypes.func
        };
        class Verse extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    verse: []
                };
            }

            retrieveVerse() {
                console.log('test');
                axios.get('http://localhost:3000/data').then(res => {
                    console.log("response " + res);
                    const verses = res.data;

                    // TODO send current verse to the Base to be pushed into VerseList
                    // Something like: add(verses)

                    console.log(verses);
                    this.setState({ verse: verses });
                }).catch(function (error) {
                    console.log("error " + error);
                    return React.createElement("div", null, []);
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
            shouldComponentUpdate() {
                console.log('should');
                this.props.add();
                return true;
            }

            render() {
                console.log('this is render verse');
                let items = this.state.verse.map(function (item, index) {
                    if (item.titles && item.title) {
                        return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.text, " " + item.verse, " " + item.title, " " + item.titles));
                    } else {
                        return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.verse, " " + item.text));
                    }
                });
                return React.createElement("div", { className: 'text-center' }, items);
            }
        }

        Verse.propTypes = {
            add: React.PropTypes.func
        };
        class VerseList extends React.Component {
            // TODO Add state to this component (in order to keep verses)

            // TODO Add handler to receive new props (a new verse) and then push it into the state

            render() {
                // let displayVerse = function(task) {
                //     React.createElement(
                //         "li",
                //         null,
                //         task
                //     );
                // };
                return React.createElement('li', null, this.props.verse);
            }
        }

        if (typeof window !== 'undefined') {
            console.log('starting the rendering of Verse component');
            ReactDOM.render(React.createElement(Base), document.getElementById("content"));
        }
        (function () {
            function e(t, n, r) {
                function s(o, u) {
                    if (!n[o]) {
                        if (!t[o]) {
                            var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                            var n = t[o][1][e];return s(n ? n : e);
                        }, l, l.exports, e, t, n, r);
                    }return n[o].exports;
                }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
            }return e;
        })()({ 1: [function (require, module, exports) {
                class Base extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = {
                            verse: [],
                            task: ''
                        };
                        this.addItem = this.addItem.bind(this);
                        this.onButtonPressed = this.onButtonPressed.bind(this);
                    }

                    onButtonPressed() {
                        console.log("button pressed");
                        this.setState({ verse: "marta" });
                    }

                    addItem(verse) {
                        console.log("add a verse: " + verse);

                        // TODO pass that verse to the VerseList component thorough it's props
                    }

                    render() {
                        console.log("this is render base");
                        return React.createElement('div', { className: 'jumbotron' }, React.createElement(Verse, { add: this.addItem }), React.createElement(VerseList, { verse: this.state.verse }), React.createElement(Button, { button: this.onButtonPressed }));
                    }
                }
                class Button extends React.Component {
                    render() {
                        console.log('button ');
                        return React.createElement('button', { className: 'btn btn-primary pull-right', onClick: this.props.button }, 'Another Verse');
                    }
                }

                Button.propTypes = {
                    button: React.PropTypes.func
                };
                class Verse extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = {
                            verse: []
                        };
                    }

                    retrieveVerse() {
                        console.log('test');
                        axios.get('http://localhost:3000/data').then(res => {
                            console.log("response " + res);
                            const verses = res.data;

                            // TODO send current verse to the Base to be pushed into VerseList
                            // Something like: add(verses)

                            console.log(verses);
                            this.setState({ verse: verses });
                        }).catch(function (error) {
                            console.log("error " + error);
                            return React.createElement("div", null, []);
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
                    shouldComponentUpdate() {
                        console.log('should');
                        this.props.add();
                        return true;
                    }

                    render() {
                        console.log('this is render verse');
                        let items = this.state.verse.map(function (item, index) {
                            if (item.titles && item.title) {
                                return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.text, " " + item.verse, " " + item.title, " " + item.titles));
                            } else {
                                return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.verse, " " + item.text));
                            }
                        });
                        return React.createElement("div", { className: 'text-center' }, items);
                    }
                }

                Verse.propTypes = {
                    add: React.PropTypes.func
                };
                class VerseList extends React.Component {
                    // TODO Add state to this component (in order to keep verses)

                    // TODO Add handler to receive new props (a new verse) and then push it into the state

                    render() {
                        // let displayVerse = function(task) {
                        //     React.createElement(
                        //         "li",
                        //         null,
                        //         task
                        //     );
                        // };
                        return React.createElement('li', null, this.props.verse)
                        // React.createElement(
                        //     'li',
                        //     null,
                        //     this.props.verse
                        // )
                        ;
                    }
                }

                if (typeof window !== 'undefined') {
                    console.log('starting the rendering of Verse component');
                    ReactDOM.render(React.createElement(Base), document.getElementById("content"));
                }
                (function () {
                    function e(t, n, r) {
                        function s(o, u) {
                            if (!n[o]) {
                                if (!t[o]) {
                                    var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                                    var n = t[o][1][e];return s(n ? n : e);
                                }, l, l.exports, e, t, n, r);
                            }return n[o].exports;
                        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
                    }return e;
                })()({ 1: [function (require, module, exports) {
                        class Base extends React.Component {
                            constructor(props) {
                                super(props);
                                this.state = {
                                    verse: [],
                                    task: ''
                                };
                                this.addItem = this.addItem.bind(this);
                                this.onButtonPressed = this.onButtonPressed.bind(this);
                            }

                            onButtonPressed() {
                                console.log("button pressed");
                                this.setState({ verse: "marta" });
                            }

                            addItem(verse) {
                                console.log("add a verse: " + verse);

                                // TODO pass that verse to the VerseList component thorough it's props
                            }

                            render() {
                                console.log("this is render base");
                                return React.createElement('div', { className: 'jumbotron' }, React.createElement(Verse, { add: this.addItem }), React.createElement(VerseList, { verse: this.state.verse }), React.createElement(Button, { button: this.onButtonPressed }));
                            }
                        }
                        class Button extends React.Component {
                            render() {
                                console.log('button ');
                                return React.createElement('button', { className: 'btn btn-primary pull-right', onClick: this.props.button }, 'Another Verse');
                            }
                        }

                        Button.propTypes = {
                            button: React.PropTypes.func
                        };
                        class Verse extends React.Component {
                            constructor(props) {
                                super(props);
                                this.state = {
                                    verse: []
                                };
                            }

                            retrieveVerse() {
                                console.log('test');
                                axios.get('http://localhost:3000/data').then(res => {
                                    console.log("response " + res);
                                    const verses = res.data;

                                    // TODO send current verse to the Base to be pushed into VerseList
                                    // Something like: add(verses)

                                    console.log(verses);
                                    this.setState({ verse: verses });
                                }).catch(function (error) {
                                    console.log("error " + error);
                                    return React.createElement("div", null, []);
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
                            shouldComponentUpdate() {
                                console.log('should');
                                this.props.add();
                                return true;
                            }

                            render() {
                                console.log('this is render verse');
                                let items = this.state.verse.map(function (item, index) {
                                    if (item.titles && item.title) {
                                        return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.text, " " + item.verse, " " + item.title, " " + item.titles));
                                    } else {
                                        return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.verse, " " + item.text));
                                    }
                                });
                                return React.createElement("div", { className: 'text-center' }, items);
                            }
                        }

                        Verse.propTypes = {
                            add: React.PropTypes.func
                        };
                        class VerseList extends React.Component {
                            // TODO Add state to this component (in order to keep verses)

                            // TODO Add handler to receive new props (a new verse) and then push it into the state

                            render() {
                                // let displayVerse = function(task) {
                                //     React.createElement(
                                //         "li",
                                //         null,
                                //         task
                                //     );
                                // };
                                return React.createElement('li', null, this.props.verse);
                            }
                        }

                        if (typeof window !== 'undefined') {
                            console.log('starting the rendering of Verse component');
                            ReactDOM.render(React.createElement(Base), document.getElementById("content"));
                        }
                        (function () {
                            function e(t, n, r) {
                                function s(o, u) {
                                    if (!n[o]) {
                                        if (!t[o]) {
                                            var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                                        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                                            var n = t[o][1][e];return s(n ? n : e);
                                        }, l, l.exports, e, t, n, r);
                                    }return n[o].exports;
                                }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
                            }return e;
                        })()({ 1: [function (require, module, exports) {
                                class Base extends React.Component {
                                    constructor(props) {
                                        super(props);
                                        this.state = {
                                            verse: [],
                                            task: ''
                                        };
                                        this.addItem = this.addItem.bind(this);
                                        this.onButtonPressed = this.onButtonPressed.bind(this);
                                    }

                                    onButtonPressed() {
                                        console.log("button pressed");
                                        this.setState({ verse: "marta" });
                                    }

                                    addItem(verse) {
                                        console.log("add a verse: " + verse);

                                        // TODO pass that verse to the VerseList component thorough it's props
                                    }

                                    render() {
                                        console.log("this is render base");
                                        return React.createElement('div', { className: 'jumbotron' }, React.createElement(Verse, { add: this.addItem }), React.createElement(VerseList, { verse: this.state.verse }), React.createElement(Button, { button: this.onButtonPressed }));
                                    }
                                }
                                class Button extends React.Component {
                                    render() {
                                        console.log('button ');
                                        return React.createElement('button', { className: 'btn btn-primary pull-right', onClick: this.props.button }, 'Another Verse');
                                    }
                                }

                                Button.propTypes = {
                                    button: React.PropTypes.func
                                };
                                class Verse extends React.Component {
                                    constructor(props) {
                                        super(props);
                                        this.state = {
                                            verse: []
                                        };
                                    }

                                    retrieveVerse() {
                                        console.log('test');
                                        axios.get('http://localhost:3000/data').then(res => {
                                            console.log("response " + res);
                                            const verses = res.data;

                                            // TODO send current verse to the Base to be pushed into VerseList
                                            // Something like: add(verses)

                                            console.log(verses);
                                            this.setState({ verse: verses });
                                        }).catch(function (error) {
                                            console.log("error " + error);
                                            return React.createElement("div", null, []);
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
                                    shouldComponentUpdate() {
                                        console.log('should');
                                        this.props.add();
                                        return true;
                                    }

                                    render() {
                                        console.log('this is render verse');
                                        let items = this.state.verse.map(function (item, index) {
                                            if (item.titles && item.title) {
                                                return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.text, " " + item.verse, " " + item.title, " " + item.titles));
                                            } else {
                                                return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.verse, " " + item.text));
                                            }
                                        });
                                        return React.createElement("div", { className: 'text-center' }, items);
                                    }
                                }

                                Verse.propTypes = {
                                    add: React.PropTypes.func
                                };
                                class VerseList extends React.Component {
                                    // TODO Add state to this component (in order to keep verses)

                                    // TODO Add handler to receive new props (a new verse) and then push it into the state

                                    render() {
                                        // let displayVerse = function(task) {
                                        //     React.createElement(
                                        //         "li",
                                        //         null,
                                        //         task
                                        //     );
                                        // };
                                        return React.createElement('li', null, this.props.verse);
                                    }
                                }

                                if (typeof window !== 'undefined') {
                                    console.log('starting the rendering of Verse component');
                                    ReactDOM.render(React.createElement(Base), document.getElementById("content"));
                                }
                                (function () {
                                    function e(t, n, r) {
                                        function s(o, u) {
                                            if (!n[o]) {
                                                if (!t[o]) {
                                                    var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                                                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                                                    var n = t[o][1][e];return s(n ? n : e);
                                                }, l, l.exports, e, t, n, r);
                                            }return n[o].exports;
                                        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
                                    }return e;
                                })()({ 1: [function (require, module, exports) {
                                        class Base extends React.Component {
                                            constructor(props) {
                                                super(props);
                                                this.state = {
                                                    verse: [],
                                                    task: ''
                                                };
                                                this.addItem = this.addItem.bind(this);
                                                this.onButtonPressed = this.onButtonPressed.bind(this);
                                            }

                                            onButtonPressed() {
                                                console.log("button pressed");
                                                this.setState({ verse: "marta" });
                                            }

                                            addItem(verse) {
                                                console.log("add a verse: " + verse);

                                                // TODO pass that verse to the VerseList component thorough it's props
                                            }

                                            render() {
                                                console.log("this is render base");
                                                return React.createElement('div', { className: 'jumbotron' }, React.createElement(Verse, { add: this.addItem }), React.createElement(VerseList, { verse: this.state.verse }), React.createElement(Button, { button: this.onButtonPressed }));
                                            }
                                        }
                                        class Verse extends React.Component {
                                            constructor(props) {
                                                super(props);
                                                this.state = {
                                                    verse: []
                                                };
                                            }

                                            retrieveVerse() {
                                                console.log('test');
                                                axios.get('http://localhost:3000/data').then(res => {
                                                    console.log("response " + res);
                                                    const verses = res.data;

                                                    // TODO send current verse to the Base to be pushed into VerseList
                                                    // Something like: add(verses)

                                                    console.log(verses);
                                                    this.setState({ verse: verses });
                                                }).catch(function (error) {
                                                    console.log("error " + error);
                                                    return React.createElement("div", null, []);
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
                                            shouldComponentUpdate() {
                                                console.log('should');
                                                this.props.add();
                                                return true;
                                            }

                                            render() {
                                                console.log('this is render verse');
                                                let items = this.state.verse.map(function (item, index) {
                                                    if (item.titles && item.title) {
                                                        return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.text, " " + item.verse, " " + item.title, " " + item.titles));
                                                    } else {
                                                        return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.verse, " " + item.text));
                                                    }
                                                });
                                                return React.createElement("div", { className: 'text-center' }, items);
                                            }
                                        }

                                        Verse.propTypes = {
                                            add: React.PropTypes.func
                                        };
                                        class VerseList extends React.Component {
                                            // TODO Add state to this component (in order to keep verses)

                                            // TODO Add handler to receive new props (a new verse) and then push it into the state

                                            render() {
                                                // let displayVerse = function(task) {
                                                //     React.createElement(
                                                //         "li",
                                                //         null,
                                                //         task
                                                //     );
                                                // };
                                                return React.createElement('li', null, this.props.verse);
                                            }
                                        }

                                        if (typeof window !== 'undefined') {
                                            console.log('starting the rendering of Verse component');
                                            ReactDOM.render(React.createElement(Base), document.getElementById("content"));
                                        }
                                        (function () {
                                            function e(t, n, r) {
                                                function s(o, u) {
                                                    if (!n[o]) {
                                                        if (!t[o]) {
                                                            var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                                                        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                                                            var n = t[o][1][e];return s(n ? n : e);
                                                        }, l, l.exports, e, t, n, r);
                                                    }return n[o].exports;
                                                }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
                                            }return e;
                                        })()({ 1: [function (require, module, exports) {
                                                class Base extends React.Component {
                                                    constructor(props) {
                                                        super(props);
                                                        this.state = {
                                                            verse: [],
                                                            task: ''
                                                        };
                                                        this.addItem = this.addItem.bind(this);
                                                        this.onButtonPressed = this.onButtonPressed.bind(this);
                                                    }

                                                    onButtonPressed() {
                                                        console.log("button pressed");
                                                        this.setState({ verse: "marta" });
                                                    }

                                                    addItem(verse) {
                                                        console.log("add a verse: " + verse);

                                                        // TODO pass that verse to the VerseList component thorough it's props
                                                    }

                                                    render() {
                                                        console.log("this is render base");
                                                        return React.createElement('div', { className: 'jumbotron' }, React.createElement(Verse, { add: this.addItem }), React.createElement(VerseList, { verse: this.state.verse }), React.createElement(Button, { button: this.onButtonPressed }));
                                                    }
                                                }
                                                class Verse extends React.Component {
                                                    constructor(props) {
                                                        super(props);
                                                        this.state = {
                                                            verse: []
                                                        };
                                                    }

                                                    retrieveVerse() {
                                                        console.log('test');
                                                        axios.get('http://localhost:3000/data').then(res => {
                                                            console.log("response " + res);
                                                            const verses = res.data;

                                                            // TODO send current verse to the Base to be pushed into VerseList
                                                            // Something like: add(verses)

                                                            console.log(verses);
                                                            this.setState({ verse: verses });
                                                        }).catch(function (error) {
                                                            console.log("error " + error);
                                                            return React.createElement("div", null, []);
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
                                                    shouldComponentUpdate() {
                                                        console.log('should');
                                                        this.props.add();
                                                        return true;
                                                    }

                                                    render() {
                                                        console.log('this is render verse');
                                                        let items = this.state.verse.map(function (item, index) {
                                                            if (item.titles && item.title) {
                                                                return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.text, " " + item.verse, " " + item.title, " " + item.titles));
                                                            } else {
                                                                return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.verse, " " + item.text));
                                                            }
                                                        });
                                                        return React.createElement("div", { className: 'text-center' }, items);
                                                    }
                                                }

                                                Verse.propTypes = {
                                                    add: React.PropTypes.func
                                                };
                                                class VerseList extends React.Component {
                                                    // TODO Add state to this component (in order to keep verses)

                                                    // TODO Add handler to receive new props (a new verse) and then push it into the state

                                                    render() {
                                                        // let displayVerse = function(task) {
                                                        //     React.createElement(
                                                        //         "li",
                                                        //         null,
                                                        //         task
                                                        //     );
                                                        // };
                                                        return React.createElement('li', null, this.props.verse);
                                                    }
                                                }

                                                if (typeof window !== 'undefined') {
                                                    console.log('starting the rendering of Verse component');
                                                    ReactDOM.render(React.createElement(Base), document.getElementById("content"));
                                                }
                                                (function () {
                                                    function e(t, n, r) {
                                                        function s(o, u) {
                                                            if (!n[o]) {
                                                                if (!t[o]) {
                                                                    var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                                                                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                                                                    var n = t[o][1][e];return s(n ? n : e);
                                                                }, l, l.exports, e, t, n, r);
                                                            }return n[o].exports;
                                                        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
                                                    }return e;
                                                })()({ 1: [function (require, module, exports) {
                                                        class Base extends React.Component {
                                                            constructor(props) {
                                                                super(props);
                                                                this.state = {
                                                                    verse: [],
                                                                    task: ''
                                                                };
                                                                this.addItem = this.addItem.bind(this);
                                                                this.onButtonPressed = this.onButtonPressed.bind(this);
                                                            }

                                                            onButtonPressed() {
                                                                console.log("button pressed");
                                                                this.setState({ verse: "marta" });
                                                            }

                                                            addItem(verse) {
                                                                console.log("add a verse: " + verse);

                                                                // TODO pass that verse to the VerseList component thorough it's props
                                                            }

                                                            render() {
                                                                console.log("this is render base");
                                                                return React.createElement('div', { className: 'jumbotron' }, React.createElement(Verse, { add: this.addItem }), React.createElement(VerseList, { verse: this.state.verse }), React.createElement(Button, { button: this.onButtonPressed }));
                                                            }
                                                        }
                                                        class Verse extends React.Component {
                                                            constructor(props) {
                                                                super(props);
                                                                this.state = {
                                                                    verse: []
                                                                };
                                                            }

                                                            retrieveVerse() {
                                                                console.log('test');
                                                                axios.get('http://localhost:3000/data').then(res => {
                                                                    console.log("response " + res);
                                                                    const verses = res.data;

                                                                    // TODO send current verse to the Base to be pushed into VerseList
                                                                    // Something like: add(verses)

                                                                    console.log(verses);
                                                                    this.setState({ verse: verses });
                                                                }).catch(function (error) {
                                                                    console.log("error " + error);
                                                                    return React.createElement("div", null, []);
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
                                                            shouldComponentUpdate() {
                                                                console.log('should');
                                                                this.props.add();
                                                                return true;
                                                            }

                                                            render() {
                                                                console.log('this is render verse');
                                                                let items = this.state.verse.map(function (item, index) {
                                                                    if (item.titles && item.title) {
                                                                        return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.text, " " + item.verse, " " + item.title, " " + item.titles));
                                                                    } else {
                                                                        return React.createElement("div", { key: index }, React.createElement("p", null, " " + item.bookname, " " + item.chapter, " " + item.verse, " " + item.text));
                                                                    }
                                                                });
                                                                return React.createElement("div", { className: 'text-center' }, items);
                                                            }
                                                        }

                                                        Verse.propTypes = {
                                                            add: React.PropTypes.func
                                                        };
                                                        class VerseList extends React.Component {
                                                            // TODO Add state to this component (in order to keep verses)

                                                            // TODO Add handler to receive new props (a new verse) and then push it into the state

                                                            render() {
                                                                // let displayVerse = function(task) {
                                                                //     React.createElement(
                                                                //         "li",
                                                                //         null,
                                                                //         task
                                                                //     );
                                                                // };
                                                                return React.createElement('li', null, this.props.verse);
                                                            }
                                                        }

                                                        if (typeof window !== 'undefined') {
                                                            console.log('starting the rendering of Verse component');
                                                            ReactDOM.render(React.createElement(Base), document.getElementById("content"));
                                                        }
                                                    }, {}] }, {}, [1]);
                                                class Button extends React.Component {
                                                    render() {
                                                        console.log('button ');
                                                        return React.createElement('button', { className: 'btn btn-primary pull-right', onClick: this.props.button }, 'Another Verse');
                                                    }
                                                }

                                                Button.propTypes = {
                                                    button: React.PropTypes.func
                                                };
                                            }, {}] }, {}, [1]);
                                        class Button extends React.Component {
                                            render() {
                                                console.log('button ');
                                                return React.createElement('button', { className: 'btn btn-primary pull-right', onClick: this.props.button }, 'Another Verse');
                                            }
                                        }

                                        Button.propTypes = {
                                            button: React.PropTypes.func
                                        };
                                    }, {}] }, {}, [1]);
                            }, {}] }, {}, [1]);
                    }, {}] }, {}, [1]);
            }, {}] }, {}, [1]);
    }, {}] }, {}, [1]);
