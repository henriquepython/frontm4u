import React from 'react';
import "../cadastro/cadastro.css"


const Student = () => {
    
  return (
    <div className="container">

      <form class="row g-3">
          <div class="row g-3">
        <div class="col">
          <label for="inputname" class="form-label">Nome</label>
          <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
        </div>
        <div class="col">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
        </div>
      </div>

        <div class="col-md-6">
          <label for="inputuser" class="form-label">User</label>
          <input type="text" class="form-control" id="inputUser"/>
        </div>
        <div class="col-md-4">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4"/>
        </div>
        <div class="col-md-1">
          <label for="inputAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="inputAge"/>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Address/Street</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>
        <div class="col-md-6">
          <label for="inputAddress2" class="form-label">Country</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">City</label>
          <input type="text" class="form-control" id="inputCity"/>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">State</label>
          <input type='text' id="inputState" class="form-select"/>
            
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">Zip</label>
          <input type="text" class="form-control" id="inputZip"/>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"/>
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
    
  );
}
export default Student;
