import React, { Component } from "react";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";


class Calendar extends Component {

  // render() {
  //   return <h1>Hello, world</h1>;
  // }

  showAlert = () => {
      Swal.fire({
          title: "Success",
          text: "Alert successful",
          icon: "success",
          confirmButtonText: "OK",
        });
  }

  render(){
    return (
      <>
        <div>shiz</div>
          <div className="container d-flex justify-content-center" style={{marginTop: 90}}>
             <button onClick={this.showAlert} className="btn btn-primary btn-lg">Show Alert</button>
          </div>
      </>
      )
  }
}

export default Calendar;
