import React from 'react';
import {
      firebaseMessaging,
      requestFirebaseNotificationPermission
} from './FirebaseInit';

class App extends React.Component {
      state = {
            showNoti: false,
            token: null,
            popup:null,
      }
      async componentDidMount() {
            if (firebaseMessaging) {
                  requestFirebaseNotificationPermission()
                        .then((firebaseToken) => {
                              // eslint-disable-next-line no-console
                              console.log('token is', [firebaseToken]);
                              this.setState({ token: firebaseToken });
                        })
                        .catch((err) => {
                              return err;
                        });
                  firebaseMessaging.onMessage(payload => {
                        console.log('onMessage invoked')
                        this.popupNotification();
                  });
            }
      }
      popupNotification = () => {
            this.setState(prevState => {
                  return {
                        ...prevState,
                        showNoti: true,
                  }
            })
            setTimeout(() => this.setState(prevState => {
                  return {
                        ...prevState,
                        showNoti: false
                  }
            }), 5000);
      }
      showToast=(txt)=>{
            const Popup=()=><>
                  <div style={{display:'flex',
                              position:'absolute',
                              bottom:'40px',
                              left:'50%',
                              padding:'5px',
                              background:'#fb8500',
                              transform:'translateX(-50%)'}}>
                                    {
                                          txt
                                    }
                  </div>
            </>
            this.setState(prevState=>{
                  return {
                        ...prevState,
                        popup:<Popup />
                  }
            });
            setTimeout(()=>this.setState(prevState=>{
                  return {
                        ...prevState,
                        popup:null
                  }
            }),3000);
      }
      copyToClipboard = () => {
            const that=this;
            navigator.clipboard.writeText(this.state.token)
            .then(function () {
                  that.showToast('copied to clipboard');
            }, function () {
                  that.showToast('failed to copy');
            });
      }
      
      render() {
            return (<>
                  <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column-reverse',
                        gap: '20px',
                        width: '100vw',
                        height: '100vh',
                        background: '#023047',
                        color: 'white'
                  }}>
                        {this.state.popup}
                        {this.state.token ? <>
                              <div
                                    className="copy-button"
                                    onClick={this.copyToClipboard}>Copy FCM Token</div>
                        </> : null}
                        <h1 style={{
                              fontSize: '20px',
                              fontWeight: '700',
                              width: 'fit-content',
                        }}>App is working ...</h1>

                        {this.state.showNoti
                              ? <p style={{
                                    padding: '10px',
                                    color: 'black',
                                    width: 'fit-content',
                                    background: '#ffd60a',
                                    fontSize: '16px',
                                    lineHeight: '20px'
                              }}>Received notification!</p> : null}

                  </div>
            </>);
      }
}

export default App;