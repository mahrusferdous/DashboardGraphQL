import { gql } from "urql";

export const GET_USERS = gql`
    query {
        users {
            data {
                id
                name
                email
                address {
                    street
                    suite
                    city
                    zipcode
                }
                phone
                website
                company {
                    name
                    catchPhrase
                    bs
                }
            }
        }
    }
`;

export const GET_TODOS = gql`
    query {
        todos {
            data {
                id
                title
                completed
            }
        }
    }
`;
