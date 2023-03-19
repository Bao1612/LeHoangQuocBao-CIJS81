import './App.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function App() {

  const { t, i18n } = useTranslation();
  const {userInput, setuserInput} = useState("");

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }


  return (
    <div className="App">
      {/* <nav style={{width: '100%', padding: '2rem 0', backgroundColor: 'gray'}}>
        <button onClick={() => handleClick('en')}>
          English
        </button>
        <button onClick={() => handleClick('ko')}>
          Korea
        </button>
        <button onClick={() => handleClick('chi')}>
          chinese
        </button>
      </nav> */}
      <header className='header'>
        <p className='logo'>MindX</p>
        <p className='login-btn'>{t('login.1')}</p>
      </header>

      <body>
        <div className='container'>

          <div className="login-form">
            <div className="form-header">{t('login.1')}</div>
            <div className='gicungdc'>
            <input type="text" className="form-control" placeholder="Username..." aria-label="Username" aria-describedby="addon-wrapping" />
            <button  className="login-control">{t('login.1')}</button>
            </div>
          </div>

        </div>
      </body>

      <footer className='languageSelect'>
        <button onClick={() => handleClick('en')}>
          EN
        </button>
        <button onClick={() => handleClick('vi')}>
          VI
        </button>
      </footer>
    </div>
  );
}

export default App;
