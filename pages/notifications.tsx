import Image from "next/image";
import { render } from "react-dom";







// function readAll() {
//   for (let i =0; i < Users.length; i++) {
//     Users[i].isRead = true
//   }
// }

// const NotificationComponent = () => {
//   return (
//     <main className="w-full text-base leading-5">
//       <div className="flex flex-col">
//         <div className="flex flex-row w-full p-5 justify-between">
//           {/* --------------------- HEADER ---------------------- */}

//           <div className="flex">
//             <h2 className="font-extrabold text-xl">
//               Notifications
//             </h2>
//             <span className="bg-blue-900 text-white font-bold ml-2 px-3 rounded-md self-center">
//               {isReadCount}
//             </span>
//           </div>
//           <div className="text-slate-500 place-self-center">
//             <button onClick={(e:any) => {
//               for (let i =0; i < Users.length; i++) {
//                 e = Users[i].isRead;
//                 if (e === false) { e = true}
//               }
//               return e;
              
//             }}>Mark all as read</button>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center mx-3">
//           <NotificationTab />
//         </div>
//       </div>
//     </main>
//   );
// };



// const NotificationTab: any = () => {
//   const notificationArr = [];
//   let isReadCount: number = 0;

//   for (let i: number = 0; i < Users.length; i++) {
//     notificationArr.push(
//       <div
//         className={
//           Users[i].isRead === false
//             ? "flex flex-row w-auto mx-1 bg-slate-50 p-1 my-1 rounded-md"
//             : "flex flex-row w-auto mx-1  p-1 my-1 rounded-md"
//         }
//       >
//         <div className="w-10 m-4">
//           <a href="#">
//             <Image
//               src={"/" + Users[i].avatar}
//               width="40px"
//               height="40px"
//             />
//           </a>
//         </div>
//         <div className="flex flex-col items-start justify-center">
//           <p
//             className={
//               Users[i].yourPicture === ""
//                 ? "w-64 text-slate-500 inline"
//                 : "w-56 text-slate-500 inline"
//             }
//           >
//             <a href="#" className="font-bold text-black">
//               {Users[i].name}
//             </a>{" "}
//             {Users[i].notificationDescription}{" "}
//             <a href="#" className="font-bold">
//               {Users[i].highlight}{" "}
//             </a>
//             <span className={Users[i].isRead 
//             ? "hidden"
//             : "inline-block w-2 h-2 rounded-full ml-1 bg-orange-600"
//           }></span>
//           </p>
//           <p className="text-slate-400">{Users[i].timeAgo}</p>
//           <p
//             className={
//               Users[i].message === ""
//                 ? "hidden"
//                 : "border border-solid border-slate-200 p-4 my-3 rounded-md w-64 text-sm text-slate-600"
//             }
//           >
//             {Users[i].message}
//           </p>
//         </div>
//           <div
//             className={
//               Users[i].yourPicture === "" ? "hidden" : "w-10 h-10 self-center"
//             }
//           >
//             <Image
//               src={"/" + Users[i].yourPicture}
//               alt="Your picture"
//               width="50px"
//               height="50px"
//               objectFit="contain"
//             />
//           </div>
//         </div>
//     );
//   }

//   return [notificationArr];
// };

// let isReadCount: number = 0;
// for (let i =0; i < Users.length; i++) {
//   if (Users[i].isRead === false) isReadCount++;
// }

// export default NotificationComponent;
