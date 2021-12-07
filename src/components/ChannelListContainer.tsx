/** @format */
import React, { useState } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

const SideBar = () => (
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
        <img src={HospitalIcon} alt='Hospital' width='30' />
      </div>
    </div>
    <div className='channel-list__sidebar__icon2'>
      <div className='icon1__inner'>
        <img src={LogoutIcon} alt='Logout' width='30' />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className='channel-list__header'>
    <p className='channel-list__header__text'>Medical Pager</p>
  </div>
);

const customChannelTeamFilter = (channels: any) => {
  return channels.filter((channel: any) => channel.type === 'team');
};

const customChannelMessagingFilter = (channels: any) => {
  return channels.filter((channel: any) => channel.type === 'messaging');
};

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className='channel-list__list__wrapper'>
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={customChannelTeamFilter}
          List={(listProps) => (
            <TeamChannelList
              type={'team'}
              error={false}
              loading={false}
              {...listProps}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview type={undefined} {...previewProps} />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={customChannelMessagingFilter}
          List={(listProps) => (
            <TeamChannelList
              type={'messaging'}
              error={false}
              loading={false}
              {...listProps}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview type={'messaging'} {...previewProps} />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
