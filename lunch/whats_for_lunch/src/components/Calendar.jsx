import React from "react";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";


  const showAlert1 = () => {
    Swal.fire({
      title: 'Blackened Chicken',
      html: '',
      footer: "Monday, May 1<sub>st</sub>"
    })
  }

  const showAlert2 = () => {
    Swal.fire({
      title: 'Shrimp Scampi',
      html: '',
      footer: "Tuesday, May 2<sub>nd<sub>"
    })
  }

  const showAlert3 = () => {
    Swal.fire({
      title: 'Paninis',
      html: '',
      footer: "Wednesday, May 3<sub>rd</sub>"
    })
  }

  const showAlert4 = () => {
    Swal.fire({
      title: 'Red Robin',
      html: '',
      footer: "Thursday, May 4<sub>th</sub"
    })
  }

  const showAlert5 = () => {
    Swal.fire({
      title: 'Panko Chicken',
      html: '',
      footer: "Friday, May 5<sub>th</sub"
    })
  }

  const showAlert6 = () => {
    Swal.fire({
      title: 'Turning Point',
      html: '',
      footer: "Monday, May 8<sub>th</sub"
    })
  }

  const showAlert7 = () => {
    Swal.fire({
      title: 'Taco Bar',
      html: '',
      footer: "Tuesday, May 9<sub>th</sub>"
    })
  }

  const showAlert8 = () => {
    Swal.fire({
      title: 'Penne Vodka & Sausage',
      html: '',
      footer: "Wednesday, May 10<sub>th</sub>"
    })
  }

  const showAlert9 = () => {
    Swal.fire({
      title: 'Chicken Cordon Bleu',
      html: '',
      footer: "Thursday, May 11<sub>th</sub>"
    })
  }

  const showAlert10 = () => {
    Swal.fire({
      title: 'Teriyaki Salmon',
      html: '',
      footer: "Friday, May 12<sub>th</sub>"
    })
  }

  const showAlert11 = () => {
    Swal.fire({
      title: 'Jerk Chicken',
      html: '',
      footer: "Monday, May 15<sub>th</sub>"
    })
  }

  const showAlert12 = () => {
    Swal.fire({
      title: 'Baja Salad',
      html: '',
      footer: "Tuesday, May 16<sub>th</sub>"
    })
  }

  const showAlert13 = () => {
    Swal.fire({
      title: 'Chicken Marsala',
      html: '',
      footer: "Wednesday, May 17<sub>th</sub>"
    })
  }

  const showAlert14 = () => {
    Swal.fire({
      title: 'Taquitos & Rice',
      html: '',
      footer: "Thursday, May 18<sub>th</sub>"
    })
  }

  const showAlert15 = () => {
    Swal.fire({
      title: 'Chick-Fil-A',
      html: '',
      footer: "Friday, May 19<sub>th</sub>"
    })
  }

  const showAlert16 = () => {
    Swal.fire({
      title: 'Sandwich Day',
      html: '',
      footer: "Monday, May 22<sub>th</sub>"
    })
  }

  const showAlert17 = () => {
    Swal.fire({
      title: 'Cobb Salad',
      html: '',
      footer: "Tuesday, May 23<sub>nd</sub>"
    })
  }

  const showAlert18 = () => {
    Swal.fire({
      title: 'Chicken Quesadillas',
      html: '',
      footer: "Wednesday, May 24<sub>th</sub>"
    })
  }

  const showAlert19 = () => {
    Swal.fire({
      title: 'Grilled Salmon',
      html: '',
      footer: "Thursday, May 25<sub>th</sub>"
    })
  }

  const showAlert20 = () => {
    Swal.fire({
      title: 'Wings, Fries, & Salad',
      html: '',
      footer: "Friday, May 26<sub>th</sub>"
    })
  }

  const showAlert21 = () => {
    Swal.fire({
      title: 'Panko Chicken',
      html: '',
      footer: "Wednesday, May 29<sub>th</sub>"
    })
  }

  const showAlert22 = () => {
    Swal.fire({
      title: 'Baked Ziti & Meatballs',
      html: '',
      footer: "Thursday, May 31<sub>th</sub>"
    })
  }

const showAlert23 = () => {
  Swal.fire({
    title: 'Cape Cod Salad',
    html: '',
    footer: "Wednesday, May 31<sub>st</sub>"
  })
}

  function Calendar() {
    const date = (new Date().getDate());
    // const date = 3;

    return (
      <>
        {/* <Header /> */}
        <div id="wrapOverall">
          <div id="calendar">
            <table>
              <div id="month">
                <th className="month">MAY</th>
              </div>

              <div id="weeks">
                <tr className="weeks">
                  <td>SUN</td>
                  <td>MON</td>
                  <td>TUE</td>
                  <td>WED</td>
                  <td>THU</td>
                  <td>FRI</td>
                  <td>SAT</td>
                </tr>
              </div>

              <div id="days">
                <tr className="week1 week">
                  <td></td>
                  <td onClick={showAlert1} className={`days hover-day ${date === 1 ? 'red' : 'black'}`}>1</td>
                  <td onClick={showAlert2} className={`days hover-day ${date === 2 ? 'red' : 'black'}`}>2</td>
                  <td onClick={showAlert3} className={`days hover-day ${date === 3 ? 'red' : 'black'}`}>3</td>
                  <td onClick={showAlert4} className={`days hover-day ${date === 4 ? 'red' : 'black'}`}>4</td>
                  <td onClick={showAlert5} className={`days hover-day ${date === 5 ? 'red' : 'black'}`}>5</td>
                  {/* <td className="days grey-day">6</td> */}
                  <td className={`days grey-day ${date === 6 ? 'red' : 'black'}`}>6</td>
                </tr>

                <tr className="week2 week">
                  <td className="days grey-day">7</td>
                  <td onClick={showAlert6} className={`days hover-day ${date === 8 ? 'red' : 'black'}`}>8</td>
                  <td onClick={showAlert7} className={`days hover-day ${date === 9 ? 'red' : 'black'}`}>9</td>
                  <td onClick={showAlert8} className={`days hover-day ${date === 10 ? 'red' : 'black'}`}>10</td>
                  <td onClick={showAlert9} className={`days hover-day ${date === 11 ? 'red' : 'black'}`}>11</td>
                  <td onClick={showAlert10} className={`days hover-day ${date === 12 ? 'red' : 'black'}`}>12</td>
                  <td className="days grey-day">13</td>
                </tr>

                <tr className="week3 week">
                  <td className="days grey-day">14</td>
                  <td onClick={showAlert11} className={`days hover-day ${date === 10 ? 'red' : 'black'}`}>15</td>
                  <td onClick={showAlert12} className={`days hover-day ${date === 11 ? 'red' : 'black'}`}>16</td>
                  <td onClick={showAlert13} className={`days hover-day ${date === 12 ? 'red' : 'black'}`}>17</td>
                  <td onClick={showAlert14} className={`days hover-day ${date === 13 ? 'red' : 'black'}`}>18</td>
                  <td onClick={showAlert15} className={`days hover-day ${date === 14 ? 'red' : 'black'}`}>19</td>
                  <td className="days grey-day">20</td>
                </tr>

                <tr className="week4 week">
                  <td className="days grey-day">21</td>
                  <td onClick={showAlert16} className={`days hover-day ${date === 22 ? 'red' : 'black'}`}>22</td>
                  <td onClick={showAlert17} className={`days hover-day ${date === 23 ? 'red' : 'black'}`}>23</td>
                  <td onClick={showAlert18} className={`days hover-day ${date === 24 ? 'red' : 'black'}`}>24</td>
                  <td onClick={showAlert19} className={`days hover-day ${date === 25 ? 'red' : 'black'}`}>25</td>
                  <td onClick={showAlert20} className={`days hover-day ${date === 26 ? 'red' : 'black'}`}>26</td>
                  <td className="days grey-day">27</td>
                </tr>

                <tr className="week5 week">
                  <td className="days grey-day">28</td>
                  <td className="days grey-day">29</td>
                  <td onClick={showAlert21} className={`days hover-day ${date === 25 ? 'red' : 'black'}`}>30</td>
                  <td onClick={showAlert22} className={`days hover-day ${date === 26 ? 'red' : 'black'}`}>31</td>
                  {/* <td onClick={showAlert19} className= {`days hover-day ${date === 27 ? 'red' : 'black'}`}>27</td> */}
                  {/* <td onClick={showAlert20} className= {`days hover-day ${date === 28 ? 'red' : 'black'}`}>28</td> */}
                  <td className="days grey-day">1</td>
                  <td className="days grey-day">2</td>
                  <td className="days grey-day">3</td>
                </tr>
              
              </div>
            </table>
          </div>
        </div>
        {/* <Footer2 /> */}
      </>
    )
  }

  

export default Calendar;
