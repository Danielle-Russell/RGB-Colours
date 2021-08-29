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
    for (r = 0; r <= 256; r += 8) {
      for (g = 0; g <= 256; g += 8) {
        for (b = 0; b <= 256; b += 8) {
          backColor = "rgb(" + r + "," + g + "," + b + ")";
          array.push(backColor);

          this.setState({
            colors: array,
          });
        }
      }
    }
  }

  shuffleColors = (array) => {
    var currIndex = array.length,
      randomIndex;

    while (currIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currIndex);
      currIndex--;

      [array[currIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currIndex],
      ];
    }

    return array;
  };

  render() {
  
    var colors = this.state.colors;
    
    return (
      <div className="App">
          {this.shuffleColors(colors).map(color =>
            <p key={color} style={{ backgroundColor: color }}> . </p>
          )
          }
      </div>
    );
  }
}
export default App;
