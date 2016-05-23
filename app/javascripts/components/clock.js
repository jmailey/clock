var React = require('react');
var Clock = React.createClass({
  propTypes: {
    animation: React.PropTypes.func
  },
  getInitialState: function() {
      return {
        interval: null,
        startTime: null
      }
  },
  start: function() {
    this.setState({
      interval: requestAnimationFrame(this.tick),
      starttime: new Date()
    });
  },
  stop: function() {
    cancelAnimationFrame(this.state.interval);
  },
  tick: function(timestamp) {
    var time = new Date();
    var secondCog = document.getElementById('seconds');
    var minuteCog = document.getElementById('minutes');
    var hourCog = document.getElementById('hour');
    var secondDegrees = time.getSeconds() * 6;
    var minuteDegrees = time.getMinutes() * 6;
    var hourDegrees = (time.getHours() - 12) * 30 ;
    secondCog.style.transform = 'rotate(' + secondDegrees + 'deg)';
    minuteCog.style.transform = 'rotate(' + minuteDegrees + 'deg)';
    hourCog.style.transform = 'rotate(' + hourDegrees + 'deg)';
    this.setState({
      interval: requestAnimationFrame(this.tick)
    });
  },

  render: function() {
    return (
      <div>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <div className='clock'>
          <div className='hourCog' id="hour">
            <div className='hourHand'></div>
          </div>
          <div className='minuteCog' id="minutes">
            <div className='minuteHand'></div>
          </div>
          <div className='secondCog' id="seconds">
            <div className='secondHand'></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Clock;
