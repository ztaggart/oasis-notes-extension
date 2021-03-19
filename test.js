class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            appversion: ''
        }
    }


render(){
    return(
        <>
        <h2>Hello Friend</h2>
        <button>download</button>
        </>
    )
}

}