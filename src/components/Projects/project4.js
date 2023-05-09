import "./project4.css";

function Project4() {
  return <div>
     <div className="project-container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="path/to/project-image.jpg"
              alt="Project Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <div className="project-details">
              <h2>Project Name</h2>
              <p>
                <strong>Duration:</strong> 3 months
              </p>
              <p>
                <strong>Role:</strong> Frontend Developer
              </p>
              <p>
                <strong>Description:</strong> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam sodales blandit mauris, vel
                gravida massa elementum sit amet.
              </p>
              <p>
                <strong>Responsibilities:</strong>
              </p>
              <ul>
                <li>
                  Developed responsive UI components using React and Bootstrap
                </li>
                <li>
                  Worked closely with the design team to implement UI designs
                </li>
                <li>
                  Collaborated with the backend team to integrate frontend with
                  backend APIs
                </li>
                <li>Optimized website for performance and accessibility</li>
              </ul>
              <p>
                <strong>Technologies:</strong> React, Bootstrap, HTML, CSS,
                JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>;
}

export default Project4;
