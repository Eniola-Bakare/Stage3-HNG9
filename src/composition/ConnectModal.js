import React from 'react'

const ConnectModal = ({open, onClose}) => {
  if(!open) return null
  return (
    <div className="overLay" onClick={onClose}>
      <div className="modal-container">
        <div className="modal-heading">
          <p>Connect Wallet</p>
          <img src={require ('../assets/close.png')} onClick={onClose}/>
        </div>
        <div className="modal-body">
          <p>Choose your preferred wallet.</p>
          <div>
            <section>
              <img src={require ('../assets/metaMask.png')}  />
              <p>Metamask</p>
            </section> 
            <img src={require ('../assets/forward.png')} />
          </div>
          <div>
            <section><img src={require ('../assets/walletConnect.png')}  />
              <p>WalletConnect</p>
            </section>
            <img src={require ('../assets/forward.png')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectModal