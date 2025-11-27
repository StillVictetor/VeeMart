import React, { useState } from 'react'
import '../Styles/paymentInstructions.css'

export default function PaymentInstructions({
  amount = 0,
  payer = '',
  totalItems = 0,
  onTransactionComplete,
  clearCart,
}) {
  const [paymentCompleted, setPaymentCompleted] = useState(false)

  // TODO: Replace placeholder bank details with secure config or backend fetch.
  const bank = {
    accountNumber: '9078119933',
    accountName: 'Victor Stephen',
    bankName: 'Opay',
  }

  const amountText = `₦${Number(amount ?? 0).toFixed(2)}`

  const handleGoToTransaction = () => {
    const tx = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      items: totalItems || 0,
      total: amountText,
      status: 'Success',
    }
    if (typeof onTransactionComplete === 'function') onTransactionComplete(tx)
    if (typeof clearCart === 'function') clearCart()
  }

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2 className="pi-title">Complete Bank Transfer</h2>

        {payer && (
          <p className="pi-payer">
            Payer: <strong>{payer}</strong>
          </p>
        )}

        <p className="pi-instruction">Please transfer exactly</p>
        <div className="pi-amount">{amountText}</div>

        <div className="pi-bank">
          <div className="pi-bank-row">
            <span className="pi-label">Bank</span>
            <span className="pi-value">{bank.bankName}</span>
          </div>
          <div className="pi-bank-row">
            <span className="pi-label">Account Name</span>
            <span className="pi-value">{bank.accountName}</span>
          </div>
          <div className="pi-bank-row">
            <span className="pi-label">Account Number</span>
            <span className="pi-value">{bank.accountNumber}</span>
          </div>
        </div>

        {!paymentCompleted ? (
          <>
            <p className="pi-note">
              After completing the transfer, tap <strong>Done</strong>.
            </p>
            <div className="pi-actions">
              <button
                className="button-two style-2 pi-button"
                onClick={() => setPaymentCompleted(true)}
              >
                Done
              </button>
            </div>
          </>
        ) : (
          <div className="pi-complete">
            <p className="pi-success">Payment Completed</p>
            <div className="pi-actions">
              <button
                className="button-two style-2 pi-button"
                onClick={handleGoToTransaction}
              >
                Go to Transaction
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
