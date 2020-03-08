import React,{Component} from 'react';

class Card extends Component{
	 constructor(props) {
	    super(props);
	    this.state = {
	      results:[]
	    }
	  }
	  componentDidMount() {
	    fetch('https://randomuser.me/api/?gender=male&results=24')
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
		          <div className="card-wrapper">	          
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