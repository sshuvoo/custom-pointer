import { useState } from 'react';
import cursor1 from './assets/cursor1.png';
import cursor2 from './assets/cursor2.png';
import cursor3 from './assets/cursor3.png';
import cursor4 from './assets/cursor4.png';
import cursor5 from './assets/cursor5.png';

export default function App() {
   const [position, setPosition] = useState({ x: -1, y: -1 });
   const [cursor, setCursor] = useState(cursor1);
   return (
      <main
         onPointerMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
         onMouseLeave={() => setPosition({ x: -1, y: -1 })}
         className="min-h-screen bg-gray-900"
      >
         {!(position.x < 0 && position.y < 0) && (
            <img
               src={cursor}
               style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
               }}
               className="absolute pointer-events-none w-10 h-10 z-50"
            />
         )}
         <div className="min-h-screen w-full flex flex-col gap-y-4 justify-center items-center">
            <p className="select-text w-72 text-sky-200 px-8 py-5 bg-sky-400/5 font-medium border-2 border-sky-500/60">
               Try to select and copy this text. See if it works or not
            </p>
            <button className="px-8 py-5 text-orange-500 bg-orange-500/20 hover:bg-orange-500/35 border-2 border-orange-500/60 mx-auto font-medium w-72 hover:w-64 transition-width duration-500">
               Hey! Hover on me
            </button>
            <input
               type="text"
               placeholder="Hey! Type something..."
               className="w-72 px-8 py-5 text-teal-500 bg-teal-500/20 hover:bg-teal-500/35 border-2 border-teal-500/60 mx-auto font-medium focus:outline-none"
            />
            <div className="space-x-4">
               <button
                  className="border p-1 border-pink-200/40"
                  onClick={() => setCursor(cursor1)}
               >
                  <img src={cursor1} className="w-10 h-10" />
               </button>
               <button
                  className="border p-1 border-pink-200/40"
                  onClick={() => setCursor(cursor2)}
               >
                  <img src={cursor2} className="w-10 h-10" />
               </button>
               <button
                  className="border p-1 border-pink-200/40"
                  onClick={() => setCursor(cursor3)}
               >
                  <img src={cursor3} className="w-10 h-10" />
               </button>
               <button
                  className="border p-1 border-pink-200/40"
                  onClick={() => setCursor(cursor4)}
               >
                  <img src={cursor4} className="w-10 h-10" />
               </button>
               <button
                  className="border p-1 border-pink-200/40"
                  onClick={() => setCursor(cursor5)}
               >
                  <img src={cursor5} className="w-10 h-10" />
               </button>
            </div>
         </div>
      </main>
   );
}
