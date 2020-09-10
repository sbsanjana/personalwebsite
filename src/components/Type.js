import React from 'react';
import Typewriter from 'typewriter-effect';


export default class Typist extends React.Component {

  render() {
    return (
      // Passing in text.
      <div className= 'name' style={{fontSize:50, marginTop:-20}}>
        <Typewriter
        options={{
            strings: ['Student.', 'Designer.', 'Programmer.'],
            autoStart: true,
            loop: true,
        }}
        />
        </div>
    );
  }

}