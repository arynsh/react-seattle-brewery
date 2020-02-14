import React from 'react';

function AddNewKegForm() {
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name of Beer' />
        <input
          type='text'
          id='brand'
          placeholder='Beer Brand' />
        <input
          type='number'
          id='price'
          placeholder='Price Per Pint' />
        <input
          type='text'
          id='alcoholContent'
          placeholder='Alcohol Content' />
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

export default AddNewKegForm;