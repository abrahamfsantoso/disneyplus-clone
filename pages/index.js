import { gql, GraphQLClient } from 'graphql-request';

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const videosQuery = gql`
    query {
      videos {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;

  const accountQuery = gql`
    query {
      account(where: { id: "cktmurqg06kuz0c469nnjfwfi" }) {
        username
        avatar {
          url
        }
      }
    }
  `;

  const data = await graphQLClient.request(videosQuery);
  const videos = data.videos;
  const accountData = await graphQLClient.request(accountQuery);
  const account = accountData.account;

  return {
    props: {
      videos,
      account,
    },
  };
};

const Home = ({ videos, account }) => {
  return <div>Home</div>;
};

export default Home;
