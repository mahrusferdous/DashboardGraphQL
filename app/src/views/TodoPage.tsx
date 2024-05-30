import { useQuery } from "@apollo/client";
import { GET_ALBUMS } from "../queries/ProfileQueries";
import { Alert, Card, Container, Row, Spinner } from "react-bootstrap";
import NavBar from "../components/NavBar";
import "../App.css";

interface Todo {
    id: number;
    title: string;
    completed: string;
}

const AlbumPage = () => {
    const { loading, error, data } = useQuery(GET_ALBUMS);

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
                    {data.albums.data.map(({ id, title, completed }: Todo) => (
                        <Card key={id}>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>{completed}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AlbumPage;
