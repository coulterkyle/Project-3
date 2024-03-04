// import { useState } from 'react';
import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { stripeCHECKOUT } from '../../utils/mutations';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51OpCgrBHDzDLC8eDai1kyb32CrSac9KpOKxK3eWbAkG3GzpaMbYOfa1NjReJ1ml95zicRIadUGjqEEA9qzZlL1tb00l8uDBsQA');

export default function Modal() {

  const [sCheckout, { error }] = useMutation(stripeCHECKOUT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = event.target

    let itemId = formData.item.value
    let itemName = formData.name.value
    let itemAmount = (formData.amount.value * 100)
    
    try {
      const mutationRes = await sCheckout({
        variables: {
          itemId: itemId,
          itemName: itemName,
          itemAmount: itemAmount
        }
      })

      console.log('mutation', mutationRes)
      
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: mutationRes.data.checkout.session });
      });

    } catch (err) {
      console.error(err)
    }

  }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form id="setBounty" onSubmit={handleFormSubmit}>
            <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">New Bounty </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"></span>
            </button>
            </div>
            <div className="modal-body">
                <div className="form-floating">
                <input type="number" min="1" step="1" max="250" className="form-control" id="amount" />
                <label htmlFor="amount" className="col-form-label text-success">Bounty Amount:</label>
                </div>
            </div>
            <div id="hiddenValues">
              <input type="text" id="item" />
              <input type="text" id="name" />
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-success">Add Bounty</button>
            </div>
          </form>
        </div>
        </div>
        </div>
    )
}