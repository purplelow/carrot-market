import type { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

const Write: NextPage = () => {
  return (
    <Layout title="글쓰기" canGoBack>
      <form className="p-4">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </Layout>
  );
};

export default Write;
