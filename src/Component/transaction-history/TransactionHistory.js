import React from 'react';
import style from '../transaction-history/TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
    return (
        <table className={style.transactionTable}>
            <thead>
                <tr className={style.transactionTr}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
            {transactions.map((transaction) => (
                <tr key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>
                )
            )}
            </tbody>
        </table>
    )
}