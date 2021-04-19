import './App.scss';

function App() {
  return (
    <div className="container">
      <div className='weather-sumary'>
        <div className='header'>
          <div className='burger'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='title'>
            <div>myENV</div>
            <div>
              <span>Current location </span>
              <i class="fal fa-angle-down fa-lg"></i>
            </div>
          </div>
          <div><i class="fas fa-bell fa-2x"></i></div>
        </div>
        <div className='main'>
          <div className='state-icon'>
            <i class="fas fa-cloud fa-4x"></i>
          </div>
          <div className='main-title'>
            <div className='state'>Cloudy</div>
            <div className='detail'>
              <i class="fas fa-thermometer-half"></i>
              <span>29.2°C</span>
            </div>
          </div>
          <div className='detail'>
            <i class="far fa-tint"></i>
            <span>73%</span>
          </div>
        </div>
        <div className='weather-detail'>
          <div>PSI</div>
          <div>RAIN</div>
          <div>DENGUE</div>
          <div>ADD</div>
        </div>
      </div>
    </div>
  );
}

export default App;
