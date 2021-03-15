import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row,Card } from "react-bootstrap";
import "./App.css";
import NavBar from './components/NavBar'
import HomePage from "./pages/HomePage";
import SavedBook from './pages/SavedBook'

function App() {
 
  return (
    <div className="App">
      <Router>
      <Container fluid>
        <Row>
          <NavBar/>
        </Row>
        <Row>
          <Card className="w-100">
            <Card.Body  className="m-3 rounded border border-primary">
              <h1 className="text-center">(React) Google Book Search</h1>
              <h4 className="text-center mb-5">Search for and save book of interest</h4>
            </Card.Body>
          </Card>
        </Row> 
        <Switch>
        <Row>
          <Route exact path="/" component={SavedBook} />
          <Route exact path="/Search" component={HomePage} />
          <Route exact path="/saved" component={SavedBook} />
        </Row>
        </Switch> 
      </Container>
      </Router>
    </div>
  );
}

export default App;
