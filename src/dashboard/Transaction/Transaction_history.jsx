import React from 'react'

function Transaction_history() {
      const data=[{}]
  return (
    <div>
      <table>
            <thead>
                  <tr>
                        <td>Transaction_Code</td>
                        <td>Sender_Wallet</td>
                        <td>Reciever_wallet</td>
                        <td>Amount</td>
                        <td>Status</td>
                        <td>Reference_code</td>
                         <td>Created_at</td>
                  </tr>
            </thead>
            <tbody>
                  <tr>
                      { data.map((val,index)=>(
                       <td key={index}>{val}/</td>
                      ))}
                  </tr>
            </tbody>
      </table>
    </div>
  )
}

export default Transaction_history
