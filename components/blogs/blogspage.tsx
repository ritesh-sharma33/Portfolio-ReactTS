import React from 'react';
import axios from "axios";

class BlogsPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentWillMount() {
    axios.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sharmaritesh3312").then((response: any) => {
      console.log(response.data);
    }).catch((error: any) => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Blogs page</h1>
      </div>
    );
  }
}

export default BlogsPage;