import React from "react";

class Class001 extends React.Component {
  constructor(props) {
    super(props);
    this.callRef = React.createRef();
    this.addingRefInput = this.addingRefInput.bind(this);
  }

  addingRefInput() {
    this.callRef.current.focus();
    this.callRef.current.value = "Clicked";
  }

  render() {
    this.callRef.current = "what up";
    let node = this.callRef.current;
    console.log(node);
    return (
      <div>
        <h2>Adding Ref to DOM element</h2>
        <input type="text" ref={this.callRef} />
        <input
          type="button"
          value="Add text input"
          onClick={this.addingRefInput}
        />
      </div>
    );
  }
}

export default Class001;
