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

    while (currIndex != 0) {
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
    var half = Math.ceil(colors.length / 2);
    var q1 = colors.slice(0, colors.length / 4);
    var q2 = colors.slice(colors.length / 4, half);
    var q3 = colors.slice(half, colors.length);

    return (
      <div className="App">
        <div>
          {this.shuffleColors(q1).map((color) => (
            <p key={color} style={{ backgroundColor: color }}>
              .
            </p>
          ))}
        </div>
        <div>
          {this.shuffleColors(q2).map((color) => (
            <p key={color} style={{ backgroundColor: color }}>
              .
            </p>
          ))}
        </div>
        <div>
          {this.shuffleColors(q3).map((color) => (
            <p key={color} style={{ backgroundColor: color }}>
              .
            </p>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
