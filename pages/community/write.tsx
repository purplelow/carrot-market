import type { NextPage } from "next";
import Layout from "../../components/layout";

const Write: NextPage = () => {
  return (
    <Layout title="글쓰기" canGoBack>
      <form className="p-4">
        <textarea
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          rows={4}
          placeholder="Ask a question!"
        />
        <button className="focus: mt-2 w-full rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm outline-none hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Write;
