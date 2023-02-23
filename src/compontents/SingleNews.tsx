import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { MainPageNewsList } from "../interfaces/MainPageInterface";

const SingleNews = () => {
  const [singleNews, setSingleNews] = useState<MainPageNewsList>();
  const params = useParams();
  console.log(params);

  const singleNewsFetch = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + params.id
      );
      if (response.ok) {
        let news = await response.json();
        setSingleNews(news);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    singleNewsFetch();
    console.log(singleNews && singleNews);
  }, []);

  return (
    <Container>
      <h1 className="my-5 px-3" style={{ fontSize: "2.5rem" }}>
        {singleNews?.title}
      </h1>
      <div
        style={{
          backgroundImage: `url(${singleNews?.imageUrl})`,
          width: "100%",
          height: "600px",
          backgroundSize: "cover",
        }}
      ></div>
      <h3 className="my-3">
        {" "}
        by <strong>Evan Baxter</strong>
      </h3>
      <p className="mb-3">
        from <strong>{singleNews?.newsSite}</strong>
      </p>
      <p style={{ fontSize: "1.5rem" }}>{singleNews?.summary}</p>
      <p style={{ fontSize: "1.5rem" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi dicta
        pariatur suscipit odio nobis dignissimos. Eius rem accusantium fugit
        placeat, consequuntur natus fuga. Explicabo, dolorum non voluptatum
        nulla in facilis. Quae voluptatibus rerum, fugit molestiae asperiores
        dolor qui. Quidem quia et debitis tempore, nostrum ipsa natus quasi
        labore reprehenderit velit non consequatur recusandae quod officia?
        Dolores, veniam! Eligendi, architecto esse. Optio porro similique
        repudiandae asperiores eum libero neque, commodi obcaecati saepe
        recusandae cum totam incidunt quibusdam iste ex laboriosam ut quo
        sapiente? Quasi nostrum eos aliquid, accusamus optio repellat deserunt?
        Officia totam natus assumenda porro esse cumque, fuga amet nesciunt
        recusandae sunt at explicabo tempora nam dolores. Et veniam voluptate
        veritatis repellat ex repudiandae facilis, nam aspernatur asperiores
        placeat! Temporibus!
      </p>
    </Container>
  );
};
export default SingleNews;
