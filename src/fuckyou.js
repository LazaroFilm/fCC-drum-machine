import React, { Component } from 'react';

function fuckyou() {
    return (
      <div>
        <p>fuck this shit.</p>
      </div>
    );
}

export default fuckyou;
//! _________________________________________
import React, { Component } from 'react';

class fuckyou extends Component {
  render() {
    return (
      <div>
        <p>fuck this shit.</p>
      </div>
    );
  }
}

export default fuckyou;
//! _________________________________________
const fuckyou = () => {
  return (
    <div>
      <p>fuck this shit.</p>
    </div>
  )
}