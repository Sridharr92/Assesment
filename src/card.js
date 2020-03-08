import React,{Component} from 'react';
// import results from './api.randomuser.me.js'

class Card extends Component{
	 constructor(props) {
	    super(props);
	    this.state = {
	      results:[]
	    }
	  }
	  componentDidMount() {
	    fetch('https://api.randomuser.me?results=24')
	      .then(res => {return res.json();})
	      .then(json => {
	        this.setState({
	          results: json,    })
	      });
	  }

	  render() {
	  const { results } = this.state.results;
	  return (
	      <div> 	
	      	<div className="container-fluid">
	      		<div className="row">
	      		{results && results.map(result => ( 
		          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex px-0">	          
		            <div className="card">
		              <div className="card-body">
		                  <img className="card-body-img" src={result.picture.large}  alt="Card image" />
		                  <h5 className="card-body-title pt-2 pb-2">{result.name.first} {result.name.last }</h5>
		                  <div className="d-flex justify-content-center">
		                    <button className="btn btn-primary card-body-btn">{result.cell}</button>
		                  </div>
		              </div>
		            </div>	         
		          </div>  
		         ))}
	      		</div>
	      	</div>
	      </div>
	    );
	  }
}


export default Card;