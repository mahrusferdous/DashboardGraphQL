import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/ProfileQueries";
import { Alert, Card, Container, Row, Spinner } from "react-bootstrap";
import NavBar from "../components/NavBar";
import "../App.css";

interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const ProfilePage = () => {
    const { loading, error, data } = useQuery(GET_USERS);

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
                    {data.users.data.map(({ id, name, email, address, phone, website, company }: User) => (
                        <Card key={id}>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>{email}</Card.Text>
                                <Card.Text>{phone}</Card.Text>
                                <Card.Text>{website}</Card.Text>
                                <Card.Title>Address</Card.Title>
                                <Card.Text>{address.street}</Card.Text>
                                <Card.Text>{address.suite}</Card.Text>
                                <Card.Text>{address.city}</Card.Text>
                                <Card.Text>{address.zipcode}</Card.Text>
                                <Card.Title>Company</Card.Title>
                                <Card.Text>{company.name}</Card.Text>
                                <Card.Text>{company.catchPhrase}</Card.Text>
                                <Card.Text>{company.bs}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProfilePage;
