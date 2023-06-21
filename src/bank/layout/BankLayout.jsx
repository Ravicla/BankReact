import React, { useState } from 'react';
import '../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../assets/css/sb-admin-2.min.css';
import { Header } from '../components/Header';
import { PageWrapper } from '../components/PageWrapper';

export const BankLayout = () => {


  return (
    <React.Fragment>
      {<Header/>}

      <div id="page-top">

        {/* Page Wrapper */}
        {<PageWrapper/>}
        {/* End of Page Wrapper */}

        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>

        {/* Logout Modal*/}
        <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
              </div>
            </div>
          </div>
        </div>

        

        <script src="/src/assets/vendor/jquery/jquery.min.js"></script>
        <script src="/src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/src/assets/vendor/jquery-easing/jquery.easing.min.js"></script>
        <script src="/src/assets/js/sb-admin-2.js"></script>
        <script src="/src/assets/js/demo/chart-area-demo.js"></script>
        <script src="/src/assets/js/demo/chart-pie-demo.js"></script>
        
        {/*<script src="/src/Banquito/components/vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
        <script src="js/sb-admin-2.min.js"></script>s
        <script src="js/demo/chart-area-demo.js"></script>
        <script src="js/demo/chart-pie-demo.js"></script>*/}

      </div>
    </React.Fragment>
  );
};
