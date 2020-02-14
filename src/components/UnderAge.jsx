import React from 'react';

var UnderAgeStyling= 
  {
    textAlign: 'center',
    fontFamily: 'didot'
  }

function UnderAge() {
    return (
        <div>
            <h3 style={UnderAgeStyling}>Sorry, come back when you're at least 21!</h3>
        </div>
    );
}
export default UnderAge;