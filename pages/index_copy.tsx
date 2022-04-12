import type { NextPage } from "next";
import tw from "tailwind-styled-components";

const ButtonCheckout = tw.div`
  mx-auto
  mt-5
  block
  w-3/4
  rounded-xl
  bg-blue-500
  p-3
  text-center
  text-white
  hover:bg-teal-500
  focus:bg-red-500
  active:bg-yellow-500
`;
const SapnSelectItem = tw.span`
  text-3xl font-semibold dark:text-white
`;

const chairList = [
  {
    chair: "Gray Chair",
    price: 19,
  },
  {
    chair: "blue Chair",
    price: 56,
  },
  {
    chair: "red Chaer",
    price: 24,
  },
];

const Home: NextPage = () => {
  return (
    <div className="dark grid min-h-screen gap-10 bg-slate-400 py-20 px-20 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center">
      <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-xl dark:bg-black">
        <span className="text-3xl font-semibold dark:text-white">
          Select Item
        </span>
        <SapnSelectItem>Select Item</SapnSelectItem>
        <ul>
          {chairList.map((item, i) => (
            <div key={i} className="my-2 flex justify-between">
              <span className="text-gray-500 dark:text-gray-100">
                {item.chair}
              </span>
              <span className="font-medium dark:text-white">
                $ {item.price}
              </span>
            </div>
          ))}
        </ul>
        <div className="pd-2 mt-2 flex justify-between border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$19</span>
        </div>
        <button className="mx-auto mt-5 block w-3/4 rounded-xl bg-blue-500 p-3 text-center text-white hover:bg-teal-500 hover:text-black focus:bg-red-500 active:bg-yellow-500 dark:border dark:border-white dark:bg-black dark:hover:bg-white">
          Checkout
        </button>
        {/* <ButtonCheckout>Checkout</ButtonCheckout> */}
      </div>
      <div className="group overflow-hidden rounded-3xl bg-white shadow-xl">
        <div className="p-6 pb-14 xl:pb-40 portrait:bg-indigo-400 landscape:bg-teal-200">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-zinc-200 transition-colors group-hover:bg-red-300" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="mb-5 flex items-center justify-between">
          <span>🔙</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="rounded-md p-2 shadow-xl">💖</span>
          </div>
        </div>

        <div className="mb-5 h-72 bg-zinc-200" />

        <div className="flex flex-col">
          <span className="text-lg font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex items-center justify-between">
            <div className="space-x-2">
              <button className="h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2" />
              <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2" />
              <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="bg-[url('/vercel.svg')] text-2xl text-[100px] font-medium">
              $450
            </span>
            <button className="rounded-md bg-blue-500 py-2 px-8 text-xs text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-10 shadow-xl">
        <form className="flex flex-col space-y-2 p-5">
          <input
            type="text"
            required
            placeholder="Username"
            className="peer rounded-md border border-gray-400 p-1"
          />
          <span className="hidden peer-invalid:block peer-invalid:text-red-500">
            This input is invalid
          </span>
          <span className="hidden peer-valid:block peer-valid:text-teal-500">
            Awesome username
          </span>
          <input type="submit" value="Login" className="bg-white" />
        </form>

        <details className="open:bg-indigo-400 open:text-white">
          <summary className="cursor-pointer select-none">
            What is my fav. food.
          </summary>
          <span className="selection:bg-indigo-600 selection:text-white">
            Pizza
          </span>
        </details>
        <input
          type="file"
          className="file:cursor-wait file:rounded-xl file:border-0 file:bg-purple-300 file:px-5 file:text-white file:transition-colors"
        />
      </div>
    </div>
  );
};

export default Home;
