import './ToggleBtn.css';

const ToggleBtn = ({ isOn, clicked }) => {
  return (
    <div className={isOn ? 'toggle-btn on' : 'toggle-btn'} onClick={clicked}>
      <div className="ball"></div>
      <div className="slide"></div>
    </div>
  );
};

export default ToggleBtn;
