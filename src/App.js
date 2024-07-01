import './App.css';
import Links from './components/Links';
import Projects from './components/Projects';

function App() {
  let s1 = "<Software Development />"
  let s2 = "<Full Stack Development />"
  let s3 = "<Web3.0 Development />"
  let s4 = "<Deep Learning, Python/>"
  return (
    <div className="App">
      <div className="card-1">
        <div className="hello">Hello I am</div>
        <div className="name">SRAWAN MEESALA</div>
        <div className="card-1-role">
          <div className="card-1-role-text">
            {s1}<br /> {s2}<br /> {s3}<br /> {s4}
          </div>
        </div>
      </div>
      <div className="card-2">
        <div className="card-2-head">Myself.</div>
        <div className="card-2-content">
          <div className="card-2-content-text">
            Born in <span>Vizianagaram, Andhra Pradesh, India.</span> 2004 july 7.<br />
            Bachelor of Technology from <span>Indian Institute Of Information Technology, Sri City.</span> 2021 - present.<br />
            My mission is to bring <span>innovation</span> to life, <span>one line of code</span> at a time. <br />
            I'm a firm believer in the endless possibilities that <span>technology</span> can unlock, and I'm here to make those possibilities<span> a reality.</span>
          </div>
        </div>
      </div>
      <div className="card-3">
        <div className="card-2-head">Skills.</div>
        <div className="card-2-content">
          <div className="card-2-content-text">
            <div>
              Programming Languages <span>C, C++, Python, Java, Javascript, Solidity</span><br />
            </div>
            <div>
              web dev frameworks <span>reactjs, nodejs, embeddedjs, expressjs, hardhat, ethersjs, django</span><br />
            </div>
            <div>
              Software <span>Problem Solving, Git, oops, operating system, computer networks</span><br />
            </div>
            <div>
              Database Management<span>mysql, sqlite3, mongodb</span>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Links />
    </div>
  );
}

export default App;