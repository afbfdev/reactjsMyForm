import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className="container shadow p-3 rounded mt-5 " id="form">
        <div className="row">
          <div className="col-md-4">
            <label for="lastName">Nom</label><input type="text" name="lastName" id="lastName" className="form-control"/>
          </div>
          <div className="col-md-4">
            <label for="firstName">Prénom</label><input type="text" name="firstName" id="firstName" className="form-control"/>
          </div>
          <div className="col-md-4">

            <label for="status">Etat</label><select name="status" id="status" className="form-control" >
              <option defaultValue="..." ></option>
              <option value="Validé" >Validé</option>
              <option value="En validation" >En Validation</option>
              <option value="Rejeté" >Rejeté</option>
            </select>
          </div>


        </div>
        <div className="row">
          <div className="col-md-4">
            <label for="userName">Nom d'utilisateur</label><input type="text" name="userName" id="userName"
              className="form-control" />
          </div>
          <div className="col-md-4">
            <label for="createdDate">Date de création</label><input type="datetime-local" name="createdDate" id="createdDate"
              className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label for="registrationNumber">Matricule</label><input type="text" name="registrationNumber" id="registrationNumber"
              className="form-control"/>
          </div>
        </div>
        <div className="text-end mt-3">
          <button className="btn btn-warning">Enregistrer</button>

        </div>
      </div>
  );
}

export default App;
