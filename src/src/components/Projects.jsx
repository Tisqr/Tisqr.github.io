import icon from "../../public/icon.png";

const Projects = () => {
  return (
    <div className="container-fluid">
      <div id="projects" className="container-fluid p-5 m-2">
        <h1>Projects</h1>
        <div className="card text-center">
          <div className="card-body">
            <img
              className="img-fluid"
              src={icon}
              alt="byte_backup"
              width="32"
              height="32"
            />
            <h5 className="card-title">Byte Backup</h5>
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
