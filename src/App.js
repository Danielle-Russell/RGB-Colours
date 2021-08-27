import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    colors: [],
  };

  componentDidMount() {
    var r, g, b;
    var array = [];
    var backColor;
    for (r = 0; r <= 256; r+= 8) {
      for (g = 0; g <= 256; g+= 8) {
        for (b = 0; b <= 256; b+= 8) {
          backColor = "rgb(" + r + "," + g + "," + b + ")";
          array.push(backColor);

          this.setState({
            colors: array,
          });
        }
      }
    }
  }


  render() {
    var colors = this.state.colors;
    return <div className="App">
      {colors.map( color => <p key={color} style={{backgroundColor: color}}> Color {color}</p>)}
    </div>;
  }
}
export default App;
