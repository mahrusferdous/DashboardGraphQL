import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries/Queries";

import { Alert, Card, Container, Row, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../App.css";

interface Post {
    id: number;
    title: string;
}

const PostsPage = () => {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading)
        return (
            <div className="spinner-container">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );

    if (error)
        return (
            <Alert variant="danger">
                <Alert.Heading>Error</Alert.Heading>
                <p>{error.message}</p>
            </Alert>
        );

    return (
        <div>
            <NavBar />
            <Container>
                <h1>Posts</h1>
                <Row>
                    {data.posts.data.map(({ id, title }: Post) => (
                        <Card key={id}>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Link to={`/post/${id}`}>
                                    <Button variant="primary">More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default PostsPage;
