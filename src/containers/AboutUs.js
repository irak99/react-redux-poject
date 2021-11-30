import { Container } from "react-bootstrap";
export const AboutUs = () => {
  return (
    <Container>
      <div
        id="map-container-google-1"
        className="z-depth-1-half map-container"
        style={{ height: 500 + "px" }}
      >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47440.88763113755!2d21.389870914950105!3d41.999084928352694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415a58c9aa2a5%3A0xb2ed88c260872020!2sSkopje%2C%20North%20Macedonia!5e0!3m2!1sen!2sus!4v1638123962355!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </div>
    </Container>
  );
};
