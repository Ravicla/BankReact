import React from 'react';

export const Lista = () => {
  return (
    <div className="container-fluid">

      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Tables</h1>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
      </div>
      <p className="mb-4">
        DataTables se visit the Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fugit tempora
        repellat nobis ducimus nam fuga labore deleniti perspiciatis esse aliquid quae eius aspernatur, non in illum
        accusantium commodi odit.
      </p>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Lista de Usuarios</h6>
        </div>
        
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                </tr>
                <tr>
                  <td>Michael Bruce</td>
                  <td>Javascript Developer</td>
                  <td>Singapore</td>
                  <td>29</td>
                  <td>2011/06/27</td>
                  <td>$183,000</td>
                </tr>
                <tr>
                  <td>Donna Snider</td>
                  <td>Customer Support</td>
                  <td>New York</td>
                  <td>27</td>
                  <td>2011/01/25</td>
                  <td>$112,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <script src="/src/assets/vendor/jquery/jquery.min.js"></script>
      <script src="/src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      {/* Core plugin JavaScript*/}
      <script src="/src/assets/vendor/jquery-easing/jquery.easing.min.js"></script>

      {/* Custom scripts for all pages*/}
      <script src="/src/assets/js/sb-admin-2.min.js"></script>

      {/* Page level plugins */}
      <script src="/src/assets/vendor/datatables/jquery.dataTables.min.js"></script>
      <script src="/src/assets/vendor/datatables/dataTables.bootstrap4.min.js"></script>

      {/* Page level custom scripts */}
      <script src="/src/assets/js/demo/datatables-demo.js"></script>
    </div>
  );
};
export default Lista;