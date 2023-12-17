import React from "react";

import Image01 from "../../images/user-36-05.jpg";
import Image02 from "../../images/user-36-06.jpg";

function DashboardCard10(props) {
   const myData = props.data;
   console.log("myDatamyDatamyData", myData);

   return (
      <div className='col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700'>
         <header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700'>
            <h2 className='font-semibold text-slate-800 dark:text-slate-100'>Companies</h2>
         </header>
         <div className='p-3'>
            {/* Table */}
            <div className='overflow-x-auto'>
               <table className='table-auto w-full'>
                  {/* Table header */}
                  <thead className='text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50'>
                     <tr>
                        <th className='p-2 whitespace-nowrap'>
                           <div className='font-semibold text-left'>Name</div>
                        </th>

                        <th className='p-2 whitespace-nowrap'>
                           <div className='font-semibold text-left'>Credits required</div>
                        </th>
                     </tr>
                  </thead>
                  {/* Table body */}

                  <tbody className='text-sm divide-y divide-slate-100 dark:divide-slate-700'>
                     {myData.map((company) => {
                        return (
                           <tr key={company.id}>
                              <td className='p-2 whitespace-nowrap'>
                                 <div className='flex items-center'>
                                    <div className='w-10 h-10 shrink-0 mr-2 sm:mr-3'>
                                       <img className='rounded-full' src={company.images} width='40' height='40' alt={company.name} />
                                    </div>
                                    <div className='font-medium text-slate-800 dark:text-slate-100'>{company.name}</div>
                                 </div>
                              </td>

                              <td className='p-2 whitespace-nowrap'>
                                 <div className='text-left font-medium text-green-500'>{company.credits}</div>
                              </td>

                              <td>
                                 <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded'>Approve</button>
                                 &nbsp;&nbsp;&nbsp;&nbsp;
                                 <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded'>Reject</button>
                              </td>
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
}

export default DashboardCard10;
