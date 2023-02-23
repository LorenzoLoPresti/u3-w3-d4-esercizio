import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MainPageNewsList } from "../interfaces/MainPageInterface";
import MyCard from "./MyCard";

const MainPage = () => {
  const [newsList, setNewsList] = useState<MainPageNewsList[]>([]);

  const newsListFetch = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      if (response.ok) {
        let articles = await response.json();
        console.log(articles);
        setNewsList(articles);
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsListFetch();
  }, []);

  return (
    <Container className="my-5">
      <h2 className="mb-5" style={{ fontSize: "2.5rem" }}>
        Ultimissime
      </h2>
      <Row>
        {newsList?.map((news) => {
          return (
            <Col xs={6}>
              <MyCard
                title={news.title}
                imgUrl={news.imageUrl}
                summary={news.summary}
                id={news.id}
                key={"SingleNewsKey " + news.id}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default MainPage;
