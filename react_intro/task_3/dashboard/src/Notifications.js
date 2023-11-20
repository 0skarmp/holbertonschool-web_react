import './Notifications.css'
import React from 'react';
import CloseIcon from './close-icon.png'
import { getLatestNotification } from './utils';

export const X =  () => {
    return <div className='Notifications'><p>Here is the list of notifications</p>
    <button style={{
					color: '#3a3a3a',
					fontWeight: 'bold',
					background: 'none',
					border: 'none',
					fontSize: '15px',
					position: 'absolute',
					right: '3px',
					top: '3px',
					cursor: 'pointer',
					outline: 'none',
				}}
				aria-label="Close" onClick={(e)=>{
                    console.log("Close button has been clicked");
                }}><img src={CloseIcon} alt='icon'/></button>
                <ul>
                    <li data-priority="default">New course available</li>
                    <li data-priority="urgent">New resume available</li>
					<li  data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
                </ul>
    </div>
}