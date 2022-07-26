import React from 'react';
import "./widgetSm.css";
import { Visibility } from '@material-ui/icons'

export default function WidgetSm() {
  return (
    <div className='widgetSm' >
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
            <img src='https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80' alt='' className='widgetSmImg' />
            <div className='widgetSmUser'>
                <span className='widgetSmUsername'>Anna Keller</span>
                <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
        </li>
        <li className='widgetSmListItem'>
            <img src='https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80' alt='' className='widgetSmImg' />
            <div className='widgetSmUser'>
                <span className='widgetSmUsername'>Anna Keller</span>
                <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
        </li>
        <li className='widgetSmListItem'>
            <img src='https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80' alt='' className='widgetSmImg' />
            <div className='widgetSmUser'>
                <span className='widgetSmUsername'>Anna Keller</span>
                <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
        </li>
        <li className='widgetSmListItem'>
            <img src='https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80' alt='' className='widgetSmImg' />
            <div className='widgetSmUser'>
                <span className='widgetSmUsername'>Anna Keller</span>
                <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
        </li>
        <li className='widgetSmListItem'>
            <img src='https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80' alt='' className='widgetSmImg' />
            <div className='widgetSmUser'>
                <span className='widgetSmUsername'>Anna Keller</span>
                <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
        </li>
      </ul>
    </div>
  )
}