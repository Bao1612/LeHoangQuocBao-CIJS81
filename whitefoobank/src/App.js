import './App.css';

function App() {

  const headernav = ['Trang chủ', 'Thông tin', 'Hỏi đáp', 'Liên hệ', 'Thành viên']

  const featureds = [
    {
      "id": "1",
      "icon": "./",
      "title": "Tiết kiệm",
      "content": "Chuyển tiền trong và ngoài ngân hàng một cách dễ dàng và nhanh chóng với mức phí phù hợp.",
    },
    {
      "id": "2",
      "icon": "./",
      "title": "Chất lượng",
      "content": "Các dịch vụ của WhiteFoo Bank sẽ mang đến cho bạn những gì tốt nhất hiện có, và nhiều ưu đãi.",
    },
    {
      "id": "3",
      "icon": "./",
      "title": "Nhanh chóng",
      "content": "Giao dịch diễn ra chưa đến 5 giây kể từ lúc xác nhận thanh toán, chuyển trực tiếp đến người nhận.",
    },
    {
      "id": "4",
      "icon": "./",
      "title": "Bảo mật",
      "content": "Thông tin giao dịch luôn được mã hóa để giúp dữ liệu của bạn luôn được an toàn, không bị đánh cắp.",
    }
  ]

  const renderCard = featureds.map((featured) =>
      <div className='card-item' key={featured.id}>
        <div className='icon'>{featured.icon}</div>
        <h3 className='card-title'>{featured.title}</h3>
        <p className='card-content'>{featured.content}</p>
      </div>

  );

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
        <div className='container-card'>
          <div className='list-card'>
            {renderCard}
          </div>
        </div>
      </div>
      <div className='footer'>

      </div>
    </>
  );
}
export default App;
