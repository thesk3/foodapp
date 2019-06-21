import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
class Main extends Component {
  state = {
    hotelData: []
  }

  componentDidMount() {
    const url = 'https://api.myjson.com/bins/1fjkml'
        axios.get(url).then(response => {console.log(response) ; 
          const hotelData= response.data;
          this.setState({ hotelData }); });
      
  }
    handleSubmit = (e) => {
        e.preventDefault();
        
        
         const location = this.getLocation.value;
        //   const hotelData=[
        //    {
        //      hotelID: 1,
        //      name: 'Rajgad Hotel',
        //      dishes:[ {
        //       dishID: 11,
        //       name: 'Misal',
        //       dishPhoto: "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=",
        //       dishPrice:"123",
        //     },
        //   ]
        //  },
        //  {
        //     hotelID: 2,
        //     name: 'Drums Hotel',
        //     dishes: [{
        //       dishID: 21,
        //       name: 'PavBhaji',
        //       dishPhoto: "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=",
        //       dishPrice:"223",
        //     },
        //     {
        //       dishID: 22,
        //       name: 'Vada Pav',
        //       dishPhoto: "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=",
        //       dishPrice:"223",
        //     },
        //   ]
        //  }
        //   ]
        
         const data = {
          id: new Date(),
          location,
          hotelData:this.state.hotelData
         }
         this.props.dispatch({
         type: 'ADD_LOCATION',
         data
         })
        
         this.getLocation.value = '';
         this.props.history.push("search");
        }

  render() {
    return (
      <div className="container">
          <form className="form" onSubmit={this.handleSubmit} >
          <input required type="text" ref={(input) => this.getLocation = input}
             placeholder="Enter location" /><br /><br />
          <button>GO </button>

          </form>
       
      </div>
    );
  }
}

export default connect()(Main);