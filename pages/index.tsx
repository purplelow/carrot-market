import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10">
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <span>Select Item</span>
        <div>
          <span>Grey Chair</span>
          <span>$19</span>
        </div>
        <div>
          <span>Grey Chair</span>
          <span>$19</span>
        </div>
        <div>
          <span>Total</span>
          <span>$19</span>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    </div>
  )
}

export default Home
