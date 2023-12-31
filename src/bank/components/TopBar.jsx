import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faBell, faEnvelope, faUser, faCogs, faList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export const TopBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchExpanded(prevState => !prevState);
    setIsNotificationsOpen(false);
    setIsMessagesOpen(false);
    setIsUserOpen(false);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(prevState => !prevState);
    setIsSearchExpanded(false);
    setIsMessagesOpen(false);
    setIsUserOpen(false);
  };

  const toggleMessages = () => {
    setIsMessagesOpen(prevState => !prevState);
    setIsSearchExpanded(false);
    setIsNotificationsOpen(false);
    setIsUserOpen(false);
  };

  const toggleUser = () => {
    setIsUserOpen(prevState => !prevState);
    setIsSearchExpanded(false);
    setIsNotificationsOpen(false);
    setIsMessagesOpen(false);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };


  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* Sidebar Toggle (Topbar) */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          onClick={() => {
            console.log('Botón presionado');
            setIsSidebarOpen(prevState => !prevState);
          }}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Topbar Search */}
        <form
          className={`d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search ${isSearchExpanded ? 'show' : ''}`}>
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </form>

        <ul className="navbar-nav ml-auto">
          {/* Nav Item - Search Dropdown (Visible Only XS) */}
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a
              className={`nav-link dropdown-toggle ${isSearchExpanded ? 'active' : ''}`}
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isSearchExpanded}
              onClick={toggleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </a>
            {/* Dropdown - Messages */}
            <div
              className={`dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in ${isSearchExpanded ? 'show' : ''}`}
              aria-labelledby="searchDropdown">
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          {/* Nav Item - Alerts */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isNotificationsOpen}
              onClick={toggleNotifications}>
              <FontAwesomeIcon icon={faBell} />
              {/* Counter - Notifications */}
              <span className="badge badge-danger badge-counter">3+</span>
            </a>
            {/* Dropdown - Notifications */}
            <div
              className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${isNotificationsOpen ? 'show' : ''
                }`}
              aria-labelledby="alertsDropdown">
              <h6 className="dropdown-header">Alerts Center</h6>

              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white"></i>
                  </div>
                </div>

                <div>
                  <div className="text-truncate">
                    {truncateText("", 30)}
                  </div>
                  <div className="small text-gray-500">December 12, 2019</div>

                  <div className="text-truncate">
                    {truncateText("", 30)}
                  </div>
                  <span className="font-weight-bold">{truncateText("A new monthly report is ready to download!", 30)}</span>
                </div>

              </a>

              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>

                  <div className="text-truncate">
                    {truncateText("", 30)}
                  </div>
                  <div className="small text-gray-500">December 7, 2019</div>

                  <div className="text-truncate">
                    {truncateText("", 30)}
                  </div>
                  <span className="font-weight-bold">{truncateText("$290.29 has been deposited into your account!", 30)}</span>
                </div>
              </a>

              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>

                  <div className="text-truncate">
                    {truncateText("", 30)}
                  </div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  <div className="text-truncate">
                  </div>
                  <span className="font-weight-bold">{truncateText("Spending Alert: We've noticed unusually high spending for your account.", 30)}</span>
                </div>
              </a>

              <a className="dropdown-item text-center small text-gray-500" href="#">
                Show All Alerts
              </a>
            </div>
          </li>


          {/* Nav Item - Messages */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isMessagesOpen}
              onClick={toggleMessages}>
              <FontAwesomeIcon icon={faEnvelope} />
              {/* Counter - Messages */}
              <span className="badge badge-danger badge-counter">2</span>
            </a>
            {/* Dropdown - Messages */}
            <div
              className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${isMessagesOpen ? 'show' : ''
                }`}
              aria-labelledby="alertsDropdown">
              <h6 className="dropdown-header">Message Center</h6>

              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." />
                  <div className="status-indicator bg-warning"></div>
                </div>

                <div>
                  <div className="text-truncate">
                    {truncateText("Last month's report looks great, I am very happy with the progress so far, keep up the good work!", 30)}
                  </div>
                  <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>

              </a>

              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    {truncateText("Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...", 30)}
                  </div>
                  <div className="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
              </a>

              <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
            </div>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>




          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isUserOpen}
              onClick={toggleUser}
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                {truncateText("Lincoln Santander", 30)}
              </span>
              <img className="img-profile rounded-circle" src="/src/assets/img/undraw_profile.svg" />
            </a>

            {/* Dropdown - User Information */}
            <div
              className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${isUserOpen ? 'show' : ''}`}
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="#">
                <FontAwesomeIcon icon={faUser} className="fa-sm fa-fw mr-2 text-gray-400" />
                {truncateText("Profile", 30)}
              </a>

              <a className="dropdown-item" href="#">
                <FontAwesomeIcon icon={faCogs} className="fa-sm fa-fw mr-2 text-gray-400" />
                {truncateText("Settings", 30)}
              </a>

              <a className="dropdown-item" href="#">
                <FontAwesomeIcon icon={faList} className="fa-sm fa-fw mr-2 text-gray-400" />
                {truncateText("Activity Log", 30)}
              </a>

              <div className="dropdown-divider"></div>

              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <FontAwesomeIcon icon={faSignOutAlt} className="fa-sm fa-fw mr-2 text-gray-400" />
                {truncateText("Logout", 30)}
              </a>
            </div>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
