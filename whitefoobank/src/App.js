import './App.css';

function App() {

  const headernav = ['Trang chủ', 'Thông tin', 'Hỏi đáp', 'Liên hệ', 'Thành viên']

  return (
    <>
    <div id='container'>
      <div className='nav-area'>
          <div className='logo'>
            <div className='icon-header'></div>
            <div className='logo-header'></div>
          </div>
          <div className='header-nav'>
            <ul>
              {headernav.map((headernav) => { return <li>{headernav}</li> })}
            </ul>
          </div>
        </div>
      <div className="header-banner">
        <div className='banner-content'>
        <h1>Thanh toán không thể đơn giang hơn</h1>
        <p>Hệ thống ngân hàng Internet hiện đại được tạo ra dành cho bạn.</p>
        <button>Bắt đầu</button>
      </div>
      </div>
      
    </div>
    <div className='footer'>

    </div>
    </>
  );
}

export default App;
