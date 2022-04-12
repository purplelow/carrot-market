import type { NextPage } from "next";
import Layout from "../../components/layout";

const Create: NextPage = () => {
  return (
    <Layout title="라이브 시작하기" canGoBack>
      <div className="space-y-5 p-4">
        <div>
          <label
            htmlFor="price"
            className="text-gray-70 mb-1 block text-sm font-medium"
          >
            Name
          </label>
          <div className="relative flex items-center rounded-md shadow-sm">
            <input
              id="price"
              className="borderb w-full appearance-none rounded-md border-gray-300 px-3 py-2 pl-4 placeholder-gray-400 shadow-sm outline-none focus:border-orange-500 focus:outline-none focus:ring-orange-500"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            className="text-gray-70 mb-1 block text-sm font-medium"
          >
            Price
          </label>
          <div className="relative flex items-center rounded-md shadow-sm">
            <div className="pointer-event-none absolute left-0 flex items-center justify-center pl-3">
              <span className="text-sm text-gray-500">$</span>
            </div>
            <input
              id="price"
              className="borderb w-full appearance-none rounded-md border-gray-300 px-3 py-2 pl-7 placeholder-gray-400 shadow-sm outline-none focus:border-orange-500 focus:outline-none focus:ring-orange-500"
              type="text"
              placeholder="0.00"
            />
            <div className="pointer-events-none absolute right-0 flex items-center pr-3">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </div>
        <div>
          <label className="text-gray-70 mb-1 block text-sm font-medium">
            Description
          </label>
          <textarea
            className="mt-1 w-full resize-none rounded-md border-gray-400 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            rows={4}
          />
        </div>
        <button className="mt-5 w-full rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
          Go Live
        </button>
      </div>
    </Layout>
  );
};

export default Create;
