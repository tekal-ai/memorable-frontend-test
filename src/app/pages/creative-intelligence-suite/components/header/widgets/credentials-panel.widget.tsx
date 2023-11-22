import { FC } from "react";
import { Avatar, Dropdown, Space } from "antd";
import { useSessionFeature } from "src/app/features/session/session.feature";

export const CredentialsPanelWidget: FC = () => {
  const { logout, user } = useSessionFeature();

  const initials = user?.name?.charAt(0) || user?.email?.charAt(0);

  if (!user) return <></>;

  return (
    <div>
      <Dropdown
        menu={{
          items: [
            {
              key: "sign-out",
              label: <button onClick={logout}>Sign out</button>,
            },
          ],
        }}
        placement={"bottomRight"}
        arrow={{ pointAtCenter: true }}
      >
        <Space>
          <Avatar size={40}>{initials}</Avatar>
        </Space>
      </Dropdown>
    </div>
  );
};
