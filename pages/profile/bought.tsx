import type { NextPage } from "next";
import Item from "../../components/item";
import Layout from "../../components/layout";

const Bought: NextPage = () => {
  return (
    <Layout title="구매내역" canGoBack>
      <div className="flex flex-col divide-y-[1px] pb-10">
        {new Array(10).fill(2).map((_, i) => (
          <Item
            key={i}
            id={i}
            title="iPhone 14"
            price={99}
            comments={1}
            hearts={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Bought;
