/** @format */
import { ChannelList } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

const Cookie = new Cookies();

interface SideBarProps {
  logout: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ logout }) => (
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
        <img src={HospitalIcon} alt='Hospital' width='30' />
      </div>
    </div>
    <div className='channel-list__sidebar__icon2'>
      <div className='icon1__inner'>
        <img src={LogoutIcon} alt='Logout' width='30' onClick={logout} />
      </div>
    </div>
  </div>
);

const CompanyHeader: React.FC = () => (
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
  const logoutHandler = () => {
    Cookie.remove('token');
    Cookie.remove('userId');
    Cookie.remove('username');
    Cookie.remove('fullName');
    Cookie.remove('avatarURL');
    Cookie.remove('hashedPassword');
    Cookie.remove('phoneNumber');
    window.location.reload();
  };

  return (
    <>
      <SideBar logout={logoutHandler} />
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
