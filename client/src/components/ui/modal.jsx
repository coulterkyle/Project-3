import React, { useState } from 'react';

const ModalComponent = () => {
  const [recipient, setRecipient] = useState('');

  const handleModalShow = (event) => {
    event.preventDefault();
    const button = event.relatedTarget;
    const recipient = button.getAttribute('data-whatever');
    console.log(recipient);

    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).

    // Update the modal's content
    setRecipient(recipient);
  };

  return (
    <div>
      <div id="exampleModal" onClick={handleModalShow}>
        Open Modal
      </div>
      <div className="modal">
        <div className="modal-title">New message to {recipient}</div>
        <div className="modal-body">
          <input type="text" value={recipient} readOnly />
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;