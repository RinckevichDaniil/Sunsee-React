import '../styles/header.scss'

export default function Header() {
    return ( 
        <header className="header">
        <a href="/" className="header__logo"> SUNSEE </a>
        <div className="header__menu">
          <select
            name="language select"
            id="select_language"
            className="header__select"
          >
            <option value="en" className="select_item">EN</option>
          </select>
          <div className="header__login_mobile">
            <button className="login-open login-open--mobile"></button>
          </div>
          <div className="header__login_display">
            <button className="btn_link login-open">login</button>
          </div>
          <div className="header__bag_mobile">
            <button className="modal-open mobile-open"></button>
            <div className="header-quantity__wrapp">
              <p className="header__quantity">2</p>
            </div>
          </div>
          <div className="header__bag_display">
            <button className="btn_link modal-open">
              bag
              <input
                type="text"
                value="(0)"
                className="bag-items--count btn_link"
                readOnly
              />
            </button>
          </div>
        </div>
      </header>
    )
}