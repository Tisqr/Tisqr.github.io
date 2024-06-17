import icon from "../../public/icon.png";

const Projects = () => {
  return (
    <div className="projects-container container-fluid bg-primary">
      <div id="projects" className=" container-fluid py-5">
        <div className="card text-center">
          <div className="card-body">
            <a
              className="icon-link"
              href="https://github.com/muhammadali360/ByteBackup"
            >
              <img
                className="img-fluid"
                src={icon}
                alt="byte_backup"
                width="32"
                height="32"
              />
              <h2>Byte Backup</h2>
            </a>
            <p className="card-text">A Simple File Backup Utility.</p>
            <a
              href="https://github.com/muhammadali360/ByteBackup"
              className="btn btn-primary"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
