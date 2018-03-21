class Verse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: props.current
        };
    }

    retrieve() {
        let self = this;
        axios
            .get('http://localhost:3000/data')
            .then((res) => {
                self.setState({current: res.data})
                self.props.current = res.data
                self.props.add(res.data)
            })
            .catch(function (error) {
                console.log("error " +  error);
                return( React.createElement("div", null, []));
            });
    }

    componentDidMount() {
        this.retrieve();
    }

    componentWillReceiveProps(newProps) {
        this.retrieve();
    }

    render() {
        return( React.createElement(
            "div",
            {className: 'text-center'},
            JSON.stringify(this.state.current))
        );
    }
}
