import { useMutation, useQuery } from "@apollo/client";
import { GET_POST } from "../queries/Queries";
import { DELETE_POST } from "../mutation/Mutations";
import { Alert, Card, Container, Row, Spinner, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import UserPage from "../components/UserPost";
import "../App.css";
import NavBar from "../components/NavBar";

const PostsPage = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_POST, {
        variables: { id: id },
    });

    const [deletePost] = useMutation(DELETE_POST);

    const handleClick = (id: number) => {
        deletePost({
            variables: {
                id: id,
            },
        });
        console.log("Simulate Delete");
    };

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

    const { title, body } = data.post;

    return (
        <>
            <NavBar />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <h1>Post</h1>
                <Row>
                    <Card key={id}>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <UserPage />
                            <Card.Text>{body}</Card.Text>

                            <Link className="mx-2" to={`/post/update/${id}`}>
                                <Button variant="primary">Update</Button>
                            </Link>
                            <Button className="mx-2" variant="primary" onClick={() => handleClick(Number(id))}>
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
};

export default PostsPage;
