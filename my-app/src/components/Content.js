// imported react 
import React from 'react';
// this is to display my output with the time 
const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}
// put the contnet out 
export default Content;
