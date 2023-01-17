import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemorizeHook } from './06-memos/MemorizeHook';
/* import { Memorize } from './06-memos/Memorize'; */
/* import { FocusScreen } from './04-useRef/FocusScreen'; */
/* import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'; */
/* import { SimpleForm } from './02-useEffect/SimpleForm'; */
/* import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'; */
/* import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'; */
/* import { CounterApp } from './01-useState/CounterApp'; */
/* import { HooksApp } from './HooksApp'; */
import './index.css'
/* import { UseLayoutEffect } from './useLayoutEffect/UseLayoutEffect'; */

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <MemorizeHook/>
  //</React.StrictMode>,
)
