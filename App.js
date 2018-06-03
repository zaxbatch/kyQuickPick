import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';

export default class App extends Component{
constructor(){
    super();
    this.state = {
    textValue: 'Feeling lucky?'
    }
    this.lucky1= this.lucky1.bind(this);
    this.lucky3= this.lucky3.bind(this);
    this.lucky4= this.lucky4.bind(this);
    this.powerNumber= this.powerNumber.bind(this);
    this.cashBall= this.cashBall.bind(this);
    this.megaMillions= this.megaMillions.bind(this);
    this.luckyForLife= this.luckyForLife.bind(this);
    this.keno= this.keno.bind(this);

}

lucky1() {
  var a;
  a = Math.floor(Math.random()*10);
    this.setState({
        textValue: a
    })
}

lucky3() {
  var a, b, c;
  a = Math.floor(Math.random()*10);
  b = Math.floor(Math.random()*10);
  c = Math.floor(Math.random()*10);
    this.setState({
        textValue: a.toString() + b.toString() + c.toString()
    })
}

lucky4() {
  var a, b, c, d;
  a = Math.floor(Math.random()*10);
  b = Math.floor(Math.random()*10);
  c = Math.floor(Math.random()*10);
  d = Math.floor(Math.random()*10);
    this.setState({
        textValue: a.toString() + b.toString() + c.toString() + d.toString()
    })
}

powerNumber() {
  var a, b, c, d, e, f;
  a = (Math.floor(Math.random() * 69) + 1);
  b = (Math.floor(Math.random() * 69) + 1);
  c = (Math.floor(Math.random() * 69) + 1);
  d = (Math.floor(Math.random() * 69) + 1);
  e = (Math.floor(Math.random() * 69) + 1);
  f = (Math.floor(Math.random() * 25) + 1);
    this.setState({
        textValue: a.toString() + "-" + b.toString() + "-" + c.toString() + "-" + d.toString() + "-" + e.toString() + "-" + f.toString()
    })
}

cashBall() {
  var a, b, c, d, e;
  a = (Math.floor(Math.random() * 35) + 1);
  b = (Math.floor(Math.random() * 35) + 1);
  c = (Math.floor(Math.random() * 35) + 1);
  d = (Math.floor(Math.random() * 35) + 1);
  e = (Math.floor(Math.random() * 25) + 1);
    this.setState({
        textValue: a.toString() + "-" + b.toString() + "-" + c.toString() + "-" + d.toString() + "-" + e.toString()
    })
}

megaMillions() {
  var a, b, c, d, e, f;
  a = (Math.floor(Math.random() * 70) + 1);
  b = (Math.floor(Math.random() * 70) + 1);
  c = (Math.floor(Math.random() * 70) + 1);
  d = (Math.floor(Math.random() * 70) + 1);
  e = (Math.floor(Math.random() * 70) + 1);
  f = (Math.floor(Math.random() * 25) + 1);
    this.setState({
      textValue: a.toString() + "-" + b.toString() + "-" + c.toString() + "-" + d.toString() + "-" + e.toString() + "-" + f.toString()
    })
}

luckyForLife() {
  var a, b, c, d, e, f;
  a = (Math.floor(Math.random() * 48) + 1);
  b = (Math.floor(Math.random() * 48) + 1);
  c = (Math.floor(Math.random() * 48) + 1);
  d = (Math.floor(Math.random() * 48) + 1);
  e = (Math.floor(Math.random() * 48) + 1);
  f = (Math.floor(Math.random() * 18) + 1);
    this.setState({
      textValue: a.toString() + "-" + b.toString() + "-" + c.toString() + "-" + d.toString() + "-" + e.toString() + "-" + f.toString()
    })
}

keno() {
  var a, b, c, d, e, f, g, h, i, j;
  a = (Math.floor(Math.random() * 80) + 1);
  b = (Math.floor(Math.random() * 80) + 1);
  c = (Math.floor(Math.random() * 80) + 1);
  d = (Math.floor(Math.random() * 80) + 1);
  e = (Math.floor(Math.random() * 80) + 1);
  f = (Math.floor(Math.random() * 80) + 1);
  g = (Math.floor(Math.random() * 80) + 1);
  h = (Math.floor(Math.random() * 80) + 1);
  i = (Math.floor(Math.random() * 80) + 1);
  j = (Math.floor(Math.random() * 80) + 1);
    this.setState({
      textValue: a.toString() + "-" + b.toString() + "-" + c.toString() + "-" + d.toString() + "-" + e.toString() + "-" + f.toString() + "-" + g.toString() + "-" + h.toString()+ "-" + i.toString() + "-" + j.toString()
    })
}

render(){
    return(

<View style={{paddingTop: 20}}>
  <Text style={{color: 'red',fontSize:20}}> {this.state.textValue} </Text>
  <Button title= 'Lucky Number' onPress= {this.lucky1}/>
  <Button title= 'Pick 3' onPress= {this.lucky3}/>
  <Button title= 'Pick 4' onPress= {this.lucky4}/>
  <Button title= 'Ca$hBall' onPress= {this.cashBall}/>
  <Button title= 'Mega Millions' onPress= {this.megaMillions}/>
  <Button title= 'Lucky for Life' onPress= {this.luckyForLife}/>
  <Button title= 'Keno' onPress= {this.keno}/>
  <Button title= 'Power Ball' onPress= {this.powerNumber}/>
</View>

   );
 }
}
