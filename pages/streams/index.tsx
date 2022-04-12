import type { NextPage } from "next";
import Layout from "../../components/layout";

const Stream: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <div className="space-y-4 divide-y-[1px]">
        {[...Array(5)].map((_, i) => (
          <div className="px-4 pt-4" key={i}>
            <div className="wfull aspect-video rounded-md bg-slate-300 shadow-sm" />
            <h3 className="mt-2 text-lg text-gray-700">
              Let&apos;s tyr potatos
            </h3>
          </div>
        ))}
        <button className="fixed bottom-24 right-5 rounded-full border-transparent bg-orange-400 p-4 text-white shadow-xl transition-colors hover:bg-orange-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Stream;
