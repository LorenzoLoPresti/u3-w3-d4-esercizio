import { Container } from "react-bootstrap";

const MyJumbotron = () => {
  return (
    <div
      className="p-5 text-light d-flex flex-column justify-content-center"
      style={{
        backgroundImage: `url("https://i.ytimg.com/vi/ffhIKGzDhPY/maxresdefault.jpg")`,
        height: "350px",
      }}
    >
      <Container>
        <h1 className="display-4 fw-bold">Spaceflight</h1>
        <p className="lead" style={{ fontSize: "1.5rem" }}>
          La sola testata indipendente che non è una testata sulle gengive
        </p>
      </Container>
    </div>
  );
};

export default MyJumbotron;
