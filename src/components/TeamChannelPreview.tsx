/** @format */

import React from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';

interface TeamChannelPreviewProps {
  channel: any;
  type: any;
}

const TeamChannelPreview: React.FC<TeamChannelPreviewProps> = ({
  channel,
  type,
}) => {
  const { channel: activeChannel, client } = useChatContext();

  //This is the channel preview
  const ChannelPreview = () => (
    <p className='channel-preview__item'>
      # {channel?.data?.name || channel?.data?.id}
    </p>
  );

  //This is the direct chat preview with user
  const DirectPreview = () => {
    const members: any = Object.values(channel.state.members).filter(
      ({ user }: any) => user.id !== client.userID
    );

    return (
      <div className='channel-preview__item single'>
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.fullName || members[0]?.user?.id}
          size={24}
        />
        <p>{members[0]?.user?.fullName || members[0]?.user?.id}</p>
      </div>
    );
  };

  return (
    <div
      className={
        channel?.id === activeChannel?.id
          ? 'channel-preview__wrapper__selected'
          : 'channel-preview__wrapper'
      }>
      {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
    </div>
  );
};

export default TeamChannelPreview;
