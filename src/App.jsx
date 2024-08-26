import './index.css';
import CashFlowCard from './Components/CashFlowCard/CashFlowCard';
import ExpenseStructureCard from './Components/ExpenseStructure/ExpenseStructure';
import BalanceTrendCard from './Components/BalanceTrend/BalanceTrendCard';

function App() {
  return (
    <div className="w-full h-full bg-[#eef0f2]">
      <div className="w-full px-6 py-3 bg-white flex flex-row justify-between items-center">
        <div className="flex flex-row gap-3 items-center">
          <p className="text-xl">Wallet</p>
          <p className="text-xl font-bold">Dashboard</p>
          <p className="text-xl">Accounts</p>
          <p className="text-xl">Records</p>
          <p className="text-xl">Analytics</p>
          <p className="text-xl">Investments</p>
          <p className="text-xl">Income</p>
        </div>

        <div className="flex flex-row gap-3 items-center">
          <button className="rounded-full bg-[#0077fc] px-3 py-1 text-white font-semibold text-xl">
            <span>+</span> <span>Record</span>
          </button>

          <div className="flex flex-row gap-2">
            <label htmlFor="account-options">Nguh Prince</label>
            <select id="account-options">
              <option value="log-out"></option>
              <option value="change-password"></option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-[#f9fbfd] w-full px-6 py-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <div className="p-2 gap-2 bg-[#00897b] flex flex-col md:flex-row rounded-md items-center text-white">
          <div className="icon">
            <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V9.45715C11.7785 9.82398 11 10.3789 11 11M2 5V17C2 18.1046 4.46243 19 7.5 19C8.82963 19 10.0491 18.8284 11 18.5429V11M2 9C2 10.1046 4.46243 11 7.5 11C8.82963 11 10.0491 10.8284 11 10.5429M2 13C2 14.1046 4.46243 15 7.5 15C8.82963 15 10.0491 14.8284 11 14.5429M22 11C22 12.1046 19.5376 13 16.5 13C13.4624 13 11 12.1046 11 11M22 11C22 9.89543 19.5376 9 16.5 9C13.4624 9 11 9.89543 11 11M22 11V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11M22 15C22 16.1046 19.5376 17 16.5 17C13.4624 17 11 16.1046 11 15" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <div className="flex flex-col gap-3 text-white">
            <span className="text-white font-semibold">Cash</span>
            <span className="font-bold text-2xl">FCFA 8,900</span>
          </div>
        </div>

        <div className="p-2 gap-2 bg-[#aa47bc] flex flex-col md:flex-row rounded-md items-center text-white">
          <div className="icon">
            <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21.0001H21M4 18.0001H20M6 18.0001V13.0001M10 18.0001V13.0001M14 18.0001V13.0001M18 18.0001V13.0001M12 7.00695L12.0074 7.00022M21 10.0001L14.126 3.88986C13.3737 3.2212 12.9976 2.88688 12.5732 2.75991C12.1992 2.64806 11.8008 2.64806 11.4268 2.75991C11.0024 2.88688 10.6263 3.2212 9.87404 3.88986L3 10.0001H21Z" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <div className="flex flex-col gap-3 text-white">
            <span className="text-white font-semibold">Bank</span>
            <span className="font-bold text-2xl">FCFA 8,900</span>
          </div>
        </div>

        <div className="p-2 gap-2 bg-[#1356bf] flex flex-col md:flex-row rounded-md items-center text-white">
          <div className="icon">
            <svg
              width="48px"
              height="48px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4.36"
                y="1.5"
                width="15.27"
                height="21"
                rx="2.04"
                fill="none"
                stroke="#ffffff"
                strokeMiterlimit="10"
                strokeWidth="1px"
              />
              <path
                d="M13.91,2.45H10.09a.94.94,0,0,1-.95-1h5.72A.94.94,0,0,1,13.91,2.45Z"
                fill="none"
                stroke="#ffffff"
                strokeMiterlimit="10"
                strokeWidth="1px"
              />
              <path
                d="M9.14,14.86h3.34a1.43,1.43,0,0,0,1.43-1.43h0A1.43,1.43,0,0,0,12.48,12h-1a1.43,1.43,0,0,1-1.43-1.43h0a1.43,1.43,0,0,1,1.43-1.43h3.34"
                fill="none"
                stroke="#ffffff"
                strokeMiterlimit="10"
                strokeWidth="1px"
              />
              <line
                x1="12"
                y1="7.23"
                x2="12"
                y2="9.14"
                fill="none"
                stroke="#ffffff"
                strokeMiterlimit="10"
                strokeWidth="1px"
              />
              <line
                x1="12"
                y1="14.86"
                x2="12"
                y2="16.77"
                fill="none"
                stroke="#ffffff"
                strokeMiterlimit="10"
                strokeWidth="1px"
              />
            </svg>

          </div>

          <div className="flex flex-col gap-3 text-white">
            <span className="text-white font-semibold">Mobile</span>
            <span className="font-bold text-2xl">FCFA 8,900</span>
          </div>
        </div>

        <div className="p-2 gap-2 bg-transparent border-2 border-dashed flex flex-col rounded-md items-center justify-center hover:cursor-pointer">
          <span>+ Add Account</span>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-4 gap-3">
        <button>
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
            <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
          </svg>
        </button>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>This month</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>

        <button>
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
          </svg>
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-6 gap-3">
        <ExpenseStructureCard />

        <CashFlowCard />

        <BalanceTrendCard />
      </div>
    </div>
  );
}

export default App;