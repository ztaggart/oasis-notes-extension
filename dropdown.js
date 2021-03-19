class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listofsets: [],
            selected_set: ''
        }
    };

    componentDidMount() {
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then(data => {
            let listofsetsFromApi = data.map(set => {
              return {value: set, display: set}
            });
            this.setState({
              listofsets: [{value: '', display: '(Select a set)'}].concat(listofsetsFromApi)
            });
          }).catch(error => {
            console.log(error);
          });

        }

    render(){

        return(
            <div>
                
                <select value={this.state.selected_set} onChange={(e) => this.setState({selected_set: e.target.value})}>
                    {this.state.listofsets.map((set) => <option key={set.value} value={set.value}>{set.display}</option>)}
                                  
                </select>

        

            </div>
        )
    }

}