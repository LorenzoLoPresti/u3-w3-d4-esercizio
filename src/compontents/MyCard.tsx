import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface MyCardProps {
  title: string;
  imgUrl: string;
  summary: string;
  id: number;
}

const MyCard = (props: MyCardProps) => {
  console.log(props);
  return (
    <Card className="mb-5">
      <Card.Img variant="top" src={props.imgUrl} style={{ height: "400px" }} />
      <Card.Body className="p-4" style={{ height: "250px" }}>
        <Link to={"/news/" + props.id} style={{ textDecoration: "inherit" }}>
          <Card.Title className="text-dark" style={{ fontSize: "1.7rem" }}>
            {props.title}
          </Card.Title>
        </Link>
        <Card.Text>{props.summary}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default MyCard;
