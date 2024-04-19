import React from 'react';

class ModifyClassComponent extends React.Component {
  // constructor()
  // {
  //   super()
  //   this.showMessage = this.showMessage.bind(this)

  // }
  showMessage(){
    setTimeout(() => {
      alert('Delayed message!');
    }, 1000);

  }

  render() {
    return (
      <div>
        <h1>Class Component with Button</h1>
        <button onClick={this.showMessage}>Show Message After Delay</button>
      </div>
    );
  }
}

export default ModifyClassComponent;
