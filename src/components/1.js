var Frame = React.createClass({

  render: function() {
    return <iframe />;
  },
  componentDidMount: function() {
    this.renderFrameContent();
  },
  renderFrameContents: function() {
    var doc = this.getDOMNode().contentDocument
    if (doc.readyState === 'complete') {
      React.renderComponent(this.props.children, doc.body);
    } else {
      setTimeout(this.renderFrameContents, 0);
    }
  },
  componentDidUpdate: function() {
    this.renderFrameContents();
  },
  componentWillUnmount: function() {
    React.unmountComponentAtNode(this.getDOMNode().contentDocument.body);
  }
});