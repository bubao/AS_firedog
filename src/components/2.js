class Brother1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <button onClick={this.props.refresh}>
            更新兄弟组件
        </button>
      </div>
    )
  }
}
class Brother2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
         {this.props.text || "兄弟组件未更新"}
      </div>
    )
  }
}
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  refresh() {
    return (e) => {
      this.setState({
        text: "兄弟组件沟通成功",
      })
    }
  }
  render() {
    return (
      <div>
        <h2>兄弟组件沟通</h2>
        <Brother1 refresh={this.refresh()}/>
        <Brother2 text={this.state.text}/>
      </div>
    )
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'));

// 父组件
var MyContainer = React.createClass({
  getInitialState: function() {
    return {
      checked: false
    };
  },
  onChildChanged: function(newState) {
    this.setState({
      checked: newState
    });
  },
  render: function() {
    var isChecked = this.state.checked ? 'yes' : 'no';
    return (
      <div>
        <div>Are you checked: {isChecked}</div>
        <ToggleButton text="Toggle me"
          initialChecked={this.state.checked}
          callbackParent={this.onChildChanged}
          />
      </div>
    );
  }
});

// 子组件
var ToggleButton = React.createClass({
  getInitialState: function() {
    return {
      checked: this.props.initialChecked
    };
  },
  onTextChange: function() {
    var newState = !this.state.checked;
    this.setState({
      checked: newState
    });
    // 这里要注意：setState 是一个异步方法，所以需要操作缓存的当前值
    this.props.callbackParent(newState);
  },
  render: function() {
    // 从【父组件】获取的值
    var text = this.props.text;
    // 组件自身的状态数据
    var checked = this.state.checked;

    return (
      <label>{text}: <input type="checkbox" checked={checked}                 onChange={this.onTextChange} /></label>
    );
  }
});