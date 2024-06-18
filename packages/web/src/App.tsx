import React from 'react';
import {useQuery, gql} from "@apollo/client";

const HELLO_QUERY = gql`
 query getApiVersion {
      apiVersion
    }
`;

function App() {
  const { data, loading, error } = useQuery(HELLO_QUERY);

  console.log(data);
  return (
    <div className="App">
      Server Version: {data?.apiVersion}
    </div>
  );
}

export default App;
