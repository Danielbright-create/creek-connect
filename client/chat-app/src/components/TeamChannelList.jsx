import React from 'react'

import  { AddChannel } from '../assets'

const TeamChannelList = ({ children, error = false, loading, type,  isCreating,
    setIsCreating,
    setCreateType,
    setIsEditing,
    setToggleContainer }) => {
    if(error) {
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Could not get results for your request, It may be a network problem. Please try again.
                </p>
            </div>

        ) : null
    }
    if (loading) {
        return (
            <div className="team-channel-list">
            <p className="team-channel-list__message loading">
               {type === 'team' ? 'Groups' : 'Messages'}loading... 
            </p>
        </div>
        )
    }


    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                {type === 'team' ? 'Groups' : 'Direct Messages'}
                </p>
                <AddChannel
                  isCreating={isCreating}
                  setIsCreating={setIsCreating}
                  setCreateType={setCreateType}
                  setIsEditing={setIsEditing}
                  type={type === 'team' ? 'team' : 'messaging'}
                  setToggleContainer={setToggleContainer}
                />
            </div> 

            {children}          
        </div>
    )
}

export default TeamChannelList
