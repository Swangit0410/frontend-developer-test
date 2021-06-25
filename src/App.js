import Photo1 from './dist/img/photo1.jpg';
import Photo2 from './dist/img/photo2.jpg';
import Photo3 from './dist/img/photo3.jpg';
import Photo4 from './dist/img/photo4.jpg';
import Photo5 from './dist/img/photo5.jpg';
import BannerPic from './dist/img/banner2.png';
import './App.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './Sidebar';
import Searchbar from './SearchBar';

import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Sidebar />
        <div className='main-content' id='add-me'>
          <Searchbar />
          <Row className='pt-4'>
            <Col xs='6'>
              <h1>Page Title</h1>
            </Col>
            <Col xs='6'>
              <Button className='dl-btn'>Download</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="banner">
                <p>
                  <span className='b-title'>Banner Title</span>
                  <br></br>
                  <span className='b-descrp'>Banner description goes here banner description goes here banner description goes here banner description goes here.</span>
                </p>
                <img src={BannerPic} className='banner-img' alt='banner' />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='category'>
                <p className='c-title'>
                  Category #1
                </p>
                <div>
                <Row>
                  <Col sm md>
                    <Card>
                      <img src={Photo1} className='card-img' alt='building' />
                      <div className="card-body">
                        <span className='bubble-usr'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        </span>
                        <span className='btn-new'>NEW</span>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet</p>
                        <Button>Preview</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col sm md>
                    <Card>
                      <img src={Photo2} className='card-img' alt='swimming' />
                      <div className="card-body">
                        <span className='bubble-usr'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        </span>
                        <span className='btn-new'>NEW</span>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet</p>
                        <Button>Preview</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col sm md>
                    <Card>
                      <img src={Photo3} className='card-img' alt='sports' />
                      <div className="card-body">
                        <span className='bubble-usr'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        </span>
                        <span className='btn-new'>NEW</span>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet</p>
                        <Button>Preview</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col md>
                    <Card>
                      <img src={Photo4} className='card-img' alt='city' />
                      <div className="card-body">
                        <span className='bubble-usr'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        </span>
                        <span className='btn-new'>NEW</span>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet.</p>
                        <Button>Preview</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col md>
                    <Card>
                      <img src={Photo5} className='card-img' alt='baseball' />
                      <div className="card-body">
                        <span className='bubble-usr'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        </span>
                        <span className='btn-new'>NEW</span>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet</p>
                        <Button>Preview</Button>
                      </div>
                    </Card>
                  </Col>
                </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
